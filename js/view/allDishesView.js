var AllDishesView = function (container, model) {

	var all = container.find("#all");
	var allDishes = model.getAllDishes("starter");
	var dishId = "";



	var allDishesHtml = "";

	for (var i = 0; i < allDishes.length; i++) { 

		allDishesHtml += "<div class='col-sm-4 col-12'>" + 
							"<div class='col-12 text-center'>" + 
								"<a>" + 
									"<img  id='" + allDishes[i].id + "' src='images/"+ allDishes[i].image + "'>" +
								"</a>" + 
							"</div>" +

							"<div class='col-12' style='text-align: center;'>" +
								
									"<h3>" + allDishes[i].name + "<h3>" +
										
							"</div>" +
						"</div>";
    }

	all.html(allDishesHtml);


	this.update = function(model, changeDetails){

		allDishesHtml = "";
		allDishes = model.getAllDishes(model.getSelectedType());

		if (changeDetails === "type") {
			for (var i = 0; i < allDishes.length; i++) { 

				allDishesHtml += "<div class='col-sm-4 col-12'>" + 
									"<div class='col-12 text-center'>" + 
										"<a>" + 
											"<img  id='" + allDishes[i].id + "' src='images/"+ allDishes[i].image + "'>" +
										"</a>" + 
									"</div>" +

									"<div class='col-12' style='text-align: center;'>" +
										
											"<h3>" + allDishes[i].name + "<h3>" +
										
									"</div>" +
								"</div>";
    		}

			all.html(allDishesHtml);
		}
	}

	model.addObserver(this.update);


	






}