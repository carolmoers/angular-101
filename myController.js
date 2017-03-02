app.controller("myController",
  function($scope) {
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
});
