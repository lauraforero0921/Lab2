

let canvas;
let URL = 'https://pokeapi.co/api/v2/pokemon/1/';
let URL1 = 'https://pokeapi.co/api/v2/pokemon/2/';
let URL2 = 'https://pokeapi.co/api/v2/pokemon/3/';
let URL3 = 'https://pokeapi.co/api/v2/pokemon/4/';
let URL4 = 'https://pokeapi.co/api/v2/pokemon/5/';
let URL5 = 'https://pokeapi.co/api/v2/pokemon/6/';
let URL6 = 'https://pokeapi.co/api/v2/pokemon/7/';
let URL7 = 'https://pokeapi.co/api/v2/pokemon/8/';
let URL8 = 'https://pokeapi.co/api/v2/pokemon/9/';

let pokemon = null;
let imagePokemon ;
let pokemon2 = null;
let imagePokemon2 ;
let pokemon3 = null;
let imagePokemon3 ;
let pokemon4 = null;
let imagePokemon4 ;
let pokemon5 = null;
let imagePokemon5 ;
let pokemon6 = null;
let imagePokemon6 ;
let pokemon7 = null;
let imagePokemon7 ;
let pokemon8 = null;
let imagePokemon8 ;
let pokemon9 = null;
let imagePokemon9 ;
let pokemonNumber;

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');


    fetch(URL)
    .then(response => response.json())
    .then(data => {pokemon = data;
        imagePokemon = loadImage(pokemon.sprites.front_default)
    console.log(pokemon)})

    fetch(URL1)
    .then(response => response.json())
    .then(data => {pokemon2 = data;
        imagePokemon2 = loadImage(pokemon2.sprites.front_default)
    console.log(pokemon2)})

    fetch(URL2)
    .then(response => response.json())
    .then(data => {pokemon3 = data;
        imagePokemon3 = loadImage(pokemon3.sprites.front_default)
    console.log(pokemon3)})

    fetch(URL3)
    .then(response => response.json())
    .then(data => {pokemon4 = data;
        imagePokemon4 = loadImage(pokemon4.sprites.front_default)
    console.log(pokemon4)})

    fetch(URL4)
    .then(response => response.json())
    .then(data => {pokemon5 = data;
        imagePokemon5 = loadImage(pokemon5.sprites.front_default)
    console.log(pokemon5)})

    fetch(URL5)
    .then(response => response.json())
    .then(data => {pokemon6 = data;
        imagePokemon6 = loadImage(pokemon6.sprites.front_default)
    console.log(pokemon6)})

    fetch(URL6)
    .then(response => response.json())
    .then(data => {pokemon7 = data;
        imagePokemon7 = loadImage(pokemon7.sprites.front_default)
    console.log(pokemon7)})

    fetch(URL7)
    .then(response => response.json())
    .then(data => {pokemon8 = data;
        imagePokemon8 = loadImage(pokemon8.sprites.front_default)
    console.log(pokemon8)})

    fetch(URL8)
    .then(response => response.json())
    .then(data => {pokemon9 = data;
        imagePokemon9 = loadImage(pokemon9.sprites.front_default)
    console.log(pokemon9)})


}


function draw() {
    //background(0, 50);
    background(0);
    newCursor();


    if(pokemon != null){

        textSize(15);
        textWrap(WORD);
        text(pokemon.name,160,20,300);
        image(imagePokemon,120,0,150,150);
    }   

    if(pokemon2 != null){

        textSize(15);
        textWrap(WORD);
        text(pokemon2.name,170,110,300);
        image(imagePokemon2,140,103,110,110);
    }   

    if(pokemon3 != null){

        textSize(15);
        textWrap(WORD);
        text(pokemon3.name,165,195,300);
        image(imagePokemon3,155,210,80,80);
    }   

    if(pokemon4 != null){

        textSize(15);
        textWrap(WORD);
        text(pokemon4.name,155,285,300);
        image(imagePokemon4,125,265,140,140);
    } 

    if(pokemon5 != null){

        textSize(15);
        textWrap(WORD);
        text(pokemon5.name,155,375,300);
        image(imagePokemon5,140,365,120,120);
    } 

    if(pokemon6 != null){

        textSize(15);
        textWrap(WORD);
        text(pokemon6.name,165,470,300);
        image(imagePokemon6,160,480,80,80);
    } 

    if(pokemon7 != null){

        textSize(15);
        textWrap(WORD);
        text(pokemon7.name,170,560,300);
        image(imagePokemon7,130,540,140,140);
    } 

    if(pokemon8 != null){

        textSize(15);
        textWrap(WORD);
        text(pokemon8.name,170,645,300);
        image(imagePokemon8,138,640,120,120);
    } 

    if(pokemon9 != null){

        textSize(15);
        textWrap(WORD);
        text(pokemon9.name,170,740,300);
        image(imagePokemon9,145,740,100,100);
    } 

    if(pokemonNumber != null){
        textSize(30)
        text("Experiencia base:"+ " "+pokemonNumber.base_experience,311,195);
        text("Peso:"+ " "+pokemonNumber.weight,311,233);
        text("Altura:"+ " "+pokemonNumber.height,311,271);
        text("Habilidad:"+ " "+pokemonNumber.abilities[0].ability.name,311,309);

        
    } 
   
    //console.log("X:" + parseInt(mouseX)+"Y:" + parseInt(mouseY))


}




function mousePressed(){

    if(mouseX > 173 && mouseX < 212 && mouseY > 29 && mouseY < 96){
        pokemonNumber = pokemon
        console.log(pokemon)

    }

    if(mouseX > 167 && mouseX < 225 && mouseY > 120 && mouseY < 188){
        pokemonNumber = pokemon2
        console.log(pokemon2)

    }

    if(mouseX > 168 && mouseX < 224 && mouseY > 205 && mouseY < 270){
        pokemonNumber = pokemon3
        console.log(pokemon3)

    }

    if(mouseX > 169 && mouseX < 224 && mouseY > 294 && mouseY < 358){
        pokemonNumber = pokemon4
        console.log(pokemon4)

    }

    if(mouseX > 169 && mouseX < 234 && mouseY > 383 && mouseY < 459){
        pokemonNumber = pokemon5
        console.log(pokemon5)

    }

    if(mouseX > 169 && mouseX < 234 && mouseY > 480 && mouseY < 546){
        pokemonNumber = pokemon6
        console.log(pokemon6)

    }

    if(mouseX > 169 && mouseX < 234 && mouseY > 569 && mouseY < 630){
        pokemonNumber = pokemon7
        console.log(pokemon7)

    }

    if(mouseX > 169 && mouseX < 234 && mouseY > 569 && mouseY < 630){
        pokemonNumber = pokemon7
        console.log(pokemon7)

    }

    if(mouseX > 169 && mouseX < 234 && mouseY > 652 && mouseY < 734){
        pokemonNumber = pokemon8
        console.log(pokemon8)

    }

    if(mouseX > 169 && mouseX < 234 && mouseY > 748 && mouseY < 818){
        pokemonNumber = pokemon9
        console.log(pokemon9)

    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}

