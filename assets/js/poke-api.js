const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


const pokeApi = {} //Declarando o objeto pokeApi

pokeApi.getPokemonDetail = (pokemon) => {
   return fetch(pokemon.url)
            .then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
    return fetch(url) // quero retornar a lista de pokemon pronta. Para que ninguém fora do bloco aq tenha que entender como manipular uma resposta de uma pokeApi
        .then((response) => response.json()) //CONVERTENDO o response para json
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) //MAPEANDO a lista de pokemons em uma lista de requisições do detalhe do pokemon
        .then((detailRequests) => Promise.all(detailRequests)) //Estamos esperando que TODAS as requisições terminem
        .then((pokemonsDetails) => {
            console.log(pokemonsDetails) //Vai imprimir a lista de detalhes do poemon
        })
}

