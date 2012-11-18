//= require modernizr.custom
//= require deck.core
//= require deck.goto
//= require deck.hash
//= require deck.navigation
//= require deck.status


$(function() {
  $.deck('.slide', {
    selectors: {
      container: 'body > article'
    },

  keys: {
    goto: -1 // No key activation
  }
  });

  Modernizr.addTest('pointerevents',function(){
    return document.documentElement.style.pointerEvents === '';
  });
});
