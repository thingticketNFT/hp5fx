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

document.addEventListener("keyup", (event) => {
    if (event.key === "s" || event.key === "S") {
        event.preventDefault();
        screencap();
    }
})

speed=0.5
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


const sa = ( p ) => {

let x = 400;
let y = 800;
  
	p.setup = () => {
	let canvas = p.createCanvas(hydraCanvas.width, hydraCanvas.height);
//		p.pixelDensity(2);
		elt = canvas.elt;
		s0.init({src: elt})
		canvas.hide();
		p.textFont('PressStart2P-Regular');

		textArray = ["testing","1","2","3"]
		textArray2 = ["i","hate","every","bureaucrat"]
		p.textSize(letterSize)

		p.fill(200,100,200);

		p.draw = () => {
			p.clear()
			index = Math.floor(time*0.666%textArray.length)
			index2 = Math.floor(time*0.5%textArray2.length)
			p.fill(255,255,255)
//			p.ellipse(rnd_int(0,hydraCanvas.width), rnd_int(0,hydraCanvas.height),rnd_btw(10,200));

//			p.text('blah', rnd_int(0,hydraCanvas.width), rnd_int(0,hydraCanvas.height))
			
			
			
			
			
//		p.textFont('PressStart2P-Regular');
			p.text( textArray[index], ((.4*hydraCanvas.width)+70*(Math.sin(time/4))), (.7*hydraCanvas.height))
			p.text( textArray2[index2], hydraCanvas.width/4, hydraCanvas.height/3)
		}
	};
};




//global on-demand mode
new p5(sa);



const sb = ( p ) => {

let x = 400;
let y = 800;
  
	p.setup = () => {
	let canvas = p.createCanvas(hydraCanvas.width, hydraCanvas.height);
		p.pixelDensity(2);
		elt = canvas.elt;
		s1.init({src: elt})
		canvas.hide();
		p.textFont('OpenSans-Bold');

		p.textSize(rnd_btw(30,200))


		p.draw = () => {
//			p.clear()
			index3 = Math.floor(time*0.666%textArray.length)
			index4 = Math.floor(time*0.5%rnd_btw(5,10))
			p.fill(rnd_int(0,255), Math.sin(p.frameCount*.1)*255, rnd_btw(200,255))
			p.ellipse(rnd_int(0,hydraCanvas.width), rnd_int(0,hydraCanvas.height),rnd_btw(10,200));

			p.text('blah', rnd_int(0,hydraCanvas.width), rnd_int(0,hydraCanvas.height))
			
			
			
			
			
//		p.textFont('PressStart2P-Regular');
//			p.text( textArray[index], (.05*hydraCanvas.width/(Math.sin(time/4))), (hydraCanvas.height/2)+(0.27*letterSize))
//			p.text( textArray2[index2], ((hydraCanvas.width/4)-(0.93*letterSize)), (hydraCanvas.height/3)+(0.27*letterSize))
		}
	};
};




//global on-demand mode
new p5(sb);




s2.initImage("turd.png")
src(s2).invert(0).scrollY(1,-.2).out(o2)

// hydra variables

relativeScale = window.innerHeight/window.innerWidth
letterSize = .05*hydraCanvas.width



// thingticketNFT hydra code

src(o0)
voronoi(8,1)
.mult(osc(10,0.1,()=>Math.sin(time)*3).saturate(3).kaleid(3))
.modulate(o0,.5)
//.blend(src(o2).scrollY(0.01).invert(1),0.5)
//.scrollY(-0.01)
.scale(0.99)
.luma(.3)
.scrollY(-0.01)
.modulate(voronoi(4,1),0.008)
.shift( 0.3, 0, 0, 4.4 )
//.saturate( 5.01 )


.diff(osc(2,0.5,1))

.out(o0)





src(s0)

	.add(src(o0))
	.add(src(o0))
		.diff(src(o2))
		.blend(src(s1),.4)
.out(o1)
render(o1)
