var onSidebar;

function toggleSidebar() {
	if (onSidebar)
		document.getElementById("sidebar").style.width = "0";
	else
		document.getElementById("sidebar").style.width = "250px";

	onSidebar = !onSidebar;
}
