const pokemonList = document.getElementById('pokemonList') //Eu tô vindo no meu Html que foi renderizado no meu browser, eu tô pegando a nossa lista de pokemon e ATRIBUINDO a uma variável: pokemonList, então a partir desse momento eu tenho acesso programático ao objeto
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit_main = 10
let offset_main = 0;

//1,2,3,4,5         0 - 5
//6,7,8,9,10        5 - 5
//11,              10 - 1 (remove o botão)

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
  

    const qtdRecordNextWithPage = offset_main + limit_main

    if (qtdRecordNextWithPage >= maxRecords) {
        const newLimit = maxRecords - offset_main
        loadPokemonItens(offset_main, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton) //REMOVENDO o botão assim que o limite for estabelecido
    }else {
        loadPokemonItens(offset_main, limit_main)
    }

    
})






