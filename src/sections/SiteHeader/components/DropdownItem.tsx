import React, { useState } from "react";

export type DropdownItemProps = {
  href: string;
  label: string;
  hasSubmenu?: boolean;
  submenu?: React.ReactNode;
};

export const DropdownItem = ({
  href,
  label,
  hasSubmenu = false,
  submenu,
}: DropdownItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="relative group/sub w-full list-none m-0 p-0 text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a
        href={href}
        className="relative flex items-center justify-between w-full px-4 py-[14.4px] text-base leading-[23.2px] text-[#2a2a30] hover:text-[#0c0c44] hover:bg-[#fafafa] transition-colors no-underline font-poppins text-left"
        onClick={(e) => {
          if (hasSubmenu && href === "#") {
            e.preventDefault();
            setIsOpen((prev) => !prev);
          }
        }}
      >
        <span className="pr-2">{label}</span>
        {hasSubmenu && (
          <span className="flex-shrink-0 inline-flex items-center justify-center">
            <svg
              className="w-[9.6px] h-[9.6px] -rotate-90 fill-[#26262c] group-hover/sub:fill-[#0c0c44] transition-colors"
              viewBox="0 0 26 16.043"
            >
              <path
                d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"
                transform="translate(-57, -35.171)"
              />
            </svg>
          </span>
        )}
      </a>
      {hasSubmenu && submenu && (
        <ul
          className={`bg-white shadow-[rgba(0,0,0,0.1)_0px_4px_10px_-2px] hidden md:block text-base leading-[23.2px] absolute left-full top-0 w-60 border-t-2 border-solid border-[#0c0c44] m-0 p-0 list-none z-[10000] transition-all duration-150 before:content-[''] before:absolute before:top-0 before:-left-3 before:w-3 before:h-full ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } group-hover/sub:opacity-100 group-hover/sub:visible`}
        >
          {submenu}
        </ul>
      )}
    </li>
  );
};
