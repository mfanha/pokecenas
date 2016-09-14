import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import PokeapiClient from './pokeapiClient/pokeapiClient';
import ThreeNumbersAllways from './threeNumbersAlways/threeNumbersAlways';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  PokeapiClient,
  ThreeNumbersAllways
])
  
.name;

export default commonModule;
