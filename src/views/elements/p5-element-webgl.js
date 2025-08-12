const sketch = (p) => {
    let shader;
    let gridTexture;
    let quadGeometry;
    let smoothX, smoothY;
    let STEP, SCALE;

    // Vertex shader - renders a full-screen quad
    const vertexShader = `
        #ifdef GL_ES
        precision mediump float;
        #endif

        attribute vec3 aPosition;
        attribute vec2 aTexCoord;

        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;

        varying vec2 vTexCoord;

        void main() {
            vTexCoord = aTexCoord;
            vec4 positionVec4 = vec4(aPosition, 1.0);
            gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;
        }
    `;

    // Fragment shader - generates the grid pattern procedurally
    const fragmentShader = `
        #ifdef GL_ES
        precision mediump float;
        #endif

        varying vec2 vTexCoord;

        uniform vec2 uResolution;
        uniform vec2 uMousePos;
        uniform float uTime;
        uniform float uStep;
        uniform float uScale;

        // Simplified noise function
        float noise(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        // Better noise function (optional - more expensive)
        float betterNoise(vec2 st) {
            vec2 i = floor(st);
            vec2 f = fract(st);

            float a = noise(i);
            float b = noise(i + vec2(1.0, 0.0));
            float c = noise(i + vec2(0.0, 1.0));
            float d = noise(i + vec2(1.0, 1.0));

            vec2 u = f * f * (3.0 - 2.0 * f);

            return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }

        void main() {
            // Convert texture coordinates to world coordinates
            vec2 worldPos = vTexCoord * uResolution;

            // Calculate grid cell
            vec2 gridPos = floor(worldPos / uStep);
            vec2 cellCenter = (gridPos + 0.5) * uStep;

            // Distance from cell center
            vec2 localPos = worldPos - cellCenter;
            float distFromCenter = length(localPos);

            // Calculate noise value for this grid cell
            vec2 noiseCoord = gridPos * uScale;
            float noiseVal = betterNoise(noiseCoord + vec2(0.0, uTime * 0.2));

            // Calculate distance to mouse for interaction
            float distToMouse = distance(worldPos, uMousePos);
            float mouseInfluence = 1.0 - smoothstep(0.0, uResolution.x * 0.1, distToMouse);

            // Calculate square size based on noise and mouse interaction
            float baseSize = uStep;
            float sizeMultiplier = 1.01;

            // Add mouse interaction on desktop
            if (uResolution.x > 768.0) {
                sizeMultiplier -= mouseInfluence * 0.3;
            }

            float squareSize = baseSize * sizeMultiplier;

            // Create square shape
            vec2 squareEdge = vec2(squareSize * 0.5);
            vec2 squareMask = step(-squareEdge, localPos) - step(squareEdge, localPos);
            float square = squareMask.x * squareMask.y;

            // Color based on noise
            vec3 baseColor = vec3(noiseVal, 0.5 + 0.5 * noiseVal, 0.875 + 0.125 * noiseVal);

            // Add mouse glow effect
            baseColor += mouseInfluence * vec3(0.2, 0.1, 0.0);

            // Background color
            vec3 bgColor = vec3(0.0, 0.5, 0.875); // Sky blue

            // Mix background and square
            vec3 finalColor = mix(bgColor, baseColor, square);

            gl_FragColor = vec4(finalColor, 1.0);
        }
    `;

    p.setup = () => {
        let canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        canvas.parent('p5-background');
        p.pixelDensity(1);

        // Calculate grid parameters
        STEP = (p.width > p.height) ? p.width/32 : p.height/24;
        SCALE = STEP * 0.005;

        // Create shader
        shader = p.createShader(vertexShader, fragmentShader);

        // Initialize mouse tracking
        smoothX = p.width / 2;
        smoothY = p.height / 2;
        p.mouseX = smoothX;
        p.mouseY = smoothY;

        console.log('WebGL shader background initialized');
    }

    p.draw = () => {
        // Update smooth mouse following (only on desktop)
        if (p.width > 768) {
            smoothX = smoothX + 0.05 * (p.mouseX - smoothX);
            smoothY = smoothY + 0.05 * (p.mouseY - smoothY);
        }

        // Use our custom shader
        p.shader(shader);

        // Pass uniforms to shader
        shader.setUniform('uResolution', [p.width, p.height]);
        shader.setUniform('uMousePos', [smoothX, smoothY]);
        shader.setUniform('uTime', p.millis() * 0.001);
        shader.setUniform('uStep', STEP);
        shader.setUniform('uScale', SCALE);

        // Draw a full-screen quad
        p.noStroke();
        p.fill(255);
        p.plane(p.width, p.height);
    }

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);

        // Recalculate grid parameters
        STEP = (p.width > p.height) ? p.width/32 : p.height/24;
        SCALE = STEP * 0.005;
        // Reset mouse position
        smoothX = p.width / 2;
        smoothY = p.height / 2;
    }

    function smoothFollow(raw, current, smoothing) {
        return current + smoothing * (raw - current);
    }
};

let p5InstanceWebGL = new p5(sketch);

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (p5InstanceWebGL) {
        p5InstanceWebGL.remove();
        p5InstanceWebGL = null;
    }
});

// Cleanup on visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden && p5InstanceWebGL) {
        p5InstanceWebGL.noLoop();
    } else if (!document.hidden && p5InstanceWebGL) {
        p5InstanceWebGL.loop();
    }
});
