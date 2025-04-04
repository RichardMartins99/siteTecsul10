let isModalOpen = false; 
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("meuModal");
    const spanFechar = document.getElementsByClassName("fechar")[0];
    const reels = document.querySelectorAll(".carousel .reel");

    function fecharModal() {
        isModalOpen = false;
        modal.style.display = "none";
        reels.forEach(reel => reel.style.animationPlayState = "running");
    }

    spanFechar.onclick = fecharModal;

    window.onclick = function(event) {
        if (event.target == modal) {
            fecharModal();
        }
    }

    document.onkeydown = function(event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            fecharModal();
        }
    }

    reels.forEach(reel => {
        reel.addEventListener("mouseenter", () => {
            if (!isModalOpen) {
                reel.style.animationPlayState = "paused";
            }
        });
    
        reel.addEventListener("mouseleave", () => {
            if (!isModalOpen) {
                reel.style.animationPlayState = "running";
            }
        });
    });

    document.querySelectorAll(".carousel").forEach(ajustarDuracao);

    //Email js
    
});

function ajustarDuracao(carousel) {
    const reel = carousel.querySelector(".reel");
    const larguraReel = reel.scrollWidth; // Pega a largura total do reel
    const duracaoBase = 2; // Tempo base para um carrossel de referência
    const larguraPadrao = 400; // Tamanho base do primeiro carrossel

    // Ajusta a duração proporcionalmente ao tamanho
    const novaDuracao = (larguraReel / larguraPadrao) * duracaoBase;

    // Aplica a nova duração na animação
    reel.style.animationDuration = `${novaDuracao}s`;
}

function abrirModal(idModal){
    isModalOpen = true;
    const modal = document.getElementById("meuModal");
    const reels = document.querySelectorAll(".carousel .reel");
    modal.style.display = "block";

    reels.forEach(reel => reel.style.animationPlayState = "paused");

    configModal(idModal);
}

function configModal(idModal){
    let txt, img, tittle;

    switch (idModal){
        case 0:
            tittle = 'Aeradores superficiais';
            txt = `<p> O aerador de alta rotação funciona de maneira inversa aos aeradores convencionais, impulsionando o ar para dentro da água em vez de dispersá-lo na atmosfera.</p>
                   <p>Seu funcionamento é baseado em uma hélice propulsora acionada por um motor elétrico, que gera vácuo em sua extremidade. Esse vácuo permite a entrada de ar através de um eixo tubular, promovendo a oxigenação da água de forma eficiente.</p>`;
            img = '';
            break;

        case 1:
            tittle = 'Tratamento de esgoto sanitário';
            txt = `<p>A estação de tratamento de esgoto sanitário segue todas as normas ambientais brasileiras, garantindo um efluente tratado de qualidade. Utiliza o processo aeróbio, que remove mais de 90% da DBO, sem gerar odores ou gases nocivos.</p>
                 <p>O tratamento oferece benefícios como melhoria da saúde pública, conformidade com a legislação, preservação ambiental, valorização do imóvel e reutilização da água. O diferencial é a alta eficiência na remoção da DBO e a opção de um Painel de Controle Inteligente, que monitora a operação, gera relatórios e permite acompanhamento remoto para manutenção preventiva.</p>`;
            img = '';
            break;
            
        case 2:
            tittle = 'Tratamento de água';
            txt = `<p>As estações de tratamento de água e filtros processam efluentes de diversas origens, como lavagem automotiva, águas cinzas, agronegócio e indústrias. A reutilização da água tratada pode reduzir em até 90% os custos com água potável, além de contribuir para a preservação ambiental.</p> 
                   <p>As principais vantagens incluem economia, sustentabilidade, flexibilidade para diferentes setores, versatilidade no tratamento de efluentes, alta qualidade da água e conformidade com normas ambientais. Desenvolvemos soluções personalizadas, permitindo a produção de água para reuso ou consumo potável, conforme a necessidade do cliente.</p>`;
            img = '';
            break;

        case 3:
            tittle = 'Tratamento de efluentes';
            txt = `<p>O tratamento de efluentes envolve processos físicos, químicos e biológicos para remover poluentes antes do descarte ou reutilização. Desenvolvemos sistemas personalizados para tratar efluentes oleosos e químicos, garantindo eficiência, conformidade ambiental e suporte técnico.</p>
                   <p>A <strong>Estação para Tratamento de Efluentes Oleosos (ETEO)</strong> trata resíduos industriais e automotivos contendo óleo, utilizando separadores de água, areia e óleo (S.A.A. S.A.O.) e uma Estação de Tratamento de Água (ETA). Suas vantagens incluem fácil instalação, baixo consumo energético e possibilidade de reutilização da água.</p>
                   <p>A <strong>Estação para Tratamento de Efluentes Químicos (ETEQ)</strong> processa resíduos industriais com separadores de areia mecanizados (SAM), decantadores tubulares e filtros de carvão. O sistema realiza um tratamento primário seguido de um processo físico-químico, tornando a água apta para reuso ou descarte controlado.</p>`;
            img = '';
            break;

        case 4:
            tittle = 'Separador de água e óleo';
            txt = `<p>Os separadores de água e óleo removem sólidos e óleo livre de efluentes contaminados, permitindo descarte seguro ou pré-tratamento para reuso. Equipados com placas coalescentes, garantem alta eficiência e conformidade com normas ambientais.</p>
                    <p>Os principais benefícios incluem proteção ambiental, conformidade regulatória, redução de custos, possibilidade de reciclagem do óleo, aumento da vida útil dos equipamentos e melhoria da eficiência operacional. Empresas como Petrobras, Raízen e Vale homologam nossos produtos.</p>
                    <h4><strong>Oferecemos diferentes modelos de separadores:</strong></h4>
                    <ul>
                        <li>SAO compactos (800 a 5.000 l/h) para pequenas demandas.  </li>
                        <li>SAO para grandes capacidades** (acima de 10.000 l/h), ideais para indústrias e grandes operações.</li>
                    </ul>
                    <p>Além disso, o separador de óleo e ar comprimido (S.A.O.) remove óleo da água condensada em compressores e máquinas pneumáticas, prolongando a vida útil dos equipamentos e garantindo a qualidade do ar comprimido.</p>`;
            img = '';
            break;

        case 5:
            tittle = 'Insumos';
            txt = `<p>Os insumos para tratamento de efluentes ALFA CONTROL incluem produtos para controle de pH, desinfecção, coagulação e filtração.</p>
                    <h4><strong>Principais Produtos:</strong></h4>
                    <ul>  
                        <li><strong>ALFA AE:</strong> Controlador de pH (ácido ou alcalino).</li>
                        <li><strong>ALFA CLOR / CL-P / CLNA:</strong> Produtos à base de cloro para desinfecção de águas, efluentes e equipamentos.</li>  
                        <li><strong>ALFA POLI A:</strong> Floculante aniônico líquido para estações de tratamento.</li>  
                        <li><strong>ALFA FLOC 10 S:</strong> Coagulante inorgânico que facilita a separação de sólidos em efluentes. </li> 
                    </ul>
                    <h4><strong>Materiais Filtrantes:</strong></h4>  
                    <ul>
                        <li><strong>Carvão Ativado:</strong> Excelente para clarificação, purificação e desodorização de líquidos e gases. </li> 
                        <li><strong>Carvão Antracitoso:</strong> Meio filtrante de alta eficiência, resistente a ácidos e álcalis, proporcionando maior taxa de filtração. </li> 
                        <li><strong>Areia e Pedregulho:</strong> Utilizados na filtração física de partículas sólidas, classificados conforme a granulometria desejada.  </li> 
                    </ul>
                    <p>Os produtos são essenciais para otimizar a remoção de impurezas e garantir a qualidade do tratamento de água e efluentes.</p>`;
            img = '';
            break;
    }

    document.getElementById('txtTitulo').textContent = tittle;
    document.getElementById('txtModal').innerHTML = txt;
}