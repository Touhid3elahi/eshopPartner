import React from 'react';
import CategoryItem from './CategoryItem';

const FeaturedCategories = () => {
  const categories = [
    {
      title: "TV & Audios",
      items: [
        { name: "Smart Television", link: "product-grids.html" },
        { name: "QLED TV", link: "product-grids.html" },
        { name: "Audios", link: "product-grids.html" },
        { name: "Headphones", link: "product-grids.html" },
        { name: "View All", link: "product-grids.html" },
      ],
      image: "https://via.placeholder.com/180x180",
    },
    {
      title: "Desktop & Laptop",
      items: [
        { name: "Smart Television", link: "product-grids.html" },
        { name: "QLED TV", link: "product-grids.html" },
        { name: "Audios", link: "product-grids.html" },
        { name: "Headphones", link: "product-grids.html" },
        { name: "View All", link: "product-grids.html" },
      ],
      image: "https://via.placeholder.com/180x180",
    },
    {
      title: "Cctv Camera",
      items: [
        { name: "Smart Television", link: "product-grids.html" },
        { name: "QLED TV", link: "product-grids.html" },
        { name: "Audios", link: "product-grids.html" },
        { name: "Headphones", link: "product-grids.html" },
        { name: "View All", link: "product-grids.html" },
      ],
      image: "https://via.placeholder.com/180x180",
    },
    {
      title: "Dslr Camera",
      items: [
        { name: "Smart Television", link: "product-grids.html" },
        { name: "QLED TV", link: "product-grids.html" },
        { name: "Audios", link: "product-grids.html" },
        { name: "Headphones", link: "product-grids.html" },
        { name: "View All", link: "product-grids.html" },
      ],
      image: "https://via.placeholder.com/180x180",
    },
    {
      title: "Smart Phones",
      items: [
        { name: "Smart Television", link: "product-grids.html" },
        { name: "QLED TV", link: "product-grids.html" },
        { name: "Audios", link: "product-grids.html" },
        { name: "Headphones", link: "product-grids.html" },
        { name: "View All", link: "product-grids.html" },
      ],
      image: "https://via.placeholder.com/180x180",
    },
    {
      title: "Game Console",
      items: [
        { name: "Smart Television", link: "product-grids.html" },
        { name: "QLED TV", link: "product-grids.html" },
        { name: "Audios", link: "product-grids.html" },
        { name: "Headphones", link: "product-grids.html" },
        { name: "View All", link: "product-grids.html" },
      ],
      image: "https://via.placeholder.com/180x180",
    },
  ];

  return (
    <section className="featured-categories section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Featured Categories</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              title={category.title}
              items={category.items}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
