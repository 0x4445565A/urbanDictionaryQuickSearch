(function(angular) {
  'use strict';

  function BrowseController(Dictionary) {
    var vm = this;
    vm.definitions = [];
    vm.search = search;

    function search(term) {
      var result = Dictionary.find({
        term: term
      });
      vm.definitions = result;
    }
  }

  BrowseController.$inject = ['Dictionary'];

  angular
    .module('dictionaryApp.feature.browse')
    .controller('BrowseController', BrowseController);
}(angular));