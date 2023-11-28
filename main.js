let slideIndex = 1;
let onsearch;
let onauto;
var timeout;

const nxtButtonP = document.getElementById("next");
const prvbButtonP = document.getElementById("prev");
//showSlide();
//
//

setInterval(()=> { 
	if (onsearch)
	{
		if (document.querySelector(".main-container:hover") == null) 
		{
			document.getElementById("mb").style.display = "inline";
			document.getElementById("search").style.display = "none";
			onsearch = false;
		}
	}
}, 10);

	let scdiv = document.getElementsByClassName("item");

	scdiv.forEach((it, a) =>
	{
		let itemDimension = it.getBoundingClientRect();
		let itemWidth = itemDimension.width;

		nxtButtonP.addEventListener('click', ()=> 
		{
			it.scrollLeft += itemWidth;
		});

		prvButtonP.addEventListener('click', ()=> 
		{
			it.scrollLeft -= itemWidth;
		});

	});

function showsearch()
{
	if (!onsearch)
	{
		document.getElementById("mb").style.display = "none";
		document.getElementById("search").style.display = "inline";
		onsearch = true;
	}
}

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
