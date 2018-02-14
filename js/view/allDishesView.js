var AllDishesView = function (container, model) {

	this.startersButton = container.find("#startersButton");
	this.mainDishButton = container.find("#mainDishButton");
	this.desertButton = container.find("#desertButton");
	var all = container.find("#all");
	var allStarter = model.getAllDishes("starter");
	var allMainDish = model.getAllDishes("main dish");
	var allDessert = model.getAllDishes("dessert");
	var dishId = "";
	var allDishes = model.getAllDishes("starter");

	var allDishesHtml = "";

	for (var i = 0; i < allDishes.length; i++) { 

		allDishesHtml += "<div class='col-sm-4 col-12' id='starter'>" + 
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

		allDishes = model.getAllDishes(model.getSelectedType());
		allDishesHtml = "";
		
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