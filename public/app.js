Stamplay.init('querycustomobjecttutorial');

function queryObject(){
	var cuisine = document.getElementById('cuisine').value;
	var city = document.getElementById('city').value;
	
	var objectCollection = new Stamplay.Cobject('resturaunt').Collection;
	objectCollection.equalTo("cuisine", cuisine).equalTo("city", city).fetch().then(function() {
		var cuisine = objectCollection.instance[0].get('cuisine');
		var resturaunt = objectCollection.instance[0].get('resturaunt');
		var city = objectCollection.instance[0].get('city');
		var address = objectCollection.instance[0].get('address');

		document.getElementById('objectOutputName').innerHTML = resturaunt; 
		document.getElementById('objectOutputCuisine').innerHTML = cuisine; 
		document.getElementById('objectOutputCity').innerHTML = city; 
		document.getElementById('objectOutputAddress').innerHTML = address; 

		document.getElementById('cuisine').value = ""; 
		document.getElementById('city').value = ""; 
	});
}

function reset(){
	document.getElementById('objectOutputName').innerHTML = ''; 
	document.getElementById('objectOutputCuisine').innerHTML = ''; 
	document.getElementById('objectOutputCity').innerHTML = ''; 
	document.getElementById('objectOutputAddress').innerHTML = ''; 
}