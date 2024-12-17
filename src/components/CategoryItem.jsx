import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ title, items, image }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="single-category">
        <h3 className="heading">{title}</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>
                {item.img && <img src={item.img} alt={item.name} width="30" style={{ marginRight: "8px" }} />}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="images">
          <img src={image} alt={title}   style={{ filter: "blur(4px)" }} // Add this inline style
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
