import React from 'react';

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({ 
    text, 
    disabled = false, 
    speed = 5, 
    className = '' 
}) => {
    const animationDuration = `${speed}s`;

    return (
        <span
            className={`bg-clip-text text-transparent inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
            style={{
                backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0.6) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.6) 60%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animationDuration: animationDuration,
            }}
        >
            {text}
        </span>
    );
};