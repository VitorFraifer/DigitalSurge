const setaDireitaCarrossel = document.querySelector(".seta-direita");
const setaEsquerdaCarrossel = document.querySelector(".seta-esquerda");
const carrossel = document.querySelector(".itens-carrossel");
const produto1 = document.querySelector("#produto1");
const modalProduto1 = document.querySelector("#modal-produto1");
const modalProduto2 = document.querySelector("#modal-produto2");
const modalProduto3 = document.querySelector("#modal-produto3");
const modalProduto4 = document.querySelector("#modal-produto4");
const btnFecharModal = document.querySelector(".icone-fechar-modal");
const btnFecharModal2 = document.querySelector(".icone-fechar-modal2");
const btnFecharModal3 = document.querySelector(".icone-fechar-modal3");
const btnFecharModal4 = document.querySelector(".icone-fechar-modal4");

//Função Carrossel de Serviços
var posicao = 0

 setaDireitaCarrossel.addEventListener ("click", () => {
    if(window.innerWidth <= 700){
        if(posicao == -294){
            carrossel.style.transform = `translateX(0vw)`;
            posicao = 0;
        }
        else{
            carrossel.style.transform = `translateX(${posicao -= 98}vw)`;
        }
    }
    else{
        if(posicao == -74){
            carrossel.style.transform = `translateX(0vw)`;
            posicao = 0;
        }
        else{
            carrossel.style.transform = `translateX(${posicao -= 37}vw)`;
        }
    }
});

 setaEsquerdaCarrossel.addEventListener ("click", () => {
    if(window.innerWidth <= 700){
        if(posicao == 0){
            carrossel.style.transform = `translateX(0vw)`;
            posicao = 0;
        }
        else{
            carrossel.style.transform = `translateX(${posicao += 98}vw)`;
        }
    }
    else{
        if(posicao == 0){
            carrossel.style.transform = `translateX(0vw)`;
            posicao = 0;
        }
        else{
            carrossel.style.transform = `translateX(${posicao += 37}vw)`;
        }
    }
});


// Ativar Modal

produto1.addEventListener("click", () => {
    modalProduto1.style.display = "flex";
})

btnFecharModal.addEventListener("click", () => {
    modalProduto1.style.display = "none";
})

produto2.addEventListener("click", () => {
    modalProduto2.style.display = "flex";
})

btnFecharModal2.addEventListener("click", () => {
    modalProduto2.style.display = "none";
})

produto3.addEventListener("click", () => {
    modalProduto3.style.display = "flex";
})

btnFecharModal3.addEventListener("click", () => {
    modalProduto3.style.display = "none";
})

produto4.addEventListener("click", () => {
    modalProduto4.style.display = "flex";
})

btnFecharModal4.addEventListener("click", () => {
    modalProduto4.style.display = "none";
})