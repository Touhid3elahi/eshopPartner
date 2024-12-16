import React, { useState } from "react";

const ShoppingCart = () => {
  const taxRate = 0.1; // Example tax rate: 10%

  const [quantities, setQuantities] = useState([
    1, // Initial quantity for the first product
    1, // Initial quantity for the second product
    1, // Initial quantity for the third product
  ]);

  const products = [
    {
      imgSrc: "https://via.placeholder.com/220x200",
      name: "Canon EOS M50 ミラーレスカメラ",
      details: [
        { label: "種類", value: "ミラーレス" },
        { label: "カラー", value: "ブラック" },
      ],
      price: 910,
      discount: 29,
    },
    {
      imgSrc: "https://via.placeholder.com/220x200",
      name: "Apple iPhone X 256 GB スペースグレー",
      details: [
        { label: "メモリ", value: "256 GB" },
        { label: "カラー", value: "スペースグレー" },
      ],
      price: 1100,
      discount: 0,
    },
    {
      imgSrc: "https://via.placeholder.com/220x200",
      name: "HP LaserJet Pro レーザープリンター",
      details: [
        { label: "種類", value: "レーザー" },
        { label: "カラー", value: "ホワイト" },
      ],
      price: 550,
      discount: 0,
    },
  ];

  const handleQuantityChange = (index, value) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = parseInt(value, 10);
    setQuantities(updatedQuantities);
  };

  return (
    <div className="shopping-cart section">
      <div className="container">
        <div className="cart-list-head">
          <table className="table">
            <thead>
              <tr className="cart-list-title">
                <th scope="col" style={{ width: "5%" }}>#</th>
                <th scope="col" style={{ width: "25%" }}>商品名</th>
                <th scope="col" style={{ width: "10%" }}>数量</th>
                <th scope="col" style={{ width: "10%" }}>小計</th>
                <th scope="col" style={{ width: "10%" }}>税金</th>
                <th scope="col" style={{ width: "10%" }}>割引</th>
                <th scope="col" style={{ width: "10%" }}>合計</th>
                <th scope="col" style={{ width: "10%" }}>削除</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
                const quantity = quantities[index];
                const subtotal = product.price * quantity;
                const tax = subtotal * taxRate;
                const total = subtotal + tax - product.discount;
                return (
                  <tr key={index}>
                    <th scope="row">
                      <a href="product-details.html">
                        <img
                          src={product.imgSrc}
                          alt={product.name}
                          style={{ width: "50px" }}
                        />
                      </a>
                    </th>
                    <td>
                      <a href="product-details.html">{product.name}</a>
                      <p>
                        {product.details.map((detail, i) => (
                          <span key={i}>
                            <em>{detail.label}:</em> {detail.value} <br />
                          </span>
                        ))}
                      </p>
                    </td>
                    <td>
                      <select
                        className="form-control"
                        value={quantity}
                        onChange={(e) => handleQuantityChange(index, e.target.value)}
                      >
                        {[1, 2, 3, 4, 5].map((qty) => (
                          <option key={qty} value={qty}>
                            {qty}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>{subtotal}円</td>
                    <td>{tax.toFixed(0)}円</td>
                    <td>{product.discount > 0 ? product.discount : "—"}円</td>
                    <td>{total.toFixed(0)}円</td>
                    <td>
                      <button className="btn btn-danger rounded-circle btn-sm">
                        <i className="lni lni-close"></i> 
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>


        {/* 合計金額セクション */}
        <div className="total-amount">
          <div className="row">
            <div className="col-lg-8 col-md-6 col-12">
              <div className="left">
                <div className="coupon">
                  <form action="#" target="_blank">
                    <input
                      name="Coupon"
                      placeholder="クーポンコードを入力してください"
                    />
                    <div className="button">
                      <button className="btn">クーポンを適用</button>
                    </div>
                  </form>
                  <p>LINEクーポン：10％割引</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="right">
                <ul>
                  <li>
                    カート小計<span>{quantities.reduce((sum, qty, idx) => sum + products[idx].price * qty, 0)}円</span>
                  </li>
                  <li>
                    配送<span>無料</span>
                  </li>
                  <li>
                    割引<span>{products.reduce((sum, product, idx) => sum + product.discount, 0)}円</span>
                  </li>
                  <li>
                    税金<span>{quantities.reduce((sum, qty, idx) => sum + products[idx].price * qty * taxRate, 0).toFixed(0)}円</span>
                  </li>
                  <li className="last">
                    合計<span>{quantities.reduce((sum, qty, idx) => {
                      const subtotal = products[idx].price * qty;
                      const tax = subtotal * taxRate;
                      return sum + subtotal + tax - products[idx].discount;
                    }, 0).toFixed(0)}円</span>
                  </li>
                </ul>
                <div className="button">
                  <a href="checkout.html" className="btn">
                    購入
                  </a>
                  <a href="product-grids.html" className="btn btn-alt">
                    買い物を続ける
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 合計金額終了 */}
      </div>
    </div>
  );
};

export default ShoppingCart;
