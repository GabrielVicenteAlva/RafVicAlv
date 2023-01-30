var r = document.querySelector(':root');
let enc = document.getElementById('enc');
window.addEventListener('scroll', parallax);

window.addEventListener("resize", parallax);

function parallax(event) {
    let { scrollY } = window;
	let parY = (enc.offsetHeight - 80)*(1-scrollY/enc.offsetHeight)
	r.style.setProperty('--parallax-y', parY+'px');
}
parallax();