import {routes} from './variables.js';
import navbarGenerator from '../components/navbar.js';
import router from './router.js';


$(document).ready(function(){ 

  const app = $("#app");
  const nav = $("#nav");

  // create nav Item
  navbarGenerator("#nav",routes);
  router(routes);


})