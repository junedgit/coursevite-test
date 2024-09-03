import React, { useState } from "react";
import ThreeDCard from "./ThreeDCard";
import clsx from "clsx";

const cardData = [
  {
    id: 1,
    title: "Become a successful data engineer",
    image:
      "https://coursevita-main-site.s3.eu-north-1.amazonaws.com/courseImages/MlOps.webp", // Replace with actual image link
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Become a Successful Data Scientist",
    image:
      "https://coursevita-main-site.s3.eu-north-1.amazonaws.com/courseImages/dataScience.webp", // Replace with actual image link
    status: "Upcoming",
    link: "https://coursevita.com/courses/dataScience",
  },
  {
    id: 3,
    title: "Become a successful data Analyst",
    image:
      "https://coursevita-main-site.s3.eu-north-1.amazonaws.com/courseImages/Rectangle.webp", // Replace with actual image link
    status: "Upcoming",
    link: "https://coursevita.com/courses/dataAnalytics",
  },
  {
    id: 4,
    title: "Become a successful data visualization expert",
    image:
      "https://coursevita-main-site.s3.eu-north-1.amazonaws.com/courseImages/dataVisualization.webp", // Replace with actual image link
    status: "Upcoming",
    link: "https://coursevita.com/courses/dataVisualization",
  },
  {
    id: 5,
    title: "Python for Data Analytics",
    date: "24th July, 2024",
    image:
      "https://coursevita-main-site.s3.eu-north-1.amazonaws.com/courseImages/MlOps.webp", // Replace with actual image link
    status: "Upcoming",
    link: "https://upskill.coursevita.com/python-data-analytics",
  },
];

const HorizontalCardSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className={clsx(
          "flex space-x-4 animate-marquee whitespace-nowrap",
          hoveredIndex !== null && "hover:animate-none"
        )}
        style={{ animationDuration: `${cardData.length * 5}s` }}
      >
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <ThreeDCard
              title={card.title}
              date={card.date}
              image={card.image}
              status={card.status}
              link={card.link}
              isHovered={hoveredIndex === index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCardSlider;
