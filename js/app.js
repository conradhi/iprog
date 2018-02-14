$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	model.setNumberOfGuests(1);

	
	// And create the instance of ExampleView
	var navView = new NavView($("#navView"), model);
	var navController = new NavController(navView, model);// Lab 3: creates the controller that handles the eventlistener

	var allDishesView = new AllDishesView($("#allDishesView"), model);
	var allDishesController = new AllDishesController(allDishesView, model);

	var foodInfoView = new FoodInfoView($("#foodInfoView"), model);
	var infoController = new InfoController(foodInfoView, model);

	var dinnerView = new DinnerView($("#dinnerView"), model);
	var printView = new PrintView($("#printView"), model);

	var startersButton = document.getElementById("startersButton");
	startersButton.addEventListener("click", function(){
		model.setSelectedType("starter");
		setStartersListeners();
		
	}, false);

	var mainDishButton = document.getElementById("mainDishButton");
	mainDishButton.addEventListener("click", function(){
		model.setSelectedType("main dish");
		setMainDishListeners();
	}, false);

	var dessertButton = document.getElementById("dessertButton");
	dessertButton.addEventListener("click", function(){
		model.setSelectedType("dessert");
		setDessertListeners();
	}, false);
			
	var newDinnerBtn = document.getElementById("newDinnerBtn");
	newDinnerBtn.addEventListener("click", function(){
		setStartersListeners();
		var div = document.getElementById("landingPage")
		div.style.display = "none";

		var div = document.getElementById("leftContainer");
		div.style.display = "block";

		var div = document.getElementById("allDishesView");
		div.style.display = "block";
	}, false);

	var setStartersListeners = function(){
		var allDishes = model.getAllDishes("starter");
		// adds a new listener for every image on allDishesView
		for (var i = 0; i < allDishes.length; i++) {
			var foodImageBtn = document.getElementById(allDishes[i].id);
			foodImageBtn.addEventListener("click", function(){
				model.setSelectedDishId(this.id);
				var div = document.getElementById("allDishesView");
				div.style.display = "none";

				
				var div = document.getElementById("foodInfoView");
				div.style.display = "block";

			
			}, false);
		}
	}

	var setMainDishListeners = function (){
		var allDishes = model.getAllDishes("main dish");
		// adds a new listener for every image on allDishesView
		for (var i = 0; i < allDishes.length; i++) {
			var foodImageBtn = document.getElementById(allDishes[i].id);
			foodImageBtn.addEventListener("click", function(){
				model.setSelectedDishId(this.id);
				var div = document.getElementById("allDishesView");
				
				div.style.display = "none";

				var div = document.getElementById("foodInfoView");
				div.style.display = "block";
			}, false);
		}
	}

	var setDessertListeners = function (){
		allDishes = model.getAllDishes("dessert");
		// adds a new listener for every image on allDishesView
		for (var i = 0; i < allDishes.length; i++) {
			var foodImageBtn = document.getElementById(allDishes[i].id);
			foodImageBtn.addEventListener("click", function(){
				model.setSelectedDishId(this.id);
				var div = document.getElementById("allDishesView");
				
				div.style.display = "none";

				var div = document.getElementById("foodInfoView");
				div.style.display = "block";
			}, false);
		}
	}


var addToMenuBtn = document.getElementById("addToMenuBtn");
	addToMenuBtn.addEventListener("click", function(){
		var div = document.getElementById("foodInfoView");

			model.addDishToMenu(model.getSelectedDishId());
			model.updateMenu();
			div.style.display = "none";

			var div = document.getElementById("dinnerView");
			div.style.display = "none";

			var div = document.getElementById("printView");
			div.style.display = "none";

			var div = document.getElementById("leftContainer");
			div.style.display = "block";

			var div = document.getElementById("allDishesView");
			div.style.display = "block";
	}, false);

	
	

	var backToSearchBtn = document.getElementById("backBtn");
	backToSearchBtn.addEventListener("click", function(){
		var div = document.getElementById("foodInfoView");
			div.style.display = "none";

			var div = document.getElementById("dinnerView");
			div.style.display = "none";

			var div = document.getElementById("printView");
			div.style.display = "none";

			var div = document.getElementById("leftContainer");
			div.style.display = "block";

			var div = document.getElementById("allDishesView");
			div.style.display = "block";
	}, false);

	var confirmDinnerBtn = document.getElementById("confirmDinnerBtn");
	confirmDinnerBtn.addEventListener("click", function(){
		var div = document.getElementById("foodInfoView");
			model.dinnerView();
			var div = document.getElementById("leftContainer");
			div.style.display = "none";

			var div = document.getElementById("allDishesView");
			div.style.display = "none";

			var div = document.getElementById("foodInfoView");
			div.style.display = "none";

			var div = document.getElementById("dinnerView");
			div.style.display = "block";
	}, false);

	var printBtn = document.getElementById("printBtn");
	printBtn.addEventListener("click", function(){
		model.print();
		var div = document.getElementById("foodInfoView");
			var div = document.getElementById("dinnerView");
			div.style.display = "none";

			var div = document.getElementById("printView");
			div.style.display = "block";
	}, false);

	var editBtn = document.getElementById("editBtn");
	editBtn.addEventListener("click", function(){
		var div = document.getElementById("foodInfoView");
			var div = document.getElementById("foodInfoView");
			div.style.display = "none";

			var div = document.getElementById("dinnerView");
			div.style.display = "none";

			var div = document.getElementById("printView");
			div.style.display = "none";

			var div = document.getElementById("leftContainer");
			div.style.display = "block";

			var div = document.getElementById("allDishesView");
			div.style.display = "block";
	}, false);

	var editBtn2 = document.getElementById("editBtn2");
	editBtn2.addEventListener("click", function(){
		var div = document.getElementById("foodInfoView");
			var div = document.getElementById("foodInfoView");
			div.style.display = "none";

			var div = document.getElementById("dinnerView");
			div.style.display = "none";

			var div = document.getElementById("printView");
			div.style.display = "none";

			var div = document.getElementById("leftContainer");
			div.style.display = "block";

			var div = document.getElementById("allDishesView");
			div.style.display = "block";
	}, false);

		
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});