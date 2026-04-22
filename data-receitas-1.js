'use strict';

// ═══════════════════════════════════════════════════════
// VOVÓ RECEITAS — data-receitas-1.js
// Frango (18 receitas) + Arroz e Feijão (12 receitas)
// ═══════════════════════════════════════════════════════

const RECEITAS_1 = [

  // ════════════════════════════════
  // FRANGO
  // ════════════════════════════════
  {
    id: 'fr001', emoji: '🍗', grupo: 'frango',
    nome: 'Frango Assado de Domingo',
    tipo: 'prato-principal', cozinha: 'Brasileira',
    tempo_preparo: 90, porcoes: 6, dificuldade: 'fácil',
    adequado_crianca: true, vegetariano: false,
    tags: ['domingo', 'família', 'assado'],
    ingredientes: [
      { item: 'frango inteiro', quantidade: '1 unidade (aprox. 2kg)', opcional: false },
      { item: 'alho', quantidade: '6 dentes', opcional: false },
      { item: 'limão', quantidade: '2 unidades', opcional: false },
      { item: 'azeite', quantidade: '4 colheres de sopa', opcional: false },
      { item: 'sal', quantidade: 'a gosto', opcional: false },
      { item: 'páprica defumada', quantidade: '1 colher de chá', opcional: false },
      { item: 'alecrim fresco', quantidade: '2 ramos', opcional: true },
      { item: 'manteiga', quantidade: '2 colheres de sopa', opcional: true }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Lave bem o frango por dentro e por fora. Seque completamente com papel toalha — isso é fundamental para a pele ficar crocante.', timer_segundos: null },
      { passo: 2, instrucao: 'Amasse o alho com sal e misture com o suco dos limões, o azeite e a páprica. Esfregue essa mistura por todo o frango, inclusive por baixo da pele do peito.', timer_segundos: null },
      { passo: 3, instrucao: 'Deixe marinar por pelo menos 1 hora na geladeira. Se tiver tempo, deixe de véspera — o sabor fica muito melhor.', timer_segundos: 3600 },
      { passo: 4, instrucao: 'Preaqueça o forno a 200°C por 15 minutos antes de colocar o frango.', timer_segundos: 900 },
      { passo: 5, instrucao: 'Coloque o frango numa assadeira, cubra com papel alumínio e leve ao forno por 50 minutos.', timer_segundos: 3000 },
      { passo: 6, instrucao: 'Retire o papel alumínio e deixe assar por mais 30 a 40 minutos até dourar bem. O frango está pronto quando espetado na coxa e o suco sair claro.', timer_segundos: 2100 }
    ],
    conhecimento: {
      corte_ideal: 'Frango inteiro caipira ou colonial tem sabor mais intenso. Para assar, o frango resfriado (não congelado) é sempre melhor — a carne fica mais suculenta.',
      dica_compra: 'Escolha um frango de cor amarelada — sinal de boa alimentação. Evite os muito pálidos ou com manchas arroxeadas.',
      substituicoes: 'Pode usar coxas e sobrecoxas no lugar do frango inteiro. O tempo cai para 45 a 50 minutos.',
      adequado_crianca: 'Sim — retire a pele antes de servir para as crianças menores. O peito desfiado é ótimo opção.',
      harmonizacao: 'Arroz branco, farofa, salada de maionese, batata assada ou mandioca cozida.',
      aviso: null
    },
    armazenamento: { geladeira: 'até 3 dias', freezer: 'até 3 meses', observacoes: 'Guarde desossado e sem pele para facilitar o uso futuro.' },
    nutricao: { calorias: 320, proteina: 38, carboidrato: 2, gordura: 18, fibra: 0 }
  },

  {
    id: 'fr002', emoji: '🫕', grupo: 'frango',
    nome: 'Frango na Pressão com Batata',
    tipo: 'prato-principal', cozinha: 'Brasileira',
    tempo_preparo: 40, porcoes: 4, dificuldade: 'fácil',
    adequado_crianca: true, vegetariano: false,
    tags: ['rápido', 'dia a dia', 'pressão'],
    ingredientes: [
      { item: 'coxas e sobrecoxas de frango', quantidade: '1kg', opcional: false },
      { item: 'batata', quantidade: '4 unidades médias', opcional: false },
      { item: 'cebola', quantidade: '1 grande', opcional: false },
      { item: 'alho', quantidade: '4 dentes', opcional: false },
      { item: 'tomate', quantidade: '2 unidades', opcional: false },
      { item: 'pimentão', quantidade: '1/2 unidade', opcional: true },
      { item: 'sal, pimenta e açafrão', quantidade: 'a gosto', opcional: false },
      { item: 'óleo', quantidade: '2 colheres de sopa', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Tempere o frango com sal, pimenta, alho amassado e açafrão. Deixe pegar sabor por 15 minutos.', timer_segundos: 900 },
      { passo: 2, instrucao: 'Aqueça o óleo na panela de pressão em fogo alto. Doure o frango de todos os lados — não pule esta etapa, ela cria sabor e cor.', timer_segundos: null },
      { passo: 3, instrucao: 'Adicione a cebola em rodelas, tomate picado e pimentão. Mexa por 2 minutos.', timer_segundos: 120 },
      { passo: 4, instrucao: 'Acrescente as batatas cortadas em cubos grandes e 1/2 xícara de água. Tampe e cozinhe em pressão por 15 minutos após pegar pressão.', timer_segundos: 900 },
      { passo: 5, instrucao: 'Desligue, espere a pressão sair naturalmente, abra e confira o sal. Sirva imediatamente.', timer_segundos: null }
    ],
    conhecimento: {
      corte_ideal: 'Coxas e sobrecoxas são ideais — têm mais gordura e ficam muito mais suculentas na pressão do que o peito. O peito reseca facilmente.',
      dica_compra: 'Compre coxa com sobrecoxa já separados — é mais prático. Se preferir, peça ao açougueiro para cortar o frango inteiro em pedaços.',
      substituicoes: 'A batata pode ser substituída por mandioca ou cará, que absorvem ainda mais o caldo.',
      adequado_crianca: 'Sim — a carne fica muito macia e fácil de mastigar. Retire os ossos antes de servir para crianças pequenas.',
      harmonizacao: 'Arroz branco e couve refogada. O caldo que sobra na panela pode virar uma sopinha.',
      aviso: null
    },
    armazenamento: { geladeira: 'até 3 dias', freezer: 'até 2 meses', observacoes: 'Congele sem a batata, que amolece demais ao descongelar.' },
    nutricao: { calorias: 380, proteina: 35, carboidrato: 28, gordura: 14, fibra: 3 }
  },

  {
    id: 'fr003', emoji: '🍲', grupo: 'frango',
    nome: 'Frango Ensopado com Legumes',
    tipo: 'prato-principal', cozinha: 'Brasileira',
    tempo_preparo: 55, porcoes: 5, dificuldade: 'fácil',
    adequado_crianca: true, vegetariano: false,
    tags: ['dia a dia', 'nutritivo', 'família'],
    ingredientes: [
      { item: 'frango em pedaços', quantidade: '1,2kg', opcional: false },
      { item: 'cenoura', quantidade: '2 unidades', opcional: false },
      { item: 'chuchu', quantidade: '1 unidade', opcional: false },
      { item: 'batata', quantidade: '2 unidades', opcional: false },
      { item: 'cebola', quantidade: '1 unidade', opcional: false },
      { item: 'alho', quantidade: '3 dentes', opcional: false },
      { item: 'extrato de tomate', quantidade: '2 colheres de sopa', opcional: false },
      { item: 'cheiro-verde', quantidade: '1/2 maço', opcional: false },
      { item: 'sal e pimenta', quantidade: 'a gosto', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Refogue a cebola e o alho em óleo até dourar. Adicione o frango e doure bem de todos os lados.', timer_segundos: null },
      { passo: 2, instrucao: 'Acrescente o extrato de tomate, misture bem e adicione 2 xícaras de água quente.', timer_segundos: null },
      { passo: 3, instrucao: 'Tampe e cozinhe em fogo médio por 20 minutos.', timer_segundos: 1200 },
      { passo: 4, instrucao: 'Adicione cenoura, batata e chuchu em cubos. Cozinhe por mais 20 minutos até os legumes ficarem macios.', timer_segundos: 1200 },
      { passo: 5, instrucao: 'Finalize com cheiro-verde picado, ajuste o sal e sirva.', timer_segundos: null }
    ],
    conhecimento: {
      corte_ideal: 'Qualquer pedaço de frango funciona. Para um ensopado mais saboroso, use uma mistura de coxa, sobrecoxa e asa.',
      dica_compra: null,
      substituicoes: 'Os legumes são flexíveis — use o que tiver na geladeira. Abobrinha, vagem e ervilha também ficam ótimos.',
      adequado_crianca: 'Ótimo para crianças. Os legumes macios são fáceis de mastigar. Desfie o frango para facilitar.',
      harmonizacao: 'Arroz branco. O caldo é tão bom que vira sopa no dia seguinte com macarrão.',
      aviso: null
    },
    armazenamento: { geladeira: 'até 3 dias', freezer: 'até 2 meses', observacoes: 'O caldo engrossa na geladeira — adicione um pouco de água ao reaquecer.' },
    nutricao: { calorias: 295, proteina: 32, carboidrato: 22, gordura: 10, fibra: 4 }
  },

  {
    id: 'fr004', emoji: '🥘', grupo: 'frango',
    nome: 'Strogonoff de Frango',
    tipo: 'prato-principal', cozinha: 'Brasileira',
    tempo_preparo: 35, porcoes: 4, dificuldade: 'fácil',
    adequado_crianca: true, vegetariano: false,
    tags: ['rápido', 'cremoso', 'festa'],
    ingredientes: [
      { item: 'peito de frango', quantidade: '700g', opcional: false },
      { item: 'creme de leite', quantidade: '1 caixa (200g)', opcional: false },
      { item: 'ketchup', quantidade: '3 colheres de sopa', opcional: false },
      { item: 'mostarda', quantidade: '1 colher de sopa', opcional: false },
      { item: 'champignon', quantidade: '1 lata', opcional: true },
      { item: 'cebola', quantidade: '1 unidade', opcional: false },
      { item: 'manteiga', quantidade: '2 colheres de sopa', opcional: false },
      { item: 'sal e pimenta', quantidade: 'a gosto', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Corte o frango em tiras finas. Tempere com sal e pimenta.', timer_segundos: null },
      { passo: 2, instrucao: 'Derreta a manteiga e doure a cebola picadinha. Adicione o frango e refogue até cozinhar bem, cerca de 8 minutos.', timer_segundos: 480 },
      { passo: 3, instrucao: 'Acrescente o champignon escorrido, o ketchup e a mostarda. Misture bem e deixe ferver por 2 minutos.', timer_segundos: 120 },
      { passo: 4, instrucao: 'Reduza o fogo ao mínimo, adicione o creme de leite e misture delicadamente. Não deixe ferver depois do creme — coalha.', timer_segundos: null },
      { passo: 5, instrucao: 'Sirva imediatamente sobre arroz branco e batatinha palha.', timer_segundos: null }
    ],
    conhecimento: {
      corte_ideal: 'Peito de frango é o mais usado, mas a sobrecoxa desossada e sem pele fica ainda mais macia e saborosa. Vale o trabalho extra de limpar.',
      dica_compra: 'Creme de leite de caixinha é mais prático, mas o fresco deixa o strogonoff mais cremoso e encorpado.',
      substituicoes: 'Sem ketchup? Use molho de tomate com uma pitada de açúcar. Sem champignon? Pode fazer sem ou usar palmito em rodelas.',
      adequado_crianca: 'Um dos pratos favoritos das crianças. Omita a mostarda se preferir mais suave.',
      harmonizacao: 'Arroz branco e batatinha palha são obrigatórios. Adicione batata frita em palito para um visual mais bonito.',
      aviso: 'O creme de leite nunca deve ferver após ser adicionado — o calor alto faz coalhar.'
    },
    armazenamento: { geladeira: 'até 2 dias', freezer: 'Não indicado (creme de leite separa ao descongelar)', observacoes: 'Reaqueça em fogo baixo, mexendo sempre.' },
    nutricao: { calorias: 410, proteina: 36, carboidrato: 12, gordura: 24, fibra: 1 }
  },

  {
    id: 'fr005', emoji: '🍖', grupo: 'frango',
    nome: 'Frango à Milanesa',
    tipo: 'prato-principal', cozinha: 'Brasileira',
    tempo_preparo: 30, porcoes: 4, dificuldade: 'fácil',
    adequado_crianca: true, vegetariano: false,
    tags: ['frito', 'criança', 'rápido'],
    ingredientes: [
      { item: 'filé de frango (peito)', quantidade: '4 unidades', opcional: false },
      { item: 'farinha de rosca', quantidade: '1 xícara', opcional: false },
      { item: 'farinha de trigo', quantidade: '1/2 xícara', opcional: false },
      { item: 'ovo', quantidade: '2 unidades', opcional: false },
      { item: 'sal, pimenta e alho', quantidade: 'a gosto', opcional: false },
      { item: 'óleo para fritar', quantidade: 'suficiente', opcional: false },
      { item: 'queijo ralado', quantidade: '2 colheres de sopa', opcional: true }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Bata os filés entre dois plásticos até ficarem com espessura uniforme de cerca de 1cm. Tempere com sal, pimenta e alho.', timer_segundos: null },
      { passo: 2, instrucao: 'Passe cada filé na farinha de trigo, depois no ovo batido e por último na farinha de rosca. Aperte bem para grudar. Leve à geladeira por 10 minutos antes de fritar.', timer_segundos: 600 },
      { passo: 3, instrucao: 'Aqueça o óleo em fogo médio-alto. O óleo deve estar quente mas não fumegando — coloque um pedacinho de pão: se borbulhar, está pronto.', timer_segundos: null },
      { passo: 4, instrucao: 'Frite 2 a 3 minutos de cada lado até dourar. Não coloque muitos de uma vez — abaixa a temperatura do óleo.', timer_segundos: 360 },
      { passo: 5, instrucao: 'Escorra em papel toalha e sirva imediatamente.', timer_segundos: null }
    ],
    conhecimento: {
      corte_ideal: 'Filé de peito é o clássico. Para uma versão mais suculenta, use sobrecoxa desossada e aberta em manta — fica crocante por fora e úmido por dentro.',
      dica_compra: 'Peça ao açougueiro para fazer o filé bem fino — facilita o empanamento e o cozimento uniforme.',
      substituicoes: 'A farinha de rosca pode ser substituída por flocos de milho triturados para uma versão mais crocante. Pode assar no forno a 200°C por 25 minutos para uma opção mais saudável.',
      adequado_crianca: 'Um dos favoritos! O empanamento crocante é irresistível. Para crianças muito pequenas, corte em tiras antes de fritar.',
      harmonizacao: 'Arroz, feijão, purê de batata. Também fica incrível com salada e limão espremido.',
      aviso: 'Óleo a temperatura correta é fundamental. Óleo frio deixa a milanesa encharcada de gordura.'
    },
    armazenamento: { geladeira: 'até 2 dias', freezer: 'até 1 mês (empanado cru)', observacoes: 'Para reaquecer, use forno ou airfryer para recuperar a crocância.' },
    nutricao: { calorias: 360, proteina: 34, carboidrato: 28, gordura: 12, fibra: 1 }
  },

  {
    id: 'fr006', emoji: '🥘', grupo: 'frango',
    nome: 'Frango com Quiabo',
    tipo: 'prato-principal', cozinha: 'Brasileira',
    tempo_preparo: 60, porcoes: 5, dificuldade: 'médio',
    adequado_crianca: false, vegetariano: false,
    tags: ['mineiro', 'tradicional', 'domingo'],
    ingredientes: [
      { item: 'frango em pedaços', quantidade: '1,5kg', opcional: false },
      { item: 'quiabo', quantidade: '500g', opcional: false },
      { item: 'cebola', quantidade: '2 unidades', opcional: false },
      { item: 'alho', quantidade: '4 dentes', opcional: false },
      { item: 'tomate', quantidade: '3 unidades', opcional: false },
      { item: 'limão', quantidade: '1 unidade', opcional: false },
      { item: 'óleo', quantidade: '3 colheres de sopa', opcional: false },
      { item: 'sal, pimenta, açafrão', quantidade: 'a gosto', opcional: false },
      { item: 'cheiro-verde', quantidade: '1/2 maço', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Lave o quiabo, seque bem, corte a tampinha e as pontas. Frite no óleo quente por 5 minutos mexendo sem parar — isso elimina a baba. Reserve.', timer_segundos: 300 },
      { passo: 2, instrucao: 'No mesmo óleo, doure o frango temperado com sal, pimenta e açafrão. Doure bem de todos os lados.', timer_segundos: null },
      { passo: 3, instrucao: 'Adicione cebola, alho e tomate. Refogue por 5 minutos.', timer_segundos: 300 },
      { passo: 4, instrucao: 'Junte 2 xícaras de água quente e cozinhe tampado por 30 minutos em fogo médio.', timer_segundos: 1800 },
      { passo: 5, instrucao: 'Acrescente o quiabo frito, misture com cuidado e cozinhe por mais 10 minutos. Finalize com cheiro-verde e um fio de limão.', timer_segundos: 600 }
    ],
    conhecimento: {
      corte_ideal: 'Frango caipira dá um caldo incomparável a este prato. Se não encontrar, use coxas e sobrecoxas.',
      dica_compra: 'Escolha o quiabo mais novo e verde — quanto menor, menos fibroso. Evite os que já têm as pontas escurecidas.',
      substituicoes: null,
      adequado_crianca: 'Prato não indicado para crianças muito pequenas pela textura do quiabo, mas crianças maiores que já conhecem geralmente gostam.',
      harmonizacao: 'Arroz branco, angu de fubá ou polenta. O clássico mineiro de domingo.',
      aviso: 'O segredo para eliminar a baba do quiabo é secá-lo muito bem antes de fritar e não tampar a panela nesta etapa.'
    },
    armazenamento: { geladeira: 'até 2 dias', freezer: 'até 1 mês', observacoes: 'O quiabo amolece com o tempo mas o sabor melhora no dia seguinte.' },
    nutricao: { calorias: 340, proteina: 36, carboidrato: 12, gordura: 16, fibra: 4 }
  },

  {
    id: 'fr007', emoji: '🍗', grupo: 'frango',
    nome: 'Sobrecoxa Assada com Alecrim',
    tipo: 'prato-principal', cozinha: 'Brasileira',
    tempo_preparo: 60, porcoes: 4, dificuldade: 'fácil',
    adequado_crianca: true, vegetariano: false,
    tags: ['assado', 'simples', 'aromático'],
    ingredientes: [
      { item: 'sobrecoxa de frango', quantidade: '8 unidades', opcional: false },
      { item: 'alho', quantidade: '6 dentes', opcional: false },
      { item: 'alecrim fresco', quantidade: '3 ramos', opcional: false },
      { item: 'azeite', quantidade: '4 colheres de sopa', opcional: false },
      { item: 'suco de limão', quantidade: '3 colheres de sopa', opcional: false },
      { item: 'páprica', quantidade: '1 colher de chá', opcional: false },
      { item: 'sal e pimenta', quantidade: 'a gosto', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Faça cortes profundos na sobrecoxa para o tempero penetrar. Misture o alho amassado, limão, azeite, páprica e sal.', timer_segundos: null },
      { passo: 2, instrucao: 'Cubra as sobrecoxas com a marinada e o alecrim. Deixe marinar por pelo menos 30 minutos.', timer_segundos: 1800 },
      { passo: 3, instrucao: 'Preaqueça o forno a 200°C. Coloque as sobrecoxas com a pele para cima na assadeira.', timer_segundos: null },
      { passo: 4, instrucao: 'Asse por 45 a 50 minutos, regando com o caldo da assadeira a cada 15 minutos. Estará pronto quando a pele estiver bem dourada e crocante.', timer_segundos: 2700 }
    ],
    conhecimento: {
      corte_ideal: 'A sobrecoxa é a parte mais saborosa do frango para assar — tem gordura entremeada que mantém a carne suculenta mesmo no forno. Nunca reseca como o peito.',
      dica_compra: 'Com osso e pele fica muito mais saboroso e suculento. A versão desossada é mais prática mas perde em sabor.',
      substituicoes: 'Alecrim pode ser substituído por tomilho ou orégano fresco.',
      adequado_crianca: 'Sim — retire a pele e o osso antes de servir.',
      harmonizacao: 'Purê de batata, arroz com legumes ou salada verde com tomate.',
      aviso: null
    },
    armazenamento: { geladeira: 'até 3 dias', freezer: 'até 3 meses', observacoes: null },
    nutricao: { calorias: 380, proteina: 40, carboidrato: 2, gordura: 22, fibra: 0 }
  },

  {
    id: 'fr008', emoji: '🍜', grupo: 'frango',
    nome: 'Caldo de Frango Caseiro',
    tipo: 'sopa', cozinha: 'Brasileira',
    tempo_preparo: 90, porcoes: 6, dificuldade: 'fácil',
    adequado_crianca: true, vegetariano: false,
    tags: ['frio', 'reconfortante', 'base'],
    ingredientes: [
      { item: 'carcaça de frango ou frango inteiro', quantidade: '1 unidade', opcional: false },
      { item: 'cenoura', quantidade: '2 unidades', opcional: false },
      { item: 'cebola', quantidade: '2 unidades', opcional: false },
      { item: 'salsão (aipo)', quantidade: '2 talos', opcional: false },
      { item: 'alho', quantidade: '4 dentes', opcional: false },
      { item: 'pimenta em grão', quantidade: '1 colher de chá', opcional: false },
      { item: 'louro', quantidade: '2 folhas', opcional: false },
      { item: 'sal', quantidade: 'a gosto', opcional: false },
      { item: 'cheiro-verde', quantidade: '1 maço', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Coloque todos os ingredientes em panela grande com 3 litros de água fria. Começar com água fria extrai mais sabor.', timer_segundos: null },
      { passo: 2, instrucao: 'Leve ao fogo alto. Quando ferver, reduza ao mínimo e retire a espuma que se forma na superfície.', timer_segundos: null },
      { passo: 3, instrucao: 'Cozinhe em fogo baixo por 1 hora e meia, com a panela semiaberta.', timer_segundos: 5400 },
      { passo: 4, instrucao: 'Coe e reserve o caldo. Desfie a carne para usar em outras receitas. Descarte os legumes.', timer_segundos: null },
      { passo: 5, instrucao: 'Para clarificar, deixe esfriar e retire a gordura que sobe para a superfície. Guarde em potes ou congele em cubos de gelo.', timer_segundos: null }
    ],
    conhecimento: {
      corte_ideal: 'Carcaças dão o caldo mais gelatinoso e saboroso. Asas e pescoço de frango são excelentes e mais baratos. Frango inteiro funciona muito bem e você aproveita a carne desfiada.',
      dica_compra: 'Peça ao açougueiro as carcaças — geralmente são baratas ou até gratuitas.',
      substituicoes: null,
      adequado_crianca: 'Base perfeita para sopa de macarrão, canja e risoto. Ideal para crianças.',
      harmonizacao: 'Use como base para canja, sopa de legumes, risoto ou molhos.',
      aviso: null
    },
    armazenamento: { geladeira: 'até 5 dias', freezer: 'até 6 meses (em cubinhos de gelo)', observacoes: 'Congele em forminhas de gelo para usar pequenas porções como tempero.' },
    nutricao: { calorias: 45, proteina: 6, carboidrato: 3, gordura: 1, fibra: 0 }
  },

  {
    id: 'fr009', emoji: '🫕', grupo: 'frango',
    nome: 'Galinhada Caipira',
    tipo: 'prato-principal', cozinha: 'Brasileira',
    tempo_preparo: 75, porcoes: 6, dificuldade: 'médio',
    adequado_crianca: true, vegetariano: false,
    tags: ['goiano', 'interior', 'arroz junto'],
    ingredientes: [
      { item: 'frango caipira ou colonial em pedaços', quantidade: '1,5kg', opcional: false },
      { item: 'arroz', quantidade: '2 xícaras', opcional: false },
      { item: 'açafrão da terra (cúrcuma)', quantidade: '1 colher de chá', opcional: false },
      { item: 'cebola', quantidade: '2 unidades', opcional: false },
      { item: 'alho', quantidade: '5 dentes', opcional: false },
      { item: 'tomate', quantidade: '3 unidades', opcional: false },
      { item: 'pimentão amarelo e vermelho', quantidade: '1/2 de cada', opcional: false },
      { item: 'óleo', quantidade: '3 colheres de sopa', opcional: false },
      { item: 'sal e pimenta-do-reino', quantidade: 'a gosto', opcional: false },
      { item: 'cheiro-verde', quantidade: 'a gosto', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Tempere o frango com sal, pimenta, alho e açafrão. Deixe pegar gosto por 30 minutos.', timer_segundos: 1800 },
      { passo: 2, instrucao: 'Doure bem o frango no óleo quente. Reserve.', timer_segundos: null },
      { passo: 3, instrucao: 'Na mesma panela, refogue cebola, alho restante, tomate e pimentão até murchar.', timer_segundos: null },
      { passo: 4, instrucao: 'Volte o frango, adicione o arroz lavado, misture bem para envolver no tempero.', timer_segundos: null },
      { passo: 5, instrucao: 'Adicione 4 xícaras de água quente com sal. Cozinhe tampado em fogo médio por 20 minutos.', timer_segundos: 1200 },
      { passo: 6, instrucao: 'Desligue, deixe repousar 5 minutos tampado. Finalize com cheiro-verde.', timer_segundos: 300 }
    ],
    conhecimento: {
      corte_ideal: 'Frango caipira ou colonial é fundamental — tem mais sabor e a gordura amarelada natural não é defeito, é qualidade. O frango de granja resulta num prato mais insosso.',
      dica_compra: 'Feiras livres e mercados do interior têm frango caipira. Se não encontrar, o frango colonial (criação mais solta) é uma boa alternativa.',
      substituicoes: 'O açafrão da terra (cúrcuma) é o responsável pela cor amarela linda. Não substitua por colorífico — o sabor é diferente.',
      adequado_crianca: 'Ótimo para crianças — o arroz já vem temperado e suculento.',
      harmonizacao: 'Prato completo em si. Acompanha bem couve refogada ou salada.',
      aviso: null
    },
    armazenamento: { geladeira: 'até 2 dias', freezer: 'até 2 meses', observacoes: 'O arroz absorve mais líquido na geladeira — adicione um pouco de água ao reaquecer.' },
    nutricao: { calorias: 450, proteina: 38, carboidrato: 42, gordura: 14, fibra: 2 }
  },

  {
    id: 'fr010', emoji: '🥗', grupo: 'frango',
    nome: 'Frango Desfiado Temperado',
    tipo: 'prato-principal', cozinha: 'Brasileira',
    tempo_preparo: 35, porcoes: 4, dificuldade: 'fácil',
    adequado_crianca: true, vegetariano: false,
    tags: ['versátil', 'base', 'rápido'],
    ingredientes: [
      { item: 'peito de frango', quantidade: '600g', opcional: false },
      { item: 'cebola', quantidade: '1 unidade', opcional: false },
      { item: 'alho', quantidade: '3 dentes', opcional: false },
      { item: 'tomate', quantidade: '2 unidades', opcional: false },
      { item: 'pimentão', quantidade: '1/2 unidade', opcional: true },
      { item: 'azeite', quantidade: '2 colheres de sopa', opcional: false },
      { item: 'sal, pimenta, açafrão', quantidade: 'a gosto', opcional: false },
      { item: 'cheiro-verde', quantidade: 'a gosto', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Cozinhe o peito de frango em água com sal, cebola e louro por 20 minutos na pressão ou 35 minutos em panela normal.', timer_segundos: 1200 },
      { passo: 2, instrucao: 'Retire, deixe amornar e desfie com dois garfos. Reserve o caldo.', timer_segundos: null },
      { passo: 3, instrucao: 'Refogue alho e cebola no azeite. Adicione o tomate e pimentão, deixe murchar.', timer_segundos: null },
      { passo: 4, instrucao: 'Adicione o frango desfiado, misture bem. Molhe com um pouco do caldo do cozimento para não ressecar.', timer_segundos: null },
      { passo: 5, instrucao: 'Ajuste o sal, adicione cheiro-verde e sirva.', timer_segundos: null }
    ],
    conhecimento: {
      corte_ideal: 'Peito de frango é o mais usado por ter menos gordura. Mas sobrecoxa desossada desfiada fica muito mais suculenta e saborosa — vale a diferença.',
      dica_compra: 'Para desfiar melhor, não cozinhe demais — o frango cozido no ponto certo (não desmanchando) desfia em tiras mais longas e bonitas.',
      substituicoes: null,
      adequado_crianca: 'Perfeito — sem osso, macio, versátil. Use em sanduíches, coxinha, recheio de torta, tapioca.',
      harmonizacao: 'Use em sanduíche natural, recheio de empadão, coxinha, torta, tapioca ou misturado ao arroz.',
      aviso: null
    },
    armazenamento: { geladeira: 'até 4 dias', freezer: 'até 3 meses', observacoes: 'Congele em porções separadas. Use o caldo do cozimento para reaquecer.' },
    nutricao: { calorias: 220, proteina: 38, carboidrato: 4, gordura: 6, fibra: 1 }
  },

  {
    id: 'fr011', emoji: '🍗', grupo: 'frango',
    nome: 'Frango ao Molho de Mostarda e Mel',
    tipo: 'prato-principal', cozinha: 'Brasileira',
    tempo_preparo: 40, porcoes: 4, dificuldade: 'fácil',
    adequado_crianca: true, vegetariano: false,
    tags: ['agridoce', 'forno', 'rápido'],
    ingredientes: [
      { item: 'coxas de frango', quantidade: '8 unidades', opcional: false },
      { item: 'mostarda amarela', quantidade: '3 colheres de sopa', opcional: false },
      { item: 'mel', quantidade: '3 colheres de sopa', opcional: false },
      { item: 'azeite', quantidade: '2 colheres de sopa', opcional: false },
      { item: 'alho', quantidade: '4 dentes', opcional: false },
      { item: 'sal e pimenta', quantidade: 'a gosto', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Misture mostarda, mel, azeite, alho amassado, sal e pimenta. Cubra bem as coxas com esta mistura.', timer_segundos: null },
      { passo: 2, instrucao: 'Deixe marinar por 20 minutos em temperatura ambiente ou 1 hora na geladeira.', timer_segundos: 1200 },
      { passo: 3, instrucao: 'Preaqueça o forno a 200°C. Disponha as coxas em assadeira com a pele para cima.', timer_segundos: null },
      { passo: 4, instrucao: 'Asse por 35 a 40 minutos, regando com o molho da assadeira na metade do tempo. O mel carameliza e cria uma crosta dourada irresistível.', timer_segundos: 2100 }
    ],
    conhecimento: {
      corte_ideal: 'Coxas são ideais por tolerar bem o caramelização do mel sem ressecar. O peito queima mais fácil.',
      dica_compra: null,
      substituicoes: 'Mostarda dijon no lugar da amarela dá um sabor mais sofisticado.',
      adequado_crianca: 'Sim — o sabor agridoce é muito apreciado por crianças.',
      harmonizacao: 'Arroz branco, purê de batata-doce ou salada verde.',
      aviso: 'O mel carameliza rapidamente — fique de olho nos últimos 10 minutos para não queimar.'
    },
    armazenamento: { geladeira: 'até 3 dias', freezer: 'até 2 meses', observacoes: null },
    nutricao: { calorias: 355, proteina: 38, carboidrato: 18, gordura: 14, fibra: 0 }
  },

  {
    id: 'fr012', emoji: '🥘', grupo: 'frango',
    nome: 'Frango Caçador (Cacciatore)',
    tipo: 'prato-principal', cozinha: 'Italiana',
    tempo_preparo: 65, porcoes: 5, dificuldade: 'médio',
    adequado_crianca: true, vegetariano: false,
    tags: ['italiano', 'tomate', 'vinho'],
    ingredientes: [
      { item: 'frango em pedaços', quantidade: '1,2kg', opcional: false },
      { item: 'tomate pelado em lata', quantidade: '1 lata (400g)', opcional: false },
      { item: 'vinho tinto seco', quantidade: '1/2 xícara', opcional: false },
      { item: 'azeitona preta', quantidade: '1/2 xícara', opcional: false },
      { item: 'cebola', quantidade: '2 unidades', opcional: false },
      { item: 'alho', quantidade: '4 dentes', opcional: false },
      { item: 'cogumelo', quantidade: '200g', opcional: true },
      { item: 'louro, tomilho e orégano', quantidade: 'a gosto', opcional: false },
      { item: 'azeite', quantidade: '3 colheres de sopa', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Doure os pedaços de frango no azeite quente. Reserve.', timer_segundos: null },
      { passo: 2, instrucao: 'Na mesma panela, refogue cebola e alho até dourar. Adicione o vinho e deixe evaporar 2 minutos.', timer_segundos: 120 },
      { passo: 3, instrucao: 'Acrescente o tomate pelado amassado, louro, tomilho e orégano. Cozinhe por 5 minutos.', timer_segundos: 300 },
      { passo: 4, instrucao: 'Volte o frango à panela. Adicione os cogumelos e azeitonas. Tampe e cozinhe em fogo médio-baixo por 40 minutos.', timer_segundos: 2400 },
      { passo: 5, instrucao: 'Ajuste o sal e sirva sobre macarrão, polenta ou pão.', timer_segundos: null }
    ],
    conhecimento: {
      corte_ideal: 'Frango inteiro cortado em pedaços dá mais sabor ao molho. Coxa e sobrecoxa são as melhores partes — aguentam cozinhar mais tempo sem ressecar.',
      dica_compra: null,
      substituicoes: 'Sem vinho? Use caldo de frango ou suco de uva integral. Fica diferente mas ainda muito bom.',
      adequado_crianca: 'Sim — o molho de tomate é suave. Omita o vinho para crianças menores.',
      harmonizacao: 'Macarrão, polenta cremosa ou pão italiano.',
      aviso: null
    },
    armazenamento: { geladeira: 'até 3 dias', freezer: 'até 3 meses', observacoes: 'Melhora no dia seguinte — os sabores se integram ainda mais.' },
    nutricao: { calorias: 380, proteina: 40, carboidrato: 10, gordura: 18, fibra: 3 }
  },

  {
    id: 'fr013', emoji: '🍗', grupo: 'frango',
    nome: 'Drumetes Assados Crocantes',
    tipo: 'lanche', cozinha: 'Brasileira',
    tempo_preparo: 50, porcoes: 4, dificuldade: 'fácil',
    adequado_crianca: true, vegetariano: false,
    tags: ['festa', 'lanche', 'crocante'],
    ingredientes: [
      { item: 'drumetes (coxinha da asa)', quantidade: '1kg', opcional: false },
      { item: 'molho shoyu', quantidade: '3 colheres de sopa', opcional: false },
      { item: 'alho', quantidade: '4 dentes', opcional: false },
      { item: 'mel', quantidade: '2 colheres de sopa', opcional: false },
      { item: 'azeite', quantidade: '2 colheres de sopa', opcional: false },
      { item: 'páprica defumada', quantidade: '1 colher de chá', opcional: false },
      { item: 'sal e pimenta', quantidade: 'a gosto', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Seque bem os drumetes com papel toalha — isso é o segredo para ficarem crocantes.', timer_segundos: null },
      { passo: 2, instrucao: 'Misture shoyu, mel, alho, azeite e páprica. Marine os drumetes por 30 minutos mínimo.', timer_segundos: 1800 },
      { passo: 3, instrucao: 'Preaqueça o forno a 220°C. Disponha em assadeira forrada com papel manteiga, sem sobrepor.', timer_segundos: null },
      { passo: 4, instrucao: 'Asse por 35 a 40 minutos, virando na metade do tempo. Os últimos 5 minutos, ligue o grill para dourar bem.', timer_segundos: 2100 }
    ],
    conhecimento: {
      corte_ideal: 'Drumetes são a parte de baixo da asa. São pequenos, saborosos e práticos de comer com a mão. Perfeitos para festa.',
      dica_compra: 'Vêm em embalagens de 1kg. Seque muito bem — umidade é inimiga da crocância.',
      substituicoes: 'A mesma marinada funciona com coxinha da asa inteira ou coxa.',
      adequado_crianca: 'Ótimo para crianças — tamanho perfeito para a mão pequena.',
      harmonizacao: 'Molho ranch caseiro, guacamole ou apenas limão espremido.',
      aviso: null
    },
    armazenamento: { geladeira: 'até 2 dias', freezer: 'até 2 meses', observacoes: 'Reaqueça no forno ou airfryer para recuperar a crocância.' },
    nutricao: { calorias: 290, proteina: 30, carboidrato: 12, gordura: 14, fibra: 0 }
  },

  {
    id: 'fr014', emoji: '🍜', grupo: 'frango',
    nome: 'Canja de Galinha',
    tipo: 'sopa', cozinha: 'Brasileira',
    tempo_preparo: 50, porcoes: 6, dificuldade: 'fácil',
    adequado_crianca: true, vegetariano: false,
    tags: ['doença', 'reconfortante', 'criança'],
    ingredientes: [
      { item: 'frango (coxa e sobrecoxa)', quantidade: '600g', opcional: false },
      { item: 'arroz', quantidade: '1/2 xícara', opcional: false },
      { item: 'cenoura', quantidade: '2 unidades', opcional: false },
      { item: 'cebola', quantidade: '1 unidade', opcional: false },
      { item: 'alho', quantidade: '3 dentes', opcional: false },
      { item: 'cheiro-verde', quantidade: 'generoso', opcional: false },
      { item: 'louro', quantidade: '2 folhas', opcional: false },
      { item: 'sal', quantidade: 'a gosto', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Cozinhe o frango com cebola, alho, louro e sal em 2 litros de água por 30 minutos.', timer_segundos: 1800 },
      { passo: 2, instrucao: 'Retire o frango, desfie a carne e descarte ossos e pele. Reserve o caldo.', timer_segundos: null },
      { passo: 3, instrucao: 'Volte o caldo ao fogo, adicione a cenoura ralada ou em rodelas finas e o arroz lavado.', timer_segundos: null },
      { passo: 4, instrucao: 'Cozinhe por 20 minutos em fogo médio. O arroz vai engrossar o caldo.', timer_segundos: 1200 },
      { passo: 5, instrucao: 'Adicione o frango desfiado, ajuste o sal e finalize com muito cheiro-verde picado.', timer_segundos: null }
    ],
    conhecimento: {
      corte_ideal: 'Frango inteiro ou carcaça faz o caldo mais rico. Coxa e sobrecoxa são práticas e econômicas.',
      dica_compra: null,
      substituicoes: 'Pode usar macarrão tipo aletria no lugar do arroz para uma versão diferente.',
      adequado_crianca: 'O alimento reconfortante por excelência. Ótimo para crianças gripadas ou com mal-estar.',
      harmonizacao: 'Sirva como prato único. Pão francês ao lado é clássico.',
      aviso: null
    },
    armazenamento: { geladeira: 'até 3 dias', freezer: 'até 2 meses (o arroz amolece ao descongelar)', observacoes: 'Para congelar, faça sem o arroz e adicione ao reaquecer.' },
    nutricao: { calorias: 210, proteina: 24, carboidrato: 18, gordura: 5, fibra: 2 }
  },

  {
    id: 'fr015', emoji: '🥙', grupo: 'frango',
    nome: 'Frango ao Molho Pardo',
    tipo: 'prato-principal', cozinha: 'Brasileira',
    tempo_preparo: 70, porcoes: 5, dificuldade: 'médio',
    adequado_crianca: false, vegetariano: false,
    tags: ['mineiro', 'sangue', 'tradicional'],
    ingredientes: [
      { item: 'frango caipira cortado', quantidade: '1,5kg', opcional: false },
      { item: 'sangue do frango', quantidade: '200ml', opcional: false },
      { item: 'vinagre', quantidade: '3 colheres de sopa', opcional: false },
      { item: 'cebola', quantidade: '2 unidades', opcional: false },
      { item: 'alho', quantidade: '4 dentes', opcional: false },
      { item: 'louro', quantidade: '2 folhas', opcional: false },
      { item: 'óleo', quantidade: '3 colheres de sopa', opcional: false },
      { item: 'sal, pimenta, açafrão', quantidade: 'a gosto', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Misture o sangue com o vinagre imediatamente ao abater — o ácido impede a coagulação. Reserve.', timer_segundos: null },
      { passo: 2, instrucao: 'Tempere o frango com sal, pimenta, alho e açafrão. Doure bem no óleo.', timer_segundos: null },
      { passo: 3, instrucao: 'Adicione cebola, louro e 1 xícara de água. Cozinhe tampado por 40 minutos.', timer_segundos: 2400 },
      { passo: 4, instrucao: 'Com o fogo baixo, adicione o sangue com vinagre mexendo constantemente para não talhar.', timer_segundos: null },
      { passo: 5, instrucao: 'Cozinhe por mais 10 minutos em fogo muito baixo até engrossar. Ajuste o sal.', timer_segundos: 600 }
    ],
    conhecimento: {
      corte_ideal: 'Frango caipira é imprescindível nesta receita — o frango de granja tem sangue em quantidade insuficiente e sabor muito diferente.',
      dica_compra: 'Só é possível fazer com frango abatido na hora. Compre em feiras ou diretamente de produtor.',
      substituicoes: null,
      adequado_crianca: 'Não recomendado para crianças.',
      harmonizacao: 'Angu de fubá, arroz branco e couve refogada. A santíssima trindade mineira.',
      aviso: 'Receita tradicional mineira que requer sangue fresco. Se não tiver, infelizmente não tem como substituir.'
    },
    armazenamento: { geladeira: 'até 2 dias', freezer: 'não recomendado', observacoes: null },
    nutricao: { calorias: 390, proteina: 42, carboidrato: 6, gordura: 20, fibra: 0 }
  },

  {
    id: 'fr016', emoji: '🍗', grupo: 'frango',
    nome: 'Isca de Frango Crocante',
    tipo: 'lanche', cozinha: 'Brasileira',
    tempo_preparo: 25, porcoes: 4, dificuldade: 'fácil',
    adequado_crianca: true, vegetariano: false,
    tags: ['rápido', 'lanche', 'festa'],
    ingredientes: [
      { item: 'filé de frango', quantidade: '500g', opcional: false },
      { item: 'flocos de milho (cornflakes)', quantidade: '1 xícara triturada', opcional: false },
      { item: 'ovo', quantidade: '2 unidades', opcional: false },
      { item: 'alho em pó', quantidade: '1/2 colher de chá', opcional: false },
      { item: 'sal, pimenta, páprica', quantidade: 'a gosto', opcional: false },
      { item: 'óleo para fritar', quantidade: 'suficiente', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Corte o frango em tiras finas. Tempere com sal, pimenta, páprica e alho em pó.', timer_segundos: null },
      { passo: 2, instrucao: 'Bata os ovos em tigela. Triture os flocos de milho (não muito fino — deixe pedaços para ficar crocante).', timer_segundos: null },
      { passo: 3, instrucao: 'Passe as tiras de frango no ovo e depois nos flocos triturados, pressionando bem.', timer_segundos: null },
      { passo: 4, instrucao: 'Frite em óleo quente por 3 a 4 minutos até dourar. Escorra em papel toalha.', timer_segundos: 240 }
    ],
    conhecimento: {
      corte_ideal: 'Peito de frango em tiras finas. Corte no sentido contrário às fibras para ficarem mais macias.',
      dica_compra: null,
      substituicoes: 'Flocos de milho dão uma crocância especial. Farinha panko também funciona muito bem.',
      adequado_crianca: 'Ótimo — as crianças adoram. Uma versão caseira saudável do nugget industrializado.',
      harmonizacao: 'Ketchup, maionese temperada, mostarda com mel.',
      aviso: null
    },
    armazenamento: { geladeira: 'até 2 dias', freezer: 'até 1 mês (empanado cru)', observacoes: 'Congele cru e frite direto do freezer, adicionando 2 minutos ao tempo.' },
    nutricao: { calorias: 310, proteina: 32, carboidrato: 22, gordura: 10, fibra: 1 }
  },

  {
    id: 'fr017', emoji: '🍲', grupo: 'frango',
    nome: 'Frango Xadrez',
    tipo: 'prato-principal', cozinha: 'Brasileira',
    tempo_preparo: 30, porcoes: 4, dificuldade: 'fácil',
    adequado_crianca: true, vegetariano: false,
    tags: ['rápido', 'colorido', 'pimentão'],
    ingredientes: [
      { item: 'peito de frango', quantidade: '600g', opcional: false },
      { item: 'pimentão vermelho', quantidade: '1 unidade', opcional: false },
      { item: 'pimentão verde', quantidade: '1 unidade', opcional: false },
      { item: 'pimentão amarelo', quantidade: '1 unidade', opcional: false },
      { item: 'amendoim torrado', quantidade: '1/2 xícara', opcional: false },
      { item: 'molho shoyu', quantidade: '3 colheres de sopa', opcional: false },
      { item: 'amido de milho', quantidade: '1 colher de sopa', opcional: false },
      { item: 'alho e gengibre', quantidade: 'a gosto', opcional: false },
      { item: 'óleo', quantidade: '2 colheres de sopa', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Corte o frango em cubos e marine com shoyu, amido e gengibre por 10 minutos.', timer_segundos: 600 },
      { passo: 2, instrucao: 'Em fogo alto, doure o frango rapidamente. Reserve.', timer_segundos: null },
      { passo: 3, instrucao: 'No mesmo wok ou frigideira, salteie os pimentões cortados em cubos por 3 minutos — devem ficar crocantes.', timer_segundos: 180 },
      { passo: 4, instrucao: 'Volte o frango, adicione o amendoim e misture rapidamente. Acerte o sal.', timer_segundos: null }
    ],
    conhecimento: {
      corte_ideal: 'Peito é o mais usado pela cor clara que contrasta com os pimentões. A sobrecoxa desossada fica mais suculenta mas escurece mais.',
      dica_compra: null,
      substituicoes: 'Sem amendoim? Use castanha de caju. O importante é manter o elemento crocante.',
      adequado_crianca: 'Bom para crianças que já gostam de pimentão. O sabor é suave e adocicado.',
      harmonizacao: 'Arroz branco ou macarrão de acompanhamento.',
      aviso: 'Atenção a crianças com alergia a amendoim — muito comum em crianças pequenas.'
    },
    armazenamento: { geladeira: 'até 2 dias', freezer: 'até 1 mês', observacoes: 'Os pimentões perdem a crocância na geladeira — reaqueça rapidamente em fogo alto.' },
    nutricao: { calorias: 340, proteina: 36, carboidrato: 16, gordura: 14, fibra: 3 }
  },

  {
    id: 'fr018', emoji: '🥘', grupo: 'frango',
    nome: 'Frango com Leite de Coco',
    tipo: 'prato-principal', cozinha: 'Brasileira',
    tempo_preparo: 45, porcoes: 4, dificuldade: 'fácil',
    adequado_crianca: true, vegetariano: false,
    tags: ['cremoso', 'nordestino', 'coco'],
    ingredientes: [
      { item: 'frango em pedaços', quantidade: '1kg', opcional: false },
      { item: 'leite de coco', quantidade: '1 lata (400ml)', opcional: false },
      { item: 'tomate', quantidade: '3 unidades', opcional: false },
      { item: 'cebola', quantidade: '1 unidade', opcional: false },
      { item: 'alho', quantidade: '4 dentes', opcional: false },
      { item: 'coentro', quantidade: 'a gosto', opcional: true },
      { item: 'azeite de dendê', quantidade: '1 colher de sopa', opcional: true },
      { item: 'sal, pimenta e açafrão', quantidade: 'a gosto', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Doure o frango temperado no azeite. Reserve.', timer_segundos: null },
      { passo: 2, instrucao: 'Refogue cebola, alho e tomate até criar um molho.', timer_segundos: null },
      { passo: 3, instrucao: 'Volte o frango, adicione o leite de coco e o dendê. Tampe e cozinhe em fogo médio por 30 minutos.', timer_segundos: 1800 },
      { passo: 4, instrucao: 'Ajuste o sal, finalize com coentro e sirva.', timer_segundos: null }
    ],
    conhecimento: {
      corte_ideal: 'Coxa e sobrecoxa são ideais — o leite de coco cria um molho rico que combina com cortes mais gordurosos.',
      dica_compra: 'Leite de coco de qualidade faz toda diferença. Use o mais cremoso que encontrar — evite as versões muito diluídas.',
      substituicoes: 'Sem dendê? O prato fica muito bom sem ele. O sabor muda mas não compromete.',
      adequado_crianca: 'Ótimo — suave e cremoso. Sirva com arroz branco.',
      harmonizacao: 'Arroz branco, pirão de peixe ou farofa de mandioca.',
      aviso: null
    },
    armazenamento: { geladeira: 'até 3 dias', freezer: 'até 2 meses', observacoes: 'O leite de coco pode separar ao congelar — misture bem ao reaquecer.' },
    nutricao: { calorias: 420, proteina: 38, carboidrato: 8, gordura: 26, fibra: 1 }
  },

  // ════════════════════════════════
  // ARROZ E FEIJÃO
  // ════════════════════════════════
  {
    id: 'ar001', emoji: '🍚', grupo: 'arroz',
    nome: 'Arroz Branco Soltinho',
    tipo: 'arroz', cozinha: 'Brasileira',
    tempo_preparo: 25, porcoes: 4, dificuldade: 'fácil',
    adequado_crianca: true, vegetariano: true,
    tags: ['base', 'dia a dia', 'básico'],
    ingredientes: [
      { item: 'arroz agulhinha', quantidade: '2 xícaras', opcional: false },
      { item: 'alho', quantidade: '2 dentes', opcional: false },
      { item: 'cebola', quantidade: '1/2 unidade', opcional: false },
      { item: 'óleo', quantidade: '2 colheres de sopa', opcional: false },
      { item: 'sal', quantidade: 'a gosto', opcional: false },
      { item: 'água quente', quantidade: '3 xícaras', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Lave o arroz em água corrente até sair limpa. Escorra bem.', timer_segundos: null },
      { passo: 2, instrucao: 'Aqueça o óleo em fogo médio-alto. Doure o alho amassado e a cebola picada.', timer_segundos: null },
      { passo: 3, instrucao: 'Adicione o arroz escorrido e frite por 2 minutos, mexendo sem parar. O arroz deve estalar e ficar translúcido nas bordas.', timer_segundos: 120 },
      { passo: 4, instrucao: 'Adicione a água quente com sal — nunca água fria, que empapa o arroz. Mexa uma única vez, tampe e reduza o fogo ao mínimo.', timer_segundos: null },
      { passo: 5, instrucao: 'Cozinhe por 12 a 14 minutos sem abrir a tampa. Desligue e deixe repousar tampado por 5 minutos.', timer_segundos: 840 },
      { passo: 6, instrucao: 'Solte com o garfo e sirva. Nunca mexa com colher — amassa os grãos.', timer_segundos: null }
    ],
    conhecimento: {
      corte_ideal: null,
      dica_compra: 'Arroz agulhinha tipo 1 é o padrão brasileiro para o dia a dia. Tipo 2 tem grãos quebrados e fica mais empapado. Arroz parboilizado é mais nutritivo e mais difícil de errar.',
      substituicoes: 'Arroz integral segue a mesma receita mas com 4 xícaras de água e 35 a 40 minutos de cozimento.',
      adequado_crianca: 'Base da alimentação da criança brasileira. Pode adicionar um fio de manteiga ao servir.',
      harmonizacao: 'Acompanha praticamente tudo — feijão, carnes, ensopados, legumes refogados.',
      aviso: 'O segredo do arroz soltinho é água quente, não abrir a tampa durante o cozimento e usar o garfo para soltar.'
    },
    armazenamento: { geladeira: 'até 4 dias', freezer: 'até 3 meses', observacoes: 'Congele em porções individuais. Reaqueça com 1 colher de água no micro-ondas tapado.' },
    nutricao: { calorias: 220, proteina: 4, carboidrato: 46, gordura: 3, fibra: 1 }
  },

  {
    id: 'ar002', emoji: '🍚', grupo: 'arroz',
    nome: 'Arroz com Alho Torrado',
    tipo: 'arroz', cozinha: 'Brasileira',
    tempo_preparo: 25, porcoes: 4, dificuldade: 'fácil',
    adequado_crianca: true, vegetariano: true,
    tags: ['sabor', 'simples', 'dia a dia'],
    ingredientes: [
      { item: 'arroz agulhinha', quantidade: '2 xícaras', opcional: false },
      { item: 'alho', quantidade: '6 dentes fatiados', opcional: false },
      { item: 'azeite ou manteiga', quantidade: '3 colheres de sopa', opcional: false },
      { item: 'sal', quantidade: 'a gosto', opcional: false },
      { item: 'água quente', quantidade: '3 xícaras', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Lave e escorra o arroz. Em fogo médio-baixo, toste o alho fatiado no azeite até dourar levemente — não queime, amarga.', timer_segundos: null },
      { passo: 2, instrucao: 'Suba o fogo para médio-alto. Adicione o arroz e frite por 2 minutos.', timer_segundos: 120 },
      { passo: 3, instrucao: 'Adicione água quente com sal, tampe e reduza ao mínimo. Cozinhe por 12 a 14 minutos sem abrir.', timer_segundos: 840 },
      { passo: 4, instrucao: 'Repouse 5 minutos e solte com garfo.', timer_segundos: 300 }
    ],
    conhecimento: {
      corte_ideal: null,
      dica_compra: 'Alho fresco tem sabor muito superior ao em pó ou processado. Compre inteiro e fatie na hora.',
      substituicoes: null,
      adequado_crianca: 'Sim — o alho tostad tem sabor mais suave que o cru.',
      harmonizacao: 'Fica muito bem com carnes grelhadas, peixe assado e frango na manteiga.',
      aviso: 'Fique de olho no alho — vai do dourado ao queimado muito rapidamente.'
    },
    armazenamento: { geladeira: 'até 4 dias', freezer: 'até 3 meses', observacoes: null },
    nutricao: { calorias: 240, proteina: 4, carboidrato: 46, gordura: 5, fibra: 1 }
  },

  {
    id: 'ar003', emoji: '🍚', grupo: 'arroz',
    nome: 'Arroz à Grega',
    tipo: 'acompanhamento', cozinha: 'Brasileira',
    tempo_preparo: 30, porcoes: 6, dificuldade: 'fácil',
    adequado_crianca: true, vegetariano: true,
    tags: ['colorido', 'festas', 'legumes'],
    ingredientes: [
      { item: 'arroz agulhinha', quantidade: '2 xícaras', opcional: false },
      { item: 'ervilha', quantidade: '1 lata escorrida', opcional: false },
      { item: 'cenoura', quantidade: '1 unidade ralada', opcional: false },
      { item: 'milho', quantidade: '1 lata escorrida', opcional: false },
      { item: 'presunto', quantidade: '150g picado', opcional: true },
      { item: 'manteiga', quantidade: '2 colheres de sopa', opcional: false },
      { item: 'cebola e alho', quantidade: 'a gosto', opcional: false },
      { item: 'sal', quantidade: 'a gosto', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Cozinhe o arroz pelo método básico. Reserve.', timer_segundos: null },
      { passo: 2, instrucao: 'Derreta a manteiga, doure cebola e alho. Refogue a cenoura rallada por 2 minutos.', timer_segundos: 120 },
      { passo: 3, instrucao: 'Adicione ervilha, milho e presunto. Misture rapidamente.', timer_segundos: null },
      { passo: 4, instrucao: 'Junte o arroz cozido e misture delicadamente. Acerte o sal e sirva.', timer_segundos: null }
    ],
    conhecimento: {
      corte_ideal: null,
      dica_compra: null,
      substituicoes: 'Para versão vegetariana, omita o presunto. Pode adicionar azeitona picada, palmito ou vagem.',
      adequado_crianca: 'Ótimo — colorido e com sabores suaves. As crianças adoram achar os ingredientes no arroz.',
      harmonizacao: 'Clássico de festas e churrascos. Acompanha bem frango assado e bifes.',
      aviso: null
    },
    armazenamento: { geladeira: 'até 3 dias', freezer: 'até 2 meses', observacoes: null },
    nutricao: { calorias: 280, proteina: 8, carboidrato: 50, gordura: 6, fibra: 4 }
  },

  {
    id: 'ar004', emoji: '🍚', grupo: 'arroz',
    nome: 'Arroz de Forno com Queijo',
    tipo: 'prato-principal', cozinha: 'Brasileira',
    tempo_preparo: 50, porcoes: 6, dificuldade: 'fácil',
    adequado_crianca: true, vegetariano: true,
    tags: ['forno', 'queijo', 'cremoso'],
    ingredientes: [
      { item: 'arroz cozido', quantidade: '3 xícaras', opcional: false },
      { item: 'queijo muçarela', quantidade: '300g', opcional: false },
      { item: 'requeijão', quantidade: '200g', opcional: false },
      { item: 'creme de leite', quantidade: '1 caixa', opcional: false },
      { item: 'presunto', quantidade: '200g', opcional: true },
      { item: 'cheiro-verde', quantidade: 'a gosto', opcional: false },
      { item: 'queijo parmesão para gratinar', quantidade: 'a gosto', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Misture o arroz cozido com requeijão, creme de leite e cheiro-verde.', timer_segundos: null },
      { passo: 2, instrucao: 'Em refratário untado, coloque metade do arroz. Cubra com fatias de presunto e muçarela.', timer_segundos: null },
      { passo: 3, instrucao: 'Coloque o restante do arroz por cima. Finalize com queijo parmesão ralado.', timer_segundos: null },
      { passo: 4, instrucao: 'Leve ao forno a 180°C por 20 a 25 minutos até gratinar.', timer_segundos: 1320 }
    ],
    conhecimento: {
      corte_ideal: null,
      dica_compra: 'Ótima maneira de usar arroz que sobrou da véspera — funciona perfeitamente.',
      substituicoes: 'Para versão com carne, adicione frango desfiado temperado entre as camadas.',
      adequado_crianca: 'Adorado pelas crianças. O queijo derretido é irresistível.',
      harmonizacao: 'Prato completo. Uma salada verde basta para completar a refeição.',
      aviso: null
    },
    armazenamento: { geladeira: 'até 3 dias', freezer: 'até 2 meses', observacoes: 'Congele antes de assar para melhor resultado.' },
    nutricao: { calorias: 380, proteina: 16, carboidrato: 48, gordura: 14, fibra: 1 }
  },

  {
    id: 'ar005', emoji: '🍚', grupo: 'arroz',
    nome: 'Arroz Carreteiro',
    tipo: 'prato-principal', cozinha: 'Brasileira',
    tempo_preparo: 50, porcoes: 6, dificuldade: 'médio',
    adequado_crianca: true, vegetariano: false,
    tags: ['gaúcho', 'carne seca', 'completo'],
    ingredientes: [
      { item: 'carne seca dessalgada', quantidade: '500g', opcional: false },
      { item: 'arroz agulhinha', quantidade: '2 xícaras', opcional: false },
      { item: 'linguiça calabresa', quantidade: '200g', opcional: true },
      { item: 'cebola', quantidade: '2 unidades', opcional: false },
      { item: 'alho', quantidade: '4 dentes', opcional: false },
      { item: 'tomate', quantidade: '2 unidades', opcional: false },
      { item: 'pimentão', quantidade: '1 unidade', opcional: false },
      { item: 'cheiro-verde', quantidade: 'generoso', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Dessalgue a carne seca por 24h na geladeira trocando a água de 8 em 8 horas. Cozinhe na pressão por 20 minutos e desfie.', timer_segundos: 1200 },
      { passo: 2, instrucao: 'Doure a linguiça cortada. Adicione cebola, alho e refogue bem.', timer_segundos: null },
      { passo: 3, instrucao: 'Acrescente a carne seca desfiada, o tomate e pimentão. Refogue por 3 minutos.', timer_segundos: 180 },
      { passo: 4, instrucao: 'Adicione o arroz lavado e escorrido, frite por 2 minutos. Adicione 3 xícaras de água quente com sal.', timer_segundos: null },
      { passo: 5, instrucao: 'Cozinhe tampado em fogo baixo por 15 minutos. Finalize com cheiro-verde.', timer_segundos: 900 }
    ],
    conhecimento: {
      corte_ideal: null,
      dica_compra: 'Carne seca de qualidade faz toda diferença. A de costela tem mais sabor. Compre já dessalgada se quiser economizar tempo.',
      substituicoes: 'Pode usar charque no lugar da carne seca — processo de dessalga é o mesmo.',
      adequado_crianca: 'Sim — após dessalgar bem, o prato tem sabor suave e é nutritivo.',
      harmonizacao: 'Prato completo. Uma salada simples e vinagrete completam.',
      aviso: 'O dessalgue é obrigatório e deve ser feito na geladeira. Deixar fora da geladeira pode contaminar.'
    },
    armazenamento: { geladeira: 'até 3 dias', freezer: 'até 2 meses', observacoes: null },
    nutricao: { calorias: 460, proteina: 32, carboidrato: 48, gordura: 14, fibra: 2 }
  },

  {
    id: 'fj001', emoji: '🫘', grupo: 'feijao',
    nome: 'Feijão Carioca Básico',
    tipo: 'feijao', cozinha: 'Brasileira',
    tempo_preparo: 60, porcoes: 6, dificuldade: 'fácil',
    adequado_crianca: true, vegetariano: true,
    tags: ['base', 'dia a dia', 'básico'],
    ingredientes: [
      { item: 'feijão carioca', quantidade: '2 xícaras', opcional: false },
      { item: 'alho', quantidade: '4 dentes', opcional: false },
      { item: 'cebola', quantidade: '1 unidade', opcional: false },
      { item: 'folha de louro', quantidade: '2 unidades', opcional: false },
      { item: 'óleo', quantidade: '2 colheres de sopa', opcional: false },
      { item: 'sal', quantidade: 'a gosto', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Deixe o feijão de molho por 4 a 8 horas. Escorra, lave e descarte a água do molho.', timer_segundos: null },
      { passo: 2, instrucao: 'Cubra com água fresca — 3 dedos acima do feijão. Adicione o louro. Cozinhe na panela de pressão por 20 a 25 minutos após pegar pressão.', timer_segundos: 1500 },
      { passo: 3, instrucao: 'Deixe a pressão sair naturalmente. O feijão deve estar macio mas não desmanchando.', timer_segundos: null },
      { passo: 4, instrucao: 'Em fogo médio, refogue alho e cebola no óleo até dourar. Adicione 2 conchas de feijão cozido e amasse bem formando um caldo grosso.', timer_segundos: null },
      { passo: 5, instrucao: 'Volte este refogado para a panela com o feijão. Ajuste o sal e cozinhe aberto por 10 minutos para engrossar.', timer_segundos: 600 }
    ],
    conhecimento: {
      corte_ideal: null,
      dica_compra: 'Feijão novo cozinha mais rápido. Verifique a data da embalagem. Grãos brilhantes e uniformes indicam produto fresco. Feijão muito velho pode não amolecer mesmo na pressão.',
      substituicoes: 'Feijão preto segue o mesmo processo mas com sabor mais intenso e cor marcante. Feijão branco fica ótimo em sopas.',
      adequado_crianca: 'Base da alimentação infantil brasileira. Nutritivo, rico em proteína e ferro.',
      harmonizacao: 'Arroz branco, farofa, couve e laranja. A combinação clássica que é completa nutricionalmente.',
      aviso: 'Nunca adicione sal antes do feijão estar macio — endurece os grãos. Adicione só no final.'
    },
    armazenamento: { geladeira: 'até 5 dias', freezer: 'até 6 meses', observacoes: 'Congele em porções com bastante caldo. Reaqueça direto do freezer em fogo baixo.' },
    nutricao: { calorias: 180, proteina: 12, carboidrato: 32, gordura: 3, fibra: 9 }
  },

  {
    id: 'fj002', emoji: '🫘', grupo: 'feijao',
    nome: 'Feijão Tropeiro Mineiro',
    tipo: 'prato-principal', cozinha: 'Brasileira',
    tempo_preparo: 40, porcoes: 6, dificuldade: 'médio',
    adequado_crianca: true, vegetariano: false,
    tags: ['mineiro', 'farofa', 'proteico'],
    ingredientes: [
      { item: 'feijão carioca cozido e escorrido', quantidade: '4 xícaras', opcional: false },
      { item: 'farinha de mandioca torrada', quantidade: '1,5 xícaras', opcional: false },
      { item: 'bacon ou toucinho', quantidade: '200g', opcional: false },
      { item: 'linguiça calabresa', quantidade: '200g', opcional: false },
      { item: 'ovo', quantidade: '4 unidades', opcional: false },
      { item: 'couve manteiga', quantidade: '1 maço', opcional: false },
      { item: 'cebola e alho', quantidade: 'a gosto', opcional: false },
      { item: 'sal, pimenta e cheiro-verde', quantidade: 'a gosto', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Frite o bacon até a gordura render. Adicione a linguiça fatiada e doure. Reserve parte da gordura.', timer_segundos: null },
      { passo: 2, instrucao: 'Refogue cebola e alho na gordura. Adicione a couve picada bem fininha e salteie rapidamente por 1 minuto.', timer_segundos: 60 },
      { passo: 3, instrucao: 'Acrescente o feijão escorrido e misture bem.', timer_segundos: null },
      { passo: 4, instrucao: 'Adicione a farinha aos poucos, mexendo sem parar para envolver bem. Não deve ficar empapada nem seca.', timer_segundos: null },
      { passo: 5, instrucao: 'Abra um espaço na panela, quebre os ovos e mexa rapidamente para incorporar em pedaços. Finalize com cheiro-verde.', timer_segundos: null }
    ],
    conhecimento: {
      corte_ideal: null,
      dica_compra: 'Farinha de mandioca torrada de boa qualidade é fundamental. A grossa dá mais textura.',
      substituicoes: 'Para versão vegetariana, substitua bacon e linguiça por castanha de caju e cogumelo defumado.',
      adequado_crianca: 'Crianças maiores adoram. Omita a pimenta para os pequenos.',
      harmonizacao: 'Prato completo — proteína, carboidrato e verdura em um só. Acompanha bem arroz branco.',
      aviso: null
    },
    armazenamento: { geladeira: 'até 3 dias', freezer: 'não recomendado (farinha emborracha)', observacoes: null },
    nutricao: { calorias: 520, proteina: 28, carboidrato: 52, gordura: 22, fibra: 10 }
  },

  {
    id: 'fj003', emoji: '🍲', grupo: 'feijao',
    nome: 'Feijoada Completa',
    tipo: 'prato-principal', cozinha: 'Brasileira',
    tempo_preparo: 180, porcoes: 8, dificuldade: 'difícil',
    adequado_crianca: false, vegetariano: false,
    tags: ['sábado', 'tradição', 'família'],
    ingredientes: [
      { item: 'feijão preto', quantidade: '500g', opcional: false },
      { item: 'carne seca', quantidade: '300g', opcional: false },
      { item: 'paio', quantidade: '200g', opcional: false },
      { item: 'linguiça calabresa', quantidade: '200g', opcional: false },
      { item: 'costela de porco defumada', quantidade: '300g', opcional: false },
      { item: 'bacon', quantidade: '150g', opcional: false },
      { item: 'cebola', quantidade: '2 unidades', opcional: false },
      { item: 'alho', quantidade: '6 dentes', opcional: false },
      { item: 'folha de louro', quantidade: '3 unidades', opcional: false },
      { item: 'laranja', quantidade: '1 unidade', opcional: false },
      { item: 'cachaça', quantidade: '2 colheres de sopa', opcional: true }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Deixe a carne seca de molho por 24h trocando a água. Deixe o feijão de molho por 8h. Na véspera, pré-cozinhe as carnes salgadas separadamente.', timer_segundos: null },
      { passo: 2, instrucao: 'Cozinhe o feijão na pressão com o louro por 20 minutos. Reserve.', timer_segundos: 1200 },
      { passo: 3, instrucao: 'Frite o bacon, adicione a linguiça, o paio e a costela. Doure tudo bem.', timer_segundos: null },
      { passo: 4, instrucao: 'Refogue cebola e alho. Adicione a cachaça e flambagem rápida se quiser. Junte a carne seca.', timer_segundos: null },
      { passo: 5, instrucao: 'Adicione o feijão com o caldo às carnes. Cozinhe tudo junto em fogo baixo por 1 hora mexendo ocasionalmente.', timer_segundos: 3600 },
      { passo: 6, instrucao: 'Coloque a laranja cortada ao meio dentro da feijoada — desengordura e perfuma. Retire antes de servir. Ajuste o sal.', timer_segundos: null }
    ],
    conhecimento: {
      corte_ideal: 'Paio é o embutido clássico da feijoada — não tem substituto com o mesmo sabor. Linguiça calabresa boa é fundamental. Costela suína defumada dá profundidade ao caldo.',
      dica_compra: 'Compre um kit feijoada pronto no açougue — é mais econômico e já vem com as proporções certas. Sempre prefira carne seca de qualidade: é a alma do prato.',
      substituicoes: null,
      adequado_crianca: 'Não indicada para crianças pequenas pelo excesso de sal e gordura das carnes defumadas.',
      harmonizacao: 'Arroz branco, couve refogada com alho, farofa, laranja cortada, torresmo e pimenta. Caipirinha gelada.',
      aviso: 'O dessalgue da carne seca é obrigatório e deve ser feito na geladeira. Mínimo 24h trocando a água.'
    },
    armazenamento: { geladeira: 'até 5 dias', freezer: 'até 3 meses', observacoes: 'Melhora muito no dia seguinte. Congele em porções generosas com bastante caldo.' },
    nutricao: { calorias: 680, proteina: 45, carboidrato: 48, gordura: 32, fibra: 12 }
  },

  {
    id: 'fj004', emoji: '🫘', grupo: 'feijao',
    nome: 'Tutu de Feijão',
    tipo: 'acompanhamento', cozinha: 'Brasileira',
    tempo_preparo: 30, porcoes: 6, dificuldade: 'fácil',
    adequado_crianca: true, vegetariano: true,
    tags: ['mineiro', 'cremoso', 'farinha'],
    ingredientes: [
      { item: 'feijão carioca cozido', quantidade: '4 xícaras', opcional: false },
      { item: 'farinha de mandioca', quantidade: '3/4 xícara', opcional: false },
      { item: 'cebola', quantidade: '1 unidade', opcional: false },
      { item: 'alho', quantidade: '3 dentes', opcional: false },
      { item: 'bacon', quantidade: '100g', opcional: true },
      { item: 'óleo', quantidade: '2 colheres de sopa', opcional: false },
      { item: 'sal e cheiro-verde', quantidade: 'a gosto', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Bata o feijão cozido com um pouco do caldo no liquidificador até virar um creme.', timer_segundos: null },
      { passo: 2, instrucao: 'Frite o bacon se usar, doure cebola e alho.', timer_segundos: null },
      { passo: 3, instrucao: 'Adicione o creme de feijão e leve ao fogo médio mexendo sempre.', timer_segundos: null },
      { passo: 4, instrucao: 'Adicione a farinha aos poucos mexendo vigorosamente para não empelotar. O tutu deve ficar consistente mas cremoso.', timer_segundos: null },
      { passo: 5, instrucao: 'Ajuste o sal, finalize com cheiro-verde e sirva quente.', timer_segundos: null }
    ],
    conhecimento: {
      corte_ideal: null,
      dica_compra: 'Use feijão que sobrou do dia anterior — fica ainda mais gostoso.',
      substituicoes: null,
      adequado_crianca: 'Excelente opção — cremoso, nutritivo e saboroso. Crianças adoram com ovo frito por cima.',
      harmonizacao: 'Arroz, costelinha de porco, linguiça, ovo frito e couve. Combo mineiro tradicional.',
      aviso: null
    },
    armazenamento: { geladeira: 'até 3 dias', freezer: 'até 2 meses', observacoes: 'Fica mais espesso na geladeira — adicione caldo de feijão ao reaquecer.' },
    nutricao: { calorias: 240, proteina: 12, carboidrato: 38, gordura: 6, fibra: 8 }
  },

  {
    id: 'fj005', emoji: '🍲', grupo: 'feijao',
    nome: 'Baião de Dois',
    tipo: 'prato-principal', cozinha: 'Brasileira',
    tempo_preparo: 45, porcoes: 6, dificuldade: 'médio',
    adequado_crianca: true, vegetariano: false,
    tags: ['nordestino', 'completo', 'feijão verde'],
    ingredientes: [
      { item: 'feijão-verde (ou fradinho)', quantidade: '300g', opcional: false },
      { item: 'arroz', quantidade: '2 xícaras', opcional: false },
      { item: 'carne seca dessalgada desfiada', quantidade: '300g', opcional: false },
      { item: 'queijo de coalho', quantidade: '150g', opcional: false },
      { item: 'bacon', quantidade: '100g', opcional: false },
      { item: 'manteiga de garrafa', quantidade: '2 colheres de sopa', opcional: false },
      { item: 'cebola, alho, coentro', quantidade: 'a gosto', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Cozinhe o feijão na pressão por 15 minutos. Não deixe desmanchar.', timer_segundos: 900 },
      { passo: 2, instrucao: 'Frite o bacon, doure a carne seca. Refogue cebola e alho na manteiga de garrafa.', timer_segundos: null },
      { passo: 3, instrucao: 'Adicione o arroz e frite por 1 minuto. Junte o feijão com o caldo e água suficiente para cozinhar o arroz.', timer_segundos: null },
      { passo: 4, instrucao: 'Cozinhe tampado em fogo baixo por 15 minutos.', timer_segundos: 900 },
      { passo: 5, instrucao: 'Adicione o queijo de coalho cortado em cubos, misture e sirva com coentro fresco.', timer_segundos: null }
    ],
    conhecimento: {
      corte_ideal: null,
      dica_compra: 'Manteiga de garrafa é o elemento que define a identidade nordestina do prato. Se não encontrar, use manteiga comum. Queijo de coalho fresco é superior ao temperado.',
      substituicoes: 'Feijão-verde pode ser substituído por feijão fradinho ou caupi — ambos têm textura firme ideal para este prato.',
      adequado_crianca: 'Sim após dessalgar bem a carne. Nutritivo e completo.',
      harmonizacao: 'Prato completo. Paçoca, carne-de-sol ou costelinha completam a refeição nordestina.',
      aviso: null
    },
    armazenamento: { geladeira: 'até 3 dias', freezer: 'até 2 meses', observacoes: null },
    nutricao: { calorias: 520, proteina: 32, carboidrato: 56, gordura: 18, fibra: 8 }
  },

  {
    id: 'fj006', emoji: '🫘', grupo: 'feijao',
    nome: 'Feijão Preto Simples',
    tipo: 'feijao', cozinha: 'Brasileira',
    tempo_preparo: 60, porcoes: 6, dificuldade: 'fácil',
    adequado_crianca: true, vegetariano: true,
    tags: ['carioca', 'dia a dia', 'básico'],
    ingredientes: [
      { item: 'feijão preto', quantidade: '2 xícaras', opcional: false },
      { item: 'cebola', quantidade: '1 unidade', opcional: false },
      { item: 'alho', quantidade: '4 dentes', opcional: false },
      { item: 'louro', quantidade: '2 folhas', opcional: false },
      { item: 'óleo', quantidade: '2 colheres de sopa', opcional: false },
      { item: 'sal', quantidade: 'a gosto', opcional: false }
    ],
    modo_preparo: [
      { passo: 1, instrucao: 'Deixe de molho por 8h. Escorra e lave.', timer_segundos: null },
      { passo: 2, instrucao: 'Cozinhe na pressão com água, louro e metade da cebola por 25 minutos.', timer_segundos: 1500 },
      { passo: 3, instrucao: 'Refogue alho e cebola restante no óleo. Retire 2 conchas do feijão cozido, amasse e junte ao refogado.', timer_segundos: null },
      { passo: 4, instrucao: 'Devolva ao feijão, ajuste o sal e cozinhe aberto por 10 minutos para encorpar.', timer_segundos: 600 }
    ],
    conhecimento: {
      corte_ideal: null,
      dica_compra: 'Feijão preto é mais comum no Rio de Janeiro. Tem sabor mais terroso e encorpado que o carioca. Grãos menores são mais tenros.',
      substituicoes: null,
      adequado_crianca: 'Sim — nutritivo e saboroso. O caldo escuro pode assustar visualmente mas o sabor é suave.',
      harmonizacao: 'Arroz branco, couve refogada e laranja — o prato típico carioca.',
      aviso: null
    },
    armazenamento: { geladeira: 'até 5 dias', freezer: 'até 6 meses', observacoes: null },
    nutricao: { calorias: 175, proteina: 12, carboidrato: 30, gordura: 3, fibra: 10 }
  }

]; // fim RECEITAS_1
