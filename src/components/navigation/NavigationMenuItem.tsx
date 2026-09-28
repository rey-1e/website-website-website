import React, { useState } from "react";

export type NavigationMenuItemProps = {
  href: string;
  label: string;
  linkVariantClass?: string;
  hasSubmenu: boolean;
  menuToggleIconUrl?: string;
  toggleVariantClass?: string;
  toggleIconUrl?: string;
  submenu?: React.ReactNode;
};

export const NavigationMenuItem = ({
  href,
  label,
  linkVariantClass = "text-zinc-800",
  hasSubmenu,
  submenu,
}: NavigationMenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="relative group h-full flex flex-col justify-center text-[14.592px] leading-[43.776px] md:text-base md:leading-[85px] md:min-h-[85px] md:h-[85px] w-full md:w-auto list-none"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a
        href={href}
        onClick={(e) => {
          if (hasSubmenu && href === "#") {
            e.preventDefault();
            setIsOpen((prev) => !prev);
          }
        }}
        className={`relative items-center h-full flex px-5 md:px-4 text-[14.592px] md:text-base leading-[43.776px] md:leading-[85px] font-normal no-underline font-poppins transition-colors outline-none cursor-pointer ${linkVariantClass}`}
      >
        <span>{label}</span>
        {hasSubmenu && (
          <span className="hidden md:inline-flex items-center ml-2.5">
            <svg
              className="w-[9.6px] h-[9.6px] fill-current"
              viewBox="0 0 26 16.043"
            >
              <path
                d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"
                transform="translate(-57, -35.171)"
              />
            </svg>
          </span>
        )}

        {/* Hover / Active underline indicator */}
        <span
          className={`hidden md:block absolute bottom-0 left-0 right-0 h-[2px] bg-[#0c0c44] transition-opacity duration-150 z-20 pointer-events-none ${
            isOpen ? "opacity-100" : "opacity-0"
          } group-hover:opacity-100`}
        />
      </a>

      {hasSubmenu && (
        <ul
          className={`bg-white shadow-[rgba(0,0,0,0.1)_0px_4px_10px_-2px] hidden md:block text-base leading-[23.2px] absolute left-0 top-full w-60 border-t-2 border-solid border-[#0c0c44] m-0 p-0 list-none z-[9999] transition-all duration-150 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } group-hover:opacity-100 group-hover:visible`}
        >
          {submenu}
        </ul>
      )}
    </li>
  );
};
