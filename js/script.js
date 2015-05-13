function InlineEditorController($scope){	

	$scope.mostrarEdicao = false;
	$scope.value = 'Editar.';	

	$scope.hideEdicao = function(){	

		$scope.mostrarEdicao = false;
	}

	$scope.toggleTooltip = function(e){
		e.stopPropagation();
		$scope.mostrarEdicao = !$scope.mostrarEdicao;
	}
}
