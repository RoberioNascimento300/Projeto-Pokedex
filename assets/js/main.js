const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon) {
  return `
 
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>
    
    <div class="detail">
        <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
        </ol>


        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
            alt="${pokemon.name}">
    </div>
</li>
`
}

const pokemonList = document.getElementById('pokemonList') //Eu tô vindo no meu Html que foi renderizado no meu browser, eu tô pegando a nossa lista de pokemon e ATRIBUINDO a uma variável: pokemonList, então a partir desse momento eu tenho acesso programático ao objeto
 

fetch(url)
.then((response) => response.json())
   .then((jsonBody) => jsonBody.results)
   .then((pokemons) => {
    
   for (let i = 0; i < pokemons.length; i++) {
      const pokemon = pokemons[i];
      pokemonList.innerHTML += convertPokemonToLi(pokemon) //A partir desse objeto eu posso MANIPULAR ele e eu tô SOMANDO de dentro da lista um Html dele + um item
    
  }

    })

  .catch((error) => console.error(error))
