import React from "react";

function FAQ() {
  return (
    <div className="faq-page">
      <h1>FAQ</h1>
      <div
        className="faq-image"
        style={{
          backgroundImage: `url(imgs/assets/faq.jpg)`,
        }}
      ></div>
      <div className="faq-text">
        <p>Welcome to our online manga store!</p>
        <p>
          At our manga store, we are passionate about providing high-quality
          manga to our customers. We understand the love and dedication that
          goes into creating these incredible stories and characters, and we
          want to make sure that readers have access to them in the most
          convenient and affordable way possible.
        </p>
        <p>
          Our store offers a wide selection of manga titles, from classic series
          to the latest releases, including popular genres such as shonen,
          shojo, seinen, and yaoi. We are always updating our inventory to
          ensure that our customers have access to the most current and diverse
          manga available.
        </p>
        <p>
          In addition to offering a wide selection of manga, we also pride
          ourselves on providing exceptional customer service. Our team is
          knowledgeable about all aspects of manga, from the storylines to the
          artwork, and we are always happy to assist our customers with any
          questions or concerns they may have. We also strive to offer
          affordable prices and fast, reliable shipping to make the purchasing
          process as easy and convenient as possible.
        </p>
      </div>
    </div>
  );
}

export default FAQ;
