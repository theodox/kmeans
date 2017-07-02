import  logging

DEBUG = True
logger = logging.getLogger('root')
logger.addHandler(logging.StreamHandler())

if DEBUG:
    logger.setLevel(logging.INFO)
    logger.info("====== debug logging on =====")



ELEMENT = 'cvs'

class Sketch:

    def __init__(self, p):
        self.p = p

        p.setup = self.setup
        p.draw = self.draw

    def setup(self):
        cvs = document.getElementById(ELEMENT)
        w = cvs.offsetWidth
        h = w /2
        my_canvas =  self.p.createCanvas(w, h)
        self.p.background(0)
        self.p.rectMode(self.p.CENTER)
        my_canvas.parent(ELEMENT)
        logging.info("setup complete")


    def draw(self):
        # p.background(0)
        self.p.fill(255, 255, 0, 128)
        self.p.ellipse(self.p.mouseX, self.p.mouseY, 50, 50)



    @staticmethod
    def create(element):
        return __new__ (window.p5(Sketch, element))


sketch = Sketch.create()