function dropdown() {
	var menu = document.getElementById("dropdownmenu");
	if (menu.className == "topnav") {
		menu.className += " responsive"
	} else {
		menu.className = "topnav"
	}
}

function showMore() {
	var expand = document.getElementsByClassName("profiles");
	expand.style.height = "3000px"
}
