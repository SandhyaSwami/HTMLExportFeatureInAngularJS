/**
 * Created by sswamy4 on 3/16/2016.
 */
(function () {
    'use strict';

    angular
        .module('html2PDF',[])
        .directive('exportTable', exportTable);
    function exportTable() {
        var directive = {
            link: link,
            restrict: 'C',
        };
        return directive;
        function link($scope, element, attrs) {
            $scope.$on('export-pdf', function(e,d){
                element.tableExport({type:'pdf', escape:false});
            });
            $scope.$on('export-doc', function(e,d){
                element.tableExport({type:'doc',escape:false});
            });
            $scope.$on('export-excel', function(e,d){
                element.tableExport({type:'excel',escape:false});
            });
        }
    }
})();


