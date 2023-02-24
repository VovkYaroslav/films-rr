import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Stars.module.css";

function StarRating({ rating, onChange }) {
    const [hoveredRating, setHoveredRating] = useState(null);

    const handleMouseOver = (index) => {
        setHoveredRating(index + 1);
    };

    const handleMouseLeave = () => {
        setHoveredRating(null);
    };

    const handleClick = (index) => {
        onChange(index + 1);
    };

    return (
        <div
            className="star-rating"
            onMouseLeave={handleMouseLeave}
        >
            {Array.from({ length: 10 }, (_, index) => {
                const starClass =
                    index < (hoveredRating ?? rating) ? "star-rating__star--active" : "";
                return (
                    <span
                        key={index}
                        className={`star-rating__star ${starClass}`}
                        onMouseOver={() => handleMouseOver(index)}
                        onClick={() => handleClick(index)}
                    >
            ★
          </span>
                );
            })}
        </div>
    );
}

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export  {StarRating};