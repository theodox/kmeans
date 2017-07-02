	(function () {
		var logging = {};
		__nest__ (logging, '', __init__ (__world__.logging));
		var DEBUG = true;
		var logger = logging.getLogger ('root');
		logger.addHandler (logging.StreamHandler ());
		if (DEBUG) {
			logger.setLevel (logging.INFO);
			logger.info ('====== debug logging on =====');
		}
		var ELEMENT = 'cvs';
		var Sketch = __class__ ('Sketch', [object], {
			get __init__ () {return __get__ (this, function (self, p) {
				self.p = p;
				p.setup = self.setup;
				p.draw = self.draw;
			});},
			get setup () {return __get__ (this, function (self) {
				var cvs = document.getElementById (ELEMENT);
				var w = cvs.offsetWidth;
				var h = w / 2;
				var my_canvas = self.p.createCanvas (w, h);
				self.p.background (0);
				self.p.rectMode (self.p.CENTER);
				my_canvas.parent (ELEMENT);
				logging.info ('setup complete');
			});},
			get draw () {return __get__ (this, function (self) {
				self.p.fill (255, 255, 0, 128);
				self.p.ellipse (self.p.mouseX, self.p.mouseY, 50, 50);
			});},
			get create () {return __get__ (this, function (element) {
				return new window.p5 (Sketch, element);
			});}
		});
		var sketch = Sketch.create ();
		__pragma__ ('<use>' +
			'logging' +
		'</use>')
		__pragma__ ('<all>')
			__all__.DEBUG = DEBUG;
			__all__.ELEMENT = ELEMENT;
			__all__.Sketch = Sketch;
			__all__.logger = logger;
			__all__.sketch = sketch;
		__pragma__ ('</all>')
	}) ();
