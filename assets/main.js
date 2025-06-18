/*===== MENU SHOW =====*/ 


/*===== REMOVE MENU MOBILE =====*/
// Função para redirecionar para o link de compra da Shopee
function comprar(url) {
    alert("Você será redirecionado para a página do produto na Shopee.");
    window.location.href = url;
}

// Função para controlar a exibição das abas
function openTab(evt, tabName) {
    let i;
    let tabcontent;
    let tablinks;

    // Oculta todos os elementos com a classe "tabcontent"
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove a classe "active" de todos os botões de aba
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Exibe o conteúdo da aba clicada
    // Mantenha "block". O CSS se encarregará de definir se será "flex" ou "grid".
    document.getElementById(tabName).style.display = "block";

    // Adiciona a classe "active" ao botão de aba clicado
    evt.currentTarget.classList.add("active");
}

// Opcional: Adicionar um listener para a aba padrão ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    // Verifica se existe um elemento com a classe 'tablink active' para evitar erros
    const activeTab = document.querySelector('.tablink.active');
    if (!activeTab) { // Se nenhuma aba estiver ativa por padrão no HTML, ative a primeira
        const firstTabLink = document.querySelector('.tablink');
        if (firstTabLink) {
            firstTabLink.click(); // Simula um clique no primeiro botão de aba
        }
    } else {
        // Se já houver uma aba ativa no HTML, garanta que seu conteúdo esteja visível
        // O `dataset.tabName` é uma forma mais moderna de pegar o nome da aba
        const tabName = activeTab.dataset.tabName || activeTab.onclick.toString().match(/openTab\(event,\s*'([^']*)'\)/)[1];
        if (tabName) {
            document.getElementById(tabName).style.display = "block";
        }
    }
});