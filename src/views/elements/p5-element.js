const sketch = (p) => {
    let smoothX, smoothY;
    let STEP, SCALE;
    let v0, v1;

    p.setup = () => {
        let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.parent('p5-background');
        p.background(0, 128, 223);
        STEP = (p.width > p.height) ? p.width/42 : p.height/30;
        SCALE = 0.003;
        p.noStroke();
        p.rectMode(p.CENTER);
        smoothX = p.width / 2;
        smoothY = p.height / 2;
        v0 = p.createVector(smoothX, smoothY);
        v1 = p.createVector(0, 0);
    }

    p.draw = () => {
        smoothX = p.constrain(smoothFollow(p.mouseX, smoothX, 0.05), 0, p.width);
        smoothY = p.constrain(smoothFollow(p.mouseY, smoothY, 0.05), 0, p.height);
        v0.x = smoothX;
        v0.y = smoothY;
        p.clear();
        p.background(0, 128, 223);
        const t = 0.001 * p.millis();

        for (let i = 0; i < p.width; i += STEP) {
            for (let j = 0; j < p.height; j += STEP) {
                let v = p.noise(SCALE * i, SCALE * j + 0.2 * t, 0.2 * t);
                p.fill(255, 255 * v);

                if (p.width < 768) {
                    p.square(i + 0.5*STEP, j, 2 * STEP * v);
                } else {
                    v1.x = i;
                    v1.y = j;
                    let size = 1.5 * STEP * v + p.map(p5.Vector.dist(v0, v1), 0, 0.4 * p.width, 0.5 * STEP, 0);
                    p.square(i + 0.5*STEP, j, size);
                }
            }
        }
    }

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        smoothX = p.width / 2;
        smoothY = p.height / 2;
        STEP = (p.width > p.height) ? p.width/42 : p.height/30;
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
