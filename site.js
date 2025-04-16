let isModalOpen = false; 
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("meuModal");
    const spanFechar = document.getElementsByClassName("fechar")[0];

    function fecharModal() {
        isModalOpen = false;
        modal.style.display = "none";
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

});


function abrirModal(idModal){
    isModalOpen = true;
    const modal = document.getElementById("meuModal");
    modal.style.display = "block";

    configModal(idModal);
}

function configModal(idModal){
    let txt, img, tittle;

    switch (idModal){
        //Soluções ambientais
        case 0:
            tittle = 'Aeradores superficiais';
            txt = `<p> O aerador de alta rotação funciona de forma inversa aos aeradores convencionais, impulsionando o ar para dentro da água, em vez de dispersá-lo na atmosfera.</p>
                   <p>Seu funcionamento é baseado em uma hélice propulsora acionada por um motor elétrico, que gera vácuo em sua extremidade. Esse vácuo permite a entrada de ar através de um eixo tubular, promovendo a oxigenação da água de forma eficiente.</p>`;
            img = '';
            break;

        case 1:
            tittle = 'Tratamento de esgoto sanitário';
            txt = `<p>A estação de tratamento de esgoto sanitário segue todas as normas ambientais brasileiras, garantindo um efluente tratado de qualidade. Utiliza o processo aeróbio, que remove mais de 90% da DBO, sem gerar odores ou gases nocivos.</p>
                  <p>O tratamento oferece benefícios como melhoria da saúde pública, conformidade com a legislação, preservação ambiental, valorização do imóvel e possibilidade de reutilização da água.</p>
                  <p>Seu diferencial é a alta eficiência na remoção da DBO e a opção de um Painel de Controle Inteligente, que monitora a operação, gera relatórios e permite o acompanhamento remoto para manutenção preventiva.</p>`;
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
                   <p>A <strong>Estação para Tratamento de Efluentes Oleosos (ETEO)</strong> trata resíduos industriais e automotivos contendo óleo, utilizando separadores de água, areia e óleo (S.A.A. e S.A.O.), além de uma Estação de Tratamento de Água (ETA). Suas vantagens incluem fácil instalação, baixo consumo energético e possibilidade de reutilização da água.</p>
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

        //Máquinas de lavagem automotiva
        case 6:
            tittle = 'Aries WD 240';
            txt = `<p> O Aries WD 240 é uma solução de ótimo custo-benefício para lavagem de veículos, ideal para concessionárias, postos e locais com alta demanda por serviços de qualidade. É um equipamento de baixo investimento, alta rentabilidade, fácil uso e manutenção, projetado para grandes volumes de serviço. Suas escovas de EVA proporcionam maciez e brilho, e o sistema oferece flexibilidade de configuração, além de baixo custo operacional. Pode ser equipado com diversos acessórios, adaptando-se às necessidades do cliente.
                    </p>
                    <h4><strong>Materiais Filtrantes:</strong></h4>  
                    <ul>
                        <li><strong>Alimentação elétrica:</strong>  220/380V – 50/60Hz</li>
                        <li><strong>Potência instalada:</strong> de 7,5 kW (básico) até 12,8 kW (completo)</li>
                        <li><strong>Consumo de água por ciclo: </strong>  90 a 120 litros</li>
                        <li><strong>Consumo de shampoo/cera por lavagem:</strong>  30-40 ml / 50-60 ml</li>
                        <li><strong>Tempo de lavagem:</strong>  Tempo de lavagem: aproximadamente 2 min e 15 s</li>
                    </ul>
                    <p>Oferece alta confiabilidade e uma excelente relação qualidade/preço.</p>`;
            img = '';
            break;

        case 7:
            tittle = 'Aries 2.0';
            txt = `<p>É um equipamento de lavagem veicular que oferece rápido retorno sobre o investimento, combinando robustez, eficiência e baixo custo operacional. É ideal para serviços básicos, sendo versátil e configurável com diversos opcionais como escova horizontal eletrônica, lava rodas e acionamento por ticket. Possui alta rentabilidade, baixo consumo de recursos, controle por PLC, conectividade, e conta com sistemas avançados de escovas e secadores.</p>`;
            img = '';
            break;

        case 8:
            tittle = 'Taurus';
            txt = `<p>Taurus oferece a melhor relação custo-benefício, unindo robustez, tecnologia nacional e eficiência operacional com baixo consumo de energia. Possui alta conectividade via PLC com 7 inversores e até 12 programas de lavagem configuráveis. É um equipamento versátil, com opcionais como secadores laterais, lava rodas, robowash e bomba HP onboard. Destaca-se pela alta rentabilidade, baixo consumo de recursos e capacidade de aplicar até 4 tipos de produtos.</p>`;
            img = '';
            break;

        case 9:
            tittle = 'CL 200 - Phoenix';
            txt = `<p>O CL200 Phoenix é uma máquina de lavagem de automóveis premium, que combina desempenho excepcional, design atrativo e alto nível de automação. Ideal para locadoras, concessionárias e lavadoras que buscam eficiência e qualidade, oferece escovas Carlite, consumo reduzido, secagem avançada com quatro ventiladores, alta pressão, bomba HP e aplicação de até 4 produtos. Com funcionalidades de alto nível, é uma escolha versátil e acessível, indicada também para modelos de autoatendimento, destacando-se pelo visual moderno com LEDs e blindagens metálicas.</p>`;
            img = '';
            break;

        case 10:
            tittle = 'New LFC';
            txt = `<p>O NLFC é um equipamento fixo e compacto para lavagem de ônibus, ideal para frotas médias e grandes. Disponível nas versões com 5 ou 7 escovas, oferece excelente custo-benefício, baixa manutenção e estrutura resistente em aço zincado. Conta com automação por PLC, acionamento por fotocélula e produtividade de até 30 veículos por hora. Com baixo consumo de recursos e programas inteligentes, permite lavagem automatizada sem necessidade de mão de obra.</p>`;
            img = '';
            break;

        case 11:
            tittle = 'New LFO';
            txt = `<p>O NLFO é um equipamento fixo de alta performance para lavagem de grandes frotas de ônibus, disponível nas versões com 4 a 7 escovas. Com estrutura robusta em aço zincado a calor e colunas interligadas, oferece alta resistência e durabilidade. Possui automação por PLC, acionamento por fotocélula e escovas auxiliares com rotação inversa para limpeza eficiente. Com capacidade para lavar até 60 veículos por hora, proporciona baixo consumo de recursos e operação totalmente automatizada, sem necessidade de mão de obra.</p>`;
            img = '';
            break;

        case 12:
            tittle = 'New LTM';
            txt = `<p>O LTM é um equipamento móvel para lavagem de ônibus, que combina funcionalidade, robustez e agilidade. Com estrutura zincada a calor e controle por PLC, desliza sobre trilhos com sistema duplo de tração e inversor de frequência. Ideal para locais com pouco espaço de manobra, possui 3 escovas, baixa manutenção, consumo reduzido e capacidade para lavar até 8 veículos por hora.</p>`;
            img = '';
            break;

        case 13:
            tittle = 'Roll Wash';
            txt = `<p>Equipamento móvel manual para lavagem de ônibus de até 4,10m de altura, com 1 escova e estrutura em poste com braço articulado zincado a calor. Ideal para frotas pequenas e espaços reduzidos, oferece baixa manutenção, proteção ao operador com lona antirrespingo e produtividade de cerca de 6 veículos por hora.</p>`;
            img = '';
            break;

        case 14:
            tittle = 'New EFL';
            txt = `<p>O EFL é um equipamento fixo para lavagem de ônibus, ideal para empresas com menor demanda. Disponível nas versões com 3 ou 5 escovas, possui estrutura zincada a calor, acionamento por fotocélula e baixo consumo de recursos. Lava lateral, teto e traseira do veículo, com produtividade de até 30 veículos por hora, mas não realiza a lavagem da parte frontal.</p>`;
            img = '';
            break;

        case 15:
            tittle = 'New LCM';
            txt = `<p>O LCM é um equipamento móvel semiautomático para lavagem de ônibus e caminhões, com versões de 3 ou 5 escovas. Possui estrutura zincada a calor, controle remoto, automação por PLC e sistema de tração com inversor de frequência. Oferece fácil manutenção, alta durabilidade e eficiência, com produtividade de 3 a 7 veículos por hora. Conta com baixo consumo de recursos, sistema de alta pressão opcional e pista de lavagem customizável, sendo compatível com todos os modelos de veículos.</p>`;
            img = '';
            break;
    }

    document.getElementById('txtTitulo').textContent = tittle;
    document.getElementById('txtModal').innerHTML = txt;
}

function abrirLinksNRs(numeroNR){
    let link;
    switch(numeroNR){
        case 5:
            link = 'https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/NR05atualizada2023.pdf';
            break;
        
        case 6:
            link = 'https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-06-atualizada-2025.pdf';
            break;

        case 10:
            link = 'https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/arquivos/normas-regulamentadoras/nr-10.pdf';
            break;

        case 1010:
            link = 'https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/arquivos/normas-regulamentadoras/nr-10.pdf';
            break;
                    
        case 11:
            link = 'https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-11-atualizada-2016.pdf';
            break;

        case 12:
            link = 'https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-12-atualizada-2025.pdf';
            break;

        case 18:
            link = 'https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-18-atualizada-2025-1.pdf';
            break;

        case 20:
            link = 'https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-20-atualizada-2025.pdf';
            break;

        case 33:
            link = 'https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/arquivos/normas-regulamentadoras/nr-33-atualizada-2022-_retificada.pdf';
            break;

        case 35:
            link = 'https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/arquivos/normas-regulamentadoras/NR35atualizada2023.pdf';
            break;
    }

    window.open(link,'_blank');
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.classList.add('toast', type);
    toast.textContent = message;
  
    const container = document.getElementById('toast-container');
    container.appendChild(toast);
  
    // Remove depois de 4 segundos
    setTimeout(() => {
      toast.remove();
    }, 4000);
  }
  