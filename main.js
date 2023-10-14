var onSidebar;
var onButton;

function toggleSidebar() {
	if (onSidebar)
		document.getElementById("sidebar").style.width = "0";
	else
		document.getElementById("sidebar").style.width = "250px";

	onSidebar = !onSidebar;
}

function toggleMainButton()
{
	if (onButton)
		document.getElementById("mb").style.width = "0";
	else 
		document.getElementById("mb").style.width = "128";

	onButton = !onButton;
}
