const setaDireitaCarrossel = document.querySelector(".seta-direita");
const setaEsquerdaCarrossel = document.querySelector(".seta-esquerda");
const carrossel = document.querySelector(".itens-carrossel");


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

// var posicao = 0

//  setaDireitaCarrossel.addEventListener ("click", () => {
//     if(posicao == -74){
//         carrossel.style.transform = `translateX(0vw)`;
//         posicao = 0;
//     }
//     else{
//         carrossel.style.transform = `translateX(${posicao -= 37}vw)`;
//     }
// });

//  setaEsquerdaCarrossel.addEventListener ("click", () => {
//     if(posicao == 0){
//         carrossel.style.transform = `translateX(0vw)`;
//         posicao = 0;
//     }
//     else{
//         carrossel.style.transform = `translateX(${posicao += 37}vw)`;
//     }
// });