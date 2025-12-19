(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/SmoothScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function SmoothScroll() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScroll.useEffect": ()=>{
            ({
                "SmoothScroll.useEffect": async ()=>{
                    const LocomotiveScroll = (await __turbopack_context__.A("[project]/node_modules/locomotive-scroll/dist/locomotive-scroll.modern.mjs [app-client] (ecmascript, async loader)")).default;
                    const scroll = new LocomotiveScroll();
                }
            })["SmoothScroll.useEffect"]();
        }
    }["SmoothScroll.useEffect"], []);
    return null;
}
_s(SmoothScroll, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SmoothScroll;
var _c;
__turbopack_context__.k.register(_c, "SmoothScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Navbar() {
    _s();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            name: 'Home',
            href: '#home'
        },
        {
            name: 'About',
            href: '#about'
        },
        {
            name: 'Portfolio',
            href: '#portfolio'
        },
        {
            name: 'Contact',
            href: '#contact'
        }
    ];
    const navRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [pillStyle, setPillStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        left: 0,
        width: 0,
        opacity: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: [
                    0.1,
                    0.25,
                    0.5,
                    0.75,
                    0.9
                ]
            };
            const observerCallback = {
                "Navbar.useEffect.observerCallback": (entries)=>{
                    // We need to determine which section is *most* visible
                    const visibleSections = new Map();
                    // Get current viewport visibility for all observed sections
                    document.querySelectorAll('section[id]').forEach({
                        "Navbar.useEffect.observerCallback": (section)=>{
                            const rect = section.getBoundingClientRect();
                            const viewportHeight = window.innerHeight;
                            // Calculate visible height
                            const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
                            const visibleRatio = Math.max(0, visibleHeight / viewportHeight); // Ratio relative to viewport height
                            if (visibleHeight > 0) {
                                visibleSections.set(section.id, visibleRatio);
                            }
                        }
                    }["Navbar.useEffect.observerCallback"]);
                    // Find the section with the largest visible ratio
                    let maxRatio = 0;
                    let maxId = activeSection;
                    visibleSections.forEach({
                        "Navbar.useEffect.observerCallback": (ratio, id)=>{
                            if (ratio > maxRatio) {
                                maxRatio = ratio;
                                maxId = id;
                            }
                        }
                    }["Navbar.useEffect.observerCallback"]);
                    if (maxRatio > 0.1) {
                        setActiveSection(maxId);
                    }
                }
            }["Navbar.useEffect.observerCallback"];
            // Note: IntersectionObserver callback fires on changes.
            // For accurate tracking of "most visible", standard IO needs careful logic.
            // Simpler approach: On any change, re-evaluate all sections' bounding clients relative to viewport.
            const observer = new IntersectionObserver(observerCallback, observerOptions);
            const sections = document.querySelectorAll('section[id]');
            sections.forEach({
                "Navbar.useEffect": (section)=>observer.observe(section)
            }["Navbar.useEffect"]);
            return ({
                "Navbar.useEffect": ()=>{
                    sections.forEach({
                        "Navbar.useEffect": (section)=>observer.unobserve(section)
                    }["Navbar.useEffect"]);
                    observer.disconnect();
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []); // Removed activeSection dep to avoid re-binding, logic uses DOM 
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const activeIndex = navItems.findIndex({
                "Navbar.useEffect.activeIndex": (item)=>item.href.substring(1) === activeSection
            }["Navbar.useEffect.activeIndex"]);
            if (activeIndex !== -1 && navRefs.current[activeIndex]) {
                const element = navRefs.current[activeIndex];
                if (element) {
                    setPillStyle({
                        left: element.offsetLeft,
                        width: element.offsetWidth,
                        opacity: 1
                    });
                }
            } else {
                setPillStyle({
                    "Navbar.useEffect": (prev)=>({
                            ...prev,
                            opacity: 0
                        })
                }["Navbar.useEffect"]);
            }
        }
    }["Navbar.useEffect"], [
        activeSection
    ]);
    const scrollTo = (e, id)=>{
        e.preventDefault();
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "py-2 fixed top-0 left-0 right-0 z-30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-8 md:px-[100px] relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "glassy rounded-full relative flex justify-center items-center md:grid md:grid-cols-3 p-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#home",
                            onClick: (e)=>scrollTo(e, '#home'),
                            id: "header-logo",
                            className: "font-noxlock text-4xl tracking-wider md:justify-self-start cursor-pointer transition-colors hover:text-primary",
                            children: "ZA"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 104,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center space-x-2 justify-self-center relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-1 bottom-1 bg-primary rounded-full transition-all duration-300 ease-out z-0",
                                    style: {
                                        left: `${pillStyle.left}px`,
                                        width: `${pillStyle.width}px`,
                                        opacity: pillStyle.opacity
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 109,
                                    columnNumber: 25
                                }, this),
                                navItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        ref: (el)=>{
                                            navRefs.current[index] = el;
                                        },
                                        href: item.href,
                                        onClick: (e)=>scrollTo(e, item.href),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("nav-link relative z-10 px-5 py-3 rounded-full transition-colors duration-300 text-sm font-medium", activeSection === item.href.substring(1) ? "text-white font-bold" : "text-white/60 hover:text-white"),
                                        children: item.name
                                    }, item.name, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 119,
                                        columnNumber: 29
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 107,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:block justify-self-end"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 134,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden absolute right-6 top-1/2 -translate-y-1/2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                className: "text-white focus:outline-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 140,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 138,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 137,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 136,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 103,
                    columnNumber: 17
                }, this),
                isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "mobile-menu",
                    className: "md:hidden absolute top-full right-8 mt-2 w-auto glassy rounded-[25px] py-[25px] px-[50px] flex flex-col gap-4",
                    children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: item.href,
                            onClick: (e)=>scrollTo(e, item.href),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mobile-nav-link block text-lg py-2 text-center", activeSection === item.href.substring(1) ? "text-primary font-bold" : "text-white"),
                            children: item.name
                        }, item.name, false, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 151,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 148,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 102,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Navbar.tsx",
        lineNumber: 101,
        columnNumber: 9
    }, this);
}
_s(Navbar, "StoJKXkwOuajKhTk16O7ZIlYoks=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_fc66cda1._.js.map