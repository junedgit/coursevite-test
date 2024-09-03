import React from "react";

const ThreeDCard = ({ title, date, image, status, link }) => {
  return (
    <div className="relative flex flex-col bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 w-72 h-40 p-4">
      {/* Top Section */}
      <div className="flex justify-between items-start">
        {/* Image */}
        {image && (
          <img
            src={image}
            alt={title}
            className="h-12 w-1/4 object-cover rounded-lg" // w-1/4 makes it 25% of the card width
          />
        )}
        {/* Status */}
        <span className="text-xs bg-gray-100 text-gray-600 rounded-full px-2 py-1">
          {status}
        </span>
      </div>
      {/* Title */}
      <div className="flex-grow flex items-center justify-center text-center">
        <div className="text-sm font-semibold text-gray-800 leading-tight">
          {title}
        </div>
      </div>
      {/* Bottom Section */}
      <div className="flex justify-between items-end">
        {/* Link */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 text-xs flex items-center space-x-1"
          >
            <span>Link</span>
          </a>
        )}
        {/* Date */}
        {date && (
          <div className="text-xs text-gray-500 flex items-center space-x-1">
            <span>{date}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThreeDCard;
