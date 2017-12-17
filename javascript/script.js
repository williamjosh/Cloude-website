function dropdown() {
	var menu = document.getElementById("dropdownmenu");
	if (menu.className == "topnav") {
		menu.className += " responsive"
	} else {
		menu.className = "topnav"
	}
}
