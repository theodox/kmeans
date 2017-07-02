
class Sketch:

    def __init__(self, p):
        self.p = p

        p.setup = self.setup
        p.draw = self.draw
#def sketch(p):
    def setup(self):
        cvs = document.getElementById('cvs')
        w = cvs.offsetWidth
        h = w /2
        my_canvas =  self.p.createCanvas(w, h)
        self.p.background(0)
        self.p.rectMode(self.p.CENTER)
        my_canvas.parent('cvs')
        print ("setup ran")


    def draw(self):
        # p.background(0)
        self.p.fill(255, 255, 0, 128)
        self.p.ellipse(self.p.mouseX, self.p.mouseY, 50, 50)



    @staticmethod
    def create():
        return __new__ (window.p5(Sketch))


sketch = Sketch.create()