//comic_settings.js was created by geno7, with much needed assistance from Dannarchy

//this is the main file you'll be messing with to manage and update your comic. most (not all) of the main toggle-able settings are here.

//comic_archive has more settings pertaining to the archive page, and comic_show has settings pertaining to the main place that pages of your comic are displayed.

let pg = Number(findGetParameter("pg")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

////////////////////////
//VARIABLES FOR TWEAKING
////////////////////////

//REALLY IMPORTANT ONES
const maxpg = 53; //the current number of pages your comic has in total. this DOESNT necessarily mean number of IMAGE FILES as it doesn't count pages split into multiple files. 
//YOU MUST UPDATE THIS NUMBER EVERY TIME YOU ADD A NEW PAGE or else it wont display the most recent page

// COMIC PAGE SETTINGS
const folder = "img/comics"; //directory of the folder where you keep all the comics
const image = "RTR"; //what you'll name all your comic pages
const imgPart = "_" //special character(s) you put after the page number to subdivide pages into multiple image files (ie pg2_1, pg2_2, etc)
const ext = "png"; //file extension of your comic pages

//THUMBNAIL SETTINGS
const thumbFolder = "img/thumbs" //directory of the folder where you keep all the thumbnail images for the comics, in case you want the archive page to use thumbnails.
const thumbExt = "png" //file extension of thumbnails
const thumbDefault = "default" //name of the default thumbnail that displays when no thumbnail is set, located in the directory you set thumbFolder to.

//NAVIGATION SETTINGS
const navText = ["First","Previous","Next","Last"]; //alt text for your nav images, or just the text that shows up if you're not using images
const navFolder = "img/comicnav"; //directory where nav images are stored
const navExt = "png" //file extension of nav images
const navScrollTo = "#showComic"; //id of the div you want the page to automatically scroll to when you click to the next comic. will turn off if you delete text between quotation marks

if (pg == 0) {pg = maxpg;} //display MOST RECENT COMIC when the webpage is loaded. if you want to instead have the FIRST COMIC displayed first, change maxpg to 1.

//pgData holds all the parameters for each of your pages. copypaste this and fill out accordingly:
/* 
    {
        pgNum: ,
        title: "",
        date: writeDate([YEAR],[MONTH],[DAY]),
        altText: "",
        imageFiles: "",
        authorNotes: ``
    },
*/
//Note: the formatting is important! The whole thing won't show up if you forget to include the commas or curly braces in the right place.

const pgData = [
    {
        pgNum: 1, //what page number it is
        title: "R.A.M. the robot", //the title of the page (leaving this blank will default it to "Page X")
        date: writeDate(2021, 5, 30), //the date on which the page was posted (mainly for the archive). The date is written using a function called "writeDate", basically just put writeDate and then some parenthesis and, comma separated, the year followed by the month and the day. Don't forget another comma at the end outside the parenthesis!
        altText: "", //the alt text (mouse over text) for this particular comic. put nothing inbetween the quotes for no alt text
        imageFiles: 1, //how many image files this page is split into
        authorNotes: `
		<p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/noe1g3/robot_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/R-A-M-the-robot-881098709"> DeviantArt </a> </br> </br>
		<a href="https://www.instagram.com/p/CPgL42hgRGo/"> Instagram </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1520175145528303616?s=20&t=kyQYwyl12F2E5DxPEe24aA"> Twitter </a>
		
		
            `,
    },
    {
        pgNum: 2,
        title: "Ram Maid",
        date: writeDate(2023, 1, 6),
        altText: "",
        imageFiles: 1,
        authorNotes: `
        <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/nybffi/robot_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Ram-maid-Comic-I-forgot-to-post-944100740"> DeviantArt </a>
            `,
    },
    {
        pgNum: 3,
        title: "Ram is a robot",
        date: writeDate(2023, 1, 6),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/o8dv14/robot_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Ram-is-a-robot-Comic-I-forgot-to-post-944101053"> DeviantArt </a>
            `,
    },
	 {
        pgNum: 4,
        title: "Broken arm",
        date: writeDate(2023, 1, 6),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/pcpagm/robot_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Broken-arm-Comic-I-forgot-to-post-944101186"> DeviantArt </a>
            `,
    },
	{
        pgNum: 5,
        title: "Soul",
        date: writeDate(2021, 09, 15),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/potls9/robot_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Soul-891971033"> DeviantArt </a>
            `,
    },
	{
        pgNum: 6,
        title: "Mods are fun",
        date: writeDate(2021, 09, 29),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/pxxpcq/robot_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Ram-the-robot-6-893326617"> DeviantArt </a> </br> </br>
		<a href="https://www.instagram.com/p/CUaR1DhlGIn/"> Instagram </a>
            `,
    },
	{
        pgNum: 7,
        title: "Ram and the shinnning",
        date: writeDate(2021, 10, 5),
        altText: "",
        imageFiles: 1,
        authorNotes: `
             <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/q2daqo/robot_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Ram-the-robot-and-the-shinnning-894016694"> DeviantArt </a> </br> </br>
		<a href="https://www.instagram.com/p/CUrIUpys1OX/"> Instagram </a>
            `,
    },
	{
        pgNum: 8,
        title: "Evil Ram",
        date: writeDate(2021, 11, 16),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/qvaq2x/robot_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Evil-R-A-M-898089093"> DeviantArt </a>
            `,
    },
	{
        pgNum: 9,
        title: "Ice cream",
        date: writeDate(2021, 12, 6),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/ra9sb6/robot_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Ice-cream-899980743"> DeviantArt </a>
            `,
    },
	{
        pgNum: 10,
        title: "Boop",
        date: writeDate(2021, 12, 23),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/rmxzj6/robot_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Boop-901591555"> DeviantArt </a> </br> </br>
		<a href="https://www.instagram.com/p/CX1JKwXL40v/"> Instagram </a>
            `,
    },
	{
        pgNum: 11,
        title: "New year in space",
        date: writeDate(2021, 12, 31),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/rsv2sy/space_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/New-year-in-space-902363288"> DeviantArt </a> </br> </br>
		<a href="https://www.instagram.com/p/CYJqUa0rZg2/"> Instagram </a>
            `,
    },
	{
        pgNum: 12,
        title: "Beach episode",
        date: writeDate(2022, 01, 19),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/s7rlu5/robot_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Beach-episode-904330557"> DeviantArt </a> </br> </br>
		<a href="https://www.instagram.com/p/CY6mClmr7P1/"> Instagram </a>
            `,
    },
	{
        pgNum: 13,
        title: "Power outage",
        date: writeDate(2022, 02, 4),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/skfuv7/robot_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Power-outage-905975047"> DeviantArt </a> </br> </br>
		<a href="https://www.instagram.com/p/CZj2USDlrFP/"> Instagram </a>
            `,
    },
	{
        pgNum: 14,
        title: "Ram the chef",
        date: writeDate(2022, 02, 14),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/srji5l/dinner_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Ram-the-chef-906887128"> DeviantArt </a> <br/> <br/>
		<a href="https://www.instagram.com/p/CZ66qHQLy_s/"> Instagram </a> </br> </br>
            `,
    },
	{
        pgNum: 15,
        title: "Ram and the portal",
        date: writeDate(2022, 02, 23),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/szjoek/alien_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/RAM-and-the-portal-907923103"> DeviantArt </a> </br> </br>
		<a href="https://www.instagram.com/p/CaUvhfcLI_2/"> Instagram </a>
            `,
    },
	{
        pgNum: 16,
        title: "Robots like her",
        date: writeDate(2022, 02, 24),
        altText: "",
        imageFiles: 1,
        authorNotes: `
<p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/user/RafVicAlv/comments/t0nw0k/i_did_something_very_fast/"> Reddit </a> </br> </br>
		`,
    },
	{
        pgNum: 17,
        title: "Ram's screen",
        date: writeDate(2022, 03, 14),
        altText: "",
        imageFiles: 1,
        authorNotes: `
<p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/tdzhdj/robot_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Ram-s-screen-909849362"> DeviantArt </a> </br> </br>
		<a href="https://www.instagram.com/p/CbFqhRTr-yq/"> Instagram </a>            `,
    },
	{
        pgNum: 18,
        title: "Waiting room",
        date: writeDate(2022, 03, 29),
        altText: "good trick!",
        imageFiles: 1,
        authorNotes: `
<p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry/comments/tr4dqt/waiting_room_by_me/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Waiting-room-911386738"> DeviantArt </a> </br> </br>
		<a href="https://www.instagram.com/p/CbqgjKUgQSW/"> Instagram </a>            `,
    },
	{
        pgNum: 19,
        title: "Ram and the spaceship's AI",
        date: writeDate(2022, 04, 13),
        altText: "",
        imageFiles: 1,
        authorNotes: `
<p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/u2sjxt/robot_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/R-A-M-and-the-Spaceship-s-AI-912916265"> DeviantArt </a> </br> </br>
		<a href="https://www.instagram.com/p/CcS8LmnLo1p/"> Instagram </a>            `,
    },
	{
        pgNum: 20,
        title: "Ram's alien cat",
        date: writeDate(2022, 04, 25),
        altText: "",
        imageFiles: 1,
        authorNotes: `
<p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/ubn64s/cat_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/R-A-M-s-alien-cat-914156762"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1520173058341937152?s=20&t=lhFswYkFbjoFUTvl9XMN1g"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/CcxzovvrxmU/"> Instagram </a>            `,
    },
	{
        pgNum: 21,
        title: "Ram at the pawn shop",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/ug1vyf/card_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/R-A-M-at-the-pawn-shop-914771043"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1520784782359212032?s=20&t=qAoMVMEoH95hwXJjZn2o3g"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/CdBSWjarFi-/"> Instagram </a>
		
            `,
    },
	{
        pgNum: 22,
        title: "Ram's revenge",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/ultfrr/revenge_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Ram-s-revenge-915573507"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1523684280072736768?s=20&t=qAoMVMEoH95hwXJjZn2o3g"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/CdV4_pwry-B/"> Instagram </a>
		
            `,
    },
	{
        pgNum: 23,
        title: "Jake's drawing",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/v5f8gn/canvas_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Jake-s-drawing-918336398"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1533467756271648775?s=20&t=qAoMVMEoH95hwXJjZn2o3g"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/CebaXmFL0tV/"> Instagram </a>
		
            `,
    },
	{
        pgNum: 24,
        title: "The devil and Ram",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/vp2ubb/robot_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/The-devil-and-R-A-M-921076776"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1542884817079001088?s=20&t=qAoMVMEoH95hwXJjZn2o3g"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/CfeUhymLiMY/"> Instagram </a>
		
            `,
    },
	{
        pgNum: 25,
        title: "Ram's first comic remake",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/vr9i5s/remake_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Ram-s-first-comic-strip-remake-921392653"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1543975855373910016?s=20&t=qAoMVMEoH95hwXJjZn2o3g"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/CfmFDnuLqwV/"> Instagram </a>
		
            `,
    },
	{
        pgNum: 26,
        title: "Trick",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/vy5b25/trick_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Trick-922373751"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1547234964374159360?s=20&t=qAoMVMEoH95hwXJjZn2o3g"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/Cf9PwLtLP1i/"> Instagram </a>
		
            `,
    },
	{
        pgNum: 27,
        title: "Ram's facial recocnition system",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/w7rfc0/robot_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/R-A-M-s-Facial-Recognition-System-923679760"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1551586457290153987?s=20&t=qAoMVMEoH95hwXJjZn2o3g"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/CgcJvu4rlAs/"> Instagram </a>
		
            `,
    },
	{
        pgNum: 28,
        title: "the oven",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/wcqwfk/robot_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/The-oven-Ram-the-robot-924340676"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1553760111075725313?s=20&t=qAoMVMEoH95hwXJjZn2o3g"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/CgrmNG0Ly65/"> Instagram </a>
		
            `,
    },
	{
        pgNum: 29,
        title: "ram's clothes",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/wmmqni/clothes_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Ram-s-Clothes-925708161"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1558100038538125314?s=20&t=qAoMVMEoH95hwXJjZn2o3g"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/ChKbzCMLtj5/"> Instagram </a>
		
            `,
    },
	{
        pgNum: 30,
        title: "Jake's invention",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/wrlwnm/invention_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Jake-s-Invention-926374945"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1560282676044734467?s=20&t=qAoMVMEoH95hwXJjZn2o3g"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/ChZ8XtpLPfD/"> Instagram </a>
		
            `,
    },
	{
        pgNum: 31,
        title: "bug",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/wybobz/bug_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Bug-927264642"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1563181697533120514?s=20&t=athpz9oPKDp-p0JdKDr0tQ"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/Chui-AZrauy/"> Instagram </a>
            `,
    },
	{
        pgNum: 32,
        title: "rear window",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/x43yh4/window_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Rear-window-928082814"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1565720082768166912?s=20&t=athpz9oPKDp-p0JdKDr0tQ"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/CiAlBfCsww6/"> Instagram </a>
            `,
    },
	{
        pgNum: 33,
        title: "crying",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/xoq6z9/eyes_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Crying-930915293"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1574456020671369233?s=20&t=athpz9oPKDp-p0JdKDr0tQ"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/Ci-qQIFJ-Cx/"> Instagram </a>
            `,
    },
	{
        pgNum: 34,
        title: "threshold",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/xjb057/threshold_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Threshold-930189327"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1572239182894104577?s=20&t=athpz9oPKDp-p0JdKDr0tQ"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/Ciu5apYrYuf/"> Instagram </a>
            `,
    },
	{
        pgNum: 35,
        title: "The future",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/y7cttg/furry_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/The-Future-933399738"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1582025549320314880?s=20&t=athpz9oPKDp-p0JdKDr0tQ"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/Cj0bsXXLKgA/"> Instagram </a>
            `,
    },
	{
        pgNum: 36,
        title: "Halloween",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/xuluxq/halloween_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Halloween-931728660"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1576951411224743936?s=20&t=athpz9oPKDp-p0JdKDr0tQ"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/CjQYTQIr04V/"> Instagram </a>
            `,
    },
	{
        pgNum: 37,
        title: "Ali the alien",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/yaq145/alien_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Ali-the-alien-933996721"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1583838893853376513?s=20&t=athpz9oPKDp-p0JdKDr0tQ"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/CkBUdv3Ltro/"> Instagram </a>
            `,
    },
	{
        pgNum: 38,
        title: "flirt",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/yh2z11/flirt_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Flirt-934890198"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1586536281017913344?s=20&t=athpz9oPKDp-p0JdKDr0tQ"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/CkUfGZxjVxu/"> Instagram </a>
            `,
    },
	{
        pgNum: 39,
        title: "The bed",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/yu4f5i/furry_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/The-bed-936901145"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1591810460541915141?s=20&t=athpz9oPKDp-p0JdKDr0tQ"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/Ck59jdsrPw6/"> Instagram </a>
            `,
    },
	{
        pgNum: 40,
        title: "Ram POV",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/yzdrz8/furry_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Ram-POV-937755216"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1593981500814462976?s=20&t=athpz9oPKDp-p0JdKDr0tQ"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/ClJY0kIrP8F/"> Instagram </a>
            `,
    },
	{
        pgNum: 41,
        title: "Robot Clones",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/zaogoe/furry_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Robot-clones-939475588"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1598694526322876419?s=20&t=athpz9oPKDp-p0JdKDr0tQ"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/Clq4MSMLOT9/"> Instagram </a>
            `,
    },
	{
        pgNum: 42,
        title: "Organic Ram",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/zgzhjr/furry_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Organic-Ram-940386748"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1601229905122844672?s=20&t=athpz9oPKDp-p0JdKDr0tQ"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/Cl84NU7rGMN/"> Instagram </a>
            `,
    },
	{
        pgNum: 43,
        title: "Ram learing beeing alive 1",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/zngnq9/furry_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Ram-leaning-being-alive-1-941273991"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1603767613082959872?s=20&t=athpz9oPKDp-p0JdKDr0tQ"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/CmO6amorRMG/"> Instagram </a>
            `,
    },
	{
        pgNum: 44,
        title: "Ram learing beeing alive 2",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/zvovx3/furry_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Ram-learning-being-alive-2-942520816"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1607391101643624449?s=20&t=athpz9oPKDp-p0JdKDr0tQ"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/CmoqS-CrRei/"> Instagram </a>
            `,
    },
	{
        pgNum: 45,
        title: "Ram learing beeing alive 3",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> this strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/100lcp1/furry_irl/?utm_source=share&utm_medium=web2x&context=3"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Ram-learning-being-alive-3-943345646"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1609565039349927938?s=20&t=y_KzEM9KPo40VFmgwyDUSg"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/Cm4HTjqrDf4/"> Instagram </a>
            `,
    },
	{
        pgNum: 46,
        title: "ram's best day",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/104wb0g/furry_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Ram-s-best-day-944072438"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1611377764560510976?s=20&t=athpz9oPKDp-p0JdKDr0tQ"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/CnFAf7zrc3t/"> Instagram </a>
            `,
    },
	{
        pgNum: 47,
        title: "Status quo",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
           <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/10bqgbz/furry_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Status-Quo-945139658"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1614275369296699393?s=20&t=athpz9oPKDp-p0JdKDr0tQ"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/CnZleEeLN0N/"> Instagram </a>
            `,
    },
	{
        pgNum: 48,
        title: "Ram's joke",
        date: writeDate(2023, 01, 18),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/10f9dop/furry_irl/?utm_source=share&utm_medium=web2x&context=3"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Ram-s-joke-945713510"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1615725994152951808?s=20&t=athpz9oPKDp-p0JdKDr0tQ"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/Cnj5NltL9Ya/"> Instagram </a>
            `,
    },
	{
        pgNum: 49,
        title: "Ram in space",
        date: writeDate(2023, 01, 29),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/10o9nad/furry_irl/?utm_source=share&utm_medium=web2x&context=3"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Ram-in-space-947175123"> DeviantArt </a> </br> </br>
		<a href="https://www.instagram.com/p/CoAOjeCLE0w/"> Instagram </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1619713096876175362?s=20&t=0QBTaoa0764VKbIdO0C7Eg"> Twitter </a>
            `,
    },

{
        pgNum: 50,
        title: "Ram across the multiverse",
        date: writeDate(2023, 02, 3),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p> This strip was posted on:</p></br>
            <a href="https://www.reddit.com/r/furry_irl/comments/10tigi6/furry_irl/?utm_source=share&utm_medium=web2x&context=3"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Ram-across-the-multiverse-948060755"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1621887723542806528?s=20&t=WnpyzRJDf7l1HJ2LWoCUbw"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/CoPrXLIuiJg/"> Instagram </a>
		
            `,
    },

{
        pgNum: 51,
        title: "Toys",
        date: writeDate(2023, 02, 6),
        altText: "",
        imageFiles: 1,
        authorNotes: `
        <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/10w3ww3/furry_irl/?utm_source=share&utm_medium=web2x&context=3"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Toys-948550180"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1621887723542806528?s=20&t=sZDgIcbHMcVrKIR4T3pIfw"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/CoXY_FEr9qB/"> Instagram </a>
            `,
    },
    
    {
        pgNum: 52,
        title: "Alone!",
        date: writeDate(2023, 02, 11),
        altText: "",
        imageFiles: 1,
        authorNotes: `
        
        <p> This strip was posted on:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/110hnjt/furry_irl/?utm_source=share&utm_medium=web2x&context=3"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/Alone-949241621"> DeviantArt </a> </br> </br>
		<a href="https://twitter.com/RafVicAlv/status/1624785383987740673?s=20&t=pPdMHvUlP27BaHv17KaClg"> Twitter </a> </br> </br>
		<a href="https://www.instagram.com/p/CokQqNyL4tH/"> Instagram </a>
        
            `,
    },
    
    {
        pgNum: 53,
        title: "ロボットラム",
        date: writeDate(2023, 02, 17),
        altText: "",
        imageFiles: 1,
        authorNotes: `
        
        <p> This strip was posted on:</p><br/>
		<a href="https://www.reddit.com/r/furry_irl/comments/115h6xy/furry_irl/?utm_source=share&utm_medium=web2x&context=3"> Reddit </a> <br/> </br/>
		<a href="https://www.deviantart.com/rafvicalv/art/Robotto-ramu-950080604"> DeviantArt </a> <br/> <br/>
		<a href="https://twitter.com/RafVicAlv/status/1626961127543373944?s=20"> Twitter </a> <br/> <br/>
		<a href="https://www.instagram.com/p/Cozt_EdrsUa/"> Instagram </a>
        
            `,
    },
    
/*

 {
        pgNum: 5x,
        title: "name",
        date: writeDate(2023, 02, 1x),
        altText: "",
        imageFiles: 1,
        authorNotes: `
        
        
        
            `,
    },


	<p> This strip was posted on:</p><br/>
		<a href=""> Reddit </a> <br/> </br/>
		<a href=""> DeviantArt </a> <br/> <br/>
		<a href=""> Twitter </a> <br/> <br/>
		<a href=""> Instagram </a>
		

*/	
];

//below is a function you dont rly need to mess with but if you're more experienced with js you can

function findGetParameter(parameterName) { //function used to write a parameter to append to the url, to give each comic page its own unique url
    let result = null,
    tmp = []; 
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function writeDate(year,month,day) { //write date of comic page
    const date = new Date(year,month-1,day)
    .toDateString() //format date as Day Month Date Year
    .toString() //convert it to a string
    .slice(4) //remove the Day
    return date
}
