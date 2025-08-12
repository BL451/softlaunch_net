const sketch = (p) => {
    let smoothX, smoothY;
    let STEP, SCALE;
    let v0, v1;

    p.setup = () => {
        let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.parent('p5-background');
        p.background(0, 128, 223);
        STEP = (p.width > p.height) ? Math.ceil(p.width/32) : Math.ceil(p.height/20);
        SCALE = STEP*0.00006;
        p.noStroke();
        p.rectMode(p.CENTER);
        smoothX = p.width / 2;
        smoothY = p.height / 2;
        p.mouseX = smoothX;
        p.mouseY = smoothY;
        v0 = p.createVector(smoothX, smoothY);
        v1 = p.createVector(0, 0);
        p.frameRate(20);
    }

    p.draw = () => {
        if (p.width > 768){
            smoothX = p.constrain(smoothFollow(p.mouseX, smoothX, 0.2), 0, p.width);
            smoothY = p.constrain(smoothFollow(p.mouseY, smoothY, 0.2), 0, p.height);
            v0.x = smoothX;
            v0.y = smoothY;
        }
        //p.clear();
        //p.background(0, 128, 223);
        const t = 0.001 * p.millis();

        for (let i = 0; i < p.width + STEP; i += STEP) {
            for (let j = 0; j < p.height + STEP; j += STEP) {
                let v = p.noise(SCALE * i, SCALE * j + 0.2 * t, t*SCALE);
                p.fill(255 * v, 88 + 167 * v, 200 + 55 * v);

                if (p.width > 768) {
                    v1.x = i;
                    v1.y = j;
                    let size = p.map(p5.Vector.dist(v0, v1), 0, 0.1 * p.width, STEP, 0, true);
                    p.square(i + 0.5*STEP, j, STEP + size);
                } else {
                    p.square(i + 0.5*STEP, j, STEP);
                }
            }
        }
    }

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        smoothX = p.width / 2;
        smoothY = p.height / 2;
        STEP = (p.width > p.height) ? Math.ceil(p.width/32) : Math.ceil(p.height/20);
        SCALE = STEP*0.00006;
    }


    function smoothFollow(raw, current, smoothing) {
        return current + smoothing * (raw - current);
    }
};

let p5Instance = new p5(sketch);

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (p5Instance) {
        p5Instance.remove();
        p5Instance = null;
    }
});

// Cleanup on visibility change (when tab becomes hidden)
document.addEventListener('visibilitychange', () => {
    if (document.hidden && p5Instance) {
        p5Instance.noLoop();
    } else if (!document.hidden && p5Instance) {
        p5Instance.loop();
    }
});
