"use client";

import React, { useRef, useEffect } from 'react';

interface ParticleTextProps {
    text: string;
    className?: string;
    fontSize?: number;
}

export function ParticleText({ text, className, fontSize: propFontSize }: ParticleTextProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particlesArray: Particle[] = [];
        let animationFrameId: number;

        // Mouse interaction state
        const mouse = {
            x: null as number | null,
            y: null as number | null,
            radius: 20 // Decreased radius for more precise interaction on smaller text
        }

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        }

        // Particle Class
        class Particle {
            x: number;
            y: number;
            size: number;
            baseX: number;
            baseY: number;
            density: number;
            color: string;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.size = 2; // Size of the dot
                this.baseX = x;
                this.baseY = y;
                this.density = (Math.random() * 30) + 1;
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

        const init = () => {
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
                for (let y = 0; y < textCoordinates.height; y += step) {
                    for (let x = 0; x < textCoordinates.width; x += step) {
                        // Check alpha
                        if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
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
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].draw();
                particlesArray[i].update();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        // Event listeners
        window.addEventListener('resize', init);
        canvas.addEventListener('mousemove', handleMouseMove); // Listen on canvas/container
        canvas.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('resize', init);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [text]);

    return (
        <div ref={containerRef} className={className} style={{ width: '100%', height: '150px', position: 'relative' }}>
            <canvas
                ref={canvasRef}
                style={{ width: '100%', height: '100%', display: 'block' }}
            />
        </div>
    );
}
