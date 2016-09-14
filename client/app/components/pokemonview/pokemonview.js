import angular from 'angular';
import uiRouter from 'angular-ui-router';
import pokemonviewComponent from './pokemonview.component';
import pokemonPreview from '../pokemonlist/pokemonpreview/pokemonpreview';

let pokemonviewModule = angular.module('pokemonview', [
  uiRouter,
  pokemonPreview
])

    .config(($stateProvider, $urlRouterProvider) => {
      "ngInject";

      $stateProvider
        .state('pokemonview', {
          url: '/pokemonview/:id',
          component: 'pokemonview'
        });
    })

.component('pokemonview', pokemonviewComponent)

.name;

export default pokemonviewModule;
