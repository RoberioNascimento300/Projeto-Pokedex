const pokemonList = document.getElementById('pokemonList') //Eu tô vindo no meu Html que foi renderizado no meu browser, eu tô pegando a nossa lista de pokemon e ATRIBUINDO a uma variável: pokemonList, então a partir desse momento eu tenho acesso programático ao objeto
const loadMoreButton = document.getElementById('loadMoreButton')
const limit_main = 5 //Precisa renomear a declaração pois já tem a mesma variável declarada no poke-api.js
let offset_main = 0 //Precisa renomear a declaração pois já tem a mesma variável declarada no poke-api.js

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
        `).join('')
        
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset_main, limit_main)

loadMoreButton.addEventListener('click', () => {
    offset_main += limit_main //INCREMENTO do offset
    loadPokemonItens(offset_main, limit_main)
})






