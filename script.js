const btn = document.getElementById("btnEntrar");
const conteudo = document.getElementById("conteudo");
const entrada = document.getElementById("entrada");
const musica = document.getElementById("musica");

btn.addEventListener("click", () => {

    entrada.style.display = "none";
    conteudo.style.display = "flex";

    musica.play();

    escreverPoema();
    iniciarCoracoes();
});

const poema = `
Soms brengt het leven iemand op je pad

zonder waarschuwing, zonder plan.

En toch voelt het alsof die persoon

altijd al een plaats in je verhaal had.

Hoewel er nog kilometers tussen ons liggen

en we elkaar nog niet in het echt hebben ontmoet,

breng jij een glimlach op mijn gezicht

met woorden alleen.

Je bent als een zachte gedachte

die onverwacht door mijn dag wandelt,

en elke keer dat ik aan je denk,

lijkt alles even lichter.

Ik weet niet wat de toekomst voor ons bewaart,

maar ik weet wel dat ik blij ben

dat onze wegen elkaar hebben gekruist.

En zolang de sterren boven ons dezelfde hemel delen,

zal ik met warmte aan jou blijven denken.

❤️
`;

let i = 0;

function escreverPoema(){

    if(i < poema.length){

        document.getElementById("poema").innerHTML += poema.charAt(i);

        i++;

        setTimeout(escreverPoema,40);
    }
}

function iniciarCoracoes(){

    setInterval(() => {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤️";

        heart.style.left =
            Math.random() * window.innerWidth + "px";

        heart.style.bottom = "-50px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        },6000);

    },400);
}

document
.getElementById("finalBtn")
.addEventListener("click", () => {

    alert(
`Tete,

independentemente do que o futuro reserve,

quero que você saiba que conhecer você tornou meus dias melhores.

Obrigado por existir. ❤️`
    );

});