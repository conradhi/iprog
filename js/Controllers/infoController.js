var InfoController = function (view, model) {

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

			var div = document.getElementById("allDishes");
			div.style.display = "block";
	}, false);

}