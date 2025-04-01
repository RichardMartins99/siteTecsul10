document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("meuModal");
    const spanFechar = document.getElementsByClassName("fechar")[0];

    function fecharModal() {
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
    const modal = document.getElementById("meuModal");
    modal.style.display = "block";

    configModal(idModal);
}

function configModal(idModal){
    let txt, img, tittle;

    switch (idModal){
        case 0:
            tittle = 'Aeradores superficiais';
            txt = 'O aerador de alta rotação ALFA MASTER é um equipamento que trabalha de forma inversa aos aeradores convencionais. Ao invés de dispersar o líquido para a atmosfera ele propulsiona o ar para dentro da lagoa ou tanque.';
            img = '';
            break;
        case 1:
            txt = '';
            img = '';
            break;
            
    }

    document.getElementById('txtTitulo').innerText = tittle;
    document.getElementById('txtModal').innerText = txt;
}