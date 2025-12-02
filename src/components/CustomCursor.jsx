import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [outerPos, setOuterPos] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    // Track mouse
    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    // Smooth outer circle lag
    useEffect(() => {
        const follow = () => {
            setOuterPos((prev) => ({
                x: prev.x + (position.x - prev.x) * 0.25,
                y: prev.y + (position.y - prev.y) * 0.25,
            }));
            requestAnimationFrame(follow);
        };
        follow();
    }, [position]);

    // Hover detection
    useEffect(() => {
        const handleMouseOver = (e) => {
            if (e.target.closest('a') || e.target.closest('button')) setHovered(true);
        };
        const handleMouseOut = (e) => {
            if (e.target.closest('a') || e.target.closest('button')) setHovered(false);
        };
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);
        return () => {
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <>
            {/* Outer circle */}
            <div
                className="pointer-events-none fixed rounded-full border-2 border-gray-400 z-[9999]"
                style={{
                    width: hovered ? '60px' : '50px',  // smaller size
                    height: hovered ? '60px' : '50px',
                    left: outerPos.x - (hovered ? 30 : 25),
                    top: outerPos.y - (hovered ? 30 : 25),
                    transition: 'width 0.2s, height 0.2s',
                }}
            ></div>

            {/* Inner circle */}
            <div
                className="pointer-events-none fixed rounded-full z-[9999]"
                style={{
                    width: hovered ? '18px' : '14px',  // smaller size
                    height: hovered ? '18px' : '14px',
                    backgroundColor: '#e5e7eb',
                    left: position.x - (hovered ? 9 : 7),
                    top: position.y - (hovered ? 9 : 7),
                }}
            ></div>
        </>
    );
};

export default CustomCursor;