import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  // Your phone number (without '+', spaces, or dashes)
  const phoneNumber = '250788759351'; 
  
  // The polite, pre-filled message
  const defaultMessage = "Hello Mubwiza Eden, I was browsing your beautiful website and would like to inquire about your flowers.";

  // URL-encode the message for safety
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    // The main link is now a "group" to control the tooltip's visibility on hover.
    // We use flex to align the tooltip and the button itself.
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 flex items-center z-50"
      aria-label="Chat on WhatsApp"
    >
      {/* 
        The Tooltip:
        - Appears to the left of the button.
        - Is HIDDEN on mobile (hidden) and appears only on medium screens and up (md:block).
        - Starts with opacity-0 and becomes visible on group-hover.
        - Has a smooth transition effect.
      */}
      <div
        className="hidden md:block mr-4 px-4 py-2 bg-mahogany text-ivory-white rounded-lg shadow-lg
                   transform transition-all duration-300 ease-in-out
                   opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"
      >
        <span className="font-semibold whitespace-nowrap">Talk to us</span>
      </div>

      {/* 
        The Circular Button:
        - Stays visually consistent.
        - Also scales up on group-hover for a cohesive feel.
      */}
      <div
        className="bg-orange group-hover:bg-amber text-white w-16 h-16 rounded-full flex items-center justify-center 
                   shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-110"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </div>
    </a>
  );
};

export default WhatsAppButton;