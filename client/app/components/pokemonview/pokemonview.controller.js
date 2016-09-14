class PokemonviewController {
  constructor(pokeapiClientService, $stateParams, $http) {
    'ngInject';
    this.name = 'pokemonview';
    console.log($stateParams.id);  //the ':id' from the URL

    pokeapiClientService.getPokemon('http://pokeapi.co/api/v2/pokemon/' + parseInt($stateParams.id), (err, pokemon) => {
        this.pokemon = pokemon;
    });

    pokeapiClientService.getPokemon('http://pokeapi.co/api/v2/pokemon/' + (parseInt($stateParams.id) -1), (err, pokemon) => {
        this.previousPokemon = pokemon;
    });

    pokeapiClientService.getPokemon('http://pokeapi.co/api/v2/pokemon/' + (parseInt($stateParams.id ) +1), (err, pokemon) => {
        this.nextPokemon = pokemon;
    });

    pokeapiClientService.getDescription('http://pokeapi.co/api/v2/characteristic/' + parseInt($stateParams.id), (err, pokemon) => {
    	this.pokeDescription = pokemon;
    });



  }


  
}

export default PokemonviewController;
