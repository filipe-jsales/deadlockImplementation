import React from "react";

function Portfolio({ portfolio: { link, name, category, image } }) {
  return (
    <a href={`${link}`} target="_blank" rel="noreferrer">
      <div className="portfolio-item">
        <div className="details">
          <h4 className="title">{name}</h4>
          <span className="term">{category.join(",  ")}</span>
        </div>
        <span className="plus-icon">+</span>
        <div className="thumb" style={{height: "170px"}}>
          <img src={image} alt={name} />
          <div className="mask"></div>
        </div>
      </div>
    </a>
  );
}

export default Portfolio;
