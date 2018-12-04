var app= angular.module('PlayerApp',[]);

crudApp.controller("DbController",['$scope','$http',
    function($scope,$http){

    //Function to get player details form database
    getInfo();
    function getInfo(){
    //insert code    
    }

    $scope.currentPlayer={};
    $scope.editInfo=function(info){
    //insert code
    }

    $scope.UpdateInfo=function(info){
        //insert code
        
        getInfo();
    }
    $scope.deleteInfo = function(info){
    //code
        getInfo();
        }



}])