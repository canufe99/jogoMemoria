const cartasGrid = [
    {
        nome : 'hamburguer',
        img :  'memoria-imgs/cheeseburger.png'
    }, 
    {
        nome : 'batatafrita',
        img :  'memoria-imgs/fries.png'
    }, 
    {
        nome : 'cachorroquente',
        img :  'memoria-imgs/hotdog.png'
    }, 
    {
        nome : 'sorvete',
        img :  'memoria-imgs/ice-cream.png'
    }, 
    {
        nome : 'milkshake',
        img :  'memoria-imgs/milkshake.png'
    }, 
    {
        nome : 'pizza',
        img :  'memoria-imgs/pizza.png'
    },
    {
        nome : 'hamburguer',
        img :  'memoria-imgs/cheeseburger.png'
    }, 
    {
        nome : 'batatafrita',
        img :  'memoria-imgs/fries.png'
    }, 
    {
        nome : 'cachorroquente',
        img :  'memoria-imgs/hotdog.png'
    }, 
    {
        nome : 'sorvete',
        img :  'memoria-imgs/ice-cream.png'
    }, 
    {
        nome : 'milkshake',
        img :  'memoria-imgs/milkshake.png'
    }, 
    {
        nome : 'pizza',
        img :  'memoria-imgs/pizza.png'
    }

];

const scoreHtml = document.getElementById('score');
const mosaicoMemoria = document.querySelector('.grid-memoria');


cartasGrid.sort(() => Math.random() - 0.5);

function mostrarMosaico() {
    
    cartasGrid.forEach((valor, index) => {
        const imgElement = document.createElement('img');
        imgElement.setAttribute('data-id', index);
        imgElement.setAttribute('src', 'memoria-imgs/blank.png')
        imgElement.addEventListener('click', virarCarta)
        mosaicoMemoria.appendChild(imgElement);        
    })
}

mostrarMosaico();

let cartasEscolhidas = [];
let cartasEscolhidasIds = [];


function virarCarta(carta) {
    let dataId = carta.target.getAttribute('data-id');
    console.log(dataId);
    carta.target.setAttribute('src', cartasGrid[dataId].img);

    cartasEscolhidasIds.push(dataId);

    cartasEscolhidas.push(cartasGrid[dataId].nome);
    if(cartasEscolhidas.length == 2) {
        checarPar();
    }
   
}

function virarCartas(event1, event2) {
    event1.setAttribute('src', 'memoria-imgs/blank.png');
    event2.setAttribute('src', 'memoria-imgs/blank.png');
}

let score = 0;

function checarPar() {
    let imgs = document.querySelectorAll('.grid-memoria img');
    let pImg = imgs[cartasEscolhidasIds[0]];
    let sImg = imgs[cartasEscolhidasIds[1]];
    if(cartasEscolhidasIds[0] == cartasEscolhidasIds[1]) {
        alert('BURRO!!');
        virarCartas(pImg, sImg);         
        cartasEscolhidas = [];
        cartasEscolhidasIds = [];
    } else {
            if(cartasEscolhidas[0] == cartasEscolhidas[1]) {
                
                setTimeout(() => {
                    pImg.setAttribute('src', 'memoria-imgs/white.png');
                    sImg.setAttribute('src', 'memoria-imgs/white.png');
                    pImg.removeEventListener('click', virarCarta);
                    sImg.removeEventListener('click', virarCarta);
            }, 300 )

        

            cartasEscolhidas = [];
            cartasEscolhidasIds = [];

            score ++;
            if(score === (cartasGrid.length/2)) {
                setTimeout(() => {
                    alert('você ganhou');
                window.location.reload();
                }, 700);
                
            }
            scoreHtml.innerHTML = score;
            
            } else {
                
                setTimeout( () => {
                    virarCartas(pImg, sImg);            
                }, 600

                )
                cartasEscolhidas = [];
                cartasEscolhidasIds = [];
            }
    }
}


