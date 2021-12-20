/*
hp5fx - hydra-p5-fxhash test
*/

/*
fxhash code
*/
function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

/*
 thingticketNFT code
*/

// feature setup

let x1;
const x1Seed = rnd_int(1,10);

const ax1 = 0.2;
const bx1 = 0.3;
const cx1 = 0.4;
const dx1 = 0.5;
const ex1 = 0.6;
const fx1 = 0.7;
const gx1 = 0.8;
const hx1 = 0.9;
const ix1 = 1.0;
const jx1 = 2.0;

if (x1Seed === 1) {
x1 = ax1;
} else if (x1Seed <= 2) {
x1 = bx1;
} else if (x1Seed <= 3) {
x1 = cx1;
} else if (x1Seed <= 4) {
x1 = dx1;
} else if (x1Seed <= 5) {
x1 = ex1;
} else if (x1Seed <= 6) {
x1 = fx1;
} else if (x1Seed <= 7) {
x1 = gx1;
} else if (x1Seed <= 8) {
x1 = hx1;
} else if (x1Seed <= 9) {
x1 = ix1;
} else if (x1Seed <= 10) {
x1 = jx1;
} else {
x1 = "not a valid option"
}

function getx1String(x1Seed) {
  if (x1Seed === 1) return "lowest";
  if (x1Seed <= 3) return "low";
  if (x1Seed <= 7) return "medium";
  if (x1Seed <= 9) return "high";
  else return "highest";
}

window.$fxhashFeatures = {
  "variable 1": getx1String(x1Seed),

 }


// p5 text canvas setup

let hydra, hydraCanvas;
hydraCanvas = document.createElement("canvas");
hydraCanvas.width = window.innerWidth
hydraCanvas.height = window.innerHeight
hydraCanvas.id = "hydraCanvas";
hydraCanvas.style.position = "absolute";
hydraCanvas.style.zIndex = 2;
hydraCanvas.style.top = 0;
hydraCanvas.style.left = 0;
hydraCanvas.getContext("webgl", { preserveDrawingBuffer: false });


var elt;
const s = ( p1 ) => {

let x = 800;
let y = 800;
  
	p1.setup = () => {
	let canvas = p1.createCanvas(hydraCanvas.width, hydraCanvas.height);
		p1.pixelDensity(2);
		elt = canvas.elt;
		s0.init({src: elt})
		canvas.hide();
		textArray = ["testing","1","2","3",""]
		p1.textSize(letterSize)
		p1.fill(200,200,200);
		p1.draw = () => {
			p1.clear()
			index = Math.floor(time*0.666%textArray.length)
			p1.text(textArray[index], ((hydraCanvas.width/2)-(0.93*letterSize)), (hydraCanvas.height/2)+(0.27*letterSize))
		}
	};
};

let myp5 = new p5(s);


// hydra variables

relativeScale = window.innerHeight/window.innerWidth
letterSize = .2*hydraCanvas.width


// thingticketNFT hydra code

src(o0)
osc(5*x1,x1,1)

.out(o0)


src(s0)

	.blend(src(o0))

.out(o1)
render(o1)
