'use strict';

// ═══════════════════════════════════════════════════════
// VOVÓ RECEITAS — data-receitas-2.js
// Carne Bovina (15) + Peixe (10) + Massas (12) = 37 receitas
// ═══════════════════════════════════════════════════════

const RECEITAS_2 = [

  // ════════════════════════════
  // CARNE BOVINA
  // ════════════════════════════
  {
    id:'cb001', emoji:'🥩', grupo:'carne',
    nome:'Bife Acebolado',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:20, porcoes:2, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['rápido','dia a dia','chapa'],
    ingredientes:[
      {item:'contrafilé ou alcatra',quantidade:'2 bifes (200g cada)',opcional:false},
      {item:'cebola',quantidade:'2 unidades grandes',opcional:false},
      {item:'manteiga',quantidade:'2 colheres de sopa',opcional:false},
      {item:'alho',quantidade:'2 dentes',opcional:false},
      {item:'sal e pimenta-do-reino',quantidade:'a gosto',opcional:false},
      {item:'cheiro-verde',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Retire os bifes da geladeira 15 minutos antes — carne gelada na chapa fica dura por fora e crua por dentro.',timer_segundos:900},
      {passo:2,instrucao:'Tempere com sal e pimenta só na hora de fritar. Sal aplicado cedo puxa a umidade e resseca a carne.',timer_segundos:null},
      {passo:3,instrucao:'Aqueça a frigideira no fogo alto até fumegar levemente. Adicione a manteiga e coloque os bifes. Não mexa — deixe dourar 2 a 3 minutos de cada lado.',timer_segundos:300},
      {passo:4,instrucao:'Retire os bifes e reserve. Na mesma frigideira, refogue a cebola em rodelas e o alho na gordura que sobrou até caramelizar.',timer_segundos:null},
      {passo:5,instrucao:'Volte os bifes por 1 minuto, cubra com a cebola e finalize com cheiro-verde.',timer_segundos:60}
    ],
    conhecimento:{
      corte_ideal:'Contrafilé é o mais popular pelo marmoreio de gordura que dá sabor e maciez. Alcatra é mais magra e igualmente saborosa. Patinho batido com martelo funciona bem para quem busca economia. Evite coxão mole para chapa — fica duro.',
      dica_compra:'Peça ao açougueiro corte de 2cm de espessura. Carne deve ter cor vermelha viva. Carne escura foi exposta ao ar por muito tempo.',
      substituicoes:null,
      adequado_crianca:'Sim — excelente fonte de ferro e proteína. Para crianças, prefira o ponto bem passado.',
      harmonizacao:'Arroz branco, feijão, farofa, purê de batata ou macarrão.',
      aviso:'Frigideira quente é fundamental. Em frigideira fria a carne cozinha no vapor e fica dura.'
    },
    armazenamento:{geladeira:'até 3 dias',freezer:'até 3 meses (cru)',observacoes:null},
    nutricao:{calorias:380,proteina:42,carboidrato:8,gordura:20,fibra:1}
  },

  {
    id:'cb002', emoji:'🍖', grupo:'carne',
    nome:'Picadinho de Carne com Legumes',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:40, porcoes:4, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['dia a dia','versátil','cubos'],
    ingredientes:[
      {item:'patinho ou coxão mole em cubos',quantidade:'600g',opcional:false},
      {item:'tomate',quantidade:'3 unidades',opcional:false},
      {item:'cebola',quantidade:'2 unidades',opcional:false},
      {item:'alho',quantidade:'4 dentes',opcional:false},
      {item:'pimentão',quantidade:'1/2 unidade',opcional:true},
      {item:'extrato de tomate',quantidade:'1 colher de sopa',opcional:false},
      {item:'azeite',quantidade:'2 colheres de sopa',opcional:false},
      {item:'sal, pimenta, açafrão, cheiro-verde',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Seque bem os cubos de carne com papel toalha. Tempere com sal, pimenta e açafrão.',timer_segundos:null},
      {passo:2,instrucao:'Em fogo alto, doure a carne em partes — nunca coloque tudo de uma vez. Carne empilhada cozinha no vapor em vez de dourar.',timer_segundos:null},
      {passo:3,instrucao:'Reserve a carne. No mesmo azeite, refogue cebola e alho. Adicione tomate, pimentão e extrato. Cozinhe 5 minutos.',timer_segundos:300},
      {passo:4,instrucao:'Volte a carne, adicione 1/2 xícara de água quente e cozinhe tampado em fogo médio por 20 minutos até amolecer.',timer_segundos:1200},
      {passo:5,instrucao:'Abra, deixe o molho reduzir. Ajuste sal e finalize com cheiro-verde.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:'Patinho é o ideal — macio, limpo, sem excessos de gordura. Coxão mole também funciona. Evite acém em cubos pequenos — é fibroso. Acém fica melhor em cozimentos longos de mais de 1 hora.',
      dica_compra:'Peça ao açougueiro cubos de 3cm — uniformidade garante cozimento igual.',
      substituicoes:'Carne moída grossa pode substituir. Fica diferente mas igualmente gostoso.',
      adequado_crianca:'Ótimo — carne macia, molho suave, fácil de mastigar.',
      harmonizacao:'Arroz, feijão, purê de batata, macarrão ou polenta.',
      aviso:null
    },
    armazenamento:{geladeira:'até 4 dias',freezer:'até 3 meses',observacoes:null},
    nutricao:{calorias:340,proteina:38,carboidrato:10,gordura:16,fibra:2}
  },

  {
    id:'cb003', emoji:'🍳', grupo:'carne',
    nome:'Carne Moída Refogada',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:25, porcoes:4, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['rápido','versátil','básico'],
    ingredientes:[
      {item:'carne moída',quantidade:'500g',opcional:false},
      {item:'cebola',quantidade:'1 unidade',opcional:false},
      {item:'alho',quantidade:'3 dentes',opcional:false},
      {item:'tomate',quantidade:'2 unidades',opcional:false},
      {item:'extrato de tomate',quantidade:'1 colher de sopa',opcional:false},
      {item:'óleo',quantidade:'1 colher de sopa',opcional:false},
      {item:'sal, pimenta, cheiro-verde',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Refogue cebola e alho no óleo até dourar.',timer_segundos:null},
      {passo:2,instrucao:'Adicione a carne moída e cozinhe em fogo alto mexendo sempre para desfazer os grumos. Cozinhe até secar a água que a carne solta.',timer_segundos:null},
      {passo:3,instrucao:'Adicione tomate picado e extrato. Refogue por 5 minutos.',timer_segundos:300},
      {passo:4,instrucao:'Ajuste o sal e finalize com cheiro-verde.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:'Patinho é a melhor escolha — menos gordura, sabor limpo. Coxão mole também fica bem. Peça moagem grossa para melhor textura. Acém moído tem mais gordura — bom para molhos encorpados.',
      dica_compra:'Peça para moer na hora. Carne moída embalada perde frescor rapidamente. Cor vermelha viva — nunca acinzentada.',
      substituicoes:null,
      adequado_crianca:'Versátil e fácil de mastigar. Ótima para crianças aprendendo a comer carne.',
      harmonizacao:'Use em escondidinho, empadão, torta, panqueca, lasanha ou com arroz e feijão.',
      aviso:'Carne moída crua dura apenas 24h na geladeira. Cozinhe logo após comprar.'
    },
    armazenamento:{geladeira:'até 3 dias',freezer:'até 3 meses',observacoes:null},
    nutricao:{calorias:290,proteina:28,carboidrato:6,gordura:18,fibra:1}
  },

  {
    id:'cb004', emoji:'🍲', grupo:'carne',
    nome:'Carne de Panela com Mandioca',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:90, porcoes:6, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['domingo','panela','mandioca'],
    ingredientes:[
      {item:'acém em pedaços grandes',quantidade:'1kg',opcional:false},
      {item:'mandioca',quantidade:'500g',opcional:false},
      {item:'cebola',quantidade:'2 unidades',opcional:false},
      {item:'alho',quantidade:'5 dentes',opcional:false},
      {item:'tomate',quantidade:'3 unidades',opcional:false},
      {item:'louro, sal e pimenta',quantidade:'a gosto',opcional:false},
      {item:'cheiro-verde',quantidade:'generoso',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Doure bem os pedaços de carne no óleo quente. Reserve.',timer_segundos:null},
      {passo:2,instrucao:'Refogue cebola, alho e tomate. Volte a carne, adicione louro e água para cobrir.',timer_segundos:null},
      {passo:3,instrucao:'Cozinhe na pressão por 40 minutos.',timer_segundos:2400},
      {passo:4,instrucao:'Adicione a mandioca em pedaços e cozinhe por mais 15 minutos na pressão.',timer_segundos:900},
      {passo:5,instrucao:'Ajuste o caldo e sal. Finalize com cheiro-verde.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:'Acém é perfeito para cozimento longo — tem colágeno que se dissolve criando caldo gelatinoso e rico. Músculo é igualmente excelente. Evite filé mignon — seca no cozimento longo.',
      dica_compra:'Acém com osso dá caldo ainda mais saboroso. Peça pedaços grandes de 5 a 7cm.',
      substituicoes:'Mandioca pode ser substituída por batata ou cará.',
      adequado_crianca:'Ótimo — carne desmanchando, mandioca macia, fácil de mastigar.',
      harmonizacao:'Arroz branco. O caldo rico dispensa feijão.',
      aviso:null
    },
    armazenamento:{geladeira:'até 4 dias',freezer:'até 3 meses (sem mandioca)',observacoes:'A mandioca amolece demais ao congelar — adicione fresca ao reaquecer.'},
    nutricao:{calorias:420,proteina:36,carboidrato:32,gordura:18,fibra:3}
  },

  {
    id:'cb005', emoji:'🥩', grupo:'carne',
    nome:'Bife à Parmegiana',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:40, porcoes:4, dificuldade:'médio',
    adequado_crianca:true, vegetariano:false,
    tags:['clássico','queijo','molho'],
    ingredientes:[
      {item:'patinho (bifes finos)',quantidade:'4 unidades (180g cada)',opcional:false},
      {item:'molho de tomate',quantidade:'2 xícaras',opcional:false},
      {item:'queijo muçarela',quantidade:'200g',opcional:false},
      {item:'ovo',quantidade:'2 unidades',opcional:false},
      {item:'farinha de rosca',quantidade:'1 xícara',opcional:false},
      {item:'farinha de trigo',quantidade:'1/2 xícara',opcional:false},
      {item:'queijo parmesão ralado',quantidade:'50g',opcional:false},
      {item:'sal, pimenta, alho',quantidade:'a gosto',opcional:false},
      {item:'óleo para fritar',quantidade:'suficiente',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Bata os bifes entre plásticos até 1cm de espessura. Tempere com sal, pimenta e alho amassado.',timer_segundos:null},
      {passo:2,instrucao:'Empane: farinha de trigo → ovo batido → farinha de rosca. Aperte bem. Frite em óleo quente até dourar.',timer_segundos:null},
      {passo:3,instrucao:'Disponha os bifes em refratário. Cubra generosamente com molho de tomate quente.',timer_segundos:null},
      {passo:4,instrucao:'Coloque fatias de muçarela e parmesão. Asse a 200°C por 10 a 15 minutos para derreter o queijo.',timer_segundos:780}
    ],
    conhecimento:{
      corte_ideal:'Patinho batido é o clássico — macio após bater, mais barato que contrafilé. O bife deve ser fino para cozinhar bem no empanamento.',
      dica_compra:'Peça ao açougueiro para bater os bifes se não tiver martelo.',
      substituicoes:'Pode fazer com frango, berinjela (vegetariana) ou queijo coalho.',
      adequado_crianca:'Um dos pratos favoritos das crianças. O queijo derretido conquista todos.',
      harmonizacao:'Arroz branco, batata frita e salada.',
      aviso:null
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'não recomendado (perde crocância)',observacoes:'Reaqueça no forno.'},
    nutricao:{calorias:520,proteina:44,carboidrato:28,gordura:26,fibra:2}
  },

  {
    id:'cb006', emoji:'🍝', grupo:'carne',
    nome:'Almôndega ao Molho de Tomate',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:45, porcoes:5, dificuldade:'médio',
    adequado_crianca:true, vegetariano:false,
    tags:['molho','criança','massa'],
    ingredientes:[
      {item:'carne moída',quantidade:'600g',opcional:false},
      {item:'pão de fôrma',quantidade:'2 fatias',opcional:false},
      {item:'leite',quantidade:'1/4 xícara',opcional:false},
      {item:'ovo',quantidade:'1 unidade',opcional:false},
      {item:'alho',quantidade:'3 dentes',opcional:false},
      {item:'molho de tomate',quantidade:'2 xícaras',opcional:false},
      {item:'sal, pimenta, noz-moscada, cheiro-verde',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Molhe o pão no leite, esprema e misture com a carne, ovo, alho amassado, sal, pimenta e noz-moscada.',timer_segundos:null},
      {passo:2,instrucao:'Modele bolinhas com as mãos úmidas. O pão molhado é o segredo para ficarem macias.',timer_segundos:null},
      {passo:3,instrucao:'Sele as almôndegas no azeite quente girando a panela para dourar por igual.',timer_segundos:null},
      {passo:4,instrucao:'Adicione o molho de tomate, tampe e cozinhe em fogo baixo por 20 minutos.',timer_segundos:1200},
      {passo:5,instrucao:'Finalize com cheiro-verde e sirva sobre macarrão.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:'Mistura de patinho e acém moídos — o acém adiciona gordura e sabor, o patinho dá textura. 100% patinho fica seco.',
      dica_compra:null,
      substituicoes:'Pode assar no forno a 180°C por 20 minutos em vez de fritar.',
      adequado_crianca:'Um dos pratos preferidos. As almôndegas são divertidas e fáceis de comer.',
      harmonizacao:'Macarrão, arroz ou pão italiano.',
      aviso:null
    },
    armazenamento:{geladeira:'até 4 dias',freezer:'até 3 meses (crua ou cozida)',observacoes:'Congele cruas separadas em bandeja, depois transfira para saco.'},
    nutricao:{calorias:360,proteina:30,carboidrato:18,gordura:20,fibra:2}
  },

  {
    id:'cb007', emoji:'🥘', grupo:'carne',
    nome:'Estrogonofe de Carne',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:35, porcoes:4, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['cremoso','festa','rápido'],
    ingredientes:[
      {item:'filé mignon ou alcatra em tiras',quantidade:'600g',opcional:false},
      {item:'creme de leite',quantidade:'200g',opcional:false},
      {item:'ketchup',quantidade:'3 colheres de sopa',opcional:false},
      {item:'mostarda',quantidade:'1 colher de sopa',opcional:false},
      {item:'champignon',quantidade:'1 lata',opcional:true},
      {item:'cebola e manteiga',quantidade:'a gosto',opcional:false},
      {item:'sal e pimenta',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Corte a carne em tiras finas contra a fibra. Tempere com sal e pimenta.',timer_segundos:null},
      {passo:2,instrucao:'Em fogo alto, doure a carne rapidamente em partes. A carne deve selar sem soltar líquido.',timer_segundos:null},
      {passo:3,instrucao:'Refogue cebola na manteiga. Adicione champignon, ketchup e mostarda.',timer_segundos:null},
      {passo:4,instrucao:'Junte a carne, reduza o fogo ao mínimo e adicione o creme de leite. Não deixe ferver — coalha.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:'Filé mignon é o clássico premium. Alcatra é mais econômica com resultado ótimo. Patinho funciona cortado bem fininho. Evite acém e músculo — ficam duros em cozimento rápido.',
      dica_compra:'Corte sempre contra as fibras — tiras mais macias. Observe as fibras e corte perpendicular a elas.',
      substituicoes:null,
      adequado_crianca:'Ótimo. Omita a mostarda para paladar mais delicado.',
      harmonizacao:'Arroz branco e batatinha palha — a dupla obrigatória.',
      aviso:'O creme de leite nunca deve ferver após adicionado — coalha e estraga a textura.'
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'não recomendado',observacoes:null},
    nutricao:{calorias:450,proteina:38,carboidrato:12,gordura:28,fibra:1}
  },

  {
    id:'cb008', emoji:'🍖', grupo:'carne',
    nome:'Costela Assada no Forno',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:240, porcoes:6, dificuldade:'médio',
    adequado_crianca:true, vegetariano:false,
    tags:['domingo','lento','suculento'],
    ingredientes:[
      {item:'costela bovina',quantidade:'2kg',opcional:false},
      {item:'alho',quantidade:'8 dentes',opcional:false},
      {item:'sal grosso',quantidade:'2 colheres de sopa',opcional:false},
      {item:'pimenta-do-reino',quantidade:'1 colher de chá',opcional:false},
      {item:'alecrim',quantidade:'2 ramos',opcional:false},
      {item:'azeite',quantidade:'4 colheres de sopa',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Faça cortes fundos na costela e esfregue alho amassado com sal, pimenta e azeite. Marine por pelo menos 2 horas ou de véspera.',timer_segundos:null},
      {passo:2,instrucao:'Preaqueça o forno a 150°C. Coloque na assadeira, cubra com papel alumínio selando bem as bordas.',timer_segundos:null},
      {passo:3,instrucao:'Asse em fogo baixo (150°C) por 3 horas — o cozimento lento derrete o colágeno.',timer_segundos:10800},
      {passo:4,instrucao:'Retire o alumínio, aumente para 220°C e doure por 20 a 30 minutos até a gordura ficar crocante.',timer_segundos:1500}
    ],
    conhecimento:{
      corte_ideal:'Costela do dianteiro (costela de ripa) é a mais saborosa — mais gordura entremeada. A traseira também fica excelente. Costela sem osso perde muito do sabor.',
      dica_compra:'Compre com osso e boa camada de gordura — é ela que faz a carne se desfazer no garfo.',
      substituicoes:null,
      adequado_crianca:'Sim após cozimento longo — carne tão macia que se desfaz.',
      harmonizacao:'Farofa, arroz branco, vinagrete, mandioca assada.',
      aviso:'Não tente acelerar — costela em forno alto fica dura. Paciência é o ingrediente principal.'
    },
    armazenamento:{geladeira:'até 4 dias',freezer:'até 3 meses',observacoes:null},
    nutricao:{calorias:520,proteina:48,carboidrato:2,gordura:36,fibra:0}
  },

  {
    id:'cb009', emoji:'🥩', grupo:'carne',
    nome:'Escondidinho de Carne Seca',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:60, porcoes:6, dificuldade:'médio',
    adequado_crianca:true, vegetariano:false,
    tags:['forno','purê','nordestino'],
    ingredientes:[
      {item:'carne seca dessalgada e desfiada',quantidade:'400g',opcional:false},
      {item:'mandioca cozida',quantidade:'800g',opcional:false},
      {item:'manteiga',quantidade:'3 colheres de sopa',opcional:false},
      {item:'creme de leite',quantidade:'100ml',opcional:false},
      {item:'queijo muçarela',quantidade:'150g',opcional:false},
      {item:'cebola, alho, tomate',quantidade:'a gosto',opcional:false},
      {item:'queijo parmesão para gratinar',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Refogue a carne seca desfiada com cebola, alho e tomate. Reserve.',timer_segundos:null},
      {passo:2,instrucao:'Passe a mandioca cozida no espremedor quente. Misture com manteiga e creme de leite até cremoso. Ajuste o sal.',timer_segundos:null},
      {passo:3,instrucao:'Em refratário, coloque metade do purê, a carne seca refogada e finalize com o restante do purê.',timer_segundos:null},
      {passo:4,instrucao:'Cubra com muçarela e parmesão. Asse a 200°C por 20 minutos até gratinar.',timer_segundos:1200}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Carne seca peito é mais magra. De costela tem mais sabor. Compre já dessalgada se possível — economiza 24h de preparo.',
      substituicoes:'Mandioca pode ser substituída por batata para purê mais suave.',
      adequado_crianca:'Ótimo após o dessalgue adequado. Cremoso e nutritivo.',
      harmonizacao:'Prato completo. Salada simples ao lado.',
      aviso:'Dessalgue obrigatório: 24h na geladeira trocando a água a cada 8h.'
    },
    armazenamento:{geladeira:'até 3 dias',freezer:'até 2 meses',observacoes:null},
    nutricao:{calorias:490,proteina:34,carboidrato:40,gordura:22,fibra:3}
  },

  {
    id:'cb010', emoji:'🍔', grupo:'carne',
    nome:'Hambúrguer Caseiro',
    tipo:'lanche', cozinha:'Brasileira',
    tempo_preparo:30, porcoes:4, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['lanche','festa','criança'],
    ingredientes:[
      {item:'acém moído',quantidade:'600g',opcional:false},
      {item:'sal, pimenta e alho em pó',quantidade:'a gosto',opcional:false},
      {item:'pão de hambúrguer',quantidade:'4 unidades',opcional:false},
      {item:'queijo',quantidade:'4 fatias',opcional:true},
      {item:'alface, tomate, cebola',quantidade:'a gosto',opcional:true},
      {item:'maionese e mostarda',quantidade:'a gosto',opcional:true}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Tempere a carne com sal, pimenta e alho em pó. Não misture demais — o hambúrguer fica duro.',timer_segundos:null},
      {passo:2,instrucao:'Modele com 2cm de espessura. Faça uma leve depressão no centro com o polegar — evita que inche no meio.',timer_segundos:null},
      {passo:3,instrucao:'Grelhe em frigideira bem quente por 3 a 4 minutos de cada lado. Não pressione com a espátula — perde o suco.',timer_segundos:480},
      {passo:4,instrucao:'Adicione o queijo no último minuto, cubra por 30 segundos para derreter. Monte no pão tostado.',timer_segundos:30}
    ],
    conhecimento:{
      corte_ideal:'Acém moído tem cerca de 20% de gordura — percentual ideal para hambúrguer suculento. Patinho 100% puro fica muito seco. A combinação perfeita dos churrasqueiros: 80% patinho + 20% costela moída.',
      dica_compra:'Peça para moer na hora em moagem grossa. Hambúrguer industrial tem aditivos que mudam a textura.',
      substituicoes:null,
      adequado_crianca:'Favorito absoluto. Para os pequenos, cozinhe bem passado.',
      harmonizacao:'Batata frita, onion rings, coleslaw.',
      aviso:'Não pressione o hambúrguer na chapa — o suco escorre e a carne resseca.'
    },
    armazenamento:{geladeira:'24h (cru)',freezer:'até 3 meses (cru, separados por papel manteiga)',observacoes:null},
    nutricao:{calorias:480,proteina:36,carboidrato:30,gordura:24,fibra:2}
  },

  {
    id:'cb011', emoji:'🍲', grupo:'carne',
    nome:'Músculo Desfiado para Recheios',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:70, porcoes:6, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['versátil','econômico','desfiado'],
    ingredientes:[
      {item:'músculo bovino',quantidade:'800g',opcional:false},
      {item:'cebola',quantidade:'1 unidade',opcional:false},
      {item:'alho',quantidade:'4 dentes',opcional:false},
      {item:'louro, sal e pimenta',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Cozinhe o músculo na pressão com cebola, alho, louro, sal e pimenta por 45 a 50 minutos.',timer_segundos:2700},
      {passo:2,instrucao:'Retire, deixe amornar. Carne fria desfia melhor — pode colocar na geladeira por 15 minutos.',timer_segundos:900},
      {passo:3,instrucao:'Desfie com dois garfos. Dica: use a batedeira em velocidade baixa por 20 segundos para desfiar mais rápido.',timer_segundos:null},
      {passo:4,instrucao:'Tempere ou use como base para outros preparos.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:'Músculo é o corte ideal para desfiar — muito colágeno que vira gelatina no cozimento longo, deixando a carne incrivelmente macia. Econômico e muito saboroso. Acém também desfia muito bem.',
      dica_compra:'Músculo com osso (ossobuco) faz caldo ainda mais rico.',
      substituicoes:null,
      adequado_crianca:'Excelente — sem osso, muito macio. Use em recheios de empadão, macarrão e sanduíche.',
      harmonizacao:'Recheio de torta, empadão, panqueca, tapioca, escondidinho.',
      aviso:null
    },
    armazenamento:{geladeira:'até 5 dias',freezer:'até 3 meses',observacoes:'Congele com um pouco do caldo para não ressecar.'},
    nutricao:{calorias:280,proteina:40,carboidrato:2,gordura:12,fibra:0}
  },

  {
    id:'cb012', emoji:'🍲', grupo:'carne',
    nome:'Rabada ao Molho',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:150, porcoes:6, dificuldade:'médio',
    adequado_crianca:false, vegetariano:false,
    tags:['tradição','lento','carioca'],
    ingredientes:[
      {item:'rabo bovino',quantidade:'1,5kg',opcional:false},
      {item:'agrião',quantidade:'2 maços',opcional:false},
      {item:'cebola',quantidade:'2 unidades',opcional:false},
      {item:'alho',quantidade:'6 dentes',opcional:false},
      {item:'tomate',quantidade:'3 unidades',opcional:false},
      {item:'vinho tinto seco',quantidade:'1 xícara',opcional:false},
      {item:'louro, sal, pimenta',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Branqueie a rabada: ferva por 5 minutos, escorra e lave. Remove impurezas e o cheiro forte.',timer_segundos:300},
      {passo:2,instrucao:'Marine com vinho, alho, sal, pimenta e louro por 2 horas.',timer_segundos:null},
      {passo:3,instrucao:'Doure os pedaços no óleo. Adicione cebola, tomate e o vinho da marinada. Evapore o álcool por 2 minutos.',timer_segundos:120},
      {passo:4,instrucao:'Adicione água para cobrir. Cozinhe na pressão por 50 minutos.',timer_segundos:3000},
      {passo:5,instrucao:'Confira se a carne se desprende do osso. Adicione o agrião e cozinhe por 5 minutos.',timer_segundos:300}
    ],
    conhecimento:{
      corte_ideal:'Peça ao açougueiro para cortar entre as vértebras em pedaços de 5 a 7cm. Rabo mais grosso (da base) tem mais carne. O fino (da ponta) é mais gelatinoso.',
      dica_compra:null,
      substituicoes:'Agrião pode ser substituído por couve ou rúcula — adicione só no final.',
      adequado_crianca:'Não recomendado — prato com ossos que requerem habilidade.',
      harmonizacao:'Polenta cremosa ou arroz branco. O caldo rico é o ouro do prato.',
      aviso:'O branqueio é indispensável para eliminar o odor característico.'
    },
    armazenamento:{geladeira:'até 4 dias',freezer:'até 3 meses',observacoes:'Melhora muito no dia seguinte.'},
    nutricao:{calorias:480,proteina:44,carboidrato:8,gordura:30,fibra:2}
  },

  {
    id:'cb013', emoji:'🥘', grupo:'carne',
    nome:'Caldo de Carne com Legumes',
    tipo:'sopa', cozinha:'Brasileira',
    tempo_preparo:60, porcoes:6, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['sopa','frio','nutritivo'],
    ingredientes:[
      {item:'ossobuco ou músculo',quantidade:'600g',opcional:false},
      {item:'batata',quantidade:'3 unidades',opcional:false},
      {item:'cenoura',quantidade:'2 unidades',opcional:false},
      {item:'chuchu',quantidade:'1 unidade',opcional:false},
      {item:'cebola e alho',quantidade:'a gosto',opcional:false},
      {item:'macarrão ou arroz',quantidade:'a gosto',opcional:true},
      {item:'sal e cheiro-verde',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Cozinhe a carne com cebola, alho e sal na pressão por 40 minutos.',timer_segundos:2400},
      {passo:2,instrucao:'Retire a carne, desfie e volte ao caldo.',timer_segundos:null},
      {passo:3,instrucao:'Adicione os legumes em cubos ao caldo fervente. Cozinhe por 15 minutos.',timer_segundos:900},
      {passo:4,instrucao:'Adicione macarrão ou arroz se desejar. Finalize com cheiro-verde.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:'Ossobuco dá caldo dourado e rico em gelatina — o tutano do osso é um ingrediente especial. Músculo tem resultado semelhante e é mais fácil de encontrar.',
      dica_compra:null,
      substituicoes:null,
      adequado_crianca:'Ótimo — nutritivo, macio, reconfortante. Boa fonte de ferro.',
      harmonizacao:'Prato único. Pão italiano para mergulhar no caldo.',
      aviso:null
    },
    armazenamento:{geladeira:'até 4 dias',freezer:'até 3 meses',observacoes:null},
    nutricao:{calorias:280,proteina:28,carboidrato:22,gordura:10,fibra:3}
  },

  {
    id:'cb014', emoji:'🥩', grupo:'carne',
    nome:'Bife Grelhado com Manteiga e Ervas',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:15, porcoes:2, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['rápido','grelhado','ervas'],
    ingredientes:[
      {item:'contrafilé grosso',quantidade:'2 bifes',opcional:false},
      {item:'manteiga',quantidade:'3 colheres de sopa',opcional:false},
      {item:'alho fatiado',quantidade:'3 dentes',opcional:false},
      {item:'alecrim ou tomilho',quantidade:'2 ramos',opcional:false},
      {item:'sal grosso e pimenta',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Retire a carne da geladeira 20 minutos antes. Tempere com sal e pimenta só na hora de grelhar.',timer_segundos:1200},
      {passo:2,instrucao:'Aqueça frigideira de ferro no fogo máximo por 3 minutos. Sele os bifes por 2 a 3 minutos de cada lado sem mexer.',timer_segundos:360},
      {passo:3,instrucao:'Adicione manteiga, alho e ervas. Incline a frigideira e regue os bifes continuamente com a manteiga aromática por 1 minuto.',timer_segundos:60},
      {passo:4,instrucao:'Retire e deixe repousar 3 a 5 minutos antes de cortar — os sucos se redistribuem.',timer_segundos:300}
    ],
    conhecimento:{
      corte_ideal:'Contrafilé com a capa de gordura — a gordura funde na manteiga e cria sabor extraordinário. T-bone, ancho e entrecôte também são perfeitos.',
      dica_compra:null,
      substituicoes:null,
      adequado_crianca:'Sim — bem passado para crianças.',
      harmonizacao:'Batata rústica no forno, legumes grelhados ou pão rústico.',
      aviso:'Deixar repousar após grelhar é fundamental — a carne fica muito mais suculenta.'
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'cru até 3 meses',observacoes:null},
    nutricao:{calorias:440,proteina:44,carboidrato:1,gordura:28,fibra:0}
  },

  {
    id:'cb015', emoji:'🫕', grupo:'carne',
    nome:'Fígado Acebolado',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:20, porcoes:3, dificuldade:'fácil',
    adequado_crianca:false, vegetariano:false,
    tags:['rápido','ferro','clássico'],
    ingredientes:[
      {item:'fígado bovino fatiado',quantidade:'500g',opcional:false},
      {item:'cebola',quantidade:'3 unidades grandes',opcional:false},
      {item:'alho',quantidade:'3 dentes',opcional:false},
      {item:'leite para deixar de molho',quantidade:'1 xícara',opcional:false},
      {item:'óleo',quantidade:'3 colheres de sopa',opcional:false},
      {item:'sal, pimenta e vinagre',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Deixe o fígado de molho no leite por 30 minutos — remove o amargor e o sabor forte.',timer_segundos:1800},
      {passo:2,instrucao:'Escorra, seque e tempere com sal, pimenta e um fio de vinagre.',timer_segundos:null},
      {passo:3,instrucao:'Frite em óleo bem quente por 2 minutos de cada lado. Fígado cozido demais fica duro e amargo.',timer_segundos:240},
      {passo:4,instrucao:'Na mesma frigideira, caramelize a cebola e o alho. Volte o fígado por 1 minuto e sirva.',timer_segundos:60}
    ],
    conhecimento:{
      corte_ideal:'Fígado bovino é o mais comum. Fígado de frango tem sabor mais suave — ótima opção para quem não aprecia o bovino.',
      dica_compra:'Compre fresco e cozinhe no mesmo dia. Fígado muito escuro ou com cheiro muito forte não está fresco.',
      substituicoes:null,
      adequado_crianca:'Não recomendado pelo sabor intenso e pela textura.',
      harmonizacao:'Arroz branco, feijão e couve refogada.',
      aviso:'O molho de leite é essencial para suavizar. Não pule esta etapa.'
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'até 2 meses (cru)',observacoes:null},
    nutricao:{calorias:220,proteina:28,carboidrato:8,gordura:8,fibra:1}
  },

  // ════════════════════════════
  // PEIXE E FRUTOS DO MAR
  // ════════════════════════════
  {
    id:'pe001', emoji:'🐟', grupo:'peixe',
    nome:'Tilápia Assada com Limão',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:35, porcoes:4, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['sem espinha','saudável','criança'],
    ingredientes:[
      {item:'filé de tilápia',quantidade:'4 unidades (600g)',opcional:false},
      {item:'limão',quantidade:'2 unidades',opcional:false},
      {item:'alho',quantidade:'3 dentes',opcional:false},
      {item:'azeite',quantidade:'3 colheres de sopa',opcional:false},
      {item:'sal, pimenta e páprica',quantidade:'a gosto',opcional:false},
      {item:'cheiro-verde',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Misture suco de limão, azeite, alho amassado, sal, pimenta e páprica.',timer_segundos:null},
      {passo:2,instrucao:'Marine os filés por 15 minutos — não mais. O ácido do limão começa a "cozinhar" o peixe.',timer_segundos:900},
      {passo:3,instrucao:'Preaqueça o forno a 200°C. Coloque os filés em assadeira com papel manteiga.',timer_segundos:null},
      {passo:4,instrucao:'Asse por 15 a 20 minutos. O peixe está pronto quando a carne se soltar com um garfo e não estiver mais translúcida.',timer_segundos:1080},
      {passo:5,instrucao:'Finalize com cheiro-verde e rodelas de limão.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:'Tilápia é a escolha número 1 para crianças — filé sem espinha, sabor suave, carne branca e firma. Merluza e linguado são alternativas igualmente sem espinha e ideais para iniciantes.',
      dica_compra:'Filé fresco deve ser branco-rosado, sem cheiro forte. Cheiro intenso indica que não está fresco. Tilápia congelada é boa opção — descongele na geladeira de véspera.',
      substituicoes:'A mesma receita funciona com merluza, linguado, namorado ou corvina.',
      adequado_crianca:'Ideal — sem espinha, sabor muito suave, textura macia. Ótima fonte de proteína.',
      harmonizacao:'Arroz branco, purê de batata ou legumes cozidos.',
      aviso:null
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'cru até 3 meses',observacoes:'Peixe cozido deve ser consumido em até 2 dias.'},
    nutricao:{calorias:220,proteina:38,carboidrato:2,gordura:8,fibra:0}
  },

  {
    id:'pe002', emoji:'🐟', grupo:'peixe',
    nome:'Peixe Frito Crocante',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:25, porcoes:4, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['frito','crocante','clássico'],
    ingredientes:[
      {item:'filé de tilápia ou merluza',quantidade:'600g',opcional:false},
      {item:'farinha de trigo',quantidade:'1 xícara',opcional:false},
      {item:'limão',quantidade:'1 unidade',opcional:false},
      {item:'alho',quantidade:'2 dentes',opcional:false},
      {item:'sal, pimenta e açafrão',quantidade:'a gosto',opcional:false},
      {item:'óleo para fritar',quantidade:'suficiente',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Tempere o peixe com limão, alho, sal, pimenta e açafrão por 10 minutos.',timer_segundos:600},
      {passo:2,instrucao:'Seque com papel toalha — umidade impede o peixe de ficar crocante.',timer_segundos:null},
      {passo:3,instrucao:'Passe na farinha de trigo, sacudindo o excesso.',timer_segundos:null},
      {passo:4,instrucao:'Frite em óleo quente a 180°C por 3 a 4 minutos de cada lado. Não vire mais de uma vez.',timer_segundos:480},
      {passo:5,instrucao:'Escorra em papel toalha e sirva imediatamente com limão.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:'Para fritar, tilápia e merluza (sem espinha) são perfeitas. Sardinha frita é clássica mas tem espinha — não indicada para crianças. Tambaqui e pintado têm textura mais firma e ficam excelentes fritos.',
      dica_compra:'Filé fresco é muito superior ao congelado para fritar. Se usar congelado, descongele completamente e seque muito bem.',
      substituicoes:null,
      adequado_crianca:'Sim com tilápia ou merluza sem espinha.',
      harmonizacao:'Arroz, feijão, farofa e vinagrete.',
      aviso:'Óleo na temperatura certa é fundamental. Muito frio = encharcado. Muito quente = queima por fora, cru por dentro.'
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'não recomendado (perde crocância)',observacoes:null},
    nutricao:{calorias:280,proteina:34,carboidrato:18,gordura:8,fibra:1}
  },

  {
    id:'pe003', emoji:'🫕', grupo:'peixe',
    nome:'Moqueca de Peixe Baiana',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:45, porcoes:5, dificuldade:'médio',
    adequado_crianca:false, vegetariano:false,
    tags:['baiano','leite de coco','dendê'],
    ingredientes:[
      {item:'filé de peixe firme (badejo ou robalo)',quantidade:'800g',opcional:false},
      {item:'leite de coco',quantidade:'400ml',opcional:false},
      {item:'azeite de dendê',quantidade:'2 colheres de sopa',opcional:false},
      {item:'tomate',quantidade:'3 unidades',opcional:false},
      {item:'cebola',quantidade:'2 unidades',opcional:false},
      {item:'pimentão vermelho e verde',quantidade:'1/2 de cada',opcional:false},
      {item:'coentro',quantidade:'1 maço',opcional:false},
      {item:'limão e sal',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Marine o peixe com limão, sal e metade do coentro por 20 minutos.',timer_segundos:1200},
      {passo:2,instrucao:'Em panela de barro, faça camadas: cebola, tomate e pimentão em rodelas.',timer_segundos:null},
      {passo:3,instrucao:'Coloque o peixe por cima. Cubra com outra camada de cebola, tomate e pimentão.',timer_segundos:null},
      {passo:4,instrucao:'Adicione o dendê e o leite de coco. Tampe e cozinhe em fogo médio por 20 minutos sem mexer.',timer_segundos:1200},
      {passo:5,instrucao:'Adicione o coentro restante e sirva diretamente da panela.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:'Peixe de carne firma é indispensável — badejo, robalo, dourado e namorado são os melhores. Tilápia desmonta na moqueca. Peixe de carne mole desintegra no caldo.',
      dica_compra:'Peixe fresco: olhos brilhantes, guelras vermelhas, cheiro suave de mar. Corte em postas de 4cm.',
      substituicoes:'Moqueca capixaba (sem dendê, sem leite de coco, só urucum) é igualmente deliciosa e mais leve.',
      adequado_crianca:'Não para crianças pequenas — dendê é pesado e coentro é forte.',
      harmonizacao:'Arroz branco, pirão de peixe e farofa de dendê.',
      aviso:'Nunca mexa a moqueca durante o cozimento — o peixe se desfaz.'
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'não recomendado',observacoes:null},
    nutricao:{calorias:380,proteina:38,carboidrato:10,gordura:22,fibra:2}
  },

  {
    id:'pe004', emoji:'🥫', grupo:'peixe',
    nome:'Atum com Batata',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:30, porcoes:4, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['atum','rápido','prático'],
    ingredientes:[
      {item:'atum em lata',quantidade:'2 latas (170g cada)',opcional:false},
      {item:'batata',quantidade:'4 unidades médias',opcional:false},
      {item:'cebola',quantidade:'1 unidade',opcional:false},
      {item:'tomate',quantidade:'2 unidades',opcional:false},
      {item:'azeitona preta',quantidade:'1/2 xícara',opcional:true},
      {item:'azeite, sal e cheiro-verde',quantidade:'a gosto',opcional:false},
      {item:'maionese',quantidade:'3 colheres de sopa',opcional:true}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Cozinhe as batatas com casca até ficarem macias. Deixe esfriar, descasque e corte em cubos.',timer_segundos:null},
      {passo:2,instrucao:'Escorra bem o atum. Misture com as batatas, cebola picada, tomate, azeitona e cheiro-verde.',timer_segundos:null},
      {passo:3,instrucao:'Tempere com azeite, sal e pimenta. Adicione maionese se preferir versão cremosa.',timer_segundos:null},
      {passo:4,instrucao:'Sirva frio ou em temperatura ambiente.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Atum em azeite tem sabor mais rico. Atum em água tem menos calorias. Escorra bem para não encharcar.',
      substituicoes:'Pode usar sardinha em lata no lugar do atum.',
      adequado_crianca:'Ótimo — atum em lata não tem espinhas, sabor suave.',
      harmonizacao:'Prato completo. Folhas verdes ao lado.',
      aviso:null
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'não recomendado',observacoes:null},
    nutricao:{calorias:320,proteina:28,carboidrato:30,gordura:10,fibra:3}
  },

  {
    id:'pe005', emoji:'🦐', grupo:'peixe',
    nome:'Camarão ao Alho e Óleo',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:20, porcoes:3, dificuldade:'fácil',
    adequado_crianca:false, vegetariano:false,
    tags:['rápido','especial','alho'],
    ingredientes:[
      {item:'camarão médio limpo',quantidade:'500g',opcional:false},
      {item:'alho fatiado',quantidade:'6 dentes',opcional:false},
      {item:'azeite',quantidade:'5 colheres de sopa',opcional:false},
      {item:'limão',quantidade:'1 unidade',opcional:false},
      {item:'sal, pimenta e salsinha',quantidade:'a gosto',opcional:false},
      {item:'pimenta dedo-de-moça',quantidade:'1 unidade',opcional:true}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Seque os camarões com papel toalha — umidade cria vapor e impede de dourar.',timer_segundos:null},
      {passo:2,instrucao:'Em fogo médio, doure levemente o alho fatiado no azeite. Não queime — alho queimado estraga o prato.',timer_segundos:null},
      {passo:3,instrucao:'Suba o fogo para alto. Adicione os camarões e tempere com sal. Salteie por 2 minutos de cada lado.',timer_segundos:240},
      {passo:4,instrucao:'Quando enrolar em C e ficar rosado, está pronto. Se enrolar em O, passou do ponto e ficará borrachento.',timer_segundos:null},
      {passo:5,instrucao:'Finalize com suco de limão, salsinha e pimenta dedo-de-moça.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:'Camarão médio (31/40) é ideal para saltear. Muito pequeno resseca, muito grande pode ficar cru por dentro.',
      dica_compra:'Fresco: casca brilhante e firme, cheiro suave de mar. Congelado: descongele na geladeira, nunca em água quente.',
      substituicoes:null,
      adequado_crianca:'Crianças com mais de 2 anos podem consumir. Atenção à alergia a frutos do mar — muito comum.',
      harmonizacao:'Arroz branco, macarrão alho e óleo, pão artesanal ou polenta.',
      aviso:'Alergia a crustáceos é muito comum — sempre pergunte antes de servir.'
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'cru até 3 meses',observacoes:null},
    nutricao:{calorias:240,proteina:32,carboidrato:4,gordura:12,fibra:0}
  },

  {
    id:'pe006', emoji:'🐟', grupo:'peixe',
    nome:'Bacalhau à Brás Simplificado',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:40, porcoes:4, dificuldade:'médio',
    adequado_crianca:true, vegetariano:false,
    tags:['bacalhau','ovo','português'],
    ingredientes:[
      {item:'bacalhau dessalgado desfiado',quantidade:'400g',opcional:false},
      {item:'batata palha',quantidade:'150g',opcional:false},
      {item:'ovo',quantidade:'4 unidades',opcional:false},
      {item:'cebola',quantidade:'2 unidades',opcional:false},
      {item:'azeitona preta',quantidade:'1/2 xícara',opcional:false},
      {item:'azeite',quantidade:'4 colheres de sopa',opcional:false},
      {item:'sal, pimenta, salsa e louro',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Doure a cebola em rodelas finas no azeite. Adicione o bacalhau e o louro. Refogue por 5 minutos.',timer_segundos:300},
      {passo:2,instrucao:'Retire o louro. Adicione a batata palha e misture rapidamente.',timer_segundos:null},
      {passo:3,instrucao:'Bata os ovos levemente com sal e pimenta. Despeje sobre o bacalhau e mexa suavemente em fogo baixo.',timer_segundos:null},
      {passo:4,instrucao:'Quando os ovos ainda estiverem cremosos, desligue. Finalize com azeitonas, salsa e fio de azeite.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Bacalhau gadus morhua é o mais nobre. Saithe é alternativa econômica. Dessalgue por 24 a 48h na geladeira trocando a água.',
      substituicoes:'Atum em lata escorrido no lugar do bacalhau para versão prática.',
      adequado_crianca:'Após dessalgar bem, sabor suave e nutritivo.',
      harmonizacao:'Prato completo. Salada verde e azeitonas.',
      aviso:'Dessalgar bacalhau adequadamente é fundamental — mínimo 24h na geladeira trocando a água 3 vezes.'
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'não recomendado',observacoes:null},
    nutricao:{calorias:380,proteina:36,carboidrato:16,gordura:20,fibra:1}
  },

  {
    id:'pe007', emoji:'🐠', grupo:'peixe',
    nome:'Peixe na Pressão com Legumes',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:30, porcoes:4, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['rápido','pressão','completo'],
    ingredientes:[
      {item:'cação ou namorado em postas',quantidade:'800g',opcional:false},
      {item:'batata',quantidade:'3 unidades',opcional:false},
      {item:'cenoura',quantidade:'2 unidades',opcional:false},
      {item:'tomate',quantidade:'2 unidades',opcional:false},
      {item:'cebola e alho',quantidade:'a gosto',opcional:false},
      {item:'limão, sal e açafrão',quantidade:'a gosto',opcional:false},
      {item:'cheiro-verde',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Tempere o peixe com limão, sal e açafrão por 15 minutos.',timer_segundos:900},
      {passo:2,instrucao:'Na pressão, faça uma cama de cebola e tomate. Coloque os legumes em rodelas e o peixe por cima.',timer_segundos:null},
      {passo:3,instrucao:'Adicione 1/2 xícara de água. Tampe e cozinhe por 8 minutos na pressão.',timer_segundos:480},
      {passo:4,instrucao:'Deixe a pressão sair naturalmente. Finalize com cheiro-verde.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:'Cação e namorado são excelentes para pressão — carne firma que não se desfaz. Tilápia e merluza ficam moles demais na pressão.',
      dica_compra:'Cação não tem espinhas — ótimo para crianças. Compre postas com espessura uniforme.',
      substituicoes:null,
      adequado_crianca:'Cação é excelente — sem espinhas, carne branca, sabor suave.',
      harmonizacao:'Arroz branco. O caldo que se forma na panela é incrível.',
      aviso:null
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'não recomendado',observacoes:null},
    nutricao:{calorias:260,proteina:34,carboidrato:18,gordura:6,fibra:3}
  },

  {
    id:'pe008', emoji:'🦐', grupo:'peixe',
    nome:'Camarão no Molho de Tomate',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:25, porcoes:4, dificuldade:'fácil',
    adequado_crianca:false, vegetariano:false,
    tags:['molho','camarão','prático'],
    ingredientes:[
      {item:'camarão médio limpo',quantidade:'500g',opcional:false},
      {item:'tomate pelado',quantidade:'1 lata (400g)',opcional:false},
      {item:'cebola',quantidade:'1 unidade',opcional:false},
      {item:'alho',quantidade:'4 dentes',opcional:false},
      {item:'azeite',quantidade:'3 colheres de sopa',opcional:false},
      {item:'sal, pimenta e coentro',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Refogue cebola e alho no azeite. Adicione o tomate pelado amassado e cozinhe por 10 minutos.',timer_segundos:600},
      {passo:2,instrucao:'Ajuste o sal. Adicione os camarões secos ao molho.',timer_segundos:null},
      {passo:3,instrucao:'Cozinhe por 3 a 4 minutos apenas — camarão cozinha muito rápido.',timer_segundos:240},
      {passo:4,instrucao:'Finalize com coentro ou salsinha e sirva.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:'Camarão médio é ideal. Seque bem antes de adicionar ao molho.',
      dica_compra:'Descongele na geladeira de véspera e seque muito bem com papel toalha.',
      substituicoes:'Pode adicionar leite de coco para uma versão nordestina.',
      adequado_crianca:'Atenção à alergia — muito comum em crianças.',
      harmonizacao:'Arroz branco, tapioca ou pão.',
      aviso:'Alergia a frutos do mar é muito comum — sempre confirme antes de servir.'
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'cru até 3 meses',observacoes:null},
    nutricao:{calorias:220,proteina:30,carboidrato:8,gordura:8,fibra:2}
  },

  {
    id:'pe009', emoji:'🐟', grupo:'peixe',
    nome:'Filé de Peixe ao Molho de Maracujá',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:30, porcoes:4, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['agridoce','molho','especial'],
    ingredientes:[
      {item:'filé de peixe branco',quantidade:'600g',opcional:false},
      {item:'suco de maracujá',quantidade:'200ml',opcional:false},
      {item:'creme de leite',quantidade:'100ml',opcional:false},
      {item:'mel',quantidade:'1 colher de sopa',opcional:false},
      {item:'manteiga',quantidade:'2 colheres de sopa',opcional:false},
      {item:'sal e pimenta',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Tempere os filés com sal e pimenta. Sele na manteiga quente por 3 minutos de cada lado. Reserve.',timer_segundos:360},
      {passo:2,instrucao:'Na mesma frigideira, adicione o suco de maracujá e o mel. Reduza pela metade em fogo alto.',timer_segundos:null},
      {passo:3,instrucao:'Reduza o fogo e adicione o creme de leite. Misture até emulsionar.',timer_segundos:null},
      {passo:4,instrucao:'Volte os filés ao molho por 2 minutos. Sirva imediatamente.',timer_segundos:120}
    ],
    conhecimento:{
      corte_ideal:'Tilápia, merluza ou linguado — peixes de sabor suave que não competem com o maracujá.',
      dica_compra:null,
      substituicoes:'O mesmo molho de maracujá funciona muito bem com frango.',
      adequado_crianca:'Sim — sabor agridoce muito apreciado pelas crianças.',
      harmonizacao:'Arroz branco e legumes grelhados.',
      aviso:null
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'não recomendado',observacoes:null},
    nutricao:{calorias:290,proteina:34,carboidrato:14,gordura:12,fibra:0}
  },

  {
    id:'pe010', emoji:'🐟', grupo:'peixe',
    nome:'Sardinha Refogada com Tomate',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:25, porcoes:3, dificuldade:'fácil',
    adequado_crianca:false, vegetariano:false,
    tags:['econômico','nutritivo','proteico'],
    ingredientes:[
      {item:'sardinha fresca limpa',quantidade:'600g',opcional:false},
      {item:'tomate',quantidade:'3 unidades',opcional:false},
      {item:'cebola',quantidade:'1 unidade',opcional:false},
      {item:'alho',quantidade:'3 dentes',opcional:false},
      {item:'vinagre',quantidade:'2 colheres de sopa',opcional:false},
      {item:'óleo, sal e cheiro-verde',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Tempere as sardinhas com sal, alho e vinagre por 10 minutos.',timer_segundos:600},
      {passo:2,instrucao:'Frite levemente no óleo quente por 2 minutos de cada lado. Reserve.',timer_segundos:240},
      {passo:3,instrucao:'Refogue cebola, alho e tomate. Volte as sardinhas ao molho.',timer_segundos:null},
      {passo:4,instrucao:'Cozinhe tampado por 10 minutos. Finalize com cheiro-verde.',timer_segundos:600}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Sardinha fresca: olhos brilhantes, escamas firmes, cheiro suave. Muito perecível — compre e consuma no mesmo dia.',
      substituicoes:'Sardinha em lata pode ser usada para versão mais rápida.',
      adequado_crianca:'Sardinha tem muitas espinhas finas — não indicada para crianças pequenas.',
      harmonizacao:'Arroz branco, farofa ou polenta.',
      aviso:'Sardinha tem muitas espinhas finas — supervisão adulta essencial.'
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'cru até 2 meses',observacoes:null},
    nutricao:{calorias:280,proteina:32,carboidrato:6,gordura:14,fibra:1}
  },

  // ════════════════════════════
  // MASSAS E MOLHOS
  // ════════════════════════════
  {
    id:'ma001', emoji:'🍝', grupo:'massa',
    nome:'Macarrão ao Sugo',
    tipo:'massa', cozinha:'Italiana',
    tempo_preparo:30, porcoes:4, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['básico','vegetariano','rápido'],
    ingredientes:[
      {item:'macarrão espaguete',quantidade:'400g',opcional:false},
      {item:'tomate pelado',quantidade:'1 lata (400g)',opcional:false},
      {item:'alho',quantidade:'4 dentes',opcional:false},
      {item:'azeite',quantidade:'4 colheres de sopa',opcional:false},
      {item:'manjericão fresco',quantidade:'1 maço',opcional:false},
      {item:'sal e açúcar',quantidade:'a gosto',opcional:false},
      {item:'queijo parmesão',quantidade:'a gosto',opcional:true}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Cozinhe o macarrão em água abundante com sal até al dente — 2 minutos a menos do que diz a embalagem. Reserve 1 xícara da água do cozimento.',timer_segundos:null},
      {passo:2,instrucao:'Em fogo médio, doure o alho levemente no azeite. Atenção — alho queimado amarga o molho.',timer_segundos:null},
      {passo:3,instrucao:'Adicione o tomate pelado amassado. Tempere com sal e uma pitada de açúcar para neutralizar a acidez. Cozinhe por 15 minutos.',timer_segundos:900},
      {passo:4,instrucao:'Adicione o macarrão escorrido ao molho com um pouco da água do cozimento. Misture bem — o amido da água cria uma sauce que gruda no macarrão.',timer_segundos:null},
      {passo:5,instrucao:'Desligue, adicione manjericão fresco rasgado e um fio generoso de azeite. Sirva com parmesão.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Espaguete combina com molhos leves. Penne e rigatoni agrupam molhos mais encorpados nas ranhuras. Macarrão de grano duro tem melhor textura. A água do macarrão é o molho secreto — nunca desperdice toda.',
      substituicoes:'Tomate fresco pelado no lugar do enlatado — mais sabor, mais trabalho.',
      adequado_crianca:'Clássico favorito das crianças. O sugo simples é o início de tudo.',
      harmonizacao:'Parmesão, salada caprese, pão italiano.',
      aviso:'Nunca enxágue o macarrão após cozinhar — o amido que fica é quem faz o molho grudar.'
    },
    armazenamento:{geladeira:'até 3 dias',freezer:'o molho até 3 meses (sem o macarrão)',observacoes:'Congele o molho separado e cozinhe a massa na hora.'},
    nutricao:{calorias:380,proteina:12,carboidrato:68,gordura:8,fibra:4}
  },

  {
    id:'ma002', emoji:'🍝', grupo:'massa',
    nome:'Bolonhesa Clássica',
    tipo:'massa', cozinha:'Italiana',
    tempo_preparo:60, porcoes:6, dificuldade:'médio',
    adequado_crianca:true, vegetariano:false,
    tags:['clássico','família','domingo'],
    ingredientes:[
      {item:'macarrão tagliatelle ou espaguete',quantidade:'500g',opcional:false},
      {item:'carne moída (patinho)',quantidade:'500g',opcional:false},
      {item:'tomate pelado',quantidade:'2 latas (800g)',opcional:false},
      {item:'cebola',quantidade:'1 unidade',opcional:false},
      {item:'cenoura',quantidade:'1 unidade',opcional:false},
      {item:'salsão',quantidade:'1 talo',opcional:false},
      {item:'vinho tinto seco',quantidade:'1/2 xícara',opcional:false},
      {item:'leite',quantidade:'1/2 xícara',opcional:false},
      {item:'azeite, sal, pimenta',quantidade:'a gosto',opcional:false},
      {item:'parmesão para servir',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Pique muito finamente cebola, cenoura e salsão (soffritto). Refogue no azeite em fogo médio por 10 minutos até murchar.',timer_segundos:600},
      {passo:2,instrucao:'Suba o fogo, adicione a carne moída e cozinhe mexendo até secar toda a água e começar a dourar.',timer_segundos:null},
      {passo:3,instrucao:'Adicione o vinho e deixe evaporar completamente por 2 minutos.',timer_segundos:120},
      {passo:4,instrucao:'Adicione o tomate pelado amassado. Reduza o fogo ao mínimo e cozinhe sem tampa por 30 a 40 minutos mexendo ocasionalmente.',timer_segundos:2100},
      {passo:5,instrucao:'Adicione o leite nos últimos 5 minutos — suaviza a acidez do tomate e deixa o molho mais cremoso. Ajuste o sal.',timer_segundos:300},
      {passo:6,instrucao:'Misture com o macarrão al dente e sirva com parmesão generoso.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:'Patinho moído é o ideal — sabor limpo. A versão tradicional italiana usa mistura de porco e vaca. Carne 100% magra fica seca — um pouco de gordura é necessária.',
      dica_compra:'O soffritto (cenoura, salsão e cebola) é a base aromática indispensável. Não pule.',
      substituicoes:'Sem vinho? Use caldo de carne. Sem salsão? Aipo ou simplesmente omita.',
      adequado_crianca:'Ótimo — sabor suave e familiar.',
      harmonizacao:'Tagliatelle é o formato tradicional. Parmesão fresco ralado na hora.',
      aviso:'Cozimento lento é o segredo — molho bolonhesa precisa de pelo menos 30 minutos para desenvolver o sabor.'
    },
    armazenamento:{geladeira:'até 4 dias',freezer:'até 3 meses',observacoes:'Melhora muito no dia seguinte.'},
    nutricao:{calorias:480,proteina:28,carboidrato:62,gordura:14,fibra:5}
  },

  {
    id:'ma003', emoji:'🍝', grupo:'massa',
    nome:'Macarrão Alho e Óleo',
    tipo:'massa', cozinha:'Italiana',
    tempo_preparo:20, porcoes:4, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['rápido','simples','vegetariano'],
    ingredientes:[
      {item:'espaguete',quantidade:'400g',opcional:false},
      {item:'alho',quantidade:'8 dentes',opcional:false},
      {item:'azeite',quantidade:'6 colheres de sopa',opcional:false},
      {item:'pimenta calabresa',quantidade:'a gosto',opcional:true},
      {item:'salsinha',quantidade:'1/2 maço',opcional:false},
      {item:'sal',quantidade:'a gosto',opcional:false},
      {item:'parmesão',quantidade:'a gosto',opcional:true}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Cozinhe o espaguete al dente. Reserve 1 xícara da água do cozimento.',timer_segundos:null},
      {passo:2,instrucao:'Em fogo baixo, aqueça o azeite e doure o alho fatiado finamente até ficar dourado claro. Não queime — vai amargo.',timer_segundos:null},
      {passo:3,instrucao:'Adicione a pimenta calabresa se usar. Junte o macarrão escorrido e misture.',timer_segundos:null},
      {passo:4,instrucao:'Adicione a água do cozimento aos poucos até criar uma emulsão cremosa. Finalize com salsinha.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Alho fresco fatiado na hora é indispensável. Nunca use alho em pó nesta receita.',
      substituicoes:'Pode adicionar anchovas junto com o alho — derreterão no azeite dando umami incrível.',
      adequado_crianca:'Sim — omita a pimenta calabresa.',
      harmonizacao:'Prato completo. Frango grelhado ao lado para proteína.',
      aviso:'A água do macarrão com amido é o segredo do molho cremoso — nunca jogue fora toda a água.'
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'não recomendado',observacoes:null},
    nutricao:{calorias:420,proteina:12,carboidrato:64,gordura:14,fibra:3}
  },

  {
    id:'ma004', emoji:'🍝', grupo:'massa',
    nome:'Macarrão com Frango Desfiado',
    tipo:'massa', cozinha:'Brasileira',
    tempo_preparo:35, porcoes:5, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['frango','dia a dia','família'],
    ingredientes:[
      {item:'macarrão penne ou parafuso',quantidade:'400g',opcional:false},
      {item:'frango desfiado temperado',quantidade:'2 xícaras',opcional:false},
      {item:'molho de tomate',quantidade:'2 xícaras',opcional:false},
      {item:'creme de leite',quantidade:'100ml',opcional:true},
      {item:'queijo muçarela',quantidade:'100g',opcional:true},
      {item:'sal, pimenta, cheiro-verde',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Cozinhe o macarrão al dente. Reserve.',timer_segundos:null},
      {passo:2,instrucao:'Aqueça o molho de tomate, adicione o frango desfiado e misture.',timer_segundos:null},
      {passo:3,instrucao:'Para versão cremosa, adicione o creme de leite em fogo baixo.',timer_segundos:null},
      {passo:4,instrucao:'Misture o macarrão ao molho. Finalize com cheiro-verde e queijo por cima.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Ótimo aproveitamento do frango que sobrou. O frango desfiado temperado da véspera tem ainda mais sabor.',
      substituicoes:'Pode usar atum em lata no lugar do frango.',
      adequado_crianca:'Um dos favoritos — macarrão + frango é combinação perfeita.',
      harmonizacao:'Salada verde ao lado.',
      aviso:null
    },
    armazenamento:{geladeira:'até 3 dias',freezer:'até 2 meses (sem macarrão)',observacoes:null},
    nutricao:{calorias:440,proteina:28,carboidrato:58,gordura:12,fibra:4}
  },

  {
    id:'ma005', emoji:'🥘', grupo:'massa',
    nome:'Macarrão de Forno',
    tipo:'prato-principal', cozinha:'Brasileira',
    tempo_preparo:50, porcoes:6, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['forno','gratinado','família'],
    ingredientes:[
      {item:'macarrão parafuso ou penne',quantidade:'400g',opcional:false},
      {item:'carne moída refogada',quantidade:'400g',opcional:false},
      {item:'molho de tomate',quantidade:'2 xícaras',opcional:false},
      {item:'molho branco (béchamel)',quantidade:'2 xícaras',opcional:false},
      {item:'queijo muçarela',quantidade:'200g',opcional:false},
      {item:'queijo parmesão',quantidade:'50g',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Cozinhe o macarrão al dente. Misture com a carne moída e o molho de tomate.',timer_segundos:null},
      {passo:2,instrucao:'Em refratário, coloque metade do macarrão. Cubra com metade do molho branco e muçarela.',timer_segundos:null},
      {passo:3,instrucao:'Repita as camadas. Finalize com parmesão.',timer_segundos:null},
      {passo:4,instrucao:'Asse a 200°C por 20 a 25 minutos até gratinar.',timer_segundos:1320}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Ótima receita para usar sobras. O molho branco pode ser de caixinha para praticidade.',
      substituicoes:'Frango desfiado no lugar da carne moída.',
      adequado_crianca:'Adorado pelas crianças. Gratinado irresistível.',
      harmonizacao:'Salada verde basta.',
      aviso:null
    },
    armazenamento:{geladeira:'até 3 dias',freezer:'até 2 meses (antes de assar)',observacoes:'Congele cru e asse direto do freezer adicionando 15 minutos.'},
    nutricao:{calorias:520,proteina:30,carboidrato:58,gordura:18,fibra:4}
  },

  {
    id:'ma006', emoji:'🍝', grupo:'massa',
    nome:'Lasanha de Carne',
    tipo:'prato-principal', cozinha:'Italiana',
    tempo_preparo:90, porcoes:8, dificuldade:'médio',
    adequado_crianca:true, vegetariano:false,
    tags:['domingo','família','especial'],
    ingredientes:[
      {item:'massa de lasanha seca',quantidade:'300g',opcional:false},
      {item:'carne moída temperada',quantidade:'600g',opcional:false},
      {item:'molho de tomate',quantidade:'3 xícaras',opcional:false},
      {item:'molho branco',quantidade:'3 xícaras',opcional:false},
      {item:'queijo muçarela',quantidade:'400g',opcional:false},
      {item:'queijo parmesão ralado',quantidade:'100g',opcional:false},
      {item:'sal e noz-moscada',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Misture a carne moída refogada com o molho de tomate.',timer_segundos:null},
      {passo:2,instrucao:'Em refratário grande (30x20cm), cubra o fundo com molho de tomate.',timer_segundos:null},
      {passo:3,instrucao:'Camadas: massa → molho de carne → molho branco → muçarela. Repita 3 vezes.',timer_segundos:null},
      {passo:4,instrucao:'Finalize com molho branco, muçarela e parmesão. Cubra com alumínio.',timer_segundos:null},
      {passo:5,instrucao:'Asse a 180°C por 40 minutos coberta. Retire o alumínio e doure por 15 minutos.',timer_segundos:3300}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Massa de lasanha seca não precisa pré-cozinhar se o molho estiver bem úmido — ela cozinha no forno absorvendo o líquido dos molhos.',
      substituicoes:'Lasanha de frango desfiado ou vegetariana com legumes são excelentes variações.',
      adequado_crianca:'Clássico da mesa de família. As crianças adoram.',
      harmonizacao:'Salada verde e pão italiano.',
      aviso:'Deixar repousar 10 minutos antes de cortar — a lasanha se firma e fica mais fácil de servir.'
    },
    armazenamento:{geladeira:'até 4 dias',freezer:'até 3 meses',observacoes:'Congele em porções individuais. Reaqueça no forno para não encharcar.'},
    nutricao:{calorias:580,proteina:34,carboidrato:54,gordura:24,fibra:4}
  },

  {
    id:'ma007', emoji:'🍝', grupo:'massa',
    nome:'Espaguete à Carbonara',
    tipo:'massa', cozinha:'Italiana',
    tempo_preparo:25, porcoes:4, dificuldade:'médio',
    adequado_crianca:false, vegetariano:false,
    tags:['italiano','bacon','ovo'],
    ingredientes:[
      {item:'espaguete',quantidade:'400g',opcional:false},
      {item:'bacon ou guanciale',quantidade:'150g',opcional:false},
      {item:'ovo inteiro',quantidade:'2 unidades',opcional:false},
      {item:'gema',quantidade:'2 unidades',opcional:false},
      {item:'queijo pecorino ou parmesão',quantidade:'100g ralado',opcional:false},
      {item:'pimenta-do-reino preta moída na hora',quantidade:'generosa',opcional:false},
      {item:'sal',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Misture ovos, gemas e queijo ralado. Adicione muita pimenta preta. Reserve — este é o molho.',timer_segundos:null},
      {passo:2,instrucao:'Frite o bacon em cubos sem adicionar óleo até ficar crocante. Desligue o fogo. Reserve a gordura na panela.',timer_segundos:null},
      {passo:3,instrucao:'Cozinhe o espaguete al dente. Reserve 1 xícara da água do cozimento.',timer_segundos:null},
      {passo:4,instrucao:'Com o fogo desligado, coloque o macarrão na panela do bacon. Adicione a mistura de ovos e queijo. Misture rapidamente.',timer_segundos:null},
      {passo:5,instrucao:'Adicione a água do macarrão colher por colher até criar um molho cremoso. O calor residual cozinha o ovo — nunca coloque no fogo direto.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'A carbonara tradicional italiana não leva creme de leite — o cremoso vem da emulsão de ovos com queijo e água do macarrão. Guanciale (bochecha de porco) é o ingrediente original.',
      substituicoes:'Sem guanciale? Bacon é a substituição mais comum no Brasil.',
      adequado_crianca:'Não recomendado — ovo cru parcialmente cozido.',
      harmonizacao:'Prato completo. Salada verde simples.',
      aviso:'O ovo nunca deve ser cozido no fogo direto — talha e vira mexido. Use apenas o calor residual da massa.'
    },
    armazenamento:{geladeira:'até 1 dia',freezer:'não recomendado',observacoes:null},
    nutricao:{calorias:560,proteina:28,carboidrato:62,gordura:22,fibra:3}
  },

  {
    id:'ma008', emoji:'🍝', grupo:'massa',
    nome:'Macarrão com Atum e Azeite',
    tipo:'massa', cozinha:'Brasileira',
    tempo_preparo:20, porcoes:4, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['rápido','prático','sem carne'],
    ingredientes:[
      {item:'macarrão fusilli ou penne',quantidade:'400g',opcional:false},
      {item:'atum em azeite (lata)',quantidade:'2 latas',opcional:false},
      {item:'alho',quantidade:'4 dentes',opcional:false},
      {item:'tomate cereja',quantidade:'200g',opcional:true},
      {item:'azeitona preta',quantidade:'1/2 xícara',opcional:true},
      {item:'azeite, sal, salsinha',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Cozinhe o macarrão al dente. Reserve a água.',timer_segundos:null},
      {passo:2,instrucao:'Doure o alho no azeite. Adicione os tomates cereja e deixe murchar por 2 minutos.',timer_segundos:120},
      {passo:3,instrucao:'Adicione o atum escorrido e as azeitonas. Misture.',timer_segundos:null},
      {passo:4,instrucao:'Junte o macarrão com um pouco da água do cozimento. Finalize com salsinha e azeite.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Fusilli e penne seguram melhor o atum nos furos e espirais.',
      substituicoes:'Tomate fresco no lugar do cereja. Sardinha em lugar do atum.',
      adequado_crianca:'Sim — sabor suave e sem espinhas.',
      harmonizacao:'Salada verde simples.',
      aviso:null
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'não recomendado',observacoes:null},
    nutricao:{calorias:420,proteina:24,carboidrato:62,gordura:10,fibra:4}
  },

  {
    id:'ma009', emoji:'🥛', grupo:'massa',
    nome:'Molho Branco (Béchamel)',
    tipo:'acompanhamento', cozinha:'Italiana',
    tempo_preparo:15, porcoes:4, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:true,
    tags:['base','versátil','gratinar'],
    ingredientes:[
      {item:'manteiga',quantidade:'3 colheres de sopa',opcional:false},
      {item:'farinha de trigo',quantidade:'3 colheres de sopa',opcional:false},
      {item:'leite',quantidade:'500ml',opcional:false},
      {item:'sal, pimenta e noz-moscada',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Derreta a manteiga em fogo médio. Adicione a farinha de uma vez e mexa vigorosamente por 1 minuto.',timer_segundos:60},
      {passo:2,instrucao:'Adicione o leite morno aos poucos, mexendo sem parar com o fouet para não empelotar.',timer_segundos:null},
      {passo:3,instrucao:'Cozinhe mexendo até engrossar — cerca de 8 a 10 minutos em fogo médio.',timer_segundos:540},
      {passo:4,instrucao:'Tempere com sal, pimenta e noz-moscada. Use imediatamente ou cubra com filme plástico encostado no molho para não criar película.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Leite integral dá molho mais encorpado. Leite desnatado resulta em molho mais líquido.',
      substituicoes:'Para versão sem lactose, use leite vegetal de castanha ou aveia.',
      adequado_crianca:'Excelente — base para gratinar legumes, macarrão e lasanha.',
      harmonizacao:'Use em lasanha, macarrão de forno, moussaka, croque-monsieur.',
      aviso:'Mexer sem parar é obrigatório para evitar grumos. Se mesmo assim empelotar, passe pela peneira.'
    },
    armazenamento:{geladeira:'até 4 dias',freezer:'até 2 meses',observacoes:'Reaqueça em fogo baixo adicionando um pouco de leite.'},
    nutricao:{calorias:140,proteina:4,carboidrato:12,gordura:8,fibra:0}
  },

  {
    id:'ma010', emoji:'🍝', grupo:'massa',
    nome:'Nhoque de Batata',
    tipo:'massa', cozinha:'Italiana',
    tempo_preparo:60, porcoes:5, dificuldade:'médio',
    adequado_crianca:true, vegetariano:true,
    tags:['nhoque','batata','tradicional'],
    ingredientes:[
      {item:'batata',quantidade:'800g',opcional:false},
      {item:'farinha de trigo',quantidade:'1,5 xícara',opcional:false},
      {item:'ovo',quantidade:'1 unidade',opcional:false},
      {item:'sal e noz-moscada',quantidade:'a gosto',opcional:false},
      {item:'molho de tomate ou manteiga com sálvia',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Cozinhe as batatas com casca. Descasque quentes e passe pelo espremedor imediatamente.',timer_segundos:null},
      {passo:2,instrucao:'Deixe a batata esfriar ligeiramente. Faça um vulcão com ela, adicione o ovo, sal e noz-moscada no centro.',timer_segundos:null},
      {passo:3,instrucao:'Adicione a farinha aos poucos e misture com as mãos delicadamente. Pare quando a massa não grudar mais — não exceda a farinha.',timer_segundos:null},
      {passo:4,instrucao:'Faça rolinhos e corte em pedaços de 2cm. Cozinhe em água fervente com sal — estão prontos quando subirem à superfície.',timer_segundos:null},
      {passo:5,instrucao:'Retire com escumadeira e sirva imediatamente com o molho de sua escolha.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'Batata asterix (rosa) tem menos umidade — ideal para nhoque. Batata com excesso de água exige mais farinha e o nhoque fica pesado.',
      substituicoes:'Nhoque de mandioca segue o mesmo processo com mandioca cozida.',
      adequado_crianca:'Adorado pelas crianças pela textura macia.',
      harmonizacao:'Molho sugo, bolonhesa ou manteiga com sálvia e parmesão.',
      aviso:'Menos farinha = nhoque mais macio. Excesso de farinha = nhoque borrachento e pesado.'
    },
    armazenamento:{geladeira:'cru até 2 dias',freezer:'cru até 2 meses',observacoes:'Congele cru em bandeja e transfira para saco. Cozinhe direto do freezer.'},
    nutricao:{calorias:360,proteina:10,carboidrato:70,gordura:4,fibra:4}
  },

  {
    id:'ma011', emoji:'🍝', grupo:'massa',
    nome:'Espaguete à Puttanesca',
    tipo:'massa', cozinha:'Italiana',
    tempo_preparo:25, porcoes:4, dificuldade:'fácil',
    adequado_crianca:false, vegetariano:true,
    tags:['azeitona','anchovas','sabor forte'],
    ingredientes:[
      {item:'espaguete',quantidade:'400g',opcional:false},
      {item:'tomate pelado',quantidade:'1 lata',opcional:false},
      {item:'azeitona preta',quantidade:'100g',opcional:false},
      {item:'alcaparra',quantidade:'2 colheres de sopa',opcional:false},
      {item:'anchovas',quantidade:'4 filés',opcional:false},
      {item:'alho',quantidade:'4 dentes',opcional:false},
      {item:'azeite e pimenta calabresa',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Dissolva as anchovas no azeite quente com o alho fatiado.',timer_segundos:null},
      {passo:2,instrucao:'Adicione o tomate, azeitonas e alcaparras. Cozinhe por 15 minutos.',timer_segundos:900},
      {passo:3,instrucao:'Misture com o espaguete al dente e sirva imediatamente.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:null,
      dica_compra:'As anchovas se dissolvem completamente no azeite e não se sentem no resultado final — apenas contribuem com umami profundo.',
      substituicoes:'Sem anchovas? O prato fica mais simples mas ainda bom. Sem alcaparras? Pode omitir.',
      adequado_crianca:'Não recomendado — sabores muito intensos.',
      harmonizacao:'Prato completo. Vinho tinto ao lado.',
      aviso:null
    },
    armazenamento:{geladeira:'até 2 dias',freezer:'molho até 2 meses',observacoes:null},
    nutricao:{calorias:410,proteina:14,carboidrato:64,gordura:12,fibra:5}
  },

  {
    id:'ma012', emoji:'🍝', grupo:'massa',
    nome:'Macarrão com Carne Moída e Molho Caseiro',
    tipo:'massa', cozinha:'Brasileira',
    tempo_preparo:35, porcoes:5, dificuldade:'fácil',
    adequado_crianca:true, vegetariano:false,
    tags:['dia a dia','família','básico'],
    ingredientes:[
      {item:'macarrão parafuso',quantidade:'400g',opcional:false},
      {item:'carne moída',quantidade:'400g',opcional:false},
      {item:'tomate',quantidade:'4 unidades',opcional:false},
      {item:'cebola',quantidade:'1 unidade',opcional:false},
      {item:'alho',quantidade:'3 dentes',opcional:false},
      {item:'extrato de tomate',quantidade:'2 colheres de sopa',opcional:false},
      {item:'sal, açúcar, orégano, cheiro-verde',quantidade:'a gosto',opcional:false}
    ],
    modo_preparo:[
      {passo:1,instrucao:'Refogue cebola e alho. Adicione a carne moída e cozinhe até secar.',timer_segundos:null},
      {passo:2,instrucao:'Adicione o tomate picado e o extrato. Tempere com sal, açúcar e orégano. Cozinhe por 20 minutos.',timer_segundos:1200},
      {passo:3,instrucao:'Cozinhe o macarrão al dente.',timer_segundos:null},
      {passo:4,instrucao:'Misture o macarrão ao molho ou sirva por cima. Finalize com cheiro-verde.',timer_segundos:null}
    ],
    conhecimento:{
      corte_ideal:'Patinho moído é o melhor. O parafuso (fusilli) é o formato mais popular no Brasil para este prato — segura bem o molho.',
      dica_compra:'Tomate fresco maduro dá um molho muito mais saboroso que o enlatado. Vale o trabalho extra.',
      substituicoes:null,
      adequado_crianca:'O prato mais democrático da culinária brasileira. Todas as crianças gostam.',
      harmonizacao:'Salada de alface e tomate ao lado.',
      aviso:null
    },
    armazenamento:{geladeira:'até 3 dias',freezer:'molho até 3 meses',observacoes:null},
    nutricao:{calorias:460,proteina:26,carboidrato:62,gordura:12,fibra:4}
  }

]; // fim RECEITAS_2
