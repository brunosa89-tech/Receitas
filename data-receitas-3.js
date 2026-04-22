'use strict';

// ═══════════════════════════════════════════════════════
// VOVÓ RECEITAS — data-receitas-3.js
// Sopas (8) + Acompanhamentos (8) + Lanches/Tortas (10)
// + Doces (10) + Café da Manhã (8) + Extras (8) = 52 receitas
// ═══════════════════════════════════════════════════════

const RECEITAS_3 = [

  // ════════════════════════════
  // SOPAS E CALDOS
  // ════════════════════════════
  {
    id:'sp001', emoji:'🍲', grupo:'sopa',
    nome:'Sopa de Legumes Completa',
    tipo:'sopa', cozinha:'Brasileira',
    tempo_preparo:40, porcoes:6, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['nutritiva','vegetal','frio'],
    ingredientes:[
      {item:'batata',quantidade:'3 unidades',opcional:false},
      {item:'cenoura',quantidade:'2 unidades',opcional:false},
      {item:'chuchu',quantidade:'1 unidade',opcional:false},
      {item:'abobrinha',quantidade:'1 unidade',opcional:false},
      {item:'vagem',quantidade:'100g',opcional:true},
      {item:'cebola e alho',quantidade:'a gosto',opcional:false},
      {item:'extrato de tomate',quantidade:'1 colher de sopa',opcional:false},
      {item:'sal, azeite e cheiro-verde',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Refogue cebola e alho no azeite. Adicione o extrato de tomate e refogue mais 1 minuto.',timer_segundos:60},
      {passo:2,instrucao:'Adicione os legumes cortados em cubos e cubra com 1,5 litro de água quente com sal.',timer_segundos:null},
      {passo:3,instrucao:'Cozinhe em fogo médio por 25 minutos até todos os legumes ficarem macios.',timer_segundos:1500},
      {passo:4,instrucao:'Ajuste o sal e finalize com cheiro-verde generoso e um fio de azeite.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Use o que tem na geladeira — sopa de legumes é perfeita para reaproveitar vegetais. Corte tudo em tamanho parecido para cozinhar por igual.',
      substituicoes:'Pode adicionar macarrão, arroz ou macarrão de letrinhas para sopa mais encorpada.',
      adequado_crianca:'Ótima para crianças — colorida, nutritiva e saborosa. Pode bater no liquidificador para versão creme.',
      harmonizacao:'Prato único. Pão francês ao lado.',
      aviso:null
    },
    armazenamento:{geladeira:'até 4 dias',freezer:'até 3 meses',observacoes:'Congele sem macarrão ou arroz — adicione ao reaquecer.'},
    nutricao:{calorias:120,proteina:4,carboidrato:22,gordura:3,fibra:5}
  },

  {
    id:'sp002', emoji:'🍵', grupo:'sopa',
    nome:'Caldo Verde',
    tipo:'sopa', cozinha:'Brasileira',
    tempo_preparo:35, porcoes:5, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['couve','linguiça','reconfortante'],
    ingredientes:[
      {item:'batata',quantidade:'4 unidades grandes',opcional:false},
      {item:'couve manteiga',quantidade:'1 maço',opcional:false},
      {item:'linguiça calabresa',quantidade:'200g',opcional:false},
      {item:'cebola e alho',quantidade:'a gosto',opcional:false},
      {item:'azeite',quantidade:'3 colheres de sopa',opcional:false},
      {item:'sal e pimenta',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Cozinhe as batatas com cebola e alho em 1,5L de água até ficarem muito macias.',timer_segundos:null},
      {passo:2,instrucao:'Bata tudo no liquidificador até virar um creme liso. Volte ao fogo.',timer_segundos:null},
      {passo:3,instrucao:'Frite a linguiça fatiada e adicione ao caldo. Ajuste o sal e a consistência com água.',timer_segundos:null},
      {passo:4,instrucao:'Adicione a couve cortada em tirinhas bem finas (chiffonade). Cozinhe por apenas 2 minutos — deve ficar verde e crocante.',timer_segundos:120},
      {passo:5,instrucao:'Finalize com azeite e sirva bem quente.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'A couve deve ser cortada bem fininha para criar as "agulhinhas" características do caldo verde. Use faca bem afiada e corte em chiffonade (tirinhas finíssimas).',
      substituicoes:'Para versão vegetariana, omita a linguiça e adicione mais azeite.',
      adequado_crianca:'Ótimo — cremoso e saboroso. A couve praticamente some no caldo.',
      harmonizacao:'Pão de centeio, broa de milho ou pão italiano.',
      aviso:null
    },
    armazenamento:{geladeira:'até 3 dias',freezer:'até 3 meses (sem a couve)',observacoes:'Adicione couve fresca ao reaquecer para não escurecer.'},
    nutricao:{calorias:220,proteina:10,carboidrato:28,gordura:8,fibra:4}
  },

  {
    id:'sp003', emoji:'🐔', grupo:'sopa',
    nome:'Canja de Galinha da Vovó',
    tipo:'sopa', cozinha:'Brasileira',
    tempo_preparo:50, porcoes:6, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['reconfortante','doença','arroz'],
    ingredientes:[
      {item:'frango (coxa e sobrecoxa)',quantidade:'600g',opcional:false},
      {item:'arroz',quantidade:'1/2 xícara',opcional:false},
      {item:'cenoura',quantidade:'2 unidades',opcional:false},
      {item:'cebola e alho',quantidade:'a gosto',opcional:false},
      {item:'louro',quantidade:'2 folhas',opcional:false},
      {item:'sal e cheiro-verde',quantidade:'generoso',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Cozinhe o frango com cebola, alho, louro e sal em 2 litros de água por 30 minutos.',timer_segundos:1800},
      {passo:2,instrucao:'Retire o frango, desfie a carne descartando ossos e pele. Reserve o caldo.',timer_segundos:null},
      {passo:3,instrucao:'Volte o caldo ao fogo, adicione a cenoura ralada e o arroz lavado. Cozinhe por 20 minutos.',timer_segundos:1200},
      {passo:4,instrucao:'Adicione o frango desfiado, ajuste o sal e finalize com muito cheiro-verde.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:'Frango inteiro ou carcaça faz o caldo mais rico. Coxa e sobrecoxa são práticas e econômicas.',
      dica_compra:null,
      substituicoes:'Macarrão aletria no lugar do arroz para versão diferente.',
      adequado_crianca:'O alimento reconfortante por excelência. Ótimo para crianças gripadas.',
      harmonizacao:'Prato único. Pão francês ao lado.',
      aviso:null
    },
    armazenamento:{geladeira:'até 3 dias',freezer:'até 2 meses (sem arroz)',observacoes:'Para congelar, faça sem o arroz e adicione ao reaquecer.'},
    nutricao:{calorias:210,proteina:24,carboidrato:18,gordura:5,fibra:2}
  },

  {
    id:'sp004', emoji:'🫘', grupo:'sopa',
    nome:'Sopa de Feijão',
    tipo:'sopa', cozinha:'Brasileira',
    tempo_preparo:30, porcoes:5, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['feijão','cremosa','fácil'],
    ingredientes:[
      {item:'feijão cozido',quantidade:'4 xícaras',opcional:false},
      {item:'caldo do feijão',quantidade:'2 xícaras',opcional:false},
      {item:'cenoura',quantidade:'1 unidade',opcional:false},
      {item:'cebola e alho',quantidade:'a gosto',opcional:false},
      {item:'macarrão de letrinhas',quantidade:'1/2 xícara',opcional:true},
      {item:'azeite, sal e cheiro-verde',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Bata o feijão com o caldo no liquidificador até ficar cremoso. Coe se preferir mais liso.',timer_segundos:null},
      {passo:2,instrucao:'Refogue cebola e alho no azeite. Adicione a cenoura ralada e refogue por 2 minutos.',timer_segundos:120},
      {passo:3,instrucao:'Adicione o creme de feijão e água se necessário. Cozinhe por 10 minutos.',timer_segundos:600},
      {passo:4,instrucao:'Adicione o macarrão de letrinhas e cozinhe por mais 8 minutos. Finalize com cheiro-verde.',timer_segundos:480}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Ótima maneira de usar o feijão que sobrou. O feijão do dia anterior tem mais sabor.',
      substituicoes:'Qualquer tipo de feijão funciona. Lentilha faz uma versão muito saborosa.',
      adequado_crianca:'Excelente — cremosa, nutritiva e reconfortante. Crianças adoram com macarrão de letrinhas.',
      harmonizacao:'Prato único com pão ou torrada.',
      aviso:null
    },
    armazenamento:{geladeira:'até 4 dias',freezer:'até 3 meses (sem macarrão)',observacoes:null},
    nutricao:{calorias:180,proteina:10,carboidrato:28,gordura:4,fibra:8}
  },

  {
    id:'sp005', emoji:'🌽', grupo:'sopa',
    nome:'Sopa de Mandioca com Bacon',
    tipo:'sopa', cozinha:'Brasileira',
    tempo_preparo:45, porcoes:5, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['cremosa','mandioca','inverno'],
    ingredientes:[
      {item:'mandioca',quantidade:'600g',opcional:false},
      {item:'bacon',quantidade:'100g',opcional:false},
      {item:'cebola e alho',quantidade:'a gosto',opcional:false},
      {item:'caldo de frango',quantidade:'1 litro',opcional:false},
      {item:'creme de leite',quantidade:'100ml',opcional:true},
      {item:'sal e cheiro-verde',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Cozinhe a mandioca no caldo de frango até ficar muito macia.',timer_segundos:null},
      {passo:2,instrucao:'Bata no liquidificador até virar creme liso. Volte ao fogo.',timer_segundos:null},
      {passo:3,instrucao:'Frite o bacon até ficar crocante. Reserve.',timer_segundos:null},
      {passo:4,instrucao:'Refogue cebola e alho. Adicione ao creme. Ajuste sal e consistência.',timer_segundos:null},
      {passo:5,instrucao:'Adicione o creme de leite se usar. Finalize com bacon crocante e cheiro-verde.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Mandioca congelada já descascada é prática e funciona perfeitamente. Verifique se não tem fibras duras no centro.',
      substituicoes:'Para versão vegetariana, use caldo de legumes e substitua o bacon por torresmo de cebola.',
      adequado_crianca:'Ótima — cremosa, suave, nutritiva.',
      harmonizacao:'Torrada de alho ou pão italiano.',
      aviso:null
    },
    armazenamento:{geladeira:'até 3 dias',freezer:'até 3 meses',observacoes:null},
    nutricao:{calorias:240,proteina:8,carboidrato:34,gordura:10,fibra:3}
  },

  {
    id:'sp006', emoji:'🍜', grupo:'sopa',
    nome:'Sopa Minestrone Brasileiro',
    tipo:'sopa', cozinha:'Italiana',
    tempo_preparo:45, porcoes:6, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['italiana','legumes','completa'],
    ingredientes:[
      {item:'feijão branco cozido',quantidade:'1 xícara',opcional:false},
      {item:'macarrão ditalini ou conchinha',quantidade:'100g',opcional:false},
      {item:'tomate',quantidade:'2 unidades',opcional:false},
      {item:'cenoura e aipo',quantidade:'1 de cada',opcional:false},
      {item:'abobrinha',quantidade:'1 unidade',opcional:false},
      {item:'espinafre ou couve',quantidade:'100g',opcional:false},
      {item:'alho e cebola',quantidade:'a gosto',opcional:false},
      {item:'extrato de tomate, azeite, sal',quantidade:'a gosto',opcional:false},
      {item:'parmesão',quantidade:'para servir',opcional:true}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Refogue alho e cebola no azeite. Adicione cenoura, aipo e tomate. Refogue por 5 minutos.',timer_segundos:300},
      {passo:2,instrucao:'Adicione extrato de tomate, 1,5L de água e o feijão. Cozinhe por 15 minutos.',timer_segundos:900},
      {passo:3,instrucao:'Adicione abobrinha e macarrão. Cozinhe por mais 10 minutos.',timer_segundos:600},
      {passo:4,instrucao:'Adicione as folhas verdes nos últimos 2 minutos. Ajuste o sal e sirva com parmesão.',timer_segundos:120}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'O minestrone não tem receita fixa — use o que tiver na geladeira. É a sopa do aproveitamento inteligente.',
      substituicoes:'Qualquer legume funciona. Grão-de-bico no lugar do feijão branco.',
      adequado_crianca:'Ótima — colorida, cheia de legumes. O macarrão garante a aprovação das crianças.',
      harmonizacao:'Parmesão e pão.',
      aviso:null
    },
    armazenamento:{geladeira:'até 4 dias',freezer:'até 3 meses (sem macarrão)',observacoes:null},
    nutricao:{calorias:190,proteina:8,carboidrato:30,gordura:5,fibra:7}
  },

  {
    id:'sp007', emoji:'🍵', grupo:'sopa',
    nome:'Sopa de Capeletti',
    tipo:'sopa', cozinha:'Brasileira',
    tempo_preparo:30, porcoes:5, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['capeletti','festas','natalino'],
    ingredientes:[
      {item:'capeletti recheado',quantidade:'300g',opcional:false},
      {item:'caldo de galinha caseiro',quantidade:'1,5 litro',opcional:false},
      {item:'cheiro-verde',quantidade:'generoso',opcional:false},
      {item:'queijo parmesão',quantidade:'para servir',opcional:true}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Ferva o caldo de galinha. Ajuste o sal.',timer_segundos:null},
      {passo:2,instrucao:'Adicione o capeletti e cozinhe pelo tempo indicado na embalagem — geralmente 5 a 8 minutos.',timer_segundos:480},
      {passo:3,instrucao:'Finalize com cheiro-verde e sirva com parmesão ralado.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Capeletti fresco (refrigerado) tem melhor textura que o seco. O caldo caseiro faz toda a diferença — caldo de cubinho deixa a sopa com sabor artificial.',
      substituicoes:'Tortellini funciona igualmente bem.',
      adequado_crianca:'Favorito das crianças. O capeletti com queijo no caldo é irresistível.',
      harmonizacao:'Prato único. Pão italiano ao lado.',
      aviso:null
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'não recomendado (capeletti amolece)',observacoes:null},
    nutricao:{calorias:280,proteina:14,carboidrato:38,gordura:8,fibra:2}
  },

  {
    id:'sp008', emoji:'🟡', grupo:'sopa',
    nome:'Creme de Abóbora',
    tipo:'sopa', cozinha:'Brasileira',
    tempo_preparo:35, porcoes:5, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['cremoso','abóbora','colorido'],
    ingredientes:[
      {item:'abóbora cabotiá ou moranga',quantidade:'800g',opcional:false},
      {item:'cebola e alho',quantidade:'a gosto',opcional:false},
      {item:'caldo de legumes ou frango',quantidade:'1 litro',opcional:false},
      {item:'creme de leite',quantidade:'100ml',opcional:true},
      {item:'gengibre',quantidade:'1 colher de chá',opcional:true},
      {item:'azeite, sal e pimenta',quantidade:'a gosto',opcional:false},
      {item:'sementes de abóbora torradas',quantidade:'para decorar',opcional:true}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Refogue cebola, alho e gengibre no azeite. Adicione a abóbora em cubos.',timer_segundos:null},
      {passo:2,instrucao:'Cubra com o caldo e cozinhe por 20 minutos até a abóbora ficar macia.',timer_segundos:1200},
      {passo:3,instrucao:'Bata tudo no liquidificador até virar creme liso. Cuidado com o vapor — tampe com pano.',timer_segundos:null},
      {passo:4,instrucao:'Volte ao fogo, adicione o creme de leite se usar, ajuste o sal e sirva.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Cabotiá (japonesa) tem sabor mais adocicado e intenso. Moranga é mais suave. Abóbora paulista fica bem mas tem menos sabor.',
      substituicoes:'Para versão vegana, use leite de coco no lugar do creme de leite.',
      adequado_crianca:'Ótima — cor linda, sabor suave e adocicado. Crianças adoram.',
      harmonizacao:'Pão artesanal, castanhas tostadas por cima.',
      aviso:'Ao bater no liquidificador quente, sempre deixe o vapor sair pela tampa para não explodir.'
    },
    armazenamento:{geladeira:'até 4 dias',freezer:'até 3 meses',observacoes:null},
    nutricao:{calorias:140,proteina:3,carboidrato:22,gordura:5,fibra:4}
  },

  // ════════════════════════════
  // ACOMPANHAMENTOS
  // ════════════════════════════
  {
    id:'ac001', emoji:'🥔', grupo:'acompanhamento',
    nome:'Purê de Batata Cremoso',
    tipo:'acompanhamento', cozinha:'Brasileira',
    tempo_preparo:30, porcoes:5, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['cremoso','clássico','criança'],
    ingredientes:[
      {item:'batata',quantidade:'800g',opcional:false},
      {item:'manteiga',quantidade:'3 colheres de sopa',opcional:false},
      {item:'leite quente',quantidade:'1/2 xícara',opcional:false},
      {item:'sal, pimenta e noz-moscada',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Cozinhe as batatas com casca até ficarem muito macias. Descasque ainda quentes.',timer_segundos:null},
      {passo:2,instrucao:'Passe pelo espremedor imediatamente — nunca no liquidificador, que deixa elástico.',timer_segundos:null},
      {passo:3,instrucao:'Adicione a manteiga e misture bem. Adicione o leite quente aos poucos até a consistência desejada.',timer_segundos:null},
      {passo:4,instrucao:'Tempere com sal, pimenta e noz-moscada. Sirva imediatamente.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Batata asterix (rosa) ou monalisa são ideais — menos umidade, purê mais suave. Batata comum resulta em purê mais aguado.',
      substituicoes:'Para purê de mandioca, siga o mesmo processo. Para purê de batata-doce, reduza o leite — a batata-doce é naturalmente mais úmida.',
      adequado_crianca:'Um dos acompanhamentos favoritos. Pode adicionar queijo ralado para versão gratinada.',
      harmonizacao:'Carnes em geral, estrogonofe, bife acebolado, frango assado.',
      aviso:'Nunca bata no liquidificador ou processador — o amido da batata vira cola e fica elástico.'
    },
    armazenamento:{geladeira:'até 3 dias',freezer:'até 2 meses',observacoes:'Reaqueça com um pouco de manteiga e leite, mexendo bem.'},
    nutricao:{calorias:160,proteina:3,carboidrato:28,gordura:5,fibra:2}
  },

  {
    id:'ac002', emoji:'🥬', grupo:'acompanhamento',
    nome:'Couve Refogada com Alho',
    tipo:'acompanhamento', cozinha:'Brasileira',
    tempo_preparo:10, porcoes:4, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['rápido','verde','nutritivo'],
    ingredientes:[
      {item:'couve manteiga',quantidade:'1 maço grande',opcional:false},
      {item:'alho',quantidade:'4 dentes',opcional:false},
      {item:'azeite',quantidade:'3 colheres de sopa',opcional:false},
      {item:'sal',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Corte a couve em tirinhas bem finas (chiffonade) — retire o talo central mais duro.',timer_segundos:null},
      {passo:2,instrucao:'Em fogo alto, aqueça o azeite e doure o alho fatiado levemente.',timer_segundos:null},
      {passo:3,instrucao:'Adicione a couve e salteie por apenas 2 a 3 minutos mexendo sempre — deve ficar verde viva e levemente crocante.',timer_segundos:180},
      {passo:4,instrucao:'Tempere com sal e sirva imediatamente.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Couve fresca com folhas verde escuro e firmes. Evite folhas amareladas ou com manchas.',
      substituicoes:'A mesma técnica funciona com espinafre, brócolis picado, repolho e acelga.',
      adequado_crianca:'Sim — o alho torna o sabor mais suave. O tempo curto mantém a cor verde bonita.',
      harmonizacao:'Feijoada, feijão tropeiro, arroz com frango, churrasco.',
      aviso:'Não cozinhe demais — couve amarelada e mole perdeu nutrientes e sabor.'
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'não recomendado',observacoes:null},
    nutricao:{calorias:80,proteina:3,carboidrato:6,gordura:5,fibra:3}
  },

  {
    id:'ac003', emoji:'🌽', grupo:'acompanhamento',
    nome:'Farofa de Manteiga',
    tipo:'acompanhamento', cozinha:'Brasileira',
    tempo_preparo:15, porcoes:6, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['clássico','churrasco','versátil'],
    ingredientes:[
      {item:'farinha de mandioca torrada',quantidade:'2 xícaras',opcional:false},
      {item:'manteiga',quantidade:'3 colheres de sopa',opcional:false},
      {item:'cebola',quantidade:'1 unidade',opcional:false},
      {item:'ovo',quantidade:'2 unidades',opcional:true},
      {item:'sal e cheiro-verde',quantidade:'a gosto',opcional:false},
      {item:'bacon',quantidade:'100g',opcional:true}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Frite o bacon se usar. Adicione a manteiga e doure a cebola picada.',timer_segundos:null},
      {passo:2,instrucao:'Se usar ovo, quebre na frigideira e mexa rapidamente para incorporar em pedaços.',timer_segundos:null},
      {passo:3,instrucao:'Adicione a farinha de mandioca aos poucos, mexendo sem parar. Torra levemente.',timer_segundos:null},
      {passo:4,instrucao:'Ajuste o sal e finalize com cheiro-verde.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Farinha de mandioca torrada de qualidade e granulação grossa dá melhor textura. A fina fica muito pó.',
      substituicoes:'Farinha de milho (biju) cria uma farofa de textura diferente mas muito boa.',
      adequado_crianca:'Clássico acompanhamento que as crianças adoram.',
      harmonizacao:'Feijoada, churrasco, frango assado, moqueca.',
      aviso:null
    },
    armazenamento:{geladeira:'até 5 dias',freezer:'até 3 meses',observacoes:null},
    nutricao:{calorias:200,proteina:3,carboidrato:32,gordura:7,fibra:2}
  },

  {
    id:'ac004', emoji:'🥗', grupo:'acompanhamento',
    nome:'Vinagrete Clássico',
    tipo:'acompanhamento', cozinha:'Brasileira',
    tempo_preparo:10, porcoes:6, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['churrasco','fresco','molho'],
    ingredientes:[
      {item:'tomate',quantidade:'4 unidades',opcional:false},
      {item:'cebola',quantidade:'2 unidades',opcional:false},
      {item:'pimentão verde',quantidade:'1/2 unidade',opcional:false},
      {item:'vinagre de álcool',quantidade:'3 colheres de sopa',opcional:false},
      {item:'azeite',quantidade:'3 colheres de sopa',opcional:false},
      {item:'sal e cheiro-verde',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Pique o tomate, a cebola e o pimentão em cubos pequenos e uniformes.',timer_segundos:null},
      {passo:2,instrucao:'Misture o vinagre, o azeite e o sal. Prove e ajuste a acidez.',timer_segundos:null},
      {passo:3,instrucao:'Misture o tempero com os legumes. Adicione cheiro-verde picado.',timer_segundos:null},
      {passo:4,instrucao:'Deixe descansar 10 minutos para os sabores se integrarem antes de servir.',timer_segundos:600}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Tomate firme (caqui ou italiano) não solta água demais. Tomate muito maduro encharca o vinagrete.',
      substituicoes:'Adicione pepino, azeitona ou hortelã para versões diferenciadas.',
      adequado_crianca:'Sim — frescor e leveza que agrada a todos.',
      harmonizacao:'Churrasco, feijão, carnes grelhadas, peixe frito.',
      aviso:null
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'não recomendado',observacoes:null},
    nutricao:{calorias:60,proteina:1,carboidrato:7,gordura:4,fibra:2}
  },

  {
    id:'ac005', emoji:'🥔', grupo:'acompanhamento',
    nome:'Batata Sauté com Ervas',
    tipo:'acompanhamento', cozinha:'Brasileira',
    tempo_preparo:30, porcoes:4, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['dourada','ervas','churrasco'],
    ingredientes:[
      {item:'batata',quantidade:'600g',opcional:false},
      {item:'manteiga',quantidade:'2 colheres de sopa',opcional:false},
      {item:'alho',quantidade:'3 dentes',opcional:false},
      {item:'alecrim ou salsinha',quantidade:'a gosto',opcional:false},
      {item:'sal e pimenta',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Cozinhe as batatas com casca até ficarem al dente — firmes mas não cruas. Descasque e corte em cubos ou rodelas.',timer_segundos:null},
      {passo:2,instrucao:'Em frigideira grande, derreta a manteiga em fogo médio-alto. Adicione o alho.',timer_segundos:null},
      {passo:3,instrucao:'Coloque as batatas em camada única. Não mexa por 3 minutos para dourar bem.',timer_segundos:180},
      {passo:4,instrucao:'Vire e doure do outro lado. Finalize com ervas, sal e pimenta.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Pré-cozinhar a batata é o segredo — cria uma casca que dourará bonito sem queimar por fora e ficar crua por dentro.',
      substituicoes:'Batata-doce segue o mesmo processo.',
      adequado_crianca:'Adorado por crianças.',
      harmonizacao:'Bife, frango grelhado, churrasco.',
      aviso:null
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'não recomendado',observacoes:null},
    nutricao:{calorias:180,proteina:3,carboidrato:30,gordura:6,fibra:3}
  },

  {
    id:'ac006', emoji:'🥦', grupo:'acompanhamento',
    nome:'Legumes Refogados Coloridos',
    tipo:'acompanhamento', cozinha:'Brasileira',
    tempo_preparo:15, porcoes:4, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['colorido','nutritivo','rápido'],
    ingredientes:[
      {item:'cenoura',quantidade:'2 unidades',opcional:false},
      {item:'abobrinha',quantidade:'1 unidade',opcional:false},
      {item:'pimentão colorido',quantidade:'1 unidade',opcional:false},
      {item:'brócolis',quantidade:'100g',opcional:true},
      {item:'azeite e alho',quantidade:'a gosto',opcional:false},
      {item:'sal, pimenta e shoyu',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Corte todos os legumes em pedaços similares.',timer_segundos:null},
      {passo:2,instrucao:'Em wok ou frigideira grande, aqueça o azeite em fogo alto.',timer_segundos:null},
      {passo:3,instrucao:'Adicione os legumes mais duros primeiro (cenoura, brócolis). Após 2 minutos, adicione os mais macios (abobrinha, pimentão).',timer_segundos:120},
      {passo:4,instrucao:'Salteie por 3 a 4 minutos total. Os legumes devem ficar al dente. Tempere com sal, shoyu e pimenta.',timer_segundos:240}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Legumes devem ficar crocantes — cozimento longo amolece e perde cor e nutrientes.',
      substituicoes:'Use qualquer legume disponível. A técnica é a mesma.',
      adequado_crianca:'Versão colorida e divertida de comer legumes.',
      harmonizacao:'Arroz, macarrão, carnes em geral.',
      aviso:null
    },
    armazenamento:{geladeira:'até 3 dias',freezer:'não recomendado',observacoes:null},
    nutricao:{calorias:80,proteina:2,carboidrato:12,gordura:3,fibra:4}
  },

  {
    id:'ac007', emoji:'🌾', grupo:'acompanhamento',
    nome:'Mandioca Cozida com Manteiga',
    tipo:'acompanhamento', cozinha:'Brasileira',
    tempo_preparo:30, porcoes:4, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['mandioca','simples','churrasco'],
    ingredientes:[
      {item:'mandioca',quantidade:'600g',opcional:false},
      {item:'manteiga',quantidade:'2 colheres de sopa',opcional:false},
      {item:'sal',quantidade:'a gosto',opcional:false},
      {item:'cheiro-verde',quantidade:'a gosto',opcional:true}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Descasque a mandioca, corte ao meio no comprimento e retire o fio central (a fibra). Corte em pedaços de 7cm.',timer_segundos:null},
      {passo:2,instrucao:'Cozinhe em água com sal na pressão por 15 minutos ou em panela normal por 30 a 40 minutos.',timer_segundos:900},
      {passo:3,instrucao:'Escorra e sirva regada com manteiga derretida e cheiro-verde.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Mandioca congelada já descascada e cortada é muito prática. Verifique se não tem fibras escuras no centro — sinal de que não está boa.',
      substituicoes:null,
      adequado_crianca:'Excelente — macia, neutra, fácil de comer.',
      harmonizacao:'Churrasco, moqueca, frango assado, feijão.',
      aviso:'Retire o fio central antes de cozinhar — é duro e desagradável.'
    },
    armazenamento:{geladeira:'até 3 dias',freezer:'cozida até 3 meses',observacoes:null},
    nutricao:{calorias:180,proteina:2,carboidrato:40,gordura:4,fibra:2}
  },

  {
    id:'ac008', emoji:'🥗', grupo:'acompanhamento',
    nome:'Salada Verde com Molho de Limão',
    tipo:'acompanhamento', cozinha:'Brasileira',
    tempo_preparo:10, porcoes:4, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['fresca','leve','clássico'],
    ingredientes:[
      {item:'alface',quantidade:'1 pé',opcional:false},
      {item:'rúcula',quantidade:'100g',opcional:true},
      {item:'tomate',quantidade:'2 unidades',opcional:false},
      {item:'cebola',quantidade:'1/2 unidade',opcional:false},
      {item:'limão',quantidade:'1 unidade',opcional:false},
      {item:'azeite',quantidade:'3 colheres de sopa',opcional:false},
      {item:'sal',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Lave bem as folhas em água corrente. Higienize em solução de hipoclorito por 15 minutos. Escorra e seque.',timer_segundos:900},
      {passo:2,instrucao:'Rasgue as folhas em pedaços com as mãos — nunca corte com faca de metal, que escurece.',timer_segundos:null},
      {passo:3,instrucao:'Adicione tomate em gomos, cebola em rodelas finas.',timer_segundos:null},
      {passo:4,instrucao:'Tempere com suco de limão, azeite e sal. Misture levemente e sirva imediatamente.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Tempere a salada só na hora de servir — sal e limão murcham as folhas rapidamente.',
      substituicoes:'Use qualquer folha disponível. Manjericão, hortelã ou coentro adicionam personalidade.',
      adequado_crianca:'Sim — fresca e leve. O limão suaviza o amargor da rúcula.',
      harmonizacao:'Acompanha praticamente qualquer prato.',
      aviso:'Higienização das folhas é obrigatória — use 1 colher de sopa de hipoclorito para 1 litro de água, deixe 15 minutos.'
    },
    armazenamento:{geladeira:'até 1 dia (sem tempero)',freezer:'não recomendado',observacoes:null},
    nutricao:{calorias:70,proteina:2,carboidrato:6,gordura:5,fibra:2}
  },

  // ════════════════════════════
  // LANCHES E TORTAS SALGADAS
  // ════════════════════════════
  {
    id:'la001', emoji:'🥧', grupo:'lanche',
    nome:'Empadão de Frango',
    tipo:'torta-salgada', cozinha:'Brasileira',
    tempo_preparo:75, porcoes:8, dificuldade:'médio',
    adequado_crianca:true, vegetariano:false,
    tags:['festas','especial','frango'],
    ingredientes:[
      {item:'farinha de trigo',quantidade:'3 xícaras',opcional:false},
      {item:'manteiga gelada',quantidade:'200g',opcional:false},
      {item:'ovo',quantidade:'2 unidades',opcional:false},
      {item:'sal',quantidade:'1 colher de chá',opcional:false},
      {item:'frango desfiado temperado',quantidade:'3 xícaras',opcional:false},
      {item:'requeijão',quantidade:'150g',opcional:false},
      {item:'creme de leite',quantidade:'100ml',opcional:false},
      {item:'azeitona e palmito',quantidade:'a gosto',opcional:true}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Misture a farinha com o sal. Adicione a manteiga gelada em cubos e misture com as pontas dos dedos até virar farofa grossa.',timer_segundos:null},
      {passo:2,instrucao:'Adicione o ovo e misture até a massa se unir. Não amasse demais. Divida em 2/3 e 1/3. Leve ao frio por 30 minutos.',timer_segundos:1800},
      {passo:3,instrucao:'Misture o frango com requeijão, creme de leite, azeitona e palmito.',timer_segundos:null},
      {passo:4,instrucao:'Abra a massa maior e forre uma forma de 24cm. Adicione o recheio.',timer_segundos:null},
      {passo:5,instrucao:'Cubra com a massa menor aberta. Sele as bordas, faça furos e pincele com gema.',timer_segundos:null},
      {passo:6,instrucao:'Asse a 180°C por 35 a 40 minutos até dourar.',timer_segundos:2220}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Manteiga gelada é fundamental para a massa ficar crocante — a gordura fria cria flocos de vapor durante o assar.',
      substituicoes:'O recheio pode ser de carne moída, atum ou legumes para versão vegetariana.',
      adequado_crianca:'Clássico das festas infantis.',
      harmonizacao:'Salada verde ao lado.',
      aviso:'Não aqueça a massa com as mãos quentes — a manteiga derrete e perde a crocância.'
    },
    armazenamento:{geladeira:'até 4 dias',freezer:'até 3 meses (cru ou assado)',observacoes:null},
    nutricao:{calorias:420,proteina:22,carboidrato:38,gordura:20,fibra:2}
  },

  {
    id:'la002', emoji:'🥚', grupo:'lanche',
    nome:'Tapioca Salgada',
    tipo:'lanche', cozinha:'Brasileira',
    tempo_preparo:15, porcoes:2, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['rápido','sem glúten','nordestino'],
    ingredientes:[
      {item:'goma de tapioca hidratada',quantidade:'4 colheres de sopa',opcional:false},
      {item:'queijo muçarela',quantidade:'50g',opcional:false},
      {item:'presunto',quantidade:'2 fatias',opcional:true},
      {item:'tomate',quantidade:'1/2 unidade',opcional:true},
      {item:'sal',quantidade:'pitada',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Aqueça frigideira antiaderente seca em fogo médio.',timer_segundos:null},
      {passo:2,instrucao:'Adicione a goma de tapioca peneirada distribuindo em círculo uniforme.',timer_segundos:null},
      {passo:3,instrucao:'Quando as bordas começarem a soltar e a superfície ficar opaca (cerca de 2 minutos), adicione o recheio em metade da tapioca.',timer_segundos:120},
      {passo:4,instrucao:'Dobre ao meio, pressione levemente e sirva quente.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Goma de tapioca já hidratada (a granulada úmida) facilita muito. A seca precisa ser hidratada antes. Não use polvilho.',
      substituicoes:'Recheios infinitos: frango com catupiry, ovo mexido, banana com mel, nutella, queijo com orégano.',
      adequado_crianca:'Ótima — sem glúten, nutritiva, rápida.',
      harmonizacao:'Café da manhã, lanche da tarde ou jantar leve.',
      aviso:null
    },
    armazenamento:{geladeira:'não recomendado (a goma endurece)',freezer:'não recomendado',observacoes:'Faça sempre na hora.'},
    nutricao:{calorias:220,proteina:10,carboidrato:28,gordura:8,fibra:0}
  },

  {
    id:'la003', emoji:'🧆', grupo:'lanche',
    nome:'Omelete Recheada',
    tipo:'lanche', cozinha:'Brasileira',
    tempo_preparo:15, porcoes:1, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['ovo','rápido','proteína'],
    ingredientes:[
      {item:'ovo',quantidade:'3 unidades',opcional:false},
      {item:'queijo muçarela',quantidade:'30g',opcional:false},
      {item:'tomate',quantidade:'1/2 unidade',opcional:true},
      {item:'presunto',quantidade:'2 fatias',opcional:true},
      {item:'manteiga',quantidade:'1 colher de sobremesa',opcional:false},
      {item:'sal e pimenta',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Bata os ovos com sal e pimenta. Não bata demais — deve ficar com um pouco de textura.',timer_segundos:null},
      {passo:2,instrucao:'Derreta a manteiga em frigideira de 20cm em fogo médio. Despeje os ovos.',timer_segundos:null},
      {passo:3,instrucao:'Quando as bordas começarem a coagular, use uma espátula para puxar as bordas para o centro, inclinando a frigideira.',timer_segundos:null},
      {passo:4,instrucao:'Quando estiver quase firme mas ainda cremosa no centro, adicione o recheio em metade. Dobre e deslize para o prato.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Ovo fresco tem gema mais firme e cor mais intensa. Teste frescor: coloque na água — se afundar, está fresco; se boiar, descarte.',
      substituicoes:'Recheio à sua escolha — espinafre, champignon, atum, frango.',
      adequado_crianca:'Excelente fonte de proteína para o café da manhã ou lanche das crianças.',
      harmonizacao:'Salada, pão ou fruta ao lado.',
      aviso:null
    },
    armazenamento:{geladeira:'até 1 dia',freezer:'não recomendado',observacoes:'Faça sempre fresco — omelete morna não é a mesma coisa.'},
    nutricao:{calorias:320,proteina:24,carboidrato:2,gordura:24,fibra:0}
  },

  {
    id:'la004', emoji:'🫓', grupo:'lanche',
    nome:'Panqueca Salgada Recheada',
    tipo:'lanche', cozinha:'Brasileira',
    tempo_preparo:40, porcoes:4, dificuldade:'médio',
    adequado_crianca:true, vegetariano:false,
    tags:['recheada','versátil','família'],
    ingredientes:[
      {item:'farinha de trigo',quantidade:'1 xícara',opcional:false},
      {item:'ovo',quantidade:'2 unidades',opcional:false},
      {item:'leite',quantidade:'1 xícara',opcional:false},
      {item:'sal',quantidade:'a gosto',opcional:false},
      {item:'frango desfiado ou carne moída',quantidade:'2 xícaras',opcional:false},
      {item:'molho de tomate',quantidade:'1 xícara',opcional:false},
      {item:'queijo muçarela para gratinar',quantidade:'200g',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Bata farinha, ovos, leite e sal até ficar massa lisa e sem grumos.',timer_segundos:null},
      {passo:2,instrucao:'Frite as panquecas em frigideira antiaderente untada com manteiga — finas e delicadas.',timer_segundos:null},
      {passo:3,instrucao:'Recheie cada panqueca com o frango ou carne moída, enrole e coloque em refratário.',timer_segundos:null},
      {passo:4,instrucao:'Cubra com molho de tomate e queijo muçarela. Asse a 180°C por 15 minutos.',timer_segundos:900}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'A massa descansada por 30 minutos fica mais lisa e fácil de trabalhar.',
      substituicoes:'Versão vegetariana com ricota e espinafre é excelente.',
      adequado_crianca:'Favorito das crianças — massa macia, recheio saboroso.',
      harmonizacao:'Salada verde ao lado.',
      aviso:null
    },
    armazenamento:{geladeira:'até 3 dias',freezer:'até 2 meses (sem gratinar)',observacoes:'Congele enroladas antes de gratinar.'},
    nutricao:{calorias:380,proteina:26,carboidrato:36,gordura:14,fibra:2}
  },

  {
    id:'la005', emoji:'🫔', grupo:'lanche',
    nome:'Quiche de Queijo e Cebola',
    tipo:'torta-salgada', cozinha:'Francesa',
    tempo_preparo:60, porcoes:6, dificuldade:'médio',
    adequado_crianca:true, vegetariano:true,
    tags:['francesa','ovo','festas'],
    ingredientes:[
      {item:'massa de quiche (mesma do empadão)',quantidade:'1 receita',opcional:false},
      {item:'ovo',quantidade:'3 unidades',opcional:false},
      {item:'creme de leite',quantidade:'200ml',opcional:false},
      {item:'queijo gruyère ou muçarela',quantidade:'150g',opcional:false},
      {item:'cebola caramelizada',quantidade:'2 unidades',opcional:false},
      {item:'sal, pimenta e noz-moscada',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Forre a forma com a massa e pré-asse a 180°C por 10 minutos.',timer_segundos:600},
      {passo:2,instrucao:'Caramelize a cebola em manteiga por 20 minutos em fogo baixo. Reserve.',timer_segundos:1200},
      {passo:3,instrucao:'Bata ovos com creme de leite, sal, pimenta e noz-moscada.',timer_segundos:null},
      {passo:4,instrucao:'Distribua a cebola e o queijo na massa pré-assada. Despeje a mistura de ovos.',timer_segundos:null},
      {passo:5,instrucao:'Asse a 170°C por 30 a 35 minutos até firmar no centro.',timer_segundos:1980}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'A quiche está pronta quando o centro balança levemente como gelatina — ela firma ao esfriar.',
      substituicoes:'Recheio pode variar: presunto e ervilha, salmão e endro, frango e requeijão.',
      adequado_crianca:'Sim — saborosa e nutritiva.',
      harmonizacao:'Salada verde. Ótima para brunch e almoços leves.',
      aviso:'Não asse em temperatura muito alta — o ovo talha e a quiche fica com textura granulosa.'
    },
    armazenamento:{geladeira:'até 3 dias',freezer:'até 2 meses',observacoes:null},
    nutricao:{calorias:380,proteina:14,carboidrato:28,gordura:24,fibra:1}
  },

  {
    id:'la006', emoji:'🌮', grupo:'lanche',
    nome:'Sanduíche Natural de Frango',
    tipo:'lanche', cozinha:'Brasileira',
    tempo_preparo:15, porcoes:2, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['saudável','rápido','lanche'],
    ingredientes:[
      {item:'pão de forma integral',quantidade:'4 fatias',opcional:false},
      {item:'frango desfiado temperado',quantidade:'1 xícara',opcional:false},
      {item:'requeijão light',quantidade:'2 colheres de sopa',opcional:false},
      {item:'alface',quantidade:'2 folhas',opcional:false},
      {item:'tomate',quantidade:'1 unidade',opcional:false},
      {item:'cenoura ralada',quantidade:'2 colheres de sopa',opcional:true}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Espalhe o requeijão nas fatias de pão.',timer_segundos:null},
      {passo:2,instrucao:'Distribua o frango desfiado, o tomate fatiado, a alface e a cenoura.',timer_segundos:null},
      {passo:3,instrucao:'Feche e sirva imediatamente ou embrulhe em filme para levar na lancheira.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Frango desfiado temperado feito em casa tem muito mais sabor que o industrializado.',
      substituicoes:'Atum em lata escorrido no lugar do frango é igualmente prático e saboroso.',
      adequado_crianca:'Perfeito para lancheira escolar.',
      harmonizacao:'Suco natural ou vitamina de fruta.',
      aviso:null
    },
    armazenamento:{geladeira:'montado até 1 dia',freezer:'não recomendado',observacoes:null},
    nutricao:{calorias:280,proteina:22,carboidrato:28,gordura:8,fibra:4}
  },

  {
    id:'la007', emoji:'🫓', grupo:'lanche',
    nome:'Crepioca (Crepe de Tapioca)',
    tipo:'lanche', cozinha:'Brasileira',
    tempo_preparo:10, porcoes:1, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['proteína','sem glúten','rápido'],
    ingredientes:[
      {item:'goma de tapioca',quantidade:'2 colheres de sopa',opcional:false},
      {item:'ovo',quantidade:'1 unidade',opcional:false},
      {item:'recheio a escolha',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Misture a goma de tapioca com o ovo batido até ficar homogêneo.',timer_segundos:null},
      {passo:2,instrucao:'Despeje em frigideira antiaderente quente sem gordura. Espalhe.',timer_segundos:null},
      {passo:3,instrucao:'Cozinhe em fogo médio por 2 minutos de cada lado.',timer_segundos:240},
      {passo:4,instrucao:'Recheie e sirva.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'A combinação de tapioca com ovo cria uma base proteica excelente — mais nutritiva que a tapioca simples.',
      substituicoes:null,
      adequado_crianca:'Ótima opção — sem glúten e proteica.',
      harmonizacao:'Fruta ao lado ou iogurte.',
      aviso:null
    },
    armazenamento:{geladeira:'não recomendado',freezer:'não recomendado',observacoes:'Faça sempre fresco.'},
    nutricao:{calorias:200,proteina:10,carboidrato:26,gordura:6,fibra:0}
  },

  {
    id:'la008', emoji:'🍳', grupo:'lanche',
    nome:'Ovo Mexido Cremoso',
    tipo:'cafe', cozinha:'Brasileira',
    tempo_preparo:8, porcoes:1, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['rápido','café da manhã','proteína'],
    ingredientes:[
      {item:'ovo',quantidade:'3 unidades',opcional:false},
      {item:'manteiga',quantidade:'1 colher de sobremesa',opcional:false},
      {item:'sal',quantidade:'a gosto',opcional:false},
      {item:'cebolinha',quantidade:'a gosto',opcional:true}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Bata os ovos levemente com sal — não exagere no batimento.',timer_segundos:null},
      {passo:2,instrucao:'Derreta a manteiga em fogo baixo. Adicione os ovos.',timer_segundos:null},
      {passo:3,instrucao:'Mexa delicadamente com espátula, puxando as bordas para o centro. Não mexa rápido demais.',timer_segundos:null},
      {passo:4,instrucao:'Desligue quando ainda parecer levemente cru — o calor residual termina de cozinhar. Finalize com cebolinha.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Ovo caipira tem gema mais laranja e sabor mais intenso. Ovo orgânico tem qualidade superior.',
      substituicoes:null,
      adequado_crianca:'Favorito do café da manhã das crianças.',
      harmonizacao:'Torrada, pão francês, tapioca ou aveia.',
      aviso:'O erro mais comum é fogo alto — ovos mexidos precisam de fogo baixo para ficarem cremosos.'
    },
    armazenamento:{geladeira:'não recomendado',freezer:'não recomendado',observacoes:'Faça sempre fresco.'},
    nutricao:{calorias:230,proteina:18,carboidrato:1,gordura:17,fibra:0}
  },

  {
    id:'la009', emoji:'🧇', grupo:'lanche',
    nome:'Pão de Queijo Mineiro',
    tipo:'cafe', cozinha:'Brasileira',
    tempo_preparo:40, porcoes:20, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['mineiro','queijo','sem glúten'],
    ingredientes:[
      {item:'polvilho azedo',quantidade:'2 xícaras',opcional:false},
      {item:'leite',quantidade:'1/2 xícara',opcional:false},
      {item:'azeite ou óleo',quantidade:'1/2 xícara',opcional:false},
      {item:'ovo',quantidade:'2 unidades',opcional:false},
      {item:'queijo meia-cura ralado',quantidade:'200g',opcional:false},
      {item:'sal',quantidade:'1 colher de chá',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Ferva o leite com o óleo e o sal. Despeje sobre o polvilho e misture.',timer_segundos:null},
      {passo:2,instrucao:'Deixe amornar. Adicione os ovos um a um, misturando bem.',timer_segundos:null},
      {passo:3,instrucao:'Adicione o queijo ralado e misture até massa homogênea.',timer_segundos:null},
      {passo:4,instrucao:'Modele bolinhas com as mãos untadas com óleo. Coloque em assadeira untada.',timer_segundos:null},
      {passo:5,instrucao:'Asse a 180°C por 25 a 30 minutos até dourar.',timer_segundos:1680}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Queijo meia-cura fresco da feirinha tem sabor muito superior ao industrializado. Polvilho azedo dá mais crocância que o doce.',
      substituicoes:'Mistura de polvilho doce e azedo (metade cada) é muito comum.',
      adequado_crianca:'Adorado por todas as idades.',
      harmonizacao:'Café, leite quente, suco.',
      aviso:null
    },
    armazenamento:{geladeira:'até 5 dias',freezer:'até 3 meses (cru, em bolinhas)',observacoes:'Congele cru e asse direto do freezer adicionando 5 minutos.'},
    nutricao:{calorias:120,proteina:4,carboidrato:14,gordura:6,fibra:0}
  },

  {
    id:'la010', emoji:'🫓', grupo:'lanche',
    nome:'Cuscuz Nordestino',
    tipo:'cafe', cozinha:'Brasileira',
    tempo_preparo:20, porcoes:4, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['nordestino','milho','café da manhã'],
    ingredientes:[
      {item:'farinha de milho flocada para cuscuz',quantidade:'2 xícaras',opcional:false},
      {item:'água morna',quantidade:'1/2 xícara',opcional:false},
      {item:'sal',quantidade:'1 colher de chá',opcional:false},
      {item:'manteiga',quantidade:'para servir',opcional:true},
      {item:'ovo frito, queijo ou sardinha',quantidade:'para acompanhar',opcional:true}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Misture a farinha com o sal. Adicione a água morna aos poucos, misturando com os dedos até criar uma farofa úmida. Deve grudar levemente mas não formar massa.',timer_segundos:null},
      {passo:2,instrucao:'Encha a cuscuzeira ou panela furada com a farinha. Tampe.',timer_segundos:null},
      {passo:3,instrucao:'Cozinhe no vapor por 8 a 10 minutos. O cuscuz está pronto quando estiver firme e soltando.',timer_segundos:540},
      {passo:4,instrucao:'Desenforme e sirva com manteiga, ovo ou queijo.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Farinha de milho específica para cuscuz (flocada) é diferente do fubá e da farinha de milho comum — use a correta.',
      substituicoes:'Para fazer na frigideira sem cuscuzeira, molhe a farinha e refogue mexendo até firmar.',
      adequado_crianca:'Excelente — sem glúten, nutritivo, fácil de mastigar.',
      harmonizacao:'Ovo frito, queijo de coalho, manteiga, sardinha em lata, leite.',
      aviso:null
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'até 1 mês',observacoes:'Reaqueça no vapor por 2 minutos.'},
    nutricao:{calorias:180,proteina:3,carboidrato:38,gordura:2,fibra:3}
  },

  // ════════════════════════════
  // DOCES E SOBREMESAS
  // ════════════════════════════
  {
    id:'do001', emoji:'🍮', grupo:'doce',
    nome:'Pudim de Leite Condensado',
    tipo:'doce', cozinha:'Brasileira',
    tempo_preparo:90, porcoes:10, dificuldade:'médio',
    adequado_crianca:true, vegetariano:true,
    tags:['clássico','festas','caramelo'],
    ingredientes:[
      {item:'leite condensado',quantidade:'1 lata (395g)',opcional:false},
      {item:'leite',quantidade:'2 medidas da lata',opcional:false},
      {item:'ovo',quantidade:'3 unidades',opcional:false},
      {item:'açúcar',quantidade:'1 xícara para a calda',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Para a calda: derreta o açúcar em fogo médio sem mexer até virar caramelo dourado. Despeje rapidamente na fôrma de pudim e cubra as laterais.',timer_segundos:null},
      {passo:2,instrucao:'Bata no liquidificador o leite condensado, o leite e os ovos por 2 minutos. Coe para remover espuma.',timer_segundos:120},
      {passo:3,instrucao:'Despeje na fôrma com a calda. Cubra com papel alumínio.',timer_segundos:null},
      {passo:4,instrucao:'Asse em banho-maria a 180°C por 1 hora e 20 minutos. Verifique espetando palito — deve sair limpo.',timer_segundos:4800},
      {passo:5,instrucao:'Deixe esfriar completamente e leve à geladeira por pelo menos 4 horas antes de desenformar.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'O pudim fica melhor no dia seguinte — os sabores se integram e a textura fica mais firme.',
      substituicoes:'Para versão mais rica, substitua o leite por creme de leite ou use 1/2 lata de leite e 1/2 de creme de leite.',
      adequado_crianca:'Um dos doces preferidos de toda a família.',
      harmonizacao:'Sobremesa completa. Chantilly ao lado para ocasiões especiais.',
      aviso:'Coar a mistura remove as bolhas que criam furos no pudim.'
    },
    armazenamento:{geladeira:'até 5 dias',freezer:'até 2 meses',observacoes:null},
    nutricao:{calorias:240,proteina:7,carboidrato:40,gordura:6,fibra:0}
  },

  {
    id:'do002', emoji:'🍫', grupo:'doce',
    nome:'Brigadeiro Clássico',
    tipo:'doce', cozinha:'Brasileira',
    tempo_preparo:30, porcoes:30, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['festas','chocolate','clássico'],
    ingredientes:[
      {item:'leite condensado',quantidade:'1 lata (395g)',opcional:false},
      {item:'chocolate em pó ou cacau',quantidade:'4 colheres de sopa',opcional:false},
      {item:'manteiga',quantidade:'1 colher de sopa',opcional:false},
      {item:'chocolate granulado',quantidade:'para enrolar',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Em panela grossa, misture o leite condensado, o chocolate e a manteiga.',timer_segundos:null},
      {passo:2,instrucao:'Cozinhe em fogo médio mexendo SEMPRE com espátula raspando o fundo para não queimar.',timer_segundos:null},
      {passo:3,instrucao:'O ponto certo: quando soltar do fundo da panela e você conseguir ver o fundo por 2 a 3 segundos — cerca de 10 a 15 minutos.',timer_segundos:840},
      {passo:4,instrucao:'Despeje em prato untado com manteiga. Deixe esfriar completamente.',timer_segundos:null},
      {passo:5,instrucao:'Com as mãos untadas, modele bolinhas e passe no granulado.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Cacau em pó puro (70% ou mais) tem sabor muito superior ao achocolatado. Para brigadeiro mais intenso, use 6 colheres de cacau.',
      substituicoes:'Brigadeiro branco: leite condensado + manteiga + creme de leite. Sem chocolate.',
      adequado_crianca:'O doce mais amado pelas crianças brasileiras.',
      harmonizacao:'Festa junina, aniversário, qualquer celebração.',
      aviso:'Não pare de mexer — o leite condensado queima facilmente no fundo.'
    },
    armazenamento:{geladeira:'até 7 dias',freezer:'até 3 meses',observacoes:'Mantenha em temperatura ambiente até 2 dias para festas.'},
    nutricao:{calorias:80,proteina:2,carboidrato:14,gordura:2,fibra:0}
  },

  {
    id:'do003', emoji:'🎂', grupo:'doce',
    nome:'Bolo de Cenoura com Cobertura de Chocolate',
    tipo:'doce', cozinha:'Brasileira',
    tempo_preparo:60, porcoes:12, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['clássico','aniversário','cenoura'],
    ingredientes:[
      {item:'cenoura',quantidade:'3 unidades médias',opcional:false},
      {item:'ovo',quantidade:'3 unidades',opcional:false},
      {item:'óleo',quantidade:'1 xícara',opcional:false},
      {item:'açúcar',quantidade:'2 xícaras',opcional:false},
      {item:'farinha de trigo',quantidade:'2,5 xícaras',opcional:false},
      {item:'fermento em pó',quantidade:'1 colher de sopa',opcional:false},
      {item:'chocolate em pó',quantidade:'4 colheres de sopa',opcional:false},
      {item:'manteiga e leite para a cobertura',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Bata no liquidificador a cenoura, os ovos e o óleo até ficar liso.',timer_segundos:null},
      {passo:2,instrucao:'Em tigela, misture a farinha, o açúcar e o fermento. Adicione o líquido do liquidificador e misture até incorporar.',timer_segundos:null},
      {passo:3,instrucao:'Despeje em fôrma untada e enfarinhada. Asse a 180°C por 35 a 40 minutos.',timer_segundos:2280},
      {passo:4,instrucao:'Cobertura: derreta manteiga, adicione leite e chocolate em pó. Mexa até ferver e despeje sobre o bolo quente.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Cenoura crua batida no liquidificador com óleo cria uma massa extraordinariamente úmida. Não pre-cozinhe a cenoura.',
      substituicoes:'Para versão sem glúten, use farinha de arroz.',
      adequado_crianca:'O bolo favorito do Brasil. As crianças não percebem a cenoura.',
      harmonizacao:'Café da manhã, café da tarde ou aniversário.',
      aviso:'Não abra o forno nos primeiros 30 minutos — o bolo murcha.'
    },
    armazenamento:{geladeira:'até 5 dias',freezer:'até 3 meses (sem cobertura)',observacoes:null},
    nutricao:{calorias:320,proteina:5,carboidrato:48,gordura:12,fibra:2}
  },

  {
    id:'do004', emoji:'🍮', grupo:'doce',
    nome:'Arroz Doce',
    tipo:'doce', cozinha:'Brasileira',
    tempo_preparo:40, porcoes:8, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['cremoso','canela','festas juninas'],
    ingredientes:[
      {item:'arroz',quantidade:'1 xícara',opcional:false},
      {item:'leite',quantidade:'1 litro',opcional:false},
      {item:'açúcar',quantidade:'1 xícara',opcional:false},
      {item:'leite condensado',quantidade:'1/2 lata',opcional:false},
      {item:'canela em pau',quantidade:'2 unidades',opcional:false},
      {item:'canela em pó para polvilhar',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Cozinhe o arroz com água suficiente para cobrir e a canela em pau, até quase secar.',timer_segundos:null},
      {passo:2,instrucao:'Adicione o leite quente e o açúcar. Cozinhe em fogo médio-baixo mexendo sempre por 20 minutos.',timer_segundos:1200},
      {passo:3,instrucao:'Adicione o leite condensado nos últimos 5 minutos. O arroz deve ficar cremoso — vai endurecer ao esfriar.',timer_segundos:300},
      {passo:4,instrucao:'Despeje em travessa, polvilhe canela e sirva morno ou gelado.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'O arroz doce fica mais cremoso que o arroz normal — use agulhinha comum, não parboilizado.',
      substituicoes:'Para versão com leite de coco, substitua metade do leite por leite de coco.',
      adequado_crianca:'Adorado pelas crianças. Um dos doces mais afetivos da culinária brasileira.',
      harmonizacao:'Perfeito no São João e datas comemorativas. Serve sozinho.',
      aviso:null
    },
    armazenamento:{geladeira:'até 4 dias',freezer:'até 2 meses',observacoes:'Reaqueça com um pouco de leite — endurece na geladeira.'},
    nutricao:{calorias:220,proteina:6,carboidrato:42,gordura:3,fibra:0}
  },

  {
    id:'do005', emoji:'🍭', grupo:'doce',
    nome:'Mousse de Maracujá',
    tipo:'doce', cozinha:'Brasileira',
    tempo_preparo:20, porcoes:8, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['cremoso','tropical','rápido'],
    ingredientes:[
      {item:'polpa de maracujá',quantidade:'1 xícara',opcional:false},
      {item:'leite condensado',quantidade:'1 lata',opcional:false},
      {item:'creme de leite',quantidade:'1 lata',opcional:false},
      {item:'gelatina incolor',quantidade:'1 envelope',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Hidrate a gelatina com 5 colheres de água fria. Dissolva em banho-maria ou micro-ondas.',timer_segundos:null},
      {passo:2,instrucao:'Bata no liquidificador a polpa de maracujá com o leite condensado.',timer_segundos:null},
      {passo:3,instrucao:'Adicione o creme de leite e a gelatina dissolvida. Bata por 1 minuto.',timer_segundos:60},
      {passo:4,instrucao:'Despeje em taças ou travessa. Geladeira por mínimo 2 horas antes de servir.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Polpa de maracujá congelada funciona perfeitamente. Polpa fresca tem sabor mais intenso.',
      substituicoes:'Pode fazer sem gelatina para versão mais cremosa e menos firme — serve nas taças.',
      adequado_crianca:'Adorado — o sabor tropical e o cremoso conquistam todas as idades.',
      harmonizacao:'Calda de maracujá por cima. Servir com biscoito maisena.',
      aviso:null
    },
    armazenamento:{geladeira:'até 3 dias',freezer:'até 2 meses',observacoes:null},
    nutricao:{calorias:280,proteina:6,carboidrato:38,gordura:12,fibra:0}
  },

  {
    id:'do006', emoji:'🍰', grupo:'doce',
    nome:'Bolo de Fubá com Erva-Doce',
    tipo:'doce', cozinha:'Brasileira',
    tempo_preparo:60, porcoes:10, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['junino','fubá','rústico'],
    ingredientes:[
      {item:'fubá',quantidade:'1,5 xícara',opcional:false},
      {item:'farinha de trigo',quantidade:'1 xícara',opcional:false},
      {item:'ovo',quantidade:'3 unidades',opcional:false},
      {item:'açúcar',quantidade:'1,5 xícara',opcional:false},
      {item:'leite',quantidade:'1 xícara',opcional:false},
      {item:'óleo',quantidade:'1/2 xícara',opcional:false},
      {item:'fermento',quantidade:'1 colher de sopa',opcional:false},
      {item:'erva-doce',quantidade:'1 colher de chá',opcional:false},
      {item:'queijo parmesão ralado',quantidade:'50g',opcional:true}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Bata ovos com açúcar e óleo até clarear. Adicione o leite.',timer_segundos:null},
      {passo:2,instrucao:'Misture fubá, farinha, erva-doce e queijo. Adicione ao líquido.',timer_segundos:null},
      {passo:3,instrucao:'Adicione o fermento e misture delicadamente.',timer_segundos:null},
      {passo:4,instrucao:'Despeje em fôrma untada e enfarinhada. Asse a 180°C por 40 a 45 minutos.',timer_segundos:2520}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Fubá fino dá textura mais delicada. Fubá grosso resulta em bolo mais rústico e úmido.',
      substituicoes:'Erva-doce pode ser substituída por funcho. O queijo parmesão dá um toque salgado irresistível.',
      adequado_crianca:'Sim — textura diferente e sabor marcante.',
      harmonizacao:'Café com leite, chá ou vitamina.',
      aviso:null
    },
    armazenamento:{geladeira:'até 5 dias',freezer:'até 3 meses',observacoes:null},
    nutricao:{calorias:280,proteina:6,carboidrato:44,gordura:10,fibra:2}
  },

  {
    id:'do007', emoji:'🍌', grupo:'doce',
    nome:'Doce de Banana com Canela',
    tipo:'doce', cozinha:'Brasileira',
    tempo_preparo:25, porcoes:6, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['banana','simples','criança'],
    ingredientes:[
      {item:'banana nanica madura',quantidade:'6 unidades',opcional:false},
      {item:'açúcar',quantidade:'1/2 xícara',opcional:false},
      {item:'canela em pó',quantidade:'1 colher de chá',opcional:false},
      {item:'cravo',quantidade:'2 unidades',opcional:true},
      {item:'manteiga',quantidade:'1 colher de sopa',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Amasse grosseiramente as bananas.',timer_segundos:null},
      {passo:2,instrucao:'Em panela, coloque a manteiga, as bananas, o açúcar, a canela e o cravo.',timer_segundos:null},
      {passo:3,instrucao:'Cozinhe em fogo médio mexendo sempre por 15 a 20 minutos até engrossar e soltar do fundo.',timer_segundos:1080},
      {passo:4,instrucao:'Retire o cravo. Sirva morno ou gelado.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Banana muito madura (com manchas pretas) é ideal — mais doce e mais macia. Banana verde resulta em doce ácido e menos cremoso.',
      substituicoes:'Para banana caramelizada (versão mais rápida), frite em manteiga e açúcar por 3 minutos.',
      adequado_crianca:'Favorito das crianças. Pode servir com sorvete de creme.',
      harmonizacao:'Sorvete, creme de leite, queijo branco ou biscoito.',
      aviso:null
    },
    armazenamento:{geladeira:'até 5 dias',freezer:'até 2 meses',observacoes:null},
    nutricao:{calorias:160,proteina:1,carboidrato:36,gordura:3,fibra:2}
  },

  {
    id:'do008', emoji:'🍊', grupo:'doce',
    nome:'Bolo de Laranja Simples',
    tipo:'doce', cozinha:'Brasileira',
    tempo_preparo:55, porcoes:10, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['laranja','úmido','fácil'],
    ingredientes:[
      {item:'ovo',quantidade:'3 unidades',opcional:false},
      {item:'açúcar',quantidade:'1,5 xícara',opcional:false},
      {item:'suco de laranja',quantidade:'1 xícara',opcional:false},
      {item:'raspas de laranja',quantidade:'1 colher de sopa',opcional:false},
      {item:'óleo',quantidade:'1/2 xícara',opcional:false},
      {item:'farinha de trigo',quantidade:'2 xícaras',opcional:false},
      {item:'fermento',quantidade:'1 colher de sopa',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Bata ovos, açúcar e óleo até clarear.',timer_segundos:null},
      {passo:2,instrucao:'Adicione o suco de laranja e as raspas. Misture.',timer_segundos:null},
      {passo:3,instrucao:'Incorpore a farinha peneirada e o fermento delicadamente.',timer_segundos:null},
      {passo:4,instrucao:'Despeje em fôrma untada e asse a 180°C por 35 a 40 minutos.',timer_segundos:2280}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'As raspas da casca da laranja são o segredo do sabor intenso — não pule esta etapa. Lave bem a laranja antes de ralar.',
      substituicoes:'Limão ou tangerina funcionam igualmente bem.',
      adequado_crianca:'Um dos bolos mais práticos e gostosos. As crianças adoram.',
      harmonizacao:'Café, chá ou calda de laranja por cima.',
      aviso:null
    },
    armazenamento:{geladeira:'até 5 dias',freezer:'até 3 meses',observacoes:null},
    nutricao:{calorias:290,proteina:5,carboidrato:48,gordura:9,fibra:1}
  },

  {
    id:'do009', emoji:'🍬', grupo:'doce',
    nome:'Paçoca de Amendoim',
    tipo:'doce', cozinha:'Brasileira',
    tempo_preparo:15, porcoes:20, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['junino','amendoim','rápido'],
    ingredientes:[
      {item:'amendoim torrado sem casca',quantidade:'2 xícaras',opcional:false},
      {item:'açúcar',quantidade:'1/2 xícara',opcional:false},
      {item:'sal',quantidade:'1/2 colher de chá',opcional:false},
      {item:'farinha de mandioca',quantidade:'2 colheres de sopa',opcional:true}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Processe o amendoim no processador até virar uma pasta grossa.',timer_segundos:null},
      {passo:2,instrucao:'Adicione o açúcar e o sal. Processe mais um pouco — deve virar uma farofa úmida que pressiona e molda.',timer_segundos:null},
      {passo:3,instrucao:'Adicione farinha de mandioca se precisar secar mais.',timer_segundos:null},
      {passo:4,instrucao:'Molde nas forminhas de paçoca, pressionando bem. Desenforme e sirva.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Amendoim torrado de feirinha tem muito mais sabor que o embalado.',
      substituicoes:null,
      adequado_crianca:'Atenção: alergia a amendoim é comum em crianças. Confirme antes de servir.',
      harmonizacao:'Festa junina, São João.',
      aviso:'Alergia a amendoim pode ser grave. Sempre verifique com os pais antes de servir a crianças.'
    },
    armazenamento:{geladeira:'até 30 dias',freezer:'até 6 meses',observacoes:null},
    nutricao:{calorias:140,proteina:5,carboidrato:14,gordura:8,fibra:2}
  },

  {
    id:'do010', emoji:'🍰', grupo:'doce',
    nome:'Quindim',
    tipo:'doce', cozinha:'Brasileira',
    tempo_preparo:60, porcoes:12, dificuldade:'médio',
    adequado_crianca:true, vegetariano:true,
    tags:['coco','amarelo','festas'],
    ingredientes:[
      {item:'gema de ovo',quantidade:'12 unidades',opcional:false},
      {item:'açúcar',quantidade:'1,5 xícara',opcional:false},
      {item:'coco ralado fino',quantidade:'100g',opcional:false},
      {item:'manteiga',quantidade:'1 colher de sopa',opcional:false},
      {item:'água',quantidade:'1/2 xícara',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Faça a calda: derreta o açúcar com a água até dissolver. Não deixe caramelizar.',timer_segundos:null},
      {passo:2,instrucao:'Bata as gemas com a calda fria. Adicione o coco e a manteiga.',timer_segundos:null},
      {passo:3,instrucao:'Coe levemente. Despeje em forminhas untadas.',timer_segundos:null},
      {passo:4,instrucao:'Asse em banho-maria a 160°C por 30 a 35 minutos. Desenform somente frio.',timer_segundos:2000}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Use somente gemas frescas — a cor amarela intensa do quindim vem das gemas de qualidade.',
      substituicoes:null,
      adequado_crianca:'Ótimo — doce, suave e com textura única.',
      harmonizacao:'Sobremesa de festa. Servidor frio.',
      aviso:'Não asse em temperatura alta — talha e perde a textura característica.'
    },
    armazenamento:{geladeira:'até 5 dias',freezer:'até 2 meses',observacoes:null},
    nutricao:{calorias:180,proteina:4,carboidrato:24,gordura:8,fibra:1}
  },

  // ════════════════════════════
  // CAFÉ DA MANHÃ E LANCHES DOCES
  // ════════════════════════════
  {
    id:'cf001', emoji:'🥞', grupo:'cafe',
    nome:'Panqueca de Aveia com Banana',
    tipo:'cafe', cozinha:'Brasileira',
    tempo_preparo:15, porcoes:2, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['saudável','banana','café da manhã'],
    ingredientes:[
      {item:'banana madura',quantidade:'1 unidade',opcional:false},
      {item:'ovo',quantidade:'2 unidades',opcional:false},
      {item:'aveia em flocos',quantidade:'3 colheres de sopa',opcional:false},
      {item:'canela',quantidade:'a gosto',opcional:false},
      {item:'mel para servir',quantidade:'a gosto',opcional:true}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Amasse a banana com um garfo. Misture com os ovos batidos e a aveia.',timer_segundos:null},
      {passo:2,instrucao:'Em frigideira antiaderente untada com óleo de coco em fogo baixo-médio, coloque colheradas de massa.',timer_segundos:null},
      {passo:3,instrucao:'Cozinhe por 2 a 3 minutos até formarem bolhas. Vire e cozinhe mais 1 minuto.',timer_segundos:240},
      {passo:4,instrucao:'Sirva com mel, frutas ou iogurte.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Banana muito madura (quase preta) é a ideal — mais doce naturalmente, reduz a necessidade de açúcar.',
      substituicoes:'Adicione whey protein ou pasta de amendoim para versão mais proteica.',
      adequado_crianca:'Excelente café da manhã para crianças — sem açúcar adicionado, nutritivo e gostoso.',
      harmonizacao:'Frutas frescas, iogurte grego, mel ou geleia.',
      aviso:null
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'até 1 mês',observacoes:'Aqueça no micro-ondas por 30 segundos.'},
    nutricao:{calorias:200,proteina:10,carboidrato:28,gordura:6,fibra:4}
  },

  {
    id:'cf002', emoji:'🥛', grupo:'cafe',
    nome:'Vitamina de Banana e Aveia',
    tipo:'cafe', cozinha:'Brasileira',
    tempo_preparo:5, porcoes:2, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['rápido','nutritivo','café da manhã'],
    ingredientes:[
      {item:'banana',quantidade:'2 unidades',opcional:false},
      {item:'leite',quantidade:'400ml',opcional:false},
      {item:'aveia',quantidade:'2 colheres de sopa',opcional:false},
      {item:'mel',quantidade:'1 colher de sopa',opcional:true},
      {item:'canela',quantidade:'a gosto',opcional:true}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Bata todos os ingredientes no liquidificador por 1 minuto.',timer_segundos:60},
      {passo:2,instrucao:'Sirva imediatamente com pedaço de gelo se preferir gelada.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Banana congelada em pedaços dá uma vitamina mais cremosa e naturalmente gelada — sem precisar de gelo.',
      substituicoes:'Leite de aveia ou amêndoa para versão vegana. Adicione pasta de amendoim para mais proteína.',
      adequado_crianca:'Ótimo café da manhã — nutritivo e gostoso.',
      harmonizacao:'Pão integral ou fruta ao lado.',
      aviso:null
    },
    armazenamento:{geladeira:'até 1 dia',freezer:'não recomendado',observacoes:'Bata sempre fresco para melhor textura.'},
    nutricao:{calorias:200,proteina:7,carboidrato:36,gordura:3,fibra:3}
  },

  {
    id:'cf003', emoji:'🍞', grupo:'cafe',
    nome:'Bolo de Baunilha Simples',
    tipo:'doce', cozinha:'Brasileira',
    tempo_preparo:55, porcoes:10, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['base','festas','versátil'],
    ingredientes:[
      {item:'ovo',quantidade:'3 unidades',opcional:false},
      {item:'açúcar',quantidade:'1,5 xícara',opcional:false},
      {item:'manteiga',quantidade:'100g',opcional:false},
      {item:'leite',quantidade:'1 xícara',opcional:false},
      {item:'farinha de trigo',quantidade:'2,5 xícaras',opcional:false},
      {item:'fermento',quantidade:'1 colher de sopa',opcional:false},
      {item:'essência de baunilha',quantidade:'1 colher de chá',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Bata a manteiga com o açúcar até virar creme claro. Adicione os ovos um a um.',timer_segundos:null},
      {passo:2,instrucao:'Adicione alternando: um pouco de leite, um pouco de farinha, até incorporar tudo.',timer_segundos:null},
      {passo:3,instrucao:'Adicione a baunilha e o fermento. Misture delicadamente.',timer_segundos:null},
      {passo:4,instrucao:'Despeje em fôrma untada. Asse a 180°C por 35 a 40 minutos.',timer_segundos:2280}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Manteiga em temperatura ambiente (não derretida nem gelada) cria a emulsão perfeita para bolo fofo.',
      substituicoes:'Base para qualquer variação — chocolate, limão, nozes, frutas.',
      adequado_crianca:'O bolo mais versátil — serve como base para qualquer cobertura.',
      harmonizacao:'Cobertura de brigadeiro, ganache, chantilly ou apenas açúcar de confeiteiro.',
      aviso:'Não abra o forno antes de 30 minutos.'
    },
    armazenamento:{geladeira:'até 5 dias',freezer:'até 3 meses',observacoes:null},
    nutricao:{calorias:300,proteina:5,carboidrato:46,gordura:10,fibra:1}
  },

  {
    id:'cf004', emoji:'🫐', grupo:'cafe',
    nome:'Açaí Bowl Completo',
    tipo:'cafe', cozinha:'Brasileira',
    tempo_preparo:10, porcoes:2, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['açaí','frutas','nutritivo'],
    ingredientes:[
      {item:'açaí congelado',quantidade:'400g',opcional:false},
      {item:'banana',quantidade:'1 unidade',opcional:false},
      {item:'granola',quantidade:'4 colheres de sopa',opcional:false},
      {item:'frutas frescas (morango, kiwi, banana)',quantidade:'a gosto',opcional:false},
      {item:'mel',quantidade:'a gosto',opcional:true},
      {item:'leite ou suco de guaraná',quantidade:'um pouco',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Bata o açaí congelado com a banana e um pouco de leite até ficar um creme espesso. Não coloque muito líquido.',timer_segundos:null},
      {passo:2,instrucao:'Despeje na tigela.',timer_segundos:null},
      {passo:3,instrucao:'Cubra com granola, frutas fatiadas e mel.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Açaí sem adição de xarope de guaraná é mais saudável — adicione a doçura que quiser com mel ou fruta.',
      substituicoes:'Vitamina de pitaya ou amora segue o mesmo processo.',
      adequado_crianca:'Ótimo café da manhã — nutritivo e colorido.',
      harmonizacao:'Café ou suco natural ao lado.',
      aviso:null
    },
    armazenamento:{geladeira:'até 1 dia',freezer:'não recomendado (muda a textura)',observacoes:null},
    nutricao:{calorias:280,proteina:5,carboidrato:46,gordura:9,fibra:6}
  },

  {
    id:'cf005', emoji:'☕', grupo:'cafe',
    nome:'Bolo de Caneca (Microondas)',
    tipo:'doce', cozinha:'Brasileira',
    tempo_preparo:5, porcoes:1, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['rápido','microondas','individual'],
    ingredientes:[
      {item:'farinha de trigo',quantidade:'3 colheres de sopa',opcional:false},
      {item:'açúcar',quantidade:'3 colheres de sopa',opcional:false},
      {item:'cacau em pó',quantidade:'2 colheres de sopa',opcional:false},
      {item:'ovo',quantidade:'1 unidade',opcional:false},
      {item:'leite',quantidade:'3 colheres de sopa',opcional:false},
      {item:'óleo',quantidade:'3 colheres de sopa',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Misture todos os ingredientes diretamente na caneca grande.',timer_segundos:null},
      {passo:2,instrucao:'Leve ao microondas por 1 minuto e 30 segundos na potência máxima.',timer_segundos:90},
      {passo:3,instrucao:'Verifique — se ainda estiver cru no centro, coloque por mais 20 segundos. Sirva direto na caneca.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Use caneca grande de pelo menos 350ml para não transbordar.',
      substituicoes:'Sem cacau para versão baunilha. Adicione pedacinhos de chocolate para bolo recheado.',
      adequado_crianca:'Prático e rápido — ótimo para saciar aquela vontade de doce.',
      harmonizacao:'Sorvete de creme por cima enquanto quente.',
      aviso:'Cada microondas tem potência diferente — ajuste o tempo conforme o seu.'
    },
    armazenamento:{geladeira:'não recomendado',freezer:'não recomendado',observacoes:'Faça e consuma imediatamente.'},
    nutricao:{calorias:380,proteina:7,carboidrato:46,gordura:18,fibra:2}
  },

  {
    id:'cf006', emoji:'🍓', grupo:'cafe',
    nome:'Iogurte Grego com Granola e Mel',
    tipo:'cafe', cozinha:'Brasileira',
    tempo_preparo:5, porcoes:1, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['saudável','proteína','café da manhã'],
    ingredientes:[
      {item:'iogurte grego natural',quantidade:'170g',opcional:false},
      {item:'granola',quantidade:'3 colheres de sopa',opcional:false},
      {item:'mel',quantidade:'1 colher de sopa',opcional:false},
      {item:'frutas frescas',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Coloque o iogurte na tigela.',timer_segundos:null},
      {passo:2,instrucao:'Adicione a granola, as frutas e regue com mel.',timer_segundos:null},
      {passo:3,instrucao:'Consuma imediatamente — a granola perde a crocância se deixar.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Iogurte grego integral tem muito mais proteína e cremosidade que o desnatado. Vale a diferença.',
      substituicoes:'Creme de amendoim no lugar do mel para versão mais proteica.',
      adequado_crianca:'Excelente café da manhã rápido e nutritivo.',
      harmonizacao:'Pão integral ou fruta ao lado.',
      aviso:null
    },
    armazenamento:{geladeira:'montado até 1 hora',freezer:'não recomendado',observacoes:null},
    nutricao:{calorias:280,proteina:16,carboidrato:38,gordura:8,fibra:3}
  },

  {
    id:'cf007', emoji:'🧁', grupo:'cafe',
    nome:'Bolinho de Chuva',
    tipo:'doce', cozinha:'Brasileira',
    tempo_preparo:20, porcoes:20, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['frito','chuva','saudade'],
    ingredientes:[
      {item:'farinha de trigo',quantidade:'2 xícaras',opcional:false},
      {item:'açúcar',quantidade:'1/2 xícara',opcional:false},
      {item:'ovo',quantidade:'2 unidades',opcional:false},
      {item:'leite',quantidade:'1 xícara',opcional:false},
      {item:'fermento',quantidade:'1 colher de sopa',opcional:false},
      {item:'sal',quantidade:'pitada',opcional:false},
      {item:'óleo para fritar',quantidade:'suficiente',opcional:false},
      {item:'açúcar e canela para polvilhar',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Misture todos os ingredientes secos. Adicione ovos e leite até massa homogênea.',timer_segundos:null},
      {passo:2,instrucao:'A massa deve ficar grossa mas cair da colher.',timer_segundos:null},
      {passo:3,instrucao:'Com duas colheres, molde bolinhas e frite em óleo a 170°C até dourar — cerca de 3 a 4 minutos.',timer_segundos:240},
      {passo:4,instrucao:'Escorra e polvilhe açúcar com canela ainda quente.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'O truque das duas colheres: use uma para pegar a massa e a outra para raspar e soltar no óleo — forma uma bolinha perfeita.',
      substituicoes:'Pode adicionar banana amassada à massa para versão de banana.',
      adequado_crianca:'Clássico da infância brasileira. As crianças adoram fazer e comer.',
      harmonizacao:'Café com leite quente.',
      aviso:null
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'não recomendado',observacoes:'Reaqueça no forno ou airfryer para recuperar a crocância.'},
    nutricao:{calorias:120,proteina:2,carboidrato:16,gordura:5,fibra:0}
  },

  {
    id:'cf008', emoji:'🍞', grupo:'cafe',
    nome:'Banana Caramelizada na Frigideira',
    tipo:'doce', cozinha:'Brasileira',
    tempo_preparo:8, porcoes:2, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['rápido','banana','sobremesa'],
    ingredientes:[
      {item:'banana',quantidade:'2 unidades',opcional:false},
      {item:'manteiga',quantidade:'1 colher de sopa',opcional:false},
      {item:'açúcar',quantidade:'2 colheres de sopa',opcional:false},
      {item:'canela',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Corte as bananas ao meio no comprimento.',timer_segundos:null},
      {passo:2,instrucao:'Derreta a manteiga com o açúcar em fogo médio até começar a caramelizar.',timer_segundos:null},
      {passo:3,instrucao:'Coloque as bananas e cozinhe por 2 minutos de cada lado até dourar.',timer_segundos:240},
      {passo:4,instrucao:'Polvilhe canela e sirva com sorvete, iogurte ou sobre a tapioca.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Banana nanica ou prata em ponto certo — nem muito verde nem muito mole. Mole demais desmanchará na frigideira.',
      substituicoes:null,
      adequado_crianca:'Favorito das crianças. Simples e irresistível.',
      harmonizacao:'Sorvete de creme, iogurte ou sobre tapioca.',
      aviso:null
    },
    armazenamento:{geladeira:'não recomendado',freezer:'não recomendado',observacoes:'Prepare e sirva imediatamente.'},
    nutricao:{calorias:160,proteina:1,carboidrato:30,gordura:5,fibra:2}
  }

]; // fim RECEITAS_3
