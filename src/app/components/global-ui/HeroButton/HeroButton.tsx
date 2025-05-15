import React from "react";
import './HeroButton.scss'

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const HeroButton: React.FC<ButtonProps> = ({ href, children,className }) => {
  return (
    <div className="mt-10">
      <a
        href={href}
        className={`hero-section-button font-bold bg-transparent text-[#fff] px-[25px] py-[15px] m-0 relative text-[11px] lg:text-[12px] border border-solid border-white uppercase tracking-[1px] ${className}`}
      >
        {children}
      </a>
    </div>
  );
};

export default HeroButton;
