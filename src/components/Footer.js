import React from "react";

function Footer() {
  const Year = new Date().getFullYear();
  return (
    <div className="footer full-bleed">
      <p>&copy; {Year} Mantsu Version 1</p>
    </div>
  );
}

export default Footer;
