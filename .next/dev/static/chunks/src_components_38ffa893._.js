(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/ParticleText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleText",
    ()=>ParticleText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ParticleText({ text, className, fontSize: propFontSize }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleText.useEffect": ()=>{
            const canvas = canvasRef.current;
            const container = containerRef.current;
            if (!canvas || !container) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            let particlesArray = [];
            let animationFrameId;
            // Mouse interaction state
            const mouse = {
                x: null,
                y: null,
                radius: 20 // Decreased radius for more precise interaction on smaller text
            };
            const handleMouseMove = {
                "ParticleText.useEffect.handleMouseMove": (event)=>{
                    const rect = canvas.getBoundingClientRect();
                    mouse.x = event.clientX - rect.left;
                    mouse.y = event.clientY - rect.top;
                }
            }["ParticleText.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "ParticleText.useEffect.handleMouseLeave": ()=>{
                    mouse.x = null;
                    mouse.y = null;
                }
            }["ParticleText.useEffect.handleMouseLeave"];
            // Particle Class
            class Particle {
                x;
                y;
                size;
                baseX;
                baseY;
                density;
                color;
                constructor(x, y){
                    this.x = x;
                    this.y = y;
                    this.size = 2; // Size of the dot
                    this.baseX = x;
                    this.baseY = y;
                    this.density = Math.random() * 30 + 1;
                    this.color = 'white';
                }
                draw() {
                    if (!ctx) return;
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.closePath();
                    ctx.fill();
                }
                update() {
                    if (mouse.x != null && mouse.y != null) {
                        let dx = mouse.x - this.x;
                        let dy = mouse.y - this.y;
                        let distance = Math.sqrt(dx * dx + dy * dy);
                        let forceDirectionX = dx / distance;
                        let forceDirectionY = dy / distance;
                        let maxDistance = mouse.radius;
                        let force = (maxDistance - distance) / maxDistance;
                        let directionX = forceDirectionX * force * this.density;
                        let directionY = forceDirectionY * force * this.density;
                        if (distance < mouse.radius) {
                            this.x -= directionX * 3;
                            this.y -= directionY * 3;
                        } else {
                            if (this.x !== this.baseX) {
                                let dx = this.x - this.baseX;
                                this.x -= dx / 50;
                            }
                            if (this.y !== this.baseY) {
                                let dy = this.y - this.baseY;
                                this.y -= dy / 10;
                            }
                        }
                    } else {
                        if (this.x !== this.baseX) {
                            let dx = this.x - this.baseX;
                            this.x -= dx / 30;
                        }
                        if (this.y !== this.baseY) {
                            let dy = this.y - this.baseY;
                            this.y -= dy / 30;
                        }
                    }
                }
            }
            const init = {
                "ParticleText.useEffect.init": ()=>{
                    particlesArray = [];
                    // Set canvas dimensions to container dimensions
                    canvas.width = container.clientWidth;
                    canvas.height = container.clientHeight; // Give it some height or match container
                    if (canvas.width <= 0 || canvas.height <= 0) return;
                    // Draw text
                    ctx.fillStyle = 'white';
                    // Scale font size based on width if no prop is provided
                    const fontSize = propFontSize || Math.min(canvas.width / (text.length * 0.7), 100);
                    // ctx.font = '900 ' + fontSize + 'px Verdana';
                    // Use system font or imported font
                    ctx.font = '700 ' + fontSize + 'px "Satoshi", sans-serif';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
                    try {
                        // Get image data
                        // Need to enable willReadFrequently for performance if possible, but context is already created.
                        const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        const step = 4;
                        for(let y = 0; y < textCoordinates.height; y += step){
                            for(let x = 0; x < textCoordinates.width; x += step){
                                // Check alpha
                                if (textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] > 128) {
                                    let positionX = x;
                                    let positionY = y;
                                    particlesArray.push(new Particle(positionX, positionY));
                                }
                            }
                        }
                    } catch (e) {
                        console.error("Could not get image data:", e);
                        // If it fails (e.g. security), fallback to just text
                        ctx.fillText(text, canvas.width / 2, canvas.height / 2);
                    }
                }
            }["ParticleText.useEffect.init"];
            const animate = {
                "ParticleText.useEffect.animate": ()=>{
                    if (!ctx) return;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    for(let i = 0; i < particlesArray.length; i++){
                        particlesArray[i].draw();
                        particlesArray[i].update();
                    }
                    animationFrameId = requestAnimationFrame(animate);
                }
            }["ParticleText.useEffect.animate"];
            init();
            animate();
            // Event listeners
            window.addEventListener('resize', init);
            canvas.addEventListener('mousemove', handleMouseMove); // Listen on canvas/container
            canvas.addEventListener('mouseleave', handleMouseLeave);
            return ({
                "ParticleText.useEffect": ()=>{
                    window.removeEventListener('resize', init);
                    canvas.removeEventListener('mousemove', handleMouseMove);
                    canvas.removeEventListener('mouseleave', handleMouseLeave);
                    cancelAnimationFrame(animationFrameId);
                }
            })["ParticleText.useEffect"];
        }
    }["ParticleText.useEffect"], [
        text
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: className,
        style: {
            width: '100%',
            height: '150px',
            position: 'relative'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            style: {
                width: '100%',
                height: '100%',
                display: 'block'
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ParticleText.tsx",
            lineNumber: 185,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ParticleText.tsx",
        lineNumber: 184,
        columnNumber: 9
    }, this);
}
_s(ParticleText, "+xMqLuoGzbrZrbRmx5ZxmPZsVhQ=");
_c = ParticleText;
var _c;
__turbopack_context__.k.register(_c, "ParticleText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ParticleText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ParticleText.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        "data-scroll-section": true,
        className: "relative min-h-screen hero-gradient flex flex-col justify-center items-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-bold text-6xl md:text-8xl leading-tight mb-4",
                        children: [
                            "Hi, I'm ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#D55A21]",
                                children: "Zahin Azri"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Hero.tsx",
                                lineNumber: 14,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-4xl h-[120px] mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ParticleText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticleText"], {
                            text: "UI/UX Designer",
                            fontSize: 120,
                            className: "w-full h-full"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 17,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-3xl mx-auto text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-12",
                        children: "I specialise in user-centred design, transforming complex problems into elegant, intuitive solutions. Currently crafting digital experiences that bridge business goals with user needs"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>document.getElementById('portfolio')?.scrollIntoView({
                                    behavior: 'smooth'
                                }),
                            className: "bg-[#D55A21] hover:bg-[#D55A21]/90 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 text-lg shadow-[0_10px_30px_-10px_rgba(213,90,33,0.5)]",
                            children: "View Portfolio"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-12 left-12 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://www.linkedin.com/in/muhamad-zahin-azri-nazri-28ab5a1a3/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-white/50 hover:text-white transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                        className: "w-6 h-6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 36,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 35,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Tools.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tools",
    ()=>Tools
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Tools() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-white/5 w-full mb-16"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Tools.tsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-center text-sm tracking-[0.2em] text-gray-500 mb-12 uppercase",
                children: "Software & Tools"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Tools.tsx",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-12 md:gap-16 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group flex items-center space-x-3 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                viewBox: "0 0 22 32",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        clipPath: "url(#clip0_2555_4994)",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M5.33724 32.0007C8.28124 32.0007 10.6706 29.6113 10.6706 26.6673V21.334H5.33724C2.39324 21.334 0.00390625 23.7233 0.00390625 26.6673C0.00390625 29.6113 2.39324 32.0007 5.33724 32.0007Z",
                                                fill: "#0ACF83"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Tools.tsx",
                                                lineNumber: 16,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M0.00390625 15.9993C0.00390625 13.0553 2.39324 10.666 5.33724 10.666H10.6706V21.3327H5.33724C2.39324 21.3327 0.00390625 18.9433 0.00390625 15.9993Z",
                                                fill: "#A259FF"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Tools.tsx",
                                                lineNumber: 19,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M0.00390625 5.33333C0.00390625 2.38933 2.39324 0 5.33724 0H10.6706V10.6667H5.33724C2.39324 10.6667 0.00390625 8.27733 0.00390625 5.33333Z",
                                                fill: "#F24E1E"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Tools.tsx",
                                                lineNumber: 22,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M10.6719 0H16.0052C18.9492 0 21.3385 2.38933 21.3385 5.33333C21.3385 8.27733 18.9492 10.6667 16.0052 10.6667H10.6719V0Z",
                                                fill: "#FF7262"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Tools.tsx",
                                                lineNumber: 25,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M21.3385 15.9993C21.3385 18.9433 18.9492 21.3327 16.0052 21.3327C13.0612 21.3327 10.6719 18.9433 10.6719 15.9993C10.6719 13.0553 13.0612 10.666 16.0052 10.666C18.9492 10.666 21.3385 13.0553 21.3385 15.9993Z",
                                                fill: "#1ABCFE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Tools.tsx",
                                                lineNumber: 28,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Tools.tsx",
                                        lineNumber: 15,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                            id: "clip0_2555_4994",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                width: "21.34",
                                                height: "32",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Tools.tsx",
                                                lineNumber: 34,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Tools.tsx",
                                            lineNumber: 33,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Tools.tsx",
                                        lineNumber: 32,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Tools.tsx",
                                lineNumber: 14,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500 font-medium group-hover:text-white transition-colors",
                                children: "Figma"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Tools.tsx",
                                lineNumber: 38,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Tools.tsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group flex items-center space-x-3 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M10.2067 0L6.84139 4.73867V7.41867L3.91339 8.81067L3.88672 8.79867V26.2773L15.3041 31.6707L16.0014 32L16.6987 31.6707L28.1161 26.2773V8.8L28.0934 8.81067L25.1654 7.41733V4.74L25.0627 4.596L21.8001 0.00133333L18.4347 4.74V4.74533L15.9867 1.29733L13.5561 4.71867L13.4694 4.59733L10.2067 0ZM10.8027 2.75333L12.1041 4.58533H8.31072L9.59605 2.77467L10.8027 2.75333ZM22.3947 2.75333L23.6961 4.58533H19.9027L21.1894 2.77467L22.3947 2.75333ZM16.5814 4.048L17.8827 5.88133H14.0894L15.3761 4.06933L16.5814 4.048ZM7.95072 5.50933H9.75072V11.568L7.95072 10.7173V5.50933ZM10.6734 5.50933H12.4641V12.8507L10.6734 12.004V5.50933ZM19.5427 5.50933H21.3427V12L19.5427 12.8493V5.50933ZM22.2654 5.50933H24.0561V10.716L22.2654 11.5613V5.50933ZM13.7294 6.80533H15.5294V14.2987L13.7294 13.448V6.80533ZM16.4521 6.80533H18.2427V13.4627L16.4521 14.308V6.80533ZM25.1641 8.796L26.7481 9.444L25.1641 10.192V8.796ZM6.84139 8.8V10.196L5.25872 9.448L6.84139 8.8ZM5.28139 11.0013L15.3041 15.7347V30.128L5.28272 25.3947L5.28139 11.0013ZM26.7214 11.0013V25.3933L16.6987 30.1267V15.736L26.7214 11.0013Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Tools.tsx",
                                    lineNumber: 44,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Tools.tsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500 font-medium group-hover:text-white transition-colors",
                                children: "Penpot"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Tools.tsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Tools.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group flex items-center space-x-3 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                viewBox: "0 0 33 32",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        clipPath: "url(#clip0_2555_5000)",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M27.328 0H5.44C2.43557 0 0 2.43557 0 5.44V26.5088C0 29.5132 2.43557 31.9488 5.44 31.9488H27.328C30.3324 31.9488 32.768 29.5132 32.768 26.5088V5.44C32.768 2.43557 30.3324 0 27.328 0Z",
                                                fill: "#470137"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Tools.tsx",
                                                lineNumber: 55,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M17.2287 8.40204L13.14 15.1506L17.5144 22.3167C17.5426 22.3668 17.5504 22.4257 17.5364 22.4815C17.5296 22.5053 17.5151 22.5112 17.4927 22.5121L17.4678 22.5117L17.4376 22.511C17.4212 22.511 17.4029 22.5117 17.3826 22.5151H14.2287L14.1667 22.514C13.9967 22.5096 13.8742 22.4852 13.7996 22.3606C13.5078 21.7921 13.2147 21.2242 12.9202 20.657C12.6569 20.1511 12.3864 19.649 12.1087 19.1508L11.9861 18.9314C11.654 18.3413 11.328 17.7478 11.0079 17.151H10.9859C10.6904 17.7415 10.3862 18.3277 10.0736 18.9094C9.75834 19.4957 9.44692 20.0782 9.13938 20.657C8.83161 21.2362 8.51653 21.8114 8.19422 22.3826C8.14238 22.4991 8.05624 22.5234 7.9363 22.5274L7.88638 22.5281H4.87493L4.86187 22.5285L4.81886 22.5323C4.79493 22.5338 4.78059 22.5286 4.77598 22.4925C4.76778 22.4389 4.77954 22.3842 4.80901 22.3387L9.05144 15.3704L4.91883 8.38028C4.87497 8.32191 4.86763 8.2743 4.89682 8.23743C4.91304 8.21865 4.93341 8.2039 4.95631 8.19435C4.97921 8.1848 5.00403 8.1807 5.02878 8.18239H8.12818C8.19576 8.17873 8.26333 8.19001 8.32607 8.21542C8.37855 8.24524 8.42373 8.28658 8.4579 8.33638C8.72167 8.92262 9.01479 9.50877 9.33727 10.0948C9.6572 10.6771 9.98328 11.256 10.3154 11.8314C10.6425 12.3979 10.9468 12.9772 11.2277 13.568H11.2497C11.5375 12.9774 11.8343 12.3911 12.14 11.8095C12.4402 11.238 12.7479 10.6627 13.0631 10.0838C13.3742 9.51244 13.6783 8.93725 13.9753 8.35839C13.9922 8.30412 14.0224 8.25497 14.0633 8.21542C14.1176 8.18791 14.1786 8.17645 14.2392 8.18239H17.1188C17.1452 8.17579 17.1731 8.17797 17.1983 8.18859C17.2234 8.19921 17.2444 8.21771 17.2581 8.2413C17.2718 8.26489 17.2775 8.29229 17.2743 8.31938C17.2711 8.34648 17.2592 8.3718 17.2404 8.39154L17.2287 8.40204ZM23.6889 22.7986L23.5373 22.8003C22.5255 22.8157 21.523 22.6055 20.6027 22.1848C19.7453 21.788 19.0286 21.1403 18.5474 20.3273C18.0621 19.5213 17.8131 18.5172 17.8005 17.3148L17.8 17.2169C17.7917 16.208 18.0496 15.2148 18.5475 14.3373C19.0458 13.4688 19.7723 12.7532 20.6482 12.268L20.7236 12.2271C21.676 11.6994 22.8263 11.4356 24.1748 11.4356L24.2336 11.4363L24.301 11.4385L24.3765 11.4418L24.4605 11.4466L24.6015 11.4566L24.7613 11.4694L24.8781 11.4797V7.14918C24.8781 7.04669 24.9221 6.99541 25.01 6.99532H27.7798C27.7977 6.99275 27.8159 6.99439 27.8331 7.00011C27.8503 7.00582 27.8659 7.01546 27.8787 7.02826C27.8915 7.04105 27.9011 7.05665 27.9068 7.07382C27.9125 7.09099 27.9142 7.10925 27.9116 7.12716V20.1185C27.9116 20.3367 27.92 20.5716 27.9369 20.823L27.9779 21.3933L27.9997 21.7231C28.0024 21.7688 27.9912 21.8142 27.9677 21.8535C27.9441 21.8927 27.9093 21.9239 27.8677 21.943C27.1531 22.241 26.4089 22.462 25.6475 22.6024C25.0012 22.7217 24.3461 22.7874 23.6889 22.7986ZM24.8781 20.0745V14.0735C24.7593 14.0413 24.638 14.0192 24.5155 14.0075C24.3658 13.9924 24.2153 13.9851 24.0648 13.9855C23.5314 13.9802 23.0042 14.1007 22.5261 14.3373C22.0605 14.5689 21.6629 14.9173 21.3721 15.3485C21.0819 15.7729 20.9318 16.3272 20.9219 17.0112L20.9214 17.085C20.9107 17.5642 20.989 18.0411 21.1522 18.4918C21.2851 18.8549 21.4951 19.1849 21.7679 19.4591C22.0288 19.7113 22.3449 19.8994 22.691 20.0086C23.0566 20.1269 23.4387 20.1863 23.823 20.1846C24.0281 20.1846 24.2186 20.1772 24.3945 20.1624C24.5349 20.1519 24.6741 20.1287 24.8103 20.0933L24.8781 20.0745Z",
                                                fill: "#FF61F6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Tools.tsx",
                                                lineNumber: 58,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Tools.tsx",
                                        lineNumber: 54,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                            id: "clip0_2555_5000",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                width: "32.77",
                                                height: "32",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Tools.tsx",
                                                lineNumber: 64,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Tools.tsx",
                                            lineNumber: 63,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Tools.tsx",
                                        lineNumber: 62,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Tools.tsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500 font-medium group-hover:text-white transition-colors",
                                children: "Adobe XD"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Tools.tsx",
                                lineNumber: 68,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Tools.tsx",
                        lineNumber: 52,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group flex items-center space-x-3 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                viewBox: "0 0 38 38",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M32.641 17.1554C30.0107 16.0356 27.6191 14.4228 25.5952 12.4038C22.7767 9.57964 20.7659 6.05225 19.7717 2.18812C19.7281 2.0165 19.6285 1.86431 19.4887 1.75561C19.3489 1.64691 19.1769 1.58789 18.9998 1.58789C18.8228 1.58789 18.6507 1.64691 18.5109 1.75561C18.3712 1.86431 18.2716 2.0165 18.228 2.18812C17.2317 6.05174 15.2205 9.57874 12.4029 12.4038C10.3788 14.4225 7.9872 16.0354 5.35704 17.1554C4.32788 17.5987 3.27021 17.955 2.18721 18.2289C2.01453 18.2713 1.86107 18.3704 1.75136 18.5103C1.64165 18.6503 1.58203 18.8229 1.58203 19.0007C1.58203 19.1786 1.64165 19.3512 1.75136 19.4912C1.86107 19.6311 2.01453 19.7302 2.18721 19.7726C3.27021 20.045 4.32471 20.4012 5.35704 20.8445C7.98735 21.9643 10.379 23.5772 12.4029 25.5961C15.2221 28.4206 17.2335 31.9485 18.228 35.8134C18.2704 35.986 18.3695 36.1395 18.5094 36.2492C18.6493 36.3589 18.822 36.4186 18.9998 36.4186C19.1776 36.4186 19.3503 36.3589 19.4903 36.2492C19.6302 36.1395 19.7293 35.986 19.7717 35.8134C20.044 34.7288 20.4003 33.6743 20.8436 32.642C21.9633 30.0116 23.5762 27.62 25.5952 25.5961C28.4199 22.7775 31.9478 20.7667 35.8125 19.7726C35.9841 19.729 36.1363 19.6294 36.245 19.4896C36.3537 19.3499 36.4127 19.1778 36.4127 19.0007C36.4127 18.8237 36.3537 18.6516 36.245 18.5119C36.1363 18.3721 35.9841 18.2725 35.8125 18.2289C34.7284 17.9561 33.6679 17.5972 32.641 17.1554Z",
                                        fill: "#3186FF"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Tools.tsx",
                                        lineNumber: 74,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M32.641 17.1554C30.0107 16.0356 27.6191 14.4228 25.5952 12.4038C22.7767 9.57964 20.7659 6.05225 19.7717 2.18812C19.7281 2.0165 19.6285 1.86431 19.4887 1.75561C19.3489 1.64691 19.1769 1.58789 18.9998 1.58789C18.8228 1.58789 18.6507 1.64691 18.5109 1.75561C18.3712 1.86431 18.2716 2.0165 18.228 2.18812C17.2317 6.05174 15.2205 9.57874 12.4029 12.4038C10.3788 14.4225 7.9872 16.0354 5.35704 17.1554C4.32788 17.5987 3.27021 17.955 2.18721 18.2289C2.01453 18.2713 1.86107 18.3704 1.75136 18.5103C1.64165 18.6503 1.58203 18.8229 1.58203 19.0007C1.58203 19.1786 1.64165 19.3512 1.75136 19.4912C1.86107 19.6311 2.01453 19.7302 2.18721 19.7726C3.27021 20.045 4.32471 20.4012 5.35704 20.8445C7.98735 21.9643 10.379 23.5772 12.4029 25.5961C15.2221 28.4206 17.2335 31.9485 18.228 35.8134C18.2704 35.986 18.3695 36.1395 18.5094 36.2492C18.6493 36.3589 18.822 36.4186 18.9998 36.4186C19.1776 36.4186 19.3503 36.3589 19.4903 36.2492C19.6302 36.1395 19.7293 35.986 19.7717 35.8134C20.044 34.7288 20.4003 33.6743 20.8436 32.642C21.9633 30.0116 23.5762 27.62 25.5952 25.5961C28.4199 22.7775 31.9478 20.7667 35.8125 19.7726C35.9841 19.729 36.1363 19.6294 36.245 19.4896C36.3537 19.3499 36.4127 19.1778 36.4127 19.0007C36.4127 18.8237 36.3537 18.6516 36.245 18.5119C36.1363 18.3721 35.9841 18.2725 35.8125 18.2289C34.7284 17.9561 33.6679 17.5972 32.641 17.1554Z",
                                        fill: "url(#paint0_linear_2555_5033)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Tools.tsx",
                                        lineNumber: 77,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M32.641 17.1554C30.0107 16.0356 27.6191 14.4228 25.5952 12.4038C22.7767 9.57964 20.7659 6.05225 19.7717 2.18812C19.7281 2.0165 19.6285 1.86431 19.4887 1.75561C19.3489 1.64691 19.1769 1.58789 18.9998 1.58789C18.8228 1.58789 18.6507 1.64691 18.5109 1.75561C18.3712 1.86431 18.2716 2.0165 18.228 2.18812C17.2317 6.05174 15.2205 9.57874 12.4029 12.4038C10.3788 14.4225 7.9872 16.0354 5.35704 17.1554C4.32788 17.5987 3.27021 17.955 2.18721 18.2289C2.01453 18.2713 1.86107 18.3704 1.75136 18.5103C1.64165 18.6503 1.58203 18.8229 1.58203 19.0007C1.58203 19.1786 1.64165 19.3512 1.75136 19.4912C1.86107 19.6311 2.01453 19.7302 2.18721 19.7726C3.27021 20.045 4.32471 20.4012 5.35704 20.8445C7.98735 21.9643 10.379 23.5772 12.4029 25.5961C15.2221 28.4206 17.2335 31.9485 18.228 35.8134C18.2704 35.986 18.3695 36.1395 18.5094 36.2492C18.6493 36.3589 18.822 36.4186 18.9998 36.4186C19.1776 36.4186 19.3503 36.3589 19.4903 36.2492C19.6302 36.1395 19.7293 35.986 19.7717 35.8134C20.044 34.7288 20.4003 33.6743 20.8436 32.642C21.9633 30.0116 23.5762 27.62 25.5952 25.5961C28.4199 22.7775 31.9478 20.7667 35.8125 19.7726C35.9841 19.729 36.1363 19.6294 36.245 19.4896C36.3537 19.3499 36.4127 19.1778 36.4127 19.0007C36.4127 18.8237 36.3537 18.6516 36.245 18.5119C36.1363 18.3721 35.9841 18.2725 35.8125 18.2289C34.7284 17.9561 33.6679 17.5972 32.641 17.1554Z",
                                        fill: "url(#paint1_linear_2555_5033)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Tools.tsx",
                                        lineNumber: 80,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M32.641 17.1554C30.0107 16.0356 27.6191 14.4228 25.5952 12.4038C22.7767 9.57964 20.7659 6.05225 19.7717 2.18812C19.7281 2.0165 19.6285 1.86431 19.4887 1.75561C19.3489 1.64691 19.1769 1.58789 18.9998 1.58789C18.8228 1.58789 18.6507 1.64691 18.5109 1.75561C18.3712 1.86431 18.2716 2.0165 18.228 2.18812C17.2317 6.05174 15.2205 9.57874 12.4029 12.4038C10.3788 14.4225 7.9872 16.0354 5.35704 17.1554C4.32788 17.5987 3.27021 17.955 2.18721 18.2289C2.01453 18.2713 1.86107 18.3704 1.75136 18.5103C1.64165 18.6503 1.58203 18.8229 1.58203 19.0007C1.58203 19.1786 1.64165 19.3512 1.75136 19.4912C1.86107 19.6311 2.01453 19.7302 2.18721 19.7726C3.27021 20.045 4.32471 20.4012 5.35704 20.8445C7.98735 21.9643 10.379 23.5772 12.4029 25.5961C15.2221 28.4206 17.2335 31.9485 18.228 35.8134C18.2704 35.986 18.3695 36.1395 18.5094 36.2492C18.6493 36.3589 18.822 36.4186 18.9998 36.4186C19.1776 36.4186 19.3503 36.3589 19.4903 36.2492C19.6302 36.1395 19.7293 35.986 19.7717 35.8134C20.044 34.7288 20.4003 33.6743 20.8436 32.642C21.9633 30.0116 23.5762 27.62 25.5952 25.5961C28.4199 22.7775 31.9478 20.7667 35.8125 19.7726C35.9841 19.729 36.1363 19.6294 36.245 19.4896C36.3537 19.3499 36.4127 19.1778 36.4127 19.0007C36.4127 18.8237 36.3537 18.6516 36.245 18.5119C36.1363 18.3721 35.9841 18.2725 35.8125 18.2289C34.7284 17.9561 33.6679 17.5972 32.641 17.1554Z",
                                        fill: "url(#paint2_linear_2555_5033)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Tools.tsx",
                                        lineNumber: 83,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                id: "paint0_linear_2555_5033",
                                                x1: "11.0824",
                                                y1: "24.5416",
                                                x2: "17.4157",
                                                y2: "19",
                                                gradientUnits: "userSpaceOnUse",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        stopColor: "#08B962"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Tools.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "1",
                                                        stopColor: "#08B962",
                                                        stopOpacity: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Tools.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Tools.tsx",
                                                lineNumber: 87,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                id: "paint1_linear_2555_5033",
                                                x1: "12.6657",
                                                y1: "8.70829",
                                                x2: "18.2074",
                                                y2: "17.4166",
                                                gradientUnits: "userSpaceOnUse",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        stopColor: "#F94543"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Tools.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "1",
                                                        stopColor: "#F94543",
                                                        stopOpacity: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Tools.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Tools.tsx",
                                                lineNumber: 92,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                id: "paint2_linear_2555_5033",
                                                x1: "5.54071",
                                                y1: "21.375",
                                                x2: "27.7074",
                                                y2: "19",
                                                gradientUnits: "userSpaceOnUse",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        stopColor: "#FABC12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Tools.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "0.46",
                                                        stopColor: "#FABC12",
                                                        stopOpacity: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Tools.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Tools.tsx",
                                                lineNumber: 97,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Tools.tsx",
                                        lineNumber: 86,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Tools.tsx",
                                lineNumber: 73,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500 font-medium group-hover:text-white transition-colors",
                                children: "Gemini"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Tools.tsx",
                                lineNumber: 104,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Tools.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group flex items-center space-x-3 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        clipPath: "url(#clip0_2555_5038)",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M24.5 0H7.5C3.35786 0 0 3.35786 0 7.5V24.5C0 28.6421 3.35786 32 7.5 32H24.5C28.6421 32 32 28.6421 32 24.5V7.5C32 3.35786 28.6421 0 24.5 0Z",
                                                fill: "#E14E1D"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Tools.tsx",
                                                lineNumber: 111,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6 4.75L7.07625 16.8241H20.915L20.4506 22.0029L15.9949 23.2076L11.5475 22.0046L11.2501 18.6794H7.2425L7.81563 25.0895L15.994 27.361L24.1828 25.0895L25.2806 12.8319H10.728L10.3626 8.74312H25.6424L26 4.75H6Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Tools.tsx",
                                                lineNumber: 114,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M16 4.75H6L7.07625 16.8241H16V12.8319H10.728L10.3626 8.74312H16V4.75ZM16 23.2059L15.9949 23.2076L11.5475 22.0046L11.2501 18.6794H7.2425L7.81563 25.0895L15.994 27.361L16.0001 27.3592L16 23.2059Z",
                                                fill: "#EBEBEB"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Tools.tsx",
                                                lineNumber: 117,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Tools.tsx",
                                        lineNumber: 110,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                            id: "clip0_2555_5038",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                width: "32",
                                                height: "32",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Tools.tsx",
                                                lineNumber: 123,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Tools.tsx",
                                            lineNumber: 122,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Tools.tsx",
                                        lineNumber: 121,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Tools.tsx",
                                lineNumber: 109,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500 font-medium group-hover:text-white transition-colors",
                                children: "HTML & CSS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Tools.tsx",
                                lineNumber: 127,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Tools.tsx",
                        lineNumber: 108,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Tools.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Tools.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = Tools;
var _c;
__turbopack_context__.k.register(_c, "Tools");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "About",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-tool.js [app-client] (ecmascript) <export default as PenTool>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$template$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutTemplate$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-template.js [app-client] (ecmascript) <export default as LayoutTemplate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Tools$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Tools.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function About() {
    _s();
    const wrapperRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const textRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "About.useEffect": ()=>{
            const wrapper = wrapperRef.current;
            const text = textRef.current;
            if (!wrapper || !text) return;
            const handleMouseMove = {
                "About.useEffect.handleMouseMove": (e)=>{
                    const rect = wrapper.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    text.style.setProperty('--x', `${x / rect.width * 100}%`);
                    text.style.setProperty('--y', `${y / rect.height * 100}%`);
                }
            }["About.useEffect.handleMouseMove"];
            const handleMouseEnter = {
                "About.useEffect.handleMouseEnter": ()=>text.style.setProperty('--light-opacity', '1')
            }["About.useEffect.handleMouseEnter"];
            const handleMouseLeave = {
                "About.useEffect.handleMouseLeave": ()=>text.style.setProperty('--light-opacity', '0.1')
            }["About.useEffect.handleMouseLeave"];
            wrapper.addEventListener('mousemove', handleMouseMove);
            wrapper.addEventListener('mouseenter', handleMouseEnter);
            wrapper.addEventListener('mouseleave', handleMouseLeave);
            return ({
                "About.useEffect": ()=>{
                    wrapper.removeEventListener('mousemove', handleMouseMove);
                    wrapper.removeEventListener('mouseenter', handleMouseEnter);
                    wrapper.removeEventListener('mouseleave', handleMouseLeave);
                }
            })["About.useEffect"];
        }
    }["About.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        "data-scroll-section": true,
        className: "py-24 sm:py-32 px-8 md:px-[100px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl mx-auto text-center mb-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-bold mb-4",
                        children: "About"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-muted-foreground leading-relaxed",
                        children: "I don't just design screens; I design systems. My background in Informatic Media allows me to bridge the gap between creative vision and technical feasibility."
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-24 grid grid-cols-1 md:grid-cols-3 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "group bg-[#0F1219] border-white/5 hover:border-primary transition-all duration-300 text-left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-lg bg-gray-800/50 flex items-center justify-center mb-6 text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/About.tsx",
                                                lineNumber: 54,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/About.tsx",
                                            lineNumber: 53,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold mb-3 text-gray-200 group-hover:text-white transition-colors",
                                            children: "UX Research"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/About.tsx",
                                            lineNumber: 56,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors",
                                            children: "Deep diving into user personas, journey mapping, and empathy studies to ensure every pixel serves a real human need."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/About.tsx",
                                            lineNumber: 57,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/About.tsx",
                                    lineNumber: 52,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/About.tsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "group bg-[#0F1219] border-white/5 hover:border-primary transition-all duration-300 text-left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-lg bg-gray-800/50 flex items-center justify-center mb-6 text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__["PenTool"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/About.tsx",
                                                lineNumber: 68,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/About.tsx",
                                            lineNumber: 67,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold mb-3 text-gray-200 group-hover:text-white transition-colors",
                                            children: "Visual Design"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/About.tsx",
                                            lineNumber: 70,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors",
                                            children: "Crafting clean, accessible, and modern interfaces that align with brand identity and current design trends (Dark Mode specialist)."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/About.tsx",
                                            lineNumber: 71,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/About.tsx",
                                    lineNumber: 66,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/About.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "group bg-[#0F1219] border-white/5 hover:border-primary transition-all duration-300 text-left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-lg bg-gray-800/50 flex items-center justify-center mb-6 text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$template$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutTemplate$3e$__["LayoutTemplate"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/About.tsx",
                                                lineNumber: 82,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/About.tsx",
                                            lineNumber: 81,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold mb-3 text-gray-200 group-hover:text-white transition-colors",
                                            children: "Prototyping"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/About.tsx",
                                            lineNumber: 84,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors",
                                            children: "Building high-fidelity interactive flows. I speak the language of developers (HTML/CSS) to ensure smooth handoffs."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/About.tsx",
                                            lineNumber: 85,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/About.tsx",
                                    lineNumber: 80,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/About.tsx",
                                lineNumber: 79,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Tools$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"], {}, void 0, false, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold",
                                children: "My journey"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/About.tsx",
                                lineNumber: 100,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: wrapperRef,
                                className: "relative inline-block flashlight-wrapper",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        ref: textRef,
                                        className: "flashlight text-4xl font-bold hidden md:inline-block",
                                        children: "so far"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/About.tsx",
                                        lineNumber: 102,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl font-bold inline-block md:hidden",
                                        children: "so far"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/About.tsx",
                                        lineNumber: 103,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/About.tsx",
                                lineNumber: 101,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 99,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-4 md:left-1/2 -translate-x-1/2 h-full w-0.5 timeline-line"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/About.tsx",
                                lineNumber: 109,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:text-right md:pr-8"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/About.tsx",
                                                lineNumber: 115,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold",
                                                        children: "UI/UX Designer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/About.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-md text-gray-400",
                                                        children: "Junior Executive"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/About.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500 mt-1",
                                                        children: "RF Interactive Laiyon - 2025"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/About.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/About.tsx",
                                                lineNumber: 116,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/About.tsx",
                                        lineNumber: 114,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:text-right md:pr-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold",
                                                        children: "UI/UX Designer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/About.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-md text-gray-400",
                                                        children: "Internship"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/About.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500 mt-1",
                                                        children: "RF Interactive Laiyon - 2024"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/About.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/About.tsx",
                                                lineNumber: 125,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                fileName: "[project]/src/components/sections/About.tsx",
                                                lineNumber: 130,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/About.tsx",
                                        lineNumber: 124,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative pl-12 md:grid md:grid-cols-2 md:gap-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                fileName: "[project]/src/components/sections/About.tsx",
                                                lineNumber: 135,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute left-4 md:left-1/2 -translate-x-1/2 -bottom-2 w-5 h-5 bg-white rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/About.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold",
                                                        children: "Bachelor Degree Informatic Media"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/About.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-md text-gray-400",
                                                        children: "Student"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/About.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500 mt-1",
                                                        children: "Unisza, Besut - 2021-2024"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/About.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/About.tsx",
                                                lineNumber: 136,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/About.tsx",
                                        lineNumber: 134,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/About.tsx",
                                lineNumber: 112,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/About.tsx",
                        lineNumber: 107,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/About.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/About.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
}
_s(About, "TFOixDBSb/gvJio2aQkKn3hBp7A=");
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/CursorSVG.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CursorSVG",
    ()=>CursorSVG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function CursorSVG({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "72",
        height: "73",
        viewBox: "0 0 72 73",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M35.454 63.9742C37.654 63.9742 39.15 65.6132 39.15 68.0332C39.15 70.4532 37.632 72.1032 35.41 72.1032C33.716 72.1032 32.385 71.0802 32.066 69.5182H32.913C33.243 70.6512 34.211 71.3442 35.443 71.3442C37.17 71.3442 38.325 70.0242 38.325 68.0332C38.325 66.0532 37.17 64.7332 35.443 64.7332C34.2 64.7332 33.21 65.4042 32.869 66.4602H32.022C32.385 64.9752 33.76 63.9742 35.454 63.9742Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M29.6308 71.4465L31.0256 64.4339L27.4762 63.7279L27.6178 63.0159L31.9441 63.8764L30.4075 71.6011L29.6308 71.4465Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21.4987 69.0067L24.5128 61.7302L25.2445 62.0333L22.2305 69.3098L21.4987 69.0067Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.9707 59.0605C21.8 60.2827 22.1333 62.4766 20.7888 64.4888C19.4443 66.5009 17.2655 67.0295 15.4179 65.795C14.0094 64.8539 13.4711 63.2638 14.0736 61.7879L14.7779 62.2584C14.4228 63.3838 14.8427 64.4978 15.867 65.1823C17.303 66.1418 18.9967 65.6859 20.1028 64.0304C21.2029 62.3841 20.9759 60.6449 19.5399 59.6854C18.5064 58.9949 17.3105 59.0028 16.4402 59.6914L15.736 59.2208C16.8628 58.1877 18.5622 58.1193 19.9707 59.0605Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.5335 62.5943L14.8859 59.2419L8.85001 59.9108L8.18109 59.2419L12.428 58.7752L13.7191 53.6416L14.3725 54.295L13.2602 58.6741L15.7181 58.4096L17.1027 57.0251L17.6627 57.5851L12.0935 63.1543L11.5335 62.5943Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.9524 49.4064L11.2513 50.1279L3.97481 53.1419L3.67593 52.4204L8.9899 47.1117L1.47856 47.1155L1.17548 46.3838L8.45195 43.3697L8.75083 44.0913L5.29552 45.5225C4.02519 46.0487 3.45782 46.2599 2.94301 46.4255L9.70639 46.3982L9.99685 47.0995L5.22559 51.8499C5.48315 51.6956 6.27758 51.3428 7.38531 50.8839L10.9524 49.4064Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.72466 38.8226L8.64529 43.4509L0.920622 44.9874L0.00213686 40.3699L0.714187 40.2283L1.47816 44.069L4.26163 43.5154L3.56847 40.0306L4.26974 39.8911L4.96289 43.3759L7.77873 42.8158L7.01261 38.9642L7.72466 38.8226Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.92308 30.0398C6.76213 30.8489 5.95804 31.3956 5.15968 31.2368C4.36132 31.078 3.81469 30.2739 3.97778 29.4539C4.13659 28.6556 4.94932 28.1219 5.74768 28.2807C6.53525 28.4373 7.08189 29.2414 6.92308 30.0398Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.7478 20.1559C11.5255 21.9851 9.33159 22.3184 7.31944 20.9739C5.30728 19.6294 4.77871 17.4506 6.01319 15.603C6.95433 14.1945 8.54438 13.6562 10.0204 14.2588L9.5498 14.963C8.4244 14.6079 7.3104 15.0278 6.62594 16.0522C5.66647 17.4881 6.12233 19.1818 7.77778 20.288C9.42409 21.388 11.1633 21.161 12.1228 19.725C12.8134 18.6915 12.8055 17.4956 12.1169 16.6254L12.5874 15.9211C13.6205 17.048 13.6889 18.7474 12.7478 20.1559Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.76994 11.1626L14.8258 16.2185L17.3848 13.6594L17.8981 14.1728L14.7791 17.2918L9.20991 11.7227L9.76994 11.1626Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16.3165 5.75665L20.6922 12.3053L20.0337 12.7453L15.658 6.19666L16.3165 5.75665Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M25.4354 10.012C23.4029 10.8539 21.3935 9.91212 20.4674 7.67633C19.5414 5.44054 20.3124 3.33523 22.3652 2.48491C23.9303 1.83664 25.5515 2.27242 26.4439 3.59344L25.6614 3.91757C24.9229 2.9971 23.7634 2.72729 22.6252 3.19876C21.0297 3.85965 20.4677 5.52117 21.2296 7.36062C21.9874 9.1899 23.5596 9.96742 25.1551 9.30653C26.3035 8.83085 26.9614 7.83207 26.8723 6.72596L27.6548 6.40183C27.8877 7.9127 27.0005 9.3637 25.4354 10.012Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M27.1846 1.03337L28.1095 5.68328L30.9067 0.293006L31.8345 0.108451L29.8631 3.89888L33.4142 7.82453L32.508 8.0048L29.4848 4.64706L28.3392 6.83766L28.7211 8.75804L27.9444 8.91255L26.4078 1.18789L27.1846 1.03337Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M38.4728 7.87703L37.7068 7.72466L39.2433 -1.31659e-06L40.0093 0.152364L41.471 7.5201L45.641 1.27257L46.4178 1.42708L44.8813 9.15175L44.1153 8.99938L44.8449 5.33125C45.1131 3.98267 45.2528 3.39358 45.4011 2.87352L41.6662 8.51224L40.9218 8.36417L39.6227 1.75778C39.6079 2.05766 39.46 2.91426 39.226 4.09022L38.4728 7.87703Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M49.0661 11.0733L44.7063 9.2674L47.7204 1.99093L52.07 3.7926L51.7921 4.46334L48.1742 2.96475L47.0882 5.58672L50.3707 6.94639L50.0971 7.60697L46.8146 6.24729L45.7159 8.89975L49.344 10.4026L49.0661 11.0733Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M56.8141 15.2863C56.2308 14.7029 56.223 13.7306 56.7986 13.155C57.3741 12.5795 58.3464 12.5717 58.9376 13.1628C59.5131 13.7384 59.5054 14.7107 58.9298 15.2863C58.362 15.8541 57.3897 15.8618 56.8141 15.2863Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M61.7963 25.6205C60.9543 23.588 61.8961 21.5787 64.1319 20.6526C66.3677 19.7265 68.473 20.4975 69.3233 22.5504C69.9716 24.1154 69.5358 25.7366 68.2148 26.629L67.8906 25.8465C68.8111 25.1081 69.0809 23.9485 68.6095 22.8103C67.9486 21.2148 66.287 20.6528 64.4476 21.4148C62.6183 22.1725 61.8408 23.7447 62.5017 25.3402C62.9774 26.4886 63.9761 27.1465 65.0823 27.0574L65.4064 27.8399C63.8955 28.0729 62.4445 27.1856 61.7963 25.6205Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M70.9283 28.1409L63.9156 29.5358L64.6217 33.0853L63.9096 33.2269L63.0491 28.9007L70.7737 27.3641L70.9283 28.1409Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M71.7861 36.5876H63.9101V35.7956H71.7861V36.5876Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M63.1817 41.8056C63.6109 39.6478 65.5103 38.5003 67.8838 38.9724C70.2573 39.4446 71.5794 41.2553 71.146 43.4346C70.8155 45.0961 69.5525 46.2019 67.9582 46.21L68.1235 45.3793C69.2991 45.2767 70.1676 44.4625 70.408 43.2542C70.7449 41.5603 69.6756 40.17 67.7228 39.7816C65.7809 39.3953 64.2609 40.2706 63.924 41.9644C63.6815 43.1835 64.1465 44.2854 65.1157 44.8259L64.9504 45.6566C63.5648 45.0109 62.8512 43.467 63.1817 41.8056Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M69.6753 48.2482L65.2952 46.4339L68.2231 51.7543L67.861 52.6283L65.8047 48.8833L60.5677 49.655L60.9213 48.8013L65.3928 48.1531L64.2078 45.9835L62.3989 45.2342L62.702 44.5025L69.9784 47.5165L69.6753 48.2482Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M57.7137 53.8319L58.2659 53.2796L63.8351 58.8488L63.2829 59.401L56.3447 56.5231L59.2227 63.4612L58.6626 64.0213L53.0935 58.4521L53.6457 57.8998L56.2903 60.5444C57.2626 61.5167 57.6748 61.96 58.0248 62.3723L55.4114 56.1342L55.9481 55.5975L62.1628 58.1876C61.9217 58.0087 61.2917 57.4098 60.4438 56.562L57.7137 53.8319Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M49.1707 60.8642L53.0944 58.2424L57.4701 64.7911L53.5555 67.4067L53.1522 66.8031L56.4082 64.6274L54.8315 62.2677L51.8773 64.2417L51.4801 63.6472L54.4343 61.6732L52.8393 59.2861L49.5741 61.4678L49.1707 60.8642Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M41.3632 64.9657C42.1724 64.8048 42.9851 65.3385 43.1439 66.1369C43.3027 66.9352 42.769 67.748 41.9491 67.911C41.1507 68.0699 40.3466 67.5232 40.1878 66.7249C40.0312 65.9373 40.5649 65.1246 41.3632 64.9657Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/CursorSVG.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/CursorSVG.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
_c = CursorSVG;
var _c;
__turbopack_context__.k.register(_c, "CursorSVG");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Portfolio.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Portfolio",
    ()=>Portfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CursorSVG$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/CursorSVG.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Portfolio() {
    _s();
    const [cursorPosition, setCursorPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Use a ref for direct DOM manipulation specifically for the separate cursor element if needed,
    // but state is fine for this unless performance issues arise.
    // For smoother performance, we can direct manipulate the DOM style.
    // Refs for smooth animation
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const targetPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const currentPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const rafId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Portfolio.useEffect": ()=>{
            const moveCursor = {
                "Portfolio.useEffect.moveCursor": (e)=>{
                    // Update target position directly
                    targetPos.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                    // If this is the very first movement or we just started hovering, snap to position
                    // to avoid the cursor flying in from (0,0)
                    if (!isHovering && cursorRef.current) {
                        currentPos.current = {
                            x: e.clientX,
                            y: e.clientY
                        };
                    }
                }
            }["Portfolio.useEffect.moveCursor"];
            window.addEventListener('mousemove', moveCursor);
            return ({
                "Portfolio.useEffect": ()=>window.removeEventListener('mousemove', moveCursor)
            })["Portfolio.useEffect"];
        }
    }["Portfolio.useEffect"], [
        isHovering
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Portfolio.useEffect": ()=>{
            if (!isHovering) return;
            const animate = {
                "Portfolio.useEffect.animate": ()=>{
                    // Linear Interpolation (Lerp)
                    // current = current + (target - current) * factor
                    const lerpFactor = 0.1; // Adjust for more/less delay (0.05 = slow, 0.2 = fast)
                    currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerpFactor;
                    currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerpFactor;
                    if (cursorRef.current) {
                        // Adjust position to center the 72x73 cursor (36px offset)
                        cursorRef.current.style.transform = `translate(${currentPos.current.x - 36}px, ${currentPos.current.y - 36.5}px)`;
                    }
                    rafId.current = requestAnimationFrame(animate);
                }
            }["Portfolio.useEffect.animate"];
            // Start the animation loop
            rafId.current = requestAnimationFrame(animate);
            return ({
                "Portfolio.useEffect": ()=>{
                    if (rafId.current) cancelAnimationFrame(rafId.current);
                }
            })["Portfolio.useEffect"];
        }
    }["Portfolio.useEffect"], [
        isHovering
    ]);
    // Note: Image paths need to be updated to /images/... if we moved assets.
    // Assuming we moved `_legacy/assets` to `public/assets` or better `public/images`.
    // Actually, I moved the whole `assets` folder to `_legacy`. I should copy it back to `public`.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "portfolio",
        "data-scroll-section": true,
        className: "py-24 sm:py-32 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cursorRef,
                className: "fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-300",
                style: {
                    opacity: isHovering ? 1 : 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$CursorSVG$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorSVG"], {
                    className: "animate-spin-slow w-[72px] h-[73px]"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Portfolio.tsx",
                    lineNumber: 74,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Portfolio.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-bold",
                        children: "My Portfolio"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Portfolio.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-lg text-gray-400",
                        children: "My design journey so far"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Portfolio.tsx",
                        lineNumber: 79,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 grid grid-cols-1 md:grid-cols-2 gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                onMouseEnter: ()=>setIsHovering(true),
                                onMouseLeave: ()=>setIsHovering(false),
                                className: "project-card block bg-[#121722] rounded-[15px] text-left transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-white/5 md:hover:scale-105 md:hover:shadow-[0_25px_60px_-15px_rgba(213,90,33,0.3)] p-4 cursor-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-zinc-900 rounded-[10px] overflow-hidden mb-6 pointer-events-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/assets/projects/pcari-booking.png",
                                            alt: "Pcari Booking Mockup",
                                            className: "w-full h-auto"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Portfolio.tsx",
                                            lineNumber: 88,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Portfolio.tsx",
                                        lineNumber: 86,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-medium px-2",
                                        children: "Pcari Booking"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Portfolio.tsx",
                                        lineNumber: 91,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-gray-400 font-light px-2",
                                        children: "Manage Pcari bookings for a merchant, which includes the main page and the merchant's dashboard."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Portfolio.tsx",
                                        lineNumber: 92,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex items-center justify-between px-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#D55A21] font-medium",
                                                children: "View Case Study →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Portfolio.tsx",
                                                lineNumber: 95,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 rounded-full text-xs font-medium border border-[#D55A21] text-[#D55A21] bg-[#D55A21]/10",
                                                    children: "Mobile App"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Portfolio.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Portfolio.tsx",
                                                lineNumber: 96,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Portfolio.tsx",
                                        lineNumber: 94,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Portfolio.tsx",
                                lineNumber: 82,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                onMouseEnter: ()=>setIsHovering(true),
                                onMouseLeave: ()=>setIsHovering(false),
                                className: "project-card block bg-[#121722] rounded-[15px] text-left transition-all duration-300 md:hover:scale-105 md:hover:shadow-[0_25px_60px_-15px_rgba(213,90,33,0.3)] p-4 cursor-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-zinc-900 rounded-[10px] overflow-hidden mb-6 pointer-events-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/assets/projects/kad-pekerja-madani.png",
                                            alt: "Card Project Mockup",
                                            className: "w-full h-auto"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Portfolio.tsx",
                                            lineNumber: 110,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Portfolio.tsx",
                                        lineNumber: 109,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-medium px-2",
                                        children: "Kad Pekerja Madani"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Portfolio.tsx",
                                        lineNumber: 113,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-gray-400 font-light px-2",
                                        children: "Redesign the website for Kad Pekerja Madani, along with a new design for the mobile application"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Portfolio.tsx",
                                        lineNumber: 114,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex items-center justify-between px-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#D55A21] font-medium",
                                                children: "View Case Study →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Portfolio.tsx",
                                                lineNumber: 118,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1 rounded-full text-xs font-medium border border-purple-500 text-purple-400 bg-purple-500/10",
                                                        children: "Web Design"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Portfolio.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1 rounded-full text-xs font-medium border border-[#D55A21] text-[#D55A21] bg-[#D55A21]/10",
                                                        children: "Mobile App"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Portfolio.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Portfolio.tsx",
                                                lineNumber: 119,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Portfolio.tsx",
                                        lineNumber: 117,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Portfolio.tsx",
                                lineNumber: 105,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Portfolio.tsx",
                        lineNumber: 80,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Portfolio.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Portfolio.tsx",
        lineNumber: 67,
        columnNumber: 9
    }, this);
}
_s(Portfolio, "s7Aqg1Z3XaSJIKvA3qYiRErr97w=");
_c = Portfolio;
var _c;
__turbopack_context__.k.register(_c, "Portfolio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 11,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.tsx",
        lineNumber: 11,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Textarea;
Textarea.displayName = "Textarea";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Textarea$React.forwardRef");
__turbopack_context__.k.register(_c1, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Contact",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function Contact() {
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Add form submission logic here
        console.log("Form submitted");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        "data-scroll-section": true,
        className: "py-32 sm:py-48 relative overflow-hidden px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center z-0 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "font-dotspot text-[20vw] lg:text-[15vw] text-gray-500/100 whitespace-nowrap opacity-10",
                    children: "CONTACT ME"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Contact.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Contact.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "glassy p-8 md:p-12 rounded-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-center mb-8",
                            children: "Contact Me"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Contact.tsx",
                            lineNumber: 24,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "name",
                                            className: "text-sm font-medium text-gray-300",
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                            lineNumber: 27,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "text",
                                            id: "name",
                                            name: "name",
                                            className: "mt-1 bg-gray-800/50 border-gray-700 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                            lineNumber: 28,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                    lineNumber: 26,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "email",
                                            className: "text-sm font-medium text-gray-300",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                            lineNumber: 31,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            type: "email",
                                            id: "email",
                                            name: "email",
                                            className: "mt-1 bg-gray-800/50 border-gray-700 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                            lineNumber: 32,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                    lineNumber: 30,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "description",
                                            className: "text-sm font-medium text-gray-300",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                            lineNumber: 35,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                            id: "description",
                                            name: "description",
                                            rows: 4,
                                            className: "mt-1 bg-gray-800/50 border-gray-700 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                            lineNumber: 36,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                    lineNumber: 34,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        className: "bg-white text-black font-bold py-6 px-8 rounded-full hover:bg-gray-200",
                                        children: "Submit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 39,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                    lineNumber: 38,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Contact.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Contact.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Contact.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Contact.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_38ffa893._.js.map