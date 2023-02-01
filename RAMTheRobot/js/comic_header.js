//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"
document.querySelector(".writeHeader").innerHTML = `
    <header>
		<div id="logo">
            <img src="img/RTRlogo.png">
        </div>
        <div id="nav">
            <div><a href="#about">HOME</a></div>
            <div><a href="#comics">CHARACTERS</a></div>
            <div><a href="#portfolio">ARCHIVE</a></div>
            <div><a href="#contact">SUPPORT</a></div>
        </div>
    </header>
`;