import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Footer } from "../redux/menuSlice";

const Footer = () => {
  const footerItems: Footer = useSelector(
    (state: any) => state.menu.footerContent
  );

  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <div className="flex justify-center items-center space-x-4">
        <div>
          {footerItems?.links.map((link) => (
            <Link key={link.text} href={link.pagePath}>
              <a className="text-gray-300 hover:text-white mr-5">{link.text}</a>
            </Link>
          ))}
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
