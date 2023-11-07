const conteCards=document.getElementById("cartas")

function crearCards(objeto){
    let card= `<article class="h-[400px] min-w-[300px] w-1/5 border-2 border-black rounded-lg bg-white flex flex-col gap-5 px-5 pb-5">
    <img class="pt-3 h-[200px]" src="${objeto.image}" alt="">
    <h2 class="text-black text-center">${objeto.title}</h2>
    <p class="text-black text-center">${objeto.overview.slice(0,150)}...</p>
</article>`
    return card
}
console.log(crearCards(movies[0]))

for (let indice = 0; indice < movies.length; indice++) {
    conteCards.innerHTML = conteCards.innerHTML + crearCards(movies[indice])

}