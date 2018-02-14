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

			
	var newDinnerBtn = document.getElementById("newDinnerBtn");
	newDinnerBtn.addEventListener("click", function(){
		var div = document.getElementById("landingPage")
		div.style.display = "none";

		var div = document.getElementById("leftContainer");
		div.style.display = "block";

		var div = document.getElementById("allDishes");
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

			var div = document.getElementById("allDishes");
			div.style.display = "block";
	}, false);

	var confirmDinnerBtn = document.getElementById("confirmDinnerBtn");
	confirmDinnerBtn.addEventListener("click", function(){
		var div = document.getElementById("foodInfoView");
			model.dinnerView();
			var div = document.getElementById("leftContainer");
			div.style.display = "none";

			var div = document.getElementById("allDishes");
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

			var div = document.getElementById("allDishes");
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

			var div = document.getElementById("allDishes");
			div.style.display = "block";
	}, false);

		
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});