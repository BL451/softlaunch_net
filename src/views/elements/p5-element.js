const sketch = (p) => {
    let fbo0, fbo1;
    let factor; // Will be set based on display characteristics
    let canvas;
    let n_spheres = 23;
    let sphere_rad; // Will be set based on display characteristics
    let isMobile = false;
    let rainTranslation = 0.5; // Will be set based on display characteristics

    p.setup = () => {
        p.pixelDensity(1);
        p.frameRate(16);
        // Disable p5's smoothing
        p.noSmooth();

        // Use window.innerWidth/Height to get full viewport including iOS curved corners
        const w = window.innerWidth;
        const h = window.innerHeight;
        canvas = p.createCanvas(w, h, p.WEBGL);
        canvas.parent('p5-background');

        p.colorMode(p.HSB);
        p.imageMode(p.CENTER);
        p.rectMode(p.CENTER);
        p.ellipseMode(p.CENTER);
        p.strokeWeight(0.5);
        p.background(200, 60, 80);

        // Adaptive factor, sphere size, and rain translation based on pixel density
        // Scale factor inversely to maintain consistent visual chunkiness
        factor = window.devicePixelRatio >= 2 ? 32 : 16;
        sphere_rad = window.devicePixelRatio >= 2 ? 5 : 10;

        // Higher density displays can handle 0.5, lower density need 1.0
        rainTranslation = window.devicePixelRatio >= 2 ? 0.5 : 1.0;

        // Debug logging for display differences
        console.log('Display Info:', {
            windowSize: { w, h },
            canvasSize: { width: p.width, height: p.height },
            devicePixelRatio: window.devicePixelRatio,
            pixelDensity: p.pixelDensity(),
            factor: factor,
            fboSize: {
                width: p.width / factor,
                height: p.height / factor
            },
            rainTranslation: rainTranslation,
            sphere_rad: sphere_rad
        });

        // Options for creating our framebuffer
        const options = {
            width: p.width / factor,
            height: p.height / factor,
            textureFiltering: p.NEAREST,
            format: p.FLOAT
        }

        // Use proper mobile detection - iOS cannot render to FLOAT textures
        isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            n_spheres = 8;
            sphere_rad = 3; // Override for mobile
        }

        // Make the framebuffers
        try {
            fbo0 = p.createFramebuffer(options);
            fbo1 = p.createFramebuffer(options);
            console.log('Framebuffers created:', fbo0, fbo1);
        } catch (error) {
            console.error('Error creating framebuffers:', error);
        }
    }

    p.draw = () => {
        if (p.frameCount == 1) {
            canvas.addClass('fade-in');
        }

        const t = p.millis() * 0.00005;
        [fbo0, fbo1] = [fbo1, fbo0];

        fbo0.begin();
        p.noFill();
        for (let i = 0; i < n_spheres; i++) {
            p.stroke(200, 1, 93 + 3*Math.cos(3*t + i/23));
            p.push();
            p.translate(
                1.2 * fbo0.width * (p.noise(100 * i, t) - 0.5),
                0.8 * fbo0.height * (p.noise(1.333 * t, 100 * i) - 0.5),
                6 * (p.noise(0, 0.333 * t, 100 * i) - 0.5)
            );
            p.sphere(sphere_rad);
            p.pop();
        }
        fbo0.end();

        fbo1.begin();
        p.clear();
        p.push();
        p.translate(0, rainTranslation);
        p.image(fbo0, 0, 0);
        p.pop();
        p.fill(200, 60, 80, 0.1);
        p.noStroke();
        p.rect(0, 0, fbo1.width, fbo1.height);
        p.fill(200, 60, 80, 0.3);
        p.rect(0, 0.45 * fbo1.height, fbo1.width, 0.05 * fbo1.height);
        p.rect(0, 0.475 * fbo1.height, fbo1.width, 0.05 * fbo1.height);
        fbo1.end();

        // Render an image of the framebuffer
        p.image(fbo1, 0, 0, p.width, p.height);
    }

    p.windowResized = () => {
        if (isMobile){
            return;
        }
        const w = window.innerWidth;
        const h = window.innerHeight;
        p.resizeCanvas(w, h);
        const options = {
            width: p.width / factor,
            height: p.height / factor,
            textureFiltering: p.NEAREST,
            format: p.FLOAT,
        }
        p.colorMode(p.HSB);
        p.imageMode(p.CENTER);
        p.rectMode(p.CENTER);
        p.ellipseMode(p.CENTER);
        fbo0 = p.createFramebuffer(options);
        fbo1 = p.createFramebuffer(options);
    }
};

let p5Instance = new p5(sketch);

// Debug: Watch for canvas being moved
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
            mutation.removedNodes.forEach((node) => {
                if (node.id === 'defaultCanvas0') {
                    console.error('Canvas was removed from:', mutation.target);
                }
            });
            mutation.addedNodes.forEach((node) => {
                if (node.id === 'defaultCanvas0') {
                    console.warn('Canvas was added to:', mutation.target);
                }
            });
        }
    });
});

// Observe the entire body for canvas movements
observer.observe(document.body, { childList: true, subtree: true });

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
