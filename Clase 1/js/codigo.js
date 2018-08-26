angular.module('mi app', [])



.controller('crtl4', function($scope){
	$scope.empleados = 
	[{"nombre" : 'Juan', "Apellido" : "Asmachs", "Edad" : 39, "Coaching" : true, 
	"Descripcion" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eaque animi incidunt perferendis, sint asperiores, maiores sapiente ipsa facilis culpa sunt sit optio. Reprehenderit quaerat alias pariatur impedit. Sint, iusto."},
	{"nombre" : 'Raul', "Apellido" : "trtr", "Edad" : 49, "Coaching" : false,
"Descripcion" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eaque animi incidunt perferendis, sint asperiores, maiores sapiente ipsa facilis culpa sunt sit optio. Reprehenderit quaerat alias pariatur impedit. Sint, iusto."},
	{"nombre" : 'Riqulem', "Apellido" : "hdthd", "Edad" : 59, "Coaching" : true,
"Descripcion" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eaque animi incidunt perferendis, sint asperiores, maiores sapiente ipsa facilis culpa sunt sit optio. Reprehenderit quaerat alias pariatur impedit. Sint, iusto."},
	{"nombre" : 'Julian', "Apellido" : "dfghd", "Edad" : 69, "Coaching" : false,
"Descripcion" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eaque animi incidunt perferendis, sint asperiores, maiores sapiente ipsa facilis culpa sunt sit optio. Reprehenderit quaerat alias pariatur impedit. Sint, iusto."},
	{"nombre" : 'Ramiro', "Apellido" : "cccbdr", "Edad" : 79, "Coaching" : true,
"Descripcion" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eaque animi incidunt perferendis, sint asperiores, maiores sapiente ipsa facilis culpa sunt sit optio. Reprehenderit quaerat alias pariatur impedit. Sint, iusto."}]
	
})


.controller('formuCtrl', function($scope){
	$scope.agregar = function(){

		if ($scope.formu != null){
		$scope.empleados.push($scope.formu)
		$scope.formu = {}
	}
	}
	
})

.controller('mediaCtrl', function($scope){
	$scope.mostrar = function(){

		var cont = 0;	
		angular.forEach($scope.empleados, function(empleado){

			cont += empleado.Coaching == true
		})
		return cont
	}
	
})
