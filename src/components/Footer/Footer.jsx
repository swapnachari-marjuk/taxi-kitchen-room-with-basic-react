import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-amber-300 text-base-content p-4">
      <aside>
        <p>Copyright © {new Date().getFullYear()} Taxi Kitchen Room.</p>
        <p>
          This project was originally developed by Ferdous Zihad and is licensed
          under the MIT License. I have recreated this project solely for
          learning and practice purposes.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
