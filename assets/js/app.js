(function(angular) {
	'use strict';

	var deeal = angular.module('mydeealModule', ['angucomplete']);

    deeal.controller('MyDeealController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

        $scope.form = "";
        $scope.data = [];
        $scope.email = "";
        $scope.senha = "";

        $scope.login = function(){
            if ($scope.email == "cliente@email.com")
                window.location = "admin.html";

            if ($scope.email == "conciliador@email.com")
                window.location = 'admin_conciliador.html'

            if ($scope.email == "submarino@email.com")
                window.location = 'admin_empresa.html'
        }

  }]);

    deeal.controller('AdminController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

        $scope.form = "demandas.html";
        $scope.deals = [];
        $scope.empresas = [];

        $http.get('./assets/data/empresas.json').then(function(response) {
            $scope.empresas = response.data;
        });

        $http.get('./assets/data/deeal.json').then(function(response) {
            $scope.deals = response.data;
        });

        $http.get('./assets/data/conciliador.json').then(function(response) {
            $scope.conciliadores = response.data;
        });

        $scope.selecionarConciliador = function(name){
            $scope.conciliadorSelecionado = name;
        }

        $scope.goTo = function(item) {
            $scope.form = item;
        }
        $scope.cssStatusDemanda = function(status) {
            if (status == 'em_andamento')
                return 'label-info';
            if (status == 'em_negociacao')
                return 'label-warning'
            if (status == 'finalizada')
                return 'label-success'
        }

        $scope.descreveStatus = function(status) {
            if (status == 'em_andamento')
                return 'Em Andamento';
            if (status == 'em_negociacao')
                return 'Em Negociação'
            if (status == 'finalizada')
                return 'Finalizada'
        }

    }]);


    deeal.controller('AdminConciliadorController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

        $scope.form = "demandas_conciliador.html";
        $scope.deals = [];
        $scope.conciliadores = [];
        $scope.conciliadorSelecionado = "";
        $scope.empresas = [];

        $http.get('./assets/data/empresas.json').then(function(response) {
            $scope.empresas = response.data;
        });

        $http.get('./assets/data/deeal.json').then(function(response) {
            $scope.deals = response.data;
        });

        $http.get('./assets/data/conciliador.json').then(function(response) {
            $scope.conciliadores = response.data;
        });

        $scope.selecionarConciliador = function(name){
            $scope.conciliadorSelecionado = name;
        }

        $scope.goTo = function(item) {
            $scope.form = item;
            jQuery(".hourNegociation").mask("99:99");
            jQuery(".datepicker").mask("99/99/9999");
            jQuery(".datepicker").datepicker({
                language: 'pt-BR',
                todayHighlight: true,
                dateFormat: 'dd/mm/yyyy'
            });
        }
        $scope.cssStatusDemanda = function(status) {
            if (status == 'em_andamento')
                return 'label-info';
            if (status == 'em_negociacao')
                return 'label-warning'
            if (status == 'finalizada')
                return 'label-success'
        }

        $scope.descreveStatus = function(status) {
            if (status == 'em_andamento')
                return 'Em Andamento';
            if (status == 'em_negociacao')
                return 'Em Negociação'
            if (status == 'finalizada')
                return 'Finalizada'
        }

    }]);

    deeal.controller('AdminEmpresaController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

        $scope.form = "demandas_empresa.html";
        $scope.deals = [];

        $http.get('./assets/data/empresas.json').then(function(response) {
            $scope.empresas = response.data;
        });

        $http.get('./assets/data/deeal.json').then(function(response) {
            $scope.deals = response.data;
        });

        $http.get('./assets/data/conciliador.json').then(function(response) {
            $scope.conciliadores = response.data;
        });

        $scope.selecionarConciliador = function(name){
            $scope.conciliadorSelecionado = name;
        }

        $scope.goTo = function(item) {
            $scope.form = item;
        }
        $scope.cssStatusDemanda = function(status) {
            if (status == 'em_andamento')
                return 'label-info';
            if (status == 'em_negociacao')
                return 'label-warning'
            if (status == 'finalizada')
                return 'label-success'
        }

        $scope.descreveStatus = function(status) {
            if (status == 'em_andamento')
                return 'Em Andamento';
            if (status == 'em_negociacao')
                return 'Em Negociação'
            if (status == 'finalizada')
                return 'Finalizada'
        }

    }]);
    
})(window.angular);

