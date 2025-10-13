export default function (p: p5Interface) {
	// The variable `p` is your p5 instance.
	
	p.setup = function () {
		p.createCanvas(800, 600);
	};

	p.draw = function () {
		p.background(100);
		p.fill(255, 0, 0);
		p.noStroke();
		p.rectMode(p.CENTER);
		p.rect(p.mouseX, p.mouseY, 50, 50);
	};

	p.mousePressed = function (ev: any) {
		if (ev) console.log('clicked', ev.x, ev.y);
	};
}
