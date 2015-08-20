(function() {
  'use strict';
  
  angular
    .module('webApp.controllers')
    .controller('AboutController', Controller);
  
  //Controller.$inject = ['dependencies'];
  
  /* @ngInject */
  function Controller() {
    
    var vm = this;
    vm.title = 'Sobre mi';
    activate();
    
    ///////FUNCIONES PRIVADAS/////////
    function activate() {
    }
  }
})();