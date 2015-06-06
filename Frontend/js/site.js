
function GetLocation(){
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(LocationCallback);
	}else{
		alert("")
	}
}
function LocationCallback(position){
	sessionStorage["Location"] = position;
}