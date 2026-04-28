    //variaveis
 
// informações pegas da pagina
const f_mudar_inf = document.getElementById("mudar_inf");
const f_sub_1 = document.getElementById("sub_1");
const fundo = document.getElementById("fundo");

const img_icon = document.getElementById("img-icon");
const icone_pagina = document.getElementById("icone_pagina");
const titulo_pagina = document.getElementById("titulo_pagina");
const fundo_titulo = document.getElementById("fundo_titulo");
const botao_voltar = document.getElementById("botao_voltar");
const botao_frente = document.getElementById("botao_frente");
const titulo_texto = document.getElementById("titulo_texto");
const texto_legal = document.getElementById("texto_legal");
const titulo_pagina_principal = document.getElementById("titulo-pagina");

const mostrar_indices = document.getElementById("mostrar_indices");
const lista_indices = document.getElementById("lista_indices");
const botoes_hobbys = document.getElementById("botoes_hobbys");
const botao_indice = document.getElementById("botao_indice");

let complemento_titulo = 'Apresentação - ';
let estado_aba_indice = false;

// O que vai aparecer no texto e titulo de apresentação
let indice = 2;
let text_poster = [
    {
        "titulo": "Introdução",
        "img-fundo": "/img/fundo/intro2.jpg",
        "img-icon":"/img/icone/intro.png",
        "texto": 
        `
        #t-Motivo da criação do site-t#
        Crie este site para me aprimorar em meus conhecimentos em criação de sites
        usando html, css e javascript(js). Dentre muitos projetos queria criar algo simples de se fazer
        que não pega-se muito de meu tempo para poder focar nos meus outros projetos e na faculdade, sem afeta-los.
        #brE voltar a fazer sites é algo interessante, fazer algo sem peso é interessante afinal.
        #t-Desenvolvimento do site-t#
        O site demorou entre uma semana mais ou menos para ser produzido. Não fiz em pouco tempo por conta de outros 
        projetos que também estou fazendo ai fica meio complicado focar só em um.
        #t-Proposito-t#
        O site foi feito pra falar sobre alguns hobby's que faço que acho interessante, e que quero mostrar nesse projeto.
        `
    },
    {
        "titulo": "Criando jogos",
        "img-fundo": "img/fundo/criando_jogos.jpg",
        "img-icon":"/img/icone/program.png",
        "texto": 
        `
        #t-O inicio-t# 
        Durante a infância eu sentia vontade de criar jogos interessante. A mente borbulhava de ideias
        de qual jogo fazer, de qual mecânica criar, como seria a história e tudo mais.
        Com o tempo essa vontade foi crescendo pouco a pouco, quanto mais fui criando projetos similar pra aprender
        programação e arte me faziam ter mais vontade de começar a criar meus proprios projetos.
        
        #t-Criando jogos sem programação-t#
        #i-/img/code-img/progam_visual.jpg alt="imagem do codigo do jogo"-i# 
        Antes de começar a programar de fato, eu tinha já estava criando meus jogos em game engines que não precisavam de programação
        para criar um jogo. Mas tinha um porém, eu não tinha um computador só meu, então busquei alternativas que consegui-se fazer algo,
        e encontrei o Pocket Code, onde você bate cabeça programando com blocos visuais parecido com o scratch. O problema era que eu não finalizava
        nenhum de meus projeto, mesmo sendo faceis de fazer ainda me demandavam tempo. E o lado bom de ter usado Pocket Code foi que eu aprendi logica
        de programação mesmo que levemente, entendo como funciona a logica e estrutura de algoritmo.
        
        #t-Criando jogos com game engines-t#
        #i-/img/code-img/engines.png alt="imagem do codigo do jogo"-i# 
        Eu já criei jogos em game engines, minha primeira vez mexendo com codigos foi usando a Unity com C#.
        eu não sabia de nada o que era uma variavel, um if e else, uma função, nada não sabia de nada. Só tentei copia o codigo de um tutorial do Youtube
        e saiu todo bugado, e ainda mais a Unity é muito pesada para o computador que eu usava, pois, demorava muito para abrir um simples projeto vazio.
        Ai depois de uns anos eu instalei na minha máquina o Godot para aprender a usar, mas não consegui por conta do tempo.
        
        #t-Criando jogos só na programação-t#
        #i-/img/code-img/img1.jpg alt="imagem do codigo do jogo"-i# 
        Quando vi que dava para fazer um jogo só programando eu tentei fazer o meu, eu já usei game engines, mas ainda queria 
        aprender a programar e não ficar tão dependente de funções da propria engine. E meu primeiro contanto com bibliotecas de
        jogos foi no meu ensino médio que também era técnico em informática no meu primeiro ano, eu já tava aprendendo a programar e tava mais avançado
        nessa matéria. A linguagem que começamos a programar foi em C, e eu tava aprendendo C++, então comecei a programar em C.
        Como eu tinha mais tempo mexendo com C++ eu comecei a criar uns projetos de jogos usando a #link-liballeg.org/index.html target="_black" a=biblioteca Allegro-link#, mais especificamente Allegro 4
        eu não tinha muita experiência nessa biblioteca, logico tava começando nela, os projetos saiam um lixo e mal acabados, não sabia como criar um objeto em C++ ainda, mas fui aprendendo devagar.
        Mas tinha decidido parar de criar jogos com programação por um tempo.
        `
        
    },
    {
        "titulo": "Animação",
        "img-fundo": "img/fundo/animation.jpg",
        "img-icon":"/img/icone/anima.png",
        "texto": 
        `
        #t-Quando comecei-t#
        A primeira vez que comecei na animação eu tinha uns 10 a 11 anos com um Samsung Galaxy J5 que mal rodava o Flipaclip(que era o aplicativo que comecei na animação) na época, com o dedo.
        Com o tempo troquei de celular mais potente que não trava tanto, ai realmente comecei a aprender na animação. Era simple e muito amador, porém eu gostava fazer cada quadro.
        
        #t-Como eu criava minhas animações-t#
        #st-No passado-st#
        Eu fazia assim, quando eu tinha ideia eu logo fazia o esboço da animação, ai eu fazia cada passo pra porduzir aquela animação,como: esboço, linhas(lines), colorização, sombra e luz.
        Eu fazia cada processo com atenção e um pouco mais de velocidade comparado a um desenho. Mas a animação era dura sem teoria, sem tanta vida, quando eu comecei a ver sobre os rincipios:
        #br• #b-Comprimir e Esticar-b# (Squash and Stretch)
        #br• #b-Antecipação-b# (Anticipation)
        #br• #b-Encenação-b# (Staging)
        #br• #b-Ação Direta e Pose a Pose-b# (Straight Ahead & Pose to Pose)
        #br• #b-Continuidade e Sobreposição-b# (Follow Through & Overlapping Action)
        #br• #b-Arcos-b# (Arcs)
        #br• #b-Ação Secundária-b# (Secondary Action)
        #br• #b-Exagero-b# (Exaggeration)
        #br• #b-Desenho Sólido-b# (Solid Drawing)
        #br• #b-Apelo-b# (Appeal)
        #br
        #br Começava a aplicar cada principio nos meus projetos e começou a ficar mais interessante.
        #st-Atualmente-st#
        Eu vi um nível de qualidade nos meus projetos, algo que notei foi a agilidade de fazer os quadros e estruturar a cena se faz sentido ou não, começar com a ideia de movimento de forma simples só para 
        ter uma noção e contexto. Foi algo que consegui com a pratica.
        `
    },
];    

//função adicionar imagem no texto
function add_img(img, alt){
    return `<img src=${String(img)} alt="${String(alt)}">`;
}
//função que adicionará ao indice
function incrementa_indice(valor_incrementar){
    if(indice >= text_poster.length-1 && valor_incrementar > 0)indice = -1;
    if(indice <= 0 && valor_incrementar < 0)indice = text_poster.length;
    indice += valor_incrementar;
    // console.log(indice);
}

/*
FORMATAÇÃO DO HTML

imagem no site: #i-caminho da imagem alt="qualquer coisa"-i#
titulo: #t-titulo-t#
subtitulo: #t-subtitulo-t#
topico: #sst-topico-sst#
negrito: #b-palavra-b#
link: #link-link do negocio a=palavra-link#
quebra linha: #br

*/
function formata_html(txt_hmtl){
   //titulo
   txt = txt_hmtl.replace(/#t-/g, "<h3>");
   txt = txt.replace(/-t#/g, "</h3>");
   //sub titulo
   txt = txt.replace(/#st-/g, "<h4>");
   txt = txt.replace(/-st#/g, "</h4>");
   //topico
   txt = txt.replace(/#sst-/g, "<h5>");
   txt = txt.replace(/-sst#/g, "</h5>");
   //negrito
   txt = txt.replace(/#b-/g, "<b>");
   txt = txt.replace(/-b#/g, "</b>");
   // link
   txt = txt.replace(/#link-/g, "<a href=http://");
   txt = txt.replace(/a=/g, ">");
   txt = txt.replace(/-link#/g, "</a>");
   
   //quebrar linha
   txt = txt.replace(/#br/g, "<br>");
   txt = txt.replace(/#t/g, "&emsp;");
   txt = txt.replace(/#hr/g, "<hr>");
   
    
   //imagem
   txt = txt.replace(/#i-/g, "<img src=");
   txt = txt.replace(/#alt=/g, "alt=");
   txt = txt.replace(/-i#/g, ">"); 
   return txt;
}


//atualizar o texto e titulo
function atualizar_texto(){
    icone_pagina.href = text_poster[indice]["img-icon"];
    img_icon.src = text_poster[indice]["img-icon"];
    titulo_texto.textContent = `${text_poster[indice]["titulo"]} ${indice+1}/${text_poster.length}`;
    titulo_pagina.textContent = text_poster[indice]["titulo"];
    fundo_titulo.style.backgroundImage = `radial-gradient(rgba(239, 255, 179, 0.123) 50%, rgba(0, 0, 0, 0.384)), url(${text_poster[indice]["img-fundo"]})`;
    texto_legal.innerHTML = formata_html(text_poster[indice]["texto"]);
    titulo_pagina_principal.textContent = complemento_titulo+text_poster[indice]['titulo'];
}

// ativar aba lateral
function ativar_aba_indice(){
    estado_aba_indice = !estado_aba_indice;
}

// ativar animação de abrir e fechar aba lateral
function aba_mover(){
    if(estado_aba_indice){
        lista_indices.classList.toggle("animar_abrir_aba_indices");
        mostrar_indices.textContent = "<";
    }
    else{
        lista_indices.classList.toggle("animar_fechar_aba_indices");
        mostrar_indices.textContent = ">";
    }
}

// adicionar botões na aba literal
function add_botoes_indices_aba_lateral(){
    for(let i=0;i<text_poster.length;i++){
        const bt = document.createElement('button');
        
        bt.innerText = text_poster[i]['titulo'];
        bt.id = 'indice_' + i;
        botoes_hobbys.appendChild(bt);
    }
    

}
 
function atualizar_indices_aba_lateral(){
    for(let i=0;i<text_poster.length;i++){
        const bt = document.getElementById('indice_'+i);

        if(indice === i)bt.disabled = true;
        if(indice !== i)bt.disabled = false;
    }
}

function mudar_indice_aba_lateral(){
    for(let i=0;i<text_poster.length;i++){
        const bt = document.getElementById('indice_'+i);
        
        bt.addEventListener('click', (event)=>{
            indice = i;
            atualizar_texto();
            atualizar_indices_aba_lateral();
            estado_aba_indice = false;
            aba_mover();
        });
    }
}

//ações

atualizar_texto();
add_botoes_indices_aba_lateral();
atualizar_indices_aba_lateral();

botao_frente.addEventListener("click",(event)=>{
    incrementa_indice(1);
    atualizar_texto();
    atualizar_indices_aba_lateral();
    window.scrollTo(0, 0);
});

botao_voltar.addEventListener("click",(event)=>{
    incrementa_indice(-1);
    atualizar_texto();
    atualizar_indices_aba_lateral();
    window.scrollTo(0, 0);
});

mostrar_indices.addEventListener("click",
    (event)=>{
        ativar_aba_indice();
        aba_mover();
    }
);

document.addEventListener('mousemove', (event)=>{
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // const isMobile = true;
    if(event.pageX>100+(estado_aba_indice?200:0) && !isMobile){
        mostrar_indices.style.display = 'none';
    }else{
        mostrar_indices.style.display = '';
    }
});

mudar_indice_aba_lateral();