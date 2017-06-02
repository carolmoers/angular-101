app.controller("myController",
  function($scope, $http) {
    $scope.name = "Carol";
    $scope.names = ["Carol", "Desi", "Luiz", "Marcelo"];

    $scope.people = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
    ];

    $scope.orderByMe = function(x) {
      $scope.myOrderBy = x;
    }

    $http.get("https://www.w3schools.com/angular/customers.php").then(function(response) {
        $scope.customers = response.data.records;
    });
});
