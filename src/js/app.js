const navbarLink = document.querySelectorAll(".navbar__link");
const notc = document.querySelectorAll(".notc");
const dropdown = document.querySelector(".dropdown");
const messages = document.querySelector(".messages");
const navbarItme = document.querySelectorAll(".navbar__itme");

navbarItme.forEach(itme => {
	itme.addEventListener("click", ()=> {
		navbarItme.forEach(link => {
			link.classList.remove("active");
		})

		itme.classList.add("active");
	})
})
navbarLink.forEach(link => {
	link.addEventListener('click',showDisplay);
})

function showDisplay(event) {
	event.preventDefault();
	if(event.target.classList.contains("navbar__link--notf")){
		dropdown.style.display = "block";
		notc[0].style.display = "none";
	} else if (event.target.classList.contains("navbar__link--mess")){
		notc[1].style.display = "none";
		dropdown.style.display = "none";
		messages.style.boxShadow = "0 10px 10px #999";
		setTimeout(()=>{messages.style.boxShadow = "0 0 0"},2000);
	}
	else {
		dropdown.style.display = "none";
	}
}
