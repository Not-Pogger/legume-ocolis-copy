"use client";

import { useState } from 'react';

export const GradientButton = ({ children, href, target, rel, className, colors, ...props }: { children: React.ReactNode; href?: string; target?: string; rel?: string; className?: string; colors: { start: string; end: string; from: string; to: string }; onClick?: () => void; }) => {
  const [pos, setPos] = useState({ x: '0px', y: '0px' });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({ x: `${x}px`, y: `${y}px` });
  };

  const style = {
    backgroundImage: isHovered 
      ? `radial-gradient(circle at ${pos.x} ${pos.y}, ${colors.from}, ${colors.to})` 
      : `linear-gradient(to right, ${colors.start}, ${colors.end})`,
  };

  const commonProps = {
    className,
    style,
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    ...props,
  };

  if (href) {
    return (
      <a href={href} target={target} rel={rel} {...commonProps}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" {...commonProps}>
      {children}
    </button>
  );
};