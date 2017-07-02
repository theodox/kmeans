	(function () {
		var Sketch = __class__ ('Sketch', [object], {
			get __init__ () {return __get__ (this, function (self, p) {
				self.p = p;
				p.setup = self.setup;
				p.draw = self.draw;
			});},
			get setup () {return __get__ (this, function (self) {
				var cvs = document.getElementById ('cvs');
				var w = cvs.offsetWidth;
				var h = w / 2;
				var my_canvas = self.p.createCanvas (w, h);
				self.p.background (0);
				self.p.rectMode (self.p.CENTER);
				my_canvas.parent ('cvs');
				print ('setup ran');
			});},
			get draw () {return __get__ (this, function (self) {
				self.p.fill (255, 255, 0, 128);
				self.p.ellipse (self.p.mouseX, self.p.mouseY, 50, 50);
			});}
		});
		var p5 = new window.p5 (Sketch);
		print (p5);
		__pragma__ ('<all>')
			__all__.Sketch = Sketch;
			__all__.p5 = p5;
		__pragma__ ('</all>')
	}) ();
