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
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="images">
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
