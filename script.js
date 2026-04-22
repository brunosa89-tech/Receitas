'use strict';

// ═══════════════════════════════════════════════════════
// VOVÓ RECEITAS — script.js  |  UI apenas
// ═══════════════════════════════════════════════════════

const R = window.ReceitasRules;

// ── escape seguro ──
function esc(s) {
  if (!s) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ────────────────────────────────────────────────────────
// TABS
// ────────────────────────────────────────────────────────
function switchTab(nome) {
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + nome)?.classList.add('active');
  document.querySelector(`.nav-btn[data-tab="${nome}"]`)?.classList.add('active');
  if (nome === 'inicio')      renderInicio();
  if (nome === 'receitas')    renderReceitas();
  if (nome === 'conservacao') renderConservacao();
  if (nome === 'favoritos')   renderFavoritos();
  if (nome === 'lista')       renderLista();
}

// ────────────────────────────────────────────────────────
// CARD DE RECEITA
// ────────────────────────────────────────────────────────
function cardHTML(r) {
  const fav = R.isFavorito(r.id);
  const bg = `background:${R.corGrupo(r.grupo)}22`;
  return `<div class="recipe-card" onclick="abrirReceita('${r.id}')">
    ${r.adequado_crianca ? '<div class="recipe-card-crianca">👶</div>' : ''}
    <div class="recipe-card-fav ${fav ? 'ativo' : ''}" onclick="event.stopPropagation();favToggle('${r.id}',this)">❤</div>
    <div class="recipe-card-emoji" style="${bg}">${r.emoji}</div>
    <div class="recipe-card-body">
      <div class="recipe-card-nome">${esc(r.nome)}</div>
      <div class="recipe-card-meta">
        <span class="recipe-card-tempo">${R.formatarTempo(r.tempo_preparo)}</span>
        <span class="recipe-card-dific dific-${r.dificuldade}">${esc(r.dificuldade)}</span>
      </div>
    </div>
  </div>`;
}

function favToggle(id, el) {
  R.toggleFavorito(id);
  el.classList.toggle('ativo');
  // Atualiza contador de favoritos se estiver na tela
  if (document.getElementById('tab-favoritos').classList.contains('active')) renderFavoritos();
}
window.favToggle = favToggle;

function renderCards(ids, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = ids.map(r => cardHTML(r)).join('');
}

// ────────────────────────────────────────────────────────
// INÍCIO
// ────────────────────────────────────────────────────────
function renderInicio() {
  renderCards(R.getDestaques(6), 'inicio-destaques');
  renderCards(R.getRapidas(30, 6), 'inicio-rapidas');
  renderCards(R.getCriancas(6), 'inicio-criancas');
}

// Quick filters
document.querySelectorAll('.qf-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tipo = btn.dataset.tipo;
    // Vai para aba receitas com filtro
    document.getElementById('filtro-proteina').value = ['frango','carne','peixe'].includes(tipo) ? tipo : '';
    document.getElementById('filtro-tipo').value = ['massa','arroz','feijao','sopa','doce'].includes(tipo) ? tipo : '';
    switchTab('receitas');
    aplicarFiltros();
  });
});

// ────────────────────────────────────────────────────────
// RECEITAS (grid com filtros)
// ────────────────────────────────────────────────────────
function renderReceitas() {
  aplicarFiltros();
}

function aplicarFiltros() {
  const filtros = {
    tipo:       document.getElementById('filtro-tipo')?.value || '',
    proteina:   document.getElementById('filtro-proteina')?.value || '',
    tempo:      document.getElementById('filtro-tempo')?.value || '',
    dificuldade:document.getElementById('filtro-dific')?.value || '',
    crianca:    document.getElementById('filtro-crianca')?.checked || false
  };
  const resultado = R.filtrarReceitas(filtros);
  const grid = document.getElementById('receitas-grid');
  const count = document.getElementById('receitas-count');
  if (count) count.textContent = resultado.length + ' receita' + (resultado.length !== 1 ? 's' : '') + ' encontrada' + (resultado.length !== 1 ? 's' : '');
  if (grid) grid.innerHTML = resultado.map(r => cardHTML(r)).join('');
}

['filtro-tipo','filtro-proteina','filtro-tempo','filtro-dific'].forEach(id => {
  document.getElementById(id)?.addEventListener('change', aplicarFiltros);
});
document.getElementById('filtro-crianca')?.addEventListener('change', aplicarFiltros);

// ────────────────────────────────────────────────────────
// MODAL RECEITA
// ────────────────────────────────────────────────────────
let _receitaAtual = null;
let _passoAtual = 0;
let _timerInterval = null;
let _timerRestante = 0;
let _timerRodando = false;

function abrirReceita(id) {
  const r = R.buscarPorId(id);
  if (!r) return;
  _receitaAtual = r;

  const fav = R.isFavorito(r.id);
  const favBtn = document.getElementById('btn-modal-fav');
  if (favBtn) {
    favBtn.classList.toggle('ativo', fav);
    favBtn.querySelector('svg').style.fill = fav ? 'var(--terracota)' : 'none';
  }

  const corpo = document.getElementById('modal-body');
  if (!corpo) return;

  const cor = R.corGrupo(r.grupo);

  let html = `
    <div class="receita-hero" style="background:${cor}18">${r.emoji}</div>
    <div class="receita-nome">${esc(r.nome)}</div>
    <div class="receita-badges">
      <span class="badge">⏱ ${R.formatarTempo(r.tempo_preparo)}</span>
      <span class="badge badge-dific dific-${r.dificuldade}">${R.labelDificuldade(r.dificuldade)}</span>
      <span class="badge">🍽 ${r.porcoes} porções</span>
      ${r.adequado_crianca ? '<span class="badge badge-crianca">👶 Para crianças</span>' : ''}
      ${r.vegetariano ? '<span class="badge badge-veggie">🌱 Vegetariano</span>' : ''}
    </div>`;

  // Nutrição
  const n = r.nutricao;
  html += `<div class="nutricao-bar">
    <div class="nutri-item"><div class="nutri-val">${n.calorias}</div><div class="nutri-label">Kcal</div></div>
    <div class="nutri-item"><div class="nutri-val">${n.proteina}g</div><div class="nutri-label">Proteína</div></div>
    <div class="nutri-item"><div class="nutri-val">${n.carboidrato}g</div><div class="nutri-label">Carbo</div></div>
    <div class="nutri-item"><div class="nutri-val">${n.gordura}g</div><div class="nutri-label">Gordura</div></div>
    <div class="nutri-item"><div class="nutri-val">${n.fibra}g</div><div class="nutri-label">Fibra</div></div>
  </div>`;

  // Antes de começar
  const c = r.conhecimento;
  const temConhecimento = c && (c.corte_ideal || c.dica_compra || c.substituicoes || c.adequado_crianca || c.harmonizacao || c.aviso);
  if (temConhecimento) {
    html += `<div class="antes-section"><div class="antes-titulo">📖 Antes de começar</div>`;
    if (c.corte_ideal)    html += `<div class="antes-item"><div class="antes-label">🥩 Qual corte usar</div><div class="antes-val">${esc(c.corte_ideal)}</div></div>`;
    if (c.dica_compra)    html += `<div class="antes-item"><div class="antes-label">🛒 Na hora de comprar</div><div class="antes-val">${esc(c.dica_compra)}</div></div>`;
    if (c.substituicoes)  html += `<div class="antes-item"><div class="antes-label">🔄 Substituições possíveis</div><div class="antes-val">${esc(c.substituicoes)}</div></div>`;
    if (c.adequado_crianca) html += `<div class="antes-item"><div class="antes-label">👶 Para crianças</div><div class="antes-val">${esc(c.adequado_crianca)}</div></div>`;
    if (c.harmonizacao)   html += `<div class="antes-item"><div class="antes-label">🍽 Combina com</div><div class="antes-val">${esc(c.harmonizacao)}</div></div>`;
    if (c.aviso)          html += `<div class="antes-item"><div class="antes-label">⚠️ Atenção</div><div class="antes-val">${esc(c.aviso)}</div></div>`;
    html += `</div>`;
  }

  // Ingredientes
  html += `<div class="receita-section"><div class="receita-section-title">🥄 Ingredientes</div>`;
  r.ingredientes.forEach(ing => {
    html += `<div class="ing-item">
      <span class="ing-nome">${esc(ing.item)}${ing.opcional ? '<span class="ing-opcional">(opcional)</span>' : ''}</span>
      <span class="ing-qtd">${esc(ing.quantidade)}</span>
    </div>`;
  });
  html += `</div>`;

  // Modo de preparo
  html += `<div class="receita-section"><div class="receita-section-title">👩‍🍳 Modo de Preparo</div>`;
  r.modo_preparo.forEach(p => {
    html += `<div class="passo-item">
      <div class="passo-num">${p.passo}</div>
      <div class="passo-txt">${esc(p.instrucao)}
        ${p.timer_segundos ? `<div><span class="passo-timer-badge">⏱ ${R.formatarTempo(Math.round(p.timer_segundos/60))}</span></div>` : ''}
      </div>
    </div>`;
  });
  html += `</div>`;

  // Armazenamento
  const arm = r.armazenamento;
  html += `<div class="receita-section"><div class="receita-section-title">🧊 Como Guardar</div>
    <div class="armazen-grid">
      <div class="armazen-card"><div class="armazen-icon">🌡️</div><div class="armazen-label">Geladeira</div><div class="armazen-val">${esc(arm.geladeira)}</div></div>
      <div class="armazen-card"><div class="armazen-icon">❄️</div><div class="armazen-label">Freezer</div><div class="armazen-val">${esc(arm.freezer)}</div></div>
      ${arm.observacoes ? `<div class="armazen-obs" style="grid-column:span 2">${esc(arm.observacoes)}</div>` : ''}
    </div>
  </div>`;

  // Tags
  if (r.tags && r.tags.length) {
    html += `<div style="padding:0 16px 16px;display:flex;gap:6px;flex-wrap:wrap">
      ${r.tags.map(t => `<span style="background:var(--creme2);color:var(--text3);font-size:11px;padding:4px 10px;border-radius:12px;font-weight:700">#${esc(t)}</span>`).join('')}
    </div>`;
  }

  // Botão adicionar à lista
  html += `<div style="padding:0 16px 10px">
    <button onclick="adicionarAListaDaReceita('${r.id}')" style="width:100%;background:var(--oliva);color:#fff;border:none;border-radius:var(--r);padding:14px;font-size:15px;font-weight:800;cursor:pointer">
      🛒 Adicionar à lista de compras
    </button>
  </div>`;

  // Botão passo a passo
  html += `<button class="btn-passos" onclick="abrirPassos('${r.id}')">▶ Modo Passo a Passo com Timer</button>`;

  corpo.innerHTML = html;
  document.getElementById('modal-receita').classList.add('open');
  document.body.style.overflow = 'hidden';
}
window.abrirReceita = abrirReceita;

window.adicionarAListaDaReceita = function(id) {
  const dados = R.getListaSalva();
  if (!dados.ids.includes(id)) {
    dados.ids.push(id);
    R.salvarLista(dados);
  }
  closeModal('modal-receita');
  switchTab('lista');
};

// ── MODO PASSO A PASSO ──
function abrirPassos(id) {
  const r = R.buscarPorId(id);
  if (!r) return;
  _receitaAtual = r;
  _passoAtual = 0;
  pararTimer();
  document.getElementById('passos-titulo').textContent = r.nome;
  document.getElementById('modal-passos').classList.add('open');
  renderPasso();
}
window.abrirPassos = abrirPassos;

function renderPasso() {
  const r = _receitaAtual;
  const passos = r.modo_preparo;
  const passo = passos[_passoAtual];
  const total = passos.length;

  document.getElementById('passos-progresso').textContent = `Passo ${_passoAtual + 1} de ${total}`;
  document.getElementById('passos-content').innerHTML = `
    <div class="passos-passo-num">Passo ${passo.passo} de ${total}</div>
    <div class="passos-passo-txt">${esc(passo.instrucao)}</div>`;

  // Timer
  const timerEl = document.getElementById('passos-timer');
  if (passo.timer_segundos) {
    timerEl.style.display = 'block';
    pararTimer();
    _timerRestante = passo.timer_segundos;
    _timerRodando = false;
    atualizarDisplayTimer();
    document.getElementById('btn-timer-toggle').textContent = '▶ Iniciar';
  } else {
    timerEl.style.display = 'none';
    pararTimer();
  }

  // Dots
  const dots = document.getElementById('passo-dots');
  dots.innerHTML = passos.map((_, i) =>
    `<div class="passo-dot ${i === _passoAtual ? 'active' : ''}"></div>`
  ).join('');

  // Botões nav
  document.getElementById('btn-passo-ant').disabled = _passoAtual === 0;
  const proxBtn = document.getElementById('btn-passo-prox');
  if (_passoAtual === total - 1) {
    proxBtn.textContent = '✓ Finalizar';
    proxBtn.onclick = () => { pararTimer(); closeModal('modal-passos'); };
  } else {
    proxBtn.textContent = 'Próximo →';
    proxBtn.onclick = () => { _passoAtual++; pararTimer(); renderPasso(); };
  }
}

function atualizarDisplayTimer() {
  const m = Math.floor(_timerRestante / 60).toString().padStart(2, '0');
  const s = (_timerRestante % 60).toString().padStart(2, '0');
  document.getElementById('timer-display').textContent = `${m}:${s}`;
}

function pararTimer() {
  if (_timerInterval) { clearInterval(_timerInterval); _timerInterval = null; }
  _timerRodando = false;
}

document.getElementById('btn-timer-toggle')?.addEventListener('click', () => {
  if (_timerRodando) {
    pararTimer();
    document.getElementById('btn-timer-toggle').textContent = '▶ Continuar';
  } else {
    _timerRodando = true;
    document.getElementById('btn-timer-toggle').textContent = '⏸ Pausar';
    _timerInterval = setInterval(() => {
      _timerRestante--;
      atualizarDisplayTimer();
      if (_timerRestante <= 0) {
        pararTimer();
        document.getElementById('btn-timer-toggle').textContent = '✓ Pronto!';
        if ('vibrate' in navigator) navigator.vibrate([300, 100, 300]);
      }
    }, 1000);
  }
});

document.getElementById('btn-timer-reset')?.addEventListener('click', () => {
  pararTimer();
  const passo = _receitaAtual?.modo_preparo[_passoAtual];
  if (passo?.timer_segundos) {
    _timerRestante = passo.timer_segundos;
    atualizarDisplayTimer();
    document.getElementById('btn-timer-toggle').textContent = '▶ Iniciar';
  }
});

document.getElementById('btn-passo-ant')?.addEventListener('click', () => {
  if (_passoAtual > 0) { _passoAtual--; pararTimer(); renderPasso(); }
});
document.getElementById('btn-passos-fechar')?.addEventListener('click', () => {
  pararTimer(); closeModal('modal-passos');
});

// Fav no modal
document.getElementById('btn-modal-fav')?.addEventListener('click', () => {
  if (!_receitaAtual) return;
  const favs = R.toggleFavorito(_receitaAtual.id);
  const fav = favs.includes(_receitaAtual.id);
  const btn = document.getElementById('btn-modal-fav');
  btn.classList.toggle('ativo', fav);
  btn.querySelector('svg').style.fill = fav ? 'var(--terracota)' : 'none';
});

document.getElementById('btn-modal-back')?.addEventListener('click', () => closeModal('modal-receita'));

// ────────────────────────────────────────────────────────
// LISTA DE COMPRAS
// ────────────────────────────────────────────────────────
function renderLista() {
  const dados = R.getListaSalva();
  const ids = dados.ids || [];
  const comprados = dados.comprados || [];

  // Chips das receitas selecionadas
  const selEl = document.getElementById('lista-receitas-sel');
  if (selEl) {
    if (ids.length === 0) {
      selEl.innerHTML = '<div style="padding:8px 16px;font-size:13px;color:var(--text3)">Nenhuma receita adicionada ainda.</div>';
    } else {
      selEl.innerHTML = ids.map(id => {
        const r = R.buscarPorId(id);
        if (!r) return '';
        return `<span class="lista-chip">${r.emoji} ${esc(r.nome)}<button class="lista-chip-rem" onclick="removerDaLista('${id}')">✕</button></span>`;
      }).join('');
    }
  }

  // Resultado
  const resEl = document.getElementById('lista-resultado');
  if (!resEl) return;

  if (ids.length === 0) {
    resEl.style.display = 'none';
    return;
  }

  resEl.style.display = 'block';
  const grupos = R.gerarListaCompras(ids);
  const itensEl = document.getElementById('lista-itens');
  if (!itensEl) return;

  let html = '';
  Object.entries(grupos).forEach(([cat, itens]) => {
    html += `<div class="lista-categoria"><div class="lista-cat-nome">${esc(cat)}</div>`;
    itens.forEach((ing, idx) => {
      const chave = `${ids.join(',')}_${ing.item}`;
      const marcado = comprados.includes(chave);
      html += `<div class="lista-item ${marcado ? 'comprado' : ''}" onclick="toggleComprado('${chave}',this)">
        <div class="lista-item-check">${marcado ? '✓' : ''}</div>
        <div class="lista-item-nome">${esc(ing.item)}</div>
        <div class="lista-item-qtd">${esc(ing.quantidade)}</div>
      </div>`;
    });
    html += '</div>';
  });

  itensEl.innerHTML = html;
}

window.removerDaLista = function(id) {
  const dados = R.getListaSalva();
  dados.ids = dados.ids.filter(i => i !== id);
  R.salvarLista(dados);
  renderLista();
};

window.toggleComprado = function(chave, el) {
  const dados = R.getListaSalva();
  const idx = dados.comprados.indexOf(chave);
  if (idx >= 0) dados.comprados.splice(idx, 1);
  else dados.comprados.push(chave);
  R.salvarLista(dados);
  el.classList.toggle('comprado');
  el.querySelector('.lista-item-check').textContent = dados.comprados.includes(chave) ? '✓' : '';
};

document.getElementById('btn-add-receita-lista')?.addEventListener('click', () => {
  document.getElementById('add-lista-search').value = '';
  renderAddLista('');
  openModal('modal-add-lista');
});

document.getElementById('add-lista-search')?.addEventListener('input', e => {
  renderAddLista(e.target.value);
});

function renderAddLista(texto) {
  const lista = texto.length >= 1 ? R.buscarReceitas(texto) : R.getDestaques(20);
  document.getElementById('add-lista-resultados').innerHTML = lista.slice(0, 30).map(r =>
    `<div class="add-lista-item" onclick="addReceitaLista('${r.id}')">
      <span class="add-lista-emoji">${r.emoji}</span>
      <span class="add-lista-nome">${esc(r.nome)}</span>
    </div>`
  ).join('');
}

window.addReceitaLista = function(id) {
  const dados = R.getListaSalva();
  if (!dados.ids.includes(id)) { dados.ids.push(id); R.salvarLista(dados); }
  closeModal('modal-add-lista');
  renderLista();
};

document.getElementById('btn-limpar-lista')?.addEventListener('click', () => {
  R.salvarLista({ ids: [], comprados: [] });
  renderLista();
});

// ────────────────────────────────────────────────────────
// CONSERVAÇÃO
// ────────────────────────────────────────────────────────
function renderConservacao(filtro) {
  const lista = R.buscarConservacao(filtro || '');
  const el = document.getElementById('cons-lista');
  if (!el) return;

  if (lista.length === 0) {
    el.innerHTML = '<div class="empty-state"><div class="empty-icon">🔍</div><div class="empty-text">Nenhum alimento encontrado.</div></div>';
    return;
  }

  // Agrupa por categoria
  const grupos = {};
  lista.forEach(c => {
    if (!grupos[c.categoria]) grupos[c.categoria] = [];
    grupos[c.categoria].push(c);
  });

  el.innerHTML = Object.entries(grupos).map(([cat, itens]) => `
    <div style="padding:10px 12px 4px;font-family:var(--font-display);font-size:14px;font-weight:700;color:var(--terracota)">${esc(cat)}</div>
    ${itens.map(c => `
      <div class="cons-card" id="cons-${c.id}">
        <div class="cons-card-hdr" onclick="toggleCons('${c.id}')">
          <span class="cons-emoji">${c.emoji}</span>
          <span class="cons-nome">${esc(c.alimento)}</span>
          <span class="cons-arr">›</span>
        </div>
        <div class="cons-detalhes">
          <div class="cons-row">
            <span class="cons-icon">🌡️</span>
            <div><div class="cons-info-label">Geladeira</div><div class="cons-info-val">${esc(c.geladeira)}</div></div>
          </div>
          <div class="cons-row">
            <span class="cons-icon">❄️</span>
            <div><div class="cons-info-label">Freezer</div><div class="cons-info-val">${esc(c.freezer)}</div></div>
          </div>
          ${c.observacoes && c.observacoes.length ? `<div class="cons-obs">${c.observacoes.map(o => `• ${esc(o)}`).join('<br>')}</div>` : ''}
        </div>
      </div>`).join('')}
  `).join('');
}

window.toggleCons = function(id) {
  document.getElementById('cons-' + id)?.classList.toggle('open');
};

document.getElementById('cons-search')?.addEventListener('input', e => renderConservacao(e.target.value));

// ────────────────────────────────────────────────────────
// FAVORITOS
// ────────────────────────────────────────────────────────
function renderFavoritos() {
  const receitas = R.getReceitasFavoritas();
  const grid = document.getElementById('favs-grid');
  const vazio = document.getElementById('favs-vazio');
  if (!grid || !vazio) return;
  if (receitas.length === 0) {
    grid.innerHTML = '';
    vazio.style.display = 'flex';
  } else {
    vazio.style.display = 'none';
    grid.innerHTML = receitas.map(r => cardHTML(r)).join('');
  }
}

// ────────────────────────────────────────────────────────
// BUSCA
// ────────────────────────────────────────────────────────
document.getElementById('btn-search')?.addEventListener('click', () => {
  document.getElementById('search-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('search-input')?.focus(), 100);
});

document.getElementById('search-back')?.addEventListener('click', () => {
  document.getElementById('search-overlay').classList.remove('open');
  document.body.style.overflow = '';
});

let _searchFiltro = 'todos';
document.querySelectorAll('.sf-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.sf-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    _searchFiltro = chip.dataset.filter;
    executarBusca(document.getElementById('search-input').value);
  });
});

document.getElementById('search-input')?.addEventListener('input', e => executarBusca(e.target.value));

function executarBusca(texto) {
  const res = document.getElementById('search-results');
  if (!res) return;

  // 1. Lista base: busca textual OU catálogo completo se não há texto
  let lista = (texto && texto.length >= 1)
    ? R.buscarReceitas(texto)
    : R.todasReceitas();

  // 2. Aplica filtro de grupo SOBRE a lista base — não sobrescreve
  if (_searchFiltro !== 'todos') {
    if (_searchFiltro === 'crianca') lista = lista.filter(r => r.adequado_crianca);
    else if (_searchFiltro === 'doce') lista = lista.filter(r => r.grupo === 'doce');
    else lista = lista.filter(r => r.grupo === _searchFiltro);
  }

  if (lista.length === 0) {
    res.innerHTML = '<div class="sr-empty">Nenhuma receita encontrada.</div>';
    return;
  }

  res.innerHTML = lista.slice(0, 30).map(r => `
    <div class="sr-item" onclick="irParaReceita('${r.id}')">
      <span class="sr-emoji">${r.emoji}</span>
      <div>
        <div class="sr-nome">${esc(r.nome)}</div>
        <div class="sr-meta">⏱ ${R.formatarTempo(r.tempo_preparo)} · ${esc(r.dificuldade)} · ${esc(r.cozinha)}</div>
      </div>
    </div>`).join('');
}

window.irParaReceita = function(id) {
  document.getElementById('search-overlay').classList.remove('open');
  document.body.style.overflow = '';
  abrirReceita(id);
};

// ── Botão fav no header ──
document.getElementById('btn-favs-header')?.addEventListener('click', () => switchTab('favoritos'));

// ────────────────────────────────────────────────────────
// MODAIS (genérico)
// ────────────────────────────────────────────────────────
function openModal(id)  { document.getElementById(id)?.classList.add('open');  document.body.style.overflow = 'hidden'; }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); document.body.style.overflow = ''; }

document.querySelectorAll('[data-close]').forEach(btn => {
  btn.addEventListener('click', () => closeModal(btn.dataset.close));
});
document.querySelectorAll('.modal-overlay').forEach(ov => {
  ov.addEventListener('click', e => { if (e.target === ov) closeModal(ov.id); });
});

// ────────────────────────────────────────────────────────
// NAVEGAÇÃO
// ────────────────────────────────────────────────────────
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

// ────────────────────────────────────────────────────────
// PWA
// ────────────────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {});
  });
}

// ────────────────────────────────────────────────────────
// BOOT
// ────────────────────────────────────────────────────────
renderInicio();
renderConservacao();
