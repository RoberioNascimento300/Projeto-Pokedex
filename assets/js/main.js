


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
 
pokeApi.getPokemons().then((pokemons = []) => {
   pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
   //Olha, pega a lista de pokemons, MAPEIA os pokemons CONVERTENDO esta lista para Li
   //E agora JUNTA todos esses Li sem separador nenhum 
   //Isso vai virar um Html NOVO
   //E eu vou CONCATENAR com o html antigo que eu tinha
})


