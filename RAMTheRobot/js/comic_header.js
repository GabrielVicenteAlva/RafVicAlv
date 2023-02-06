//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"
document.querySelector(".writeHeader").innerHTML = `
    <header>
		<div id="logo">
            <img src="img/RTRlogo.png">
        </div>
        <div id="nav">
            <div><a href="index.html">LAST PAGE</a></div>
            <div><a href="archive.html">ARCHIVE</a></div>
            <div><a href="../index.html">RAFVICALV.COM</a></div>
            <!--
            <div><a href="characters.html">CHARACTERS</a></div>
            <div><a href="about.html">SUPPORT</a></div>
            -->
        </div>
    </header>
`;