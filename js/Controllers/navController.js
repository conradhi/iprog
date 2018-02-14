var NavController = function (view, model) {

	view.plusButton.click(function(){

		model.setNumberOfGuests(model.getNumberOfGuests() + 1);

	});

 
	view.minusButton.click(function(){
		if(model.getNumberOfGuests() <= 0){
			
		}

		else{
			model.setNumberOfGuests(model.getNumberOfGuests() - 1);
		}
	});

}