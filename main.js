let slideIndex = 1;
let onauto;
var timeout;
//showSlide();

function nextSlide(n) 
{
	onauto = true;
	slideIndex += 1;
	clearTimeout(timeout);
	var re = setTimeout(function() 
		{
			onauto = false;
			clearTimeout(re); 
			showSlide();
		}, 30000);
	showSlide();
}

function currentSlide(n) 
{
}

function showSlide()
{
	let i;
	let slides = document.getElementsByClassName("c");
	
	if (slideIndex < 1) { slideIndex = slides.length; }

	for (i = 0; i < slides.length; i++)
		{ slides[i].style.display = "none"; }

	if (!onauto)
		slideIndex++;

	if (slideIndex > slides.length) { slideIndex = 1; }
	slides[slideIndex-1].style.display="block";
	if (!onauto)
		timeout = setTimeout(showSlide, 30000);

}
