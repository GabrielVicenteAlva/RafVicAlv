var r = document.querySelector(':root');
let enc = document.getElementById('enc');

window.addEventListener('scroll', parallax);
window.addEventListener("resize", parallax);
document.body.addEventListener('touchmove', parallax);

function parallax(event) {
    let { scrollY } = window;
	// console.log(scrollY + ' ' + document.documentElement.scrollHeight);
	console.log(enc.offsetHeight);
	let parY = (1.2*enc.offsetHeight - 115)*(1-scrollY/enc.offsetHeight)
	r.style.setProperty('--parallax-y', parY+'px');
}
parallax();