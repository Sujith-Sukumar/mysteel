'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { MorphSVGPlugin } from 'gsap-trial/dist/MorphSVGPlugin';

export default function Footer() {
    const pathRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        // Register plugins
        gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

        const down = 'M0-0.3C0-0.3,464,156,1139,156S2278-0.3,2278-0.3V683H0V-0.3z';
        const center = 'M0-0.3C0-0.3,464,0,1139,0s1139-0.3,1139-0.3V683H0V-0.3z';

        // GSAP context for easy cleanup
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: footerRef.current,
                start: 'top bottom',
                toggleActions: 'play pause resume reverse',
                onEnter: (self) => {
                    const velocity = self.getVelocity();
                    const variation = velocity / 10000;

                    gsap.fromTo(pathRef.current,
                        { morphSVG: down },
                        {
                            duration: 2,
                            morphSVG: center,
                            ease: `elastic.out(${1 + variation}, ${1 - variation})`,
                            overwrite: 'true'
                        }
                    );
                }
            });
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative w-full h-[50vh] overflow-visible">
            <div
                ref={footerRef}
                className="footer-container absolute w-full bottom-0 left-0"
            >
                <svg
                    preserveAspectRatio="none"
                    id="footer-img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2278 683"
                    className="w-full h-full block overflow-visible"
                >
                    <defs>
                        <linearGradient id="grad-1" x1="0" y1="0" x2="2278" y2="683" gradientUnits="userSpaceOnUse">
                            <stop offset="0.2" stopColor="#fec5fb"></stop>
                            <stop offset="0.8" stopColor="#00bae2"></stop>
                        </linearGradient>
                    </defs>
                    <path
                        ref={pathRef}
                        className="footer-svg"
                        id="bouncy-path"
                        fill="url(#grad-1)"
                        d="M0-0.3C0-0.3,464,156,1139,156S2278-0.3,2278-0.3V683H0V-0.3z"
                    />
                </svg>
            </div>

            <style jsx>{`
        .footer-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-blend-mode: color-dodge;
          background-image: url("https://assets.codepen.io/16327/noise.png");
          pointer-events: none;
        }
      `}</style>
        </div>
    );
}
