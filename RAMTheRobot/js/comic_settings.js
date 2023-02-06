//comic_settings.js was created by geno7, with much needed assistance from Dannarchy

//this is the main file you'll be messing with to manage and update your comic. most (not all) of the main toggle-able settings are here.

//comic_archive has more settings pertaining to the archive page, and comic_show has settings pertaining to the main place that pages of your comic are displayed.

let pg = Number(findGetParameter("pg")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

////////////////////////
//VARIABLES FOR TWEAKING
////////////////////////

//REALLY IMPORTANT ONES
const maxpg = 49; //the current number of pages your comic has in total. this DOESNT necessarily mean number of IMAGE FILES as it doesn't count pages split into multiple files. 
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
        date: writeDate(2021, 3, 16), //the date on which the page was posted (mainly for the archive). The date is written using a function called "writeDate", basically just put writeDate and then some parenthesis and, comma separated, the year followed by the month and the day. Don't forget another comma at the end outside the parenthesis!
        altText: "", //the alt text (mouse over text) for this particular comic. put nothing inbetween the quotes for no alt text
        imageFiles: 1, //how many image files this page is split into
        authorNotes: `
		<p> this strip was posted in:</p></br>
		<a href="https://www.reddit.com/r/furry_irl/comments/noe1g3/robot_irl/"> Reddit </a> </br> </br>
		<a href="https://www.deviantart.com/rafvicalv/art/R-A-M-the-robot-881098709"> DeviantArt </a>
		
            `,
    },
    {
        pgNum: 2,
        title: "Ram Maid",
        date: writeDate(2021, 3, 17),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            `,
    },
    {
        pgNum: 3,
        title: "Ram is a robot",
        date: writeDate(2021, 3, 18),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	 {
        pgNum: 4,
        title: "Broken arm",
        date: writeDate(2021, 3, 18),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 5,
        title: "Soul",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 6,
        title: "Mods are fun",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 7,
        title: "Ram and the shinnning",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 8,
        title: "Evil Ram",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 9,
        title: "Ice cream",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 10,
        title: "Boop",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 11,
        title: "New year in space",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 12,
        title: "Beach episode",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 13,
        title: "Power outage",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 14,
        title: "Ram the chef",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>(i think i forgot to post this on DA)</p>
            `,
    },
	{
        pgNum: 15,
        title: "Ram and the portal",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 16,
        title: "Robots like her",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 17,
        title: "Ram's screen",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 18,
        title: "Waiting room",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 19,
        title: "Ram and the spaceship's AI",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 20,
        title: "Ram's alien cat",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 21,
        title: "Ram at the pawn shop",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 22,
        title: "Ram's revenge",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 23,
        title: "Jake's drawing",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 24,
        title: "The devil and Ram",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 25,
        title: "Ram's first comic remake",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 26,
        title: "Trick",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 27,
        title: "Ram's facial recocnition system",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 28,
        title: "the oven",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 29,
        title: "ram's clothes",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 30,
        title: "Jake's invention",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 31,
        title: "bug",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 32,
        title: "rear window",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 33,
        title: "crying",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 34,
        title: "threshold",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 35,
        title: "The future",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 36,
        title: "Halloween",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 37,
        title: "Ali the alien",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 38,
        title: "flirt",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 39,
        title: "The bed",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 40,
        title: "Ram POV",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 41,
        title: "Robot Clones",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 42,
        title: "Organic Ram",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 43,
        title: "Ram learing beeing alive 1",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 44,
        title: "Ram learing beeing alive 2",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 45,
        title: "Ram learing beeing alive 3",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 46,
        title: "ram's best day",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 47,
        title: "Status quo",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 48,
        title: "Ram's joke",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	{
        pgNum: 49,
        title: "Ram is space",
        date: writeDate(2023, 02, 1),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>I will write something here soon</p>
            `,
    },
	
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
