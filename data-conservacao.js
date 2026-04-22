'use strict';

// ═══════════════════════════════════════════════════════
// VOVÓ RECEITAS — data-conservacao.js
// Guia completo de conservação de alimentos
// ═══════════════════════════════════════════════════════

const CONSERVACAO = [
  // ── CARNES ──
  {
    id:'c001', emoji:'🥩', categoria:'Carnes',
    alimento:'Carne bovina crua (bifes, cubos)',
    geladeira:'2 a 3 dias — em vasilha fechada na parte mais fria',
    freezer:'3 a 4 meses — embale bem para evitar queimadura de freezer',
    observacoes:['Retire da embalagem original e coloque em vasilha ou saco próprio','Nunca recongele carne descongelada cru','Descongele sempre na geladeira, nunca em temperatura ambiente']
  },
  {
    id:'c002', emoji:'🥩', categoria:'Carnes',
    alimento:'Carne bovina cozida',
    geladeira:'3 a 4 dias — com o caldo da cocção',
    freezer:'2 a 3 meses — com bastante molho para não ressecar',
    observacoes:['Guarde sempre com o caldo ou molho — a carne seca muito sozinha','Separe em porções para facilitar o uso','Rotule com a data']
  },
  {
    id:'c003', emoji:'🍗', categoria:'Carnes',
    alimento:'Frango cru',
    geladeira:'1 a 2 dias — na parte mais fria, bem embalado',
    freezer:'9 a 12 meses — inteiro; 3 a 4 meses — em pedaços',
    observacoes:['Frango cru é o mais perecível das carnes — use em até 2 dias','Nunca lave o frango cru — espalha bactérias pela pia e bancada','Descongele na geladeira por 24h ou sob água fria corrente']
  },
  {
    id:'c004', emoji:'🍗', categoria:'Carnes',
    alimento:'Frango cozido',
    geladeira:'3 a 4 dias — bem tapado',
    freezer:'2 a 3 meses',
    observacoes:['Frango desfiado congela muito bem em porções','Guarde com um pouco do caldo para não ressecar','Ótimo para ter sempre no freezer — usa em inúmeros pratos']
  },
  {
    id:'c005', emoji:'🐟', categoria:'Peixes',
    alimento:'Peixe fresco',
    geladeira:'1 a 2 dias — na parte mais fria, em vasilha fechada',
    freezer:'3 a 6 meses — bem embalado em plástico e papel alumínio',
    observacoes:['Peixe é o mais perecível — compre e use no mesmo dia se possível','Se cheirar muito forte, já não está fresco','Descongele na geladeira, nunca à temperatura ambiente']
  },
  {
    id:'c006', emoji:'🦐', categoria:'Peixes',
    alimento:'Camarão',
    geladeira:'1 a 2 dias (fresco) — bem embalado',
    freezer:'3 a 6 meses — crú ou cozido',
    observacoes:['Camarão descongela rápido — 30 minutos em água fria','Nunca recongele camarão descongelado','Cozido congela bem — ideal para ter sempre à mão']
  },
  {
    id:'c007', emoji:'🥓', categoria:'Carnes',
    alimento:'Bacon e embutidos',
    geladeira:'1 semana (aberto) — 2 semanas (fechado)',
    freezer:'1 a 2 meses',
    observacoes:['Embalagem original fechada dura mais','Após abrir, use em até 7 dias','Bacon em fatias congela facilmente — retire a quantidade que precisar']
  },
  {
    id:'c008', emoji:'🌭', categoria:'Carnes',
    alimento:'Linguiça fresca',
    geladeira:'2 a 3 dias',
    freezer:'1 a 2 meses',
    observacoes:['Linguiça fresca é muito perecível — congele se não for usar em breve','Pode congelar já frita para usar como topping','Separe em porções antes de congelar']
  },

  // ── LATICÍNIOS ──
  {
    id:'l001', emoji:'🧀', categoria:'Laticínios',
    alimento:'Queijo muçarela',
    geladeira:'1 a 2 semanas (bloco) — 5 dias (fatiado)',
    freezer:'1 a 2 meses — perde textura mas serve para gratinar',
    observacoes:['Queijo fatiado resseca rapidamente — embrulhe bem em plástico','Queijo congelado fica granuloso — use apenas para derreter','Muçarela de búfala fresca: consumir em 2 a 3 dias']
  },
  {
    id:'l002', emoji:'🧀', categoria:'Laticínios',
    alimento:'Queijo parmesão ralado',
    geladeira:'1 mês — em pote fechado',
    freezer:'3 a 4 meses — sem perder sabor',
    observacoes:['Congela muito bem e pode usar diretamente do freezer','Evite umidade — o parmesão gruda se pegar água','Rale na hora para melhor sabor']
  },
  {
    id:'l003', emoji:'🥛', categoria:'Laticínios',
    alimento:'Leite fresco',
    geladeira:'5 a 7 dias (aberto) — verifique a data',
    freezer:'1 a 3 meses — expande ao congelar, use recipiente com espaço',
    observacoes:['Leite longa vida aberto: até 4 dias na geladeira','Não congele na embalagem original — ela pode estourar','Descongele na geladeira e misture bem antes de usar']
  },
  {
    id:'l004', emoji:'🧈', categoria:'Laticínios',
    alimento:'Manteiga',
    geladeira:'1 mês (aberta) — 3 meses (fechada)',
    freezer:'6 a 9 meses — mantém qualidade excelente',
    observacoes:['Manteiga absorve odores da geladeira — mantenha bem fechada','Congela muito bem — compre em quantidade quando estiver em promoção','Pode deixar uma porção em temperatura ambiente por até 2 dias (coberta)']
  },
  {
    id:'l005', emoji:'🥚', categoria:'Laticínios',
    alimento:'Ovo',
    geladeira:'3 a 5 semanas — na caixa original, na geladeira',
    freezer:'Gema e clara separadas: até 12 meses; inteiro não congele',
    observacoes:['Teste de frescor: coloque em água — afunda = fresco; flutua = descarte','Não lave os ovos antes de guardar — remove a camada protetora','Não congele ovo inteiro — a casca racha e a gema endurece']
  },
  {
    id:'l006', emoji:'🥛', categoria:'Laticínios',
    alimento:'Requeijão e cream cheese',
    geladeira:'2 a 3 semanas (fechado) — 1 semana (aberto)',
    freezer:'Não recomendado — separa ao descongelar',
    observacoes:['Sempre use colher limpa para não contaminar o pote','Não retorne ao pote o que já foi usado','A tampa deve estar bem fechada']
  },

  // ── FRUTAS ──
  {
    id:'f001', emoji:'🍌', categoria:'Frutas',
    alimento:'Banana',
    geladeira:'Não recomendado (casca escurece mas polpa mantém)',
    freezer:'2 a 3 meses — descascada e cortada',
    observacoes:['Banana murcha mais rápido perto de outras frutas','Congele em pedaços para vitaminas e panquecas','Banana muito madura é perfeita para bolos e vitaminas — não desperdice']
  },
  {
    id:'f002', emoji:'🍅', categoria:'Frutas',
    alimento:'Tomate',
    geladeira:'1 semana (maduro) — fora da geladeira até amadurecer',
    freezer:'2 a 3 meses (cozido ou amassado)',
    observacoes:['Tomate na geladeira perde sabor e fica farinhento','Guarde à temperatura ambiente até amadurecer, depois leve à geladeira','Congele tomate cozido no liquidificador para molhos — muito prático']
  },
  {
    id:'f003', emoji:'🍋', categoria:'Frutas',
    alimento:'Limão',
    geladeira:'2 a 4 semanas — na gaveta de legumes',
    freezer:'3 a 4 meses (suco) — 6 meses (raspas)',
    observacoes:['Limão já cortado dura apenas 3 dias na geladeira','Congele suco em forminhas de gelo — práticos para usar pouco a pouco','Raspas congeladas mantêm todo o aroma']
  },
  {
    id:'f004', emoji:'🍊', categoria:'Frutas',
    alimento:'Laranja e citros',
    geladeira:'2 a 3 semanas',
    freezer:'3 a 4 meses (suco)',
    observacoes:['À temperatura ambiente duram 1 semana','Fora da geladeira duram menos mas têm mais sabor','Congele o suco em porções — ideal para bolos e molhos']
  },
  {
    id:'f005', emoji:'🍓', categoria:'Frutas',
    alimento:'Morango',
    geladeira:'3 a 5 dias — sem lavar, em vasilha aberta forrada com papel toalha',
    freezer:'1 a 2 meses — lavados, secos e sem o cabinho',
    observacoes:['Não lave antes de guardar — umidade acelera o mofo','Retire os murchos para não contaminar os bons','Congelado serve perfeitamente para vitaminas e sobremesas']
  },

  // ── LEGUMES ──
  {
    id:'lg001', emoji:'🥕', categoria:'Legumes',
    alimento:'Cenoura',
    geladeira:'2 a 3 semanas — sem as folhas, em saco plástico',
    freezer:'10 a 12 meses — branqueada por 3 minutos antes',
    observacoes:['Retire as folhas antes de guardar — tiram a umidade da raiz','Cenoura ralada congela bem — blanqueie por 2 minutos','Cenoura mole ainda serve para sopas e caldos']
  },
  {
    id:'lg002', emoji:'🥔', categoria:'Legumes',
    alimento:'Batata',
    geladeira:'Não recomendado — açúcar se converte em amido e escurece',
    freezer:'10 a 12 meses — cozida e processada (purê)',
    observacoes:['Guarde em local fresco, escuro e seco — não geladeira','Longe de cebolas — liberam gás que faz a batata brotar mais rápido','Batata brotada: retire os brotos, o resto ainda serve']
  },
  {
    id:'lg003', emoji:'🧅', categoria:'Legumes',
    alimento:'Cebola',
    geladeira:'1 a 2 meses — inteira, fora da geladeira; 7 dias cortada na geladeira',
    freezer:'10 a 12 meses — picada crua',
    observacoes:['Cebola inteira: local seco e arejado, nunca saco plástico','Cebola cortada: geladeira em pote fechado (o cheiro não contamina outros alimentos)','Congele picada para ter sempre à mão — não precisa descongelar para refogar']
  },
  {
    id:'lg004', emoji:'🧄', categoria:'Legumes',
    alimento:'Alho',
    geladeira:'1 mês (inteiro) — 1 semana (descascado)',
    freezer:'10 a 12 meses — amassado ou em pasta',
    observacoes:['Alho com casca: temperatura ambiente em local seco','Descascado: na geladeira em pote fechado','Dica prática: bata no liquidificador com sal e azeite e congele — tempero pronto']
  },
  {
    id:'lg005', emoji:'🥦', categoria:'Legumes',
    alimento:'Brócolis e couve-flor',
    geladeira:'3 a 5 dias — em saco plástico aberto',
    freezer:'10 a 12 meses — branqueado 3 minutos',
    observacoes:['Não lave antes de guardar','Branquear antes de congelar preserva a textura e a cor verde','Congelado vai diretamente para a panela sem descongelar']
  },
  {
    id:'lg006', emoji:'🌽', categoria:'Legumes',
    alimento:'Mandioca',
    geladeira:'1 semana (crua) — 3 dias (cozida)',
    freezer:'1 ano — cozida e sem o fio central',
    observacoes:['Mandioca crua oxidada (escurecida): ainda serve para cozinhar','Cozida congela muito bem — já deixe descascada e cortada','Descongele direto na panela com água fervente']
  },
  {
    id:'lg007', emoji:'🥒', categoria:'Legumes',
    alimento:'Abobrinha e pepino',
    geladeira:'1 semana — inteiros; 3 dias cortados',
    freezer:'10 meses — branqueada 2 minutos',
    observacoes:['São sensíveis ao frio excessivo — gaveta de legumes','Não congele pepino cru — fica aquoso','Abobrinha refogada congela bem']
  },

  // ── ERVAS E TEMPEROS ──
  {
    id:'e001', emoji:'🌿', categoria:'Ervas',
    alimento:'Cheiro-verde (salsinha e cebolinha)',
    geladeira:'1 a 2 semanas — em copo com água ou embrulhado em papel toalha úmido',
    freezer:'6 meses — picado em forminhas de gelo com água ou azeite',
    observacoes:['Técnica do copo: coloque como flores em copo com água, cubra frouxamente com saco','Congelado em azeite: prático para refogar direto','Seco perde muito do aroma — prefira congelar a secar']
  },
  {
    id:'e002', emoji:'🌱', categoria:'Ervas',
    alimento:'Coentro',
    geladeira:'1 a 2 semanas — em copo com água',
    freezer:'4 a 6 meses — picado com azeite em forminhas',
    observacoes:['Mesma técnica do cheiro-verde','Coentro desidratado perde praticamente todo o aroma','Congele em porções de azeite para usar em refogaros']
  },
  {
    id:'e003', emoji:'🫚', categoria:'Ervas',
    alimento:'Alecrim e tomilho',
    geladeira:'2 semanas — embrulhado em papel toalha levemente úmido',
    freezer:'6 meses — inteiros ou picados',
    observacoes:['Ervas de talo duro (alecrim, tomilho, orégano) secam bem naturalmente','Congele em azeite para usar em carnes marinadas','Ramos congelados podem ir direto para o assado ou refogado']
  },

  // ── GRÃOS E FARINHAS ──
  {
    id:'g001', emoji:'🌾', categoria:'Farinhas e Grãos',
    alimento:'Arroz cru',
    geladeira:'Não necessário',
    freezer:'Não necessário',
    observacoes:['Guarde em pote fechado, seco e escuro','Coloque folhas de louro no pote — afasta insetos naturalmente','Arroz cozido congela muito bem — até 3 meses']
  },
  {
    id:'g002', emoji:'🫘', categoria:'Farinhas e Grãos',
    alimento:'Feijão e lentilha crus',
    geladeira:'Não necessário',
    freezer:'Não necessário',
    observacoes:['Feijão novo cozinha mais rápido — verifique a data da embalagem','Em pote fechado longe da umidade dura mais de 1 ano','Cozido congela muito bem por até 6 meses — congele com bastante caldo']
  },
  {
    id:'g003', emoji:'🌾', categoria:'Farinhas e Grãos',
    alimento:'Farinha de trigo',
    geladeira:'Não necessário (até 1 ano em pote fechado)',
    freezer:'2 anos — para farinha integral (mais gordura, estraga mais rápido)',
    observacoes:['Farinha comum: pote hermético em local seco','Farinha integral: geladeira ou freezer para não rançar','Verifique sempre se tem insetos — pote hermético previne']
  },

  // ── PRONTOS ──
  {
    id:'p001', emoji:'🍲', categoria:'Pratos Prontos',
    alimento:'Molho de tomate',
    geladeira:'5 a 7 dias',
    freezer:'3 meses',
    observacoes:['Faça em grande quantidade e congele em porções','Gela em forminhas de gelo para usar pequenas quantidades','Sempre em pote fechado — o tomate absorve outros odores']
  },
  {
    id:'p002', emoji:'🍛', categoria:'Pratos Prontos',
    alimento:'Sopas e caldos',
    geladeira:'3 a 4 dias',
    freezer:'2 a 3 meses',
    observacoes:['Caldos puros congelam melhor que sopas com macarrão','Congele em porções individuais — facilita o uso','Deixe espaço no pote para expansão ao congelar']
  },
  {
    id:'p003', emoji:'🍚', categoria:'Pratos Prontos',
    alimento:'Arroz cozido',
    geladeira:'4 a 5 dias',
    freezer:'3 meses',
    observacoes:['Adicione 1 colher de água ao reaquecer no micro-ondas','Congele em porções — retire apenas o necessário','Não deixe o arroz cozido em temperatura ambiente por mais de 2 horas']
  },
  {
    id:'p004', emoji:'🧁', categoria:'Pratos Prontos',
    alimento:'Bolos e pães',
    geladeira:'5 a 7 dias',
    freezer:'2 a 3 meses — fatiado',
    observacoes:['Bolo com recheio de creme: geladeira obrigatória','Pão de forma congela muito bem — retire as fatias que precisar','Descongele em temperatura ambiente por 30 minutos ou na torradeira']
  }
];
