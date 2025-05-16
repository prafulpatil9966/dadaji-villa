import React from "react";
import './HeroButton.scss'

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void; // add onClick
}

const HeroButton: React.FC<ButtonProps> = ({ href, children, className, onClick }) => {
  return (
    <div className="mt-5 md:mt-10 lg:mt-10">
      <a
        href={href}
        onClick={onClick}  // attach onClick here
        className={`hero-section-button font-bold bg-transparent text-[#fff] px-[20px] py-[15px] md:px-[25px] md:py-[15px] m-0 relative text-[11px] lg:text-[12px] border border-solid border-white uppercase tracking-[1px] ${className}`}
      >
        {children}
      </a>
    </div>
  );
};

export default HeroButton;
