var AllDishesController = function (view, model) {


	var allDishes = model.getAllDishes("starter");
	// adds a new listener for every image on allDishesView
	for (var i = 0; i < allDishes.length; i++) {
		var foodImageBtn = document.getElementById(allDishes[i].id);
		foodImageBtn.addEventListener("click", function(){
			model.setSelectedDishId(this.id);
			var div = document.getElementById("allDishes");
			
			div.style.display = "none";

			var div = document.getElementById("foodInfoView");
			div.style.display = "block";
		}, false);
	}


	var startersButton = document.getElementById("startersButton");
	startersButton.addEventListener("click", function(){
		model.setSelectedType("starter");
		setListeners();
		
	}, false);

	var mainDishButton = document.getElementById("mainDishButton");
	mainDishButton.addEventListener("click", function(){
		model.setSelectedType("main dish");
		setListeners();
	}, false);

	var dessertButton = document.getElementById("dessertButton");
	dessertButton.addEventListener("click", function(){
		model.setSelectedType("dessert");
		setListeners();
	}, false);

	var setListeners = function(){
		var allDish = model.getAllDishes(model.getSelectedType());

		for (var i = 0; i < allDish.length; i++) {

			var foodImageBtn = document.getElementById(allDish[i].id);
			foodImageBtn.addEventListener("click", function(){
				model.setSelectedDishId(this.id);
				var div = document.getElementById("allDishes");
				
				div.style.display = "none";

				var div = document.getElementById("foodInfoView");
				div.style.display = "block";
			}, false);
		}
	}
}