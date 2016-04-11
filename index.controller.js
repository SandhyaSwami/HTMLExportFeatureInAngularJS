/**
 * Created by sswamy4 on 3/16/2016.
 */
(function () {
    'use strict';

    angular
        .module('html2PDF')
        .controller('HTML2PDFController', HTML2PDFController);

    HTML2PDFController.$inject = ['$scope'];

    /* @ngInject */
    function HTML2PDFController($scope) {
        var vm = this;
        vm.title = 'HTML2PDFController';
        vm.exportGrid = function(){
            $scope.$broadcast('export-pdf',{});
        }
        vm.exportGridToDocFormat = function(){
            $scope.$broadcast('export-doc',{});
        }
        vm.exportGridToExcelFormat = function(){
            $scope.$broadcast('export-excel',{});
        }


    }

})();

