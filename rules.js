'use strict';

// ═══════════════════════════════════════════════════════
// VOVÓ RECEITAS — rules.js
// Regras de negócio puras — sem UI, sem DOM
// ═══════════════════════════════════════════════════════

// Junta todos os arrays de receitas num único catálogo
function _todasReceitas() {
  const r1 = typeof RECEITAS_1 !== 'undefined' ? RECEITAS_1 : [];
  const r2 = typeof RECEITAS_2 !== 'undefined' ? RECEITAS_2 : [];
  const r3 = typeof RECEITAS_3 !== 'undefined' ? RECEITAS_3 : [];
  return [...r1, ...r2, ...r3];
}

// ── FILTRAR RECEITAS ──
function filtrarReceitas(filtros) {
  let lista = _todasReceitas();
  const { tipo, proteina, tempo, dificuldade, crianca, texto } = filtros || {};

  if (tipo)       lista = lista.filter(r => r.tipo === tipo);
  if (proteina)   lista = lista.filter(r => r.grupo === proteina || (proteina === 'veggie' && r.vegetariano));
  if (tempo)      lista = lista.filter(r => r.tempo_preparo <= parseInt(tempo));
  if (dificuldade) lista = lista.filter(r => r.dificuldade === dificuldade);
  if (crianca)    lista = lista.filter(r => r.adequado_crianca === true);
  if (texto && texto.length >= 2) {
    const q = texto.toLowerCase();
    lista = lista.filter(r =>
      r.nome.toLowerCase().includes(q) ||
      r.grupo.toLowerCase().includes(q) ||
      r.tags.some(t => t.toLowerCase().includes(q)) ||
      r.ingredientes.some(i => i.item.toLowerCase().includes(q))
    );
  }
  return lista;
}

// ── BUSCAR RECEITAS ──
function buscarReceitas(texto) {
  if (!texto || texto.length < 2) return [];
  const q = texto.toLowerCase();
  return _todasReceitas().filter(r =>
    r.nome.toLowerCase().includes(q) ||
    r.grupo.toLowerCase().includes(q) ||
    r.cozinha.toLowerCase().includes(q) ||
    r.tags.some(t => t.toLowerCase().includes(q)) ||
    r.ingredientes.some(i => i.item.toLowerCase().includes(q))
  );
}

// ── BUSCAR POR ID ──
function buscarPorId(id) {
  return _todasReceitas().find(r => r.id === id) || null;
}

// ── DESTAQUES ──
function getDestaques(n) {
  const todos = _todasReceitas();
  const seeds = ['fr001','cb001','ma002','pe001','ar001','fj001','sp002','do001'];
  const dest = seeds.map(id => todos.find(r => r.id === id)).filter(Boolean);
  return dest.slice(0, n || 6);
}

// ── RECEITAS RÁPIDAS ──
function getRapidas(maxMin, n) {
  return _todasReceitas()
    .filter(r => r.tempo_preparo <= (maxMin || 30))
    .slice(0, n || 8);
}

// ── RECEITAS PARA CRIANÇA ──
function getCriancas(n) {
  return _todasReceitas()
    .filter(r => r.adequado_crianca)
    .slice(0, n || 8);
}

// ── FILTRO POR GRUPO (QUICK FILTERS) ──
function getByGrupo(grupo, n) {
  return _todasReceitas()
    .filter(r => r.grupo === grupo)
    .slice(0, n || 20);
}

// ── GERAR LISTA DE COMPRAS ──
// Recebe array de IDs de receitas, retorna lista agrupada por categoria
function gerarListaCompras(ids) {
  if (!ids || ids.length === 0) return {};

  const ingredientes = {};

  ids.forEach(id => {
    const receita = buscarPorId(id);
    if (!receita) return;
    receita.ingredientes.forEach(ing => {
      const chave = ing.item.toLowerCase().trim();
      if (ingredientes[chave]) {
        ingredientes[chave].receitas.push(receita.nome);
      } else {
        ingredientes[chave] = {
          item: ing.item,
          quantidade: ing.quantidade,
          opcional: ing.opcional,
          receitas: [receita.nome],
          comprado: false
        };
      }
    });
  });

  // Agrupa por categoria de mercado
  const grupos = {
    'Carnes e Peixes':  [],
    'Laticínios e Ovos': [],
    'Hortifrúti':       [],
    'Mercearia':        [],
    'Temperos e Ervas': [],
    'Outros':           []
  };

  const carnes = ['frango','carne','peixe','tilápia','camarão','bacon','linguiça','atum','sardinha','presunto','paio','costela','músculo','acém','patinho','coxão','contrafilé','alcatra','filé','cação','merluza','bacalhau','salmão'];
  const laticinios = ['leite','ovo','queijo','manteiga','requeijão','iogurte','creme de leite','nata','ricota','muçarela','parmesão','mozzarella'];
  const hortifruti = ['batata','cenoura','cebola','tomate','alho','abobrinha','chuchu','brócolis','couve','alface','pimentão','banana','limão','laranja','maçã','morango','abóbora','mandioca','inhame','vagem','espinafre','rúcula','salsão','ervilha fresca'];
  const temperos = ['sal','pimenta','açafrão','páprica','cominho','louro','alecrim','tomilho','orégano','salsinha','cebolinha','coentro','cheiro-verde','noz-moscada','canela','cravo','erva-doce','manjericão'];

  Object.values(ingredientes).forEach(ing => {
    const nome = ing.item.toLowerCase();
    if (carnes.some(c => nome.includes(c))) {
      grupos['Carnes e Peixes'].push(ing);
    } else if (laticinios.some(l => nome.includes(l))) {
      grupos['Laticínios e Ovos'].push(ing);
    } else if (hortifruti.some(h => nome.includes(h))) {
      grupos['Hortifrúti'].push(ing);
    } else if (temperos.some(t => nome.includes(t))) {
      grupos['Temperos e Ervas'].push(ing);
    } else {
      grupos['Mercearia'].push(ing);
    }
  });

  // Remove categorias vazias
  Object.keys(grupos).forEach(k => { if (grupos[k].length === 0) delete grupos[k]; });
  return grupos;
}

// ── BUSCAR CONSERVAÇÃO ──
function buscarConservacao(texto) {
  if (!texto || texto.length < 2) {
    return typeof CONSERVACAO !== 'undefined' ? CONSERVACAO : [];
  }
  const q = texto.toLowerCase();
  return (typeof CONSERVACAO !== 'undefined' ? CONSERVACAO : []).filter(c =>
    c.alimento.toLowerCase().includes(q) ||
    c.categoria.toLowerCase().includes(q)
  );
}

// ── FAVORITOS (LocalStorage) ──
const FAV_KEY = 'bruno-favoritos';

function getFavoritos() {
  try { return JSON.parse(localStorage.getItem(FAV_KEY) || '[]'); }
  catch { return []; }
}

function toggleFavorito(id) {
  const favs = getFavoritos();
  const idx = favs.indexOf(id);
  if (idx >= 0) favs.splice(idx, 1);
  else favs.push(id);
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
  return favs;
}

function isFavorito(id) {
  return getFavoritos().includes(id);
}

function getReceitasFavoritas() {
  const favs = getFavoritos();
  return favs.map(id => buscarPorId(id)).filter(Boolean);
}

// ── LISTA DE COMPRAS (LocalStorage) ──
const LISTA_KEY = 'bruno-lista';

function getListaSalva() {
  try { return JSON.parse(localStorage.getItem(LISTA_KEY) || '{"ids":[],"comprados":[]}'); }
  catch { return { ids: [], comprados: [] }; }
}

function salvarLista(dados) {
  localStorage.setItem(LISTA_KEY, JSON.stringify(dados));
}

// ── FORMATAR TEMPO ──
function formatarTempo(minutos) {
  if (minutos < 60) return minutos + ' min';
  const h = Math.floor(minutos / 60);
  const m = minutos % 60;
  return m > 0 ? `${h}h ${m}min` : `${h}h`;
}

// ── COR POR GRUPO ──
function corGrupo(grupo) {
  const cores = {
    frango: '#e8a020', carne: '#c84040', peixe: '#2080c8',
    massa: '#c86020', arroz: '#8a6040', feijao: '#6a4820',
    sopa: '#20a870', doce: '#c040a0', cafe: '#8a5030',
    acompanhamento: '#40a040', lanche: '#e07020'
  };
  return cores[grupo] || '#888';
}

// ── EMOJI POR DIFICULDADE ──
function labelDificuldade(d) {
  return { 'fácil': '🟢 Fácil', 'médio': '🟡 Médio', 'difícil': '🔴 Difícil' }[d] || d;
}

// ── EXPORTAÇÃO GLOBAL ──
window.ReceitasRules = {
  todasReceitas: _todasReceitas,
  filtrarReceitas,
  buscarReceitas,
  buscarPorId,
  getDestaques,
  getRapidas,
  getCriancas,
  getByGrupo,
  gerarListaCompras,
  buscarConservacao,
  getFavoritos,
  toggleFavorito,
  isFavorito,
  getReceitasFavoritas,
  getListaSalva,
  salvarLista,
  formatarTempo,
  corGrupo,
  labelDificuldade
};
