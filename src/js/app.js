const navbarLink = document.querySelectorAll(".navbar__link");
const notc = document.querySelectorAll(".notc");
const dropdown = document.querySelector(".dropdown");
const messages = document.querySelector(".messages");
const navbarItme = document.querySelectorAll(".navbar__itme");

const theme = document.querySelector(".navbar__theme");
const fontSize = document.querySelectorAll(".pupap__size");
const colors = document.querySelectorAll(".pupap__color");
const bgColors = document.querySelectorAll(".pupap__bg-wrapper");
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');
const themeModal = document.querySelector(".pupap-box");

const input = document.querySelector(".messages__search-input");
const messageUser = document.querySelectorAll(".messages__user");
const wrapper = document.querySelectorAll(".wrapper");

const root = document.querySelector(":root");

// navbar active
navbarItme.forEach(itme => {
	itme.addEventListener("click", ()=> {
		navbarItme.forEach(link => {
			link.classList.remove("active");
		})

		itme.classList.add("active");
	})
})

// show dropdown
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

const removeSizeSellector = ()=>{
	fontSize.forEach(size=>{
		size.classList.remove('active');
	})
}


// Search Messages
input.addEventListener("keyup", searchMessage);

function searchMessage(event) {
	let val = event.target.value.toLocaleLowerCase();
	messageUser.forEach(itme => {
		let data = itme.querySelector('h3').textContent.toLocaleLowerCase();
		if(data.indexOf(val) != -1){
			itme.style.display = "flex";
		}else {
			itme.style.display = "none";
		}
	})
}

// Aside control
let height = window.innerHeight;

wrapper.forEach(itme=>{
	let size = itme.offsetHeight - height;
	if (size > 0) {
		itme.style.position = "sticky";
		itme.style.top = `-${size}px`;
	}else {
		itme.style.position = "sticky";
		itme.style.top = `0px`;
	}
})

// theme control
theme.addEventListener('click', openModal);
themeModal.addEventListener("click", closeModal);

function openModal(){
	themeModal.style.display = "flex";
}
function closeModal(event){
	themeModal.style.display = "none";
}

// size control
fontSize.forEach(size => {

	size.addEventListener("click",() => {
		removeSizeSellector()
		let fontSize;
		size.classList.toggle("active");

		if(size.classList.contains("font-size-1")){
			fontSize = "10px";
		}else if(size.classList.contains("font-size-2")){
			fontSize = "13px";
		}else if(size.classList.contains("font-size-3")){
			fontSize = "16px";
		}else if(size.classList.contains("font-size-4")){
			fontSize = "19px";
		}else if(size.classList.contains("font-size-5")){
			fontSize = "22px";
		}

		document.querySelector("html").style.fontSize = fontSize;
	})
})


const resetColor = ()=> {
	colors.forEach(color=>{
		color.classList.remove("active");
	})
}

// color control
colors.forEach(color => {
	color.addEventListener("click", ()=>{
		resetColor();
		let primary;

		if(color.classList.contains("color-1")){
			primary = 252;
		}else if(color.classList.contains("color-2")){
			primary = 52;
		}else if(color.classList.contains("color-3")){
			primary = 352;
		}else if(color.classList.contains("color-4")){
			primary = 152;
		}else if(color.classList.contains("color-5")){
			primary = 202;
		}

		color.classList.add("active");
		root.style.setProperty("--primary-color-hue", primary);
	})
})


// bg control
let bgColorLight;
let bgColorwhite;
let bgColordark;

const setColor = ()=> {
	root.style.setProperty("--light-color", bgColorLight);
	root.style.setProperty("--white-color", bgColorwhite);
	root.style.setProperty("--dark-color", bgColordark);
}


bg1.addEventListener("click",()=>{
	bg1.classList.add("active");
	bg2.classList.remove("active");
	bg3.classList.remove("active");

	window.location.reload()
})
bg2.addEventListener("click",()=>{
	bgColordark = "95%";
	bgColorLight = "20%";
	bgColorwhite = "10%";

	bg2.classList.add("active");
	bg1.classList.remove("active");
	bg3.classList.remove("active");

	setColor();
})
bg3.addEventListener("click",()=>{
	bgColordark = "95%";
	bgColorLight = "10%";
	bgColorwhite = "0%";

	bg3.classList.add("active");
	bg1.classList.remove("active");
	bg2.classList.remove("active");

	setColor();
})
