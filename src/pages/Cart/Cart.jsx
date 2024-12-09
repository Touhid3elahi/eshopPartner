import React from "react";

const ShoppingCart = () => {
  return (
    <div className="shopping-cart section">
      <div className="container">
        <div className="cart-list-head">
          {/* カートのリストタイトル */}
          <div className="cart-list-title">
            <div className="row">
              <div className="col-lg-1 col-md-1 col-12"></div>
              <div className="col-lg-4 col-md-3 col-12">
                <p>商品名</p>
              </div>
              <div className="col-lg-2 col-md-2 col-12">
                <p>数量</p>
              </div>
              <div className="col-lg-2 col-md-2 col-12">
                <p>小計</p>
              </div>
              <div className="col-lg-2 col-md-2 col-12">
                <p>割引</p>
              </div>
              <div className="col-lg-1 col-md-2 col-12">
                <p>削除</p>
              </div>
            </div>
          </div>
          {/* カートリスト終了 */}

          {/* 商品リスト */}
          {[
            {
              imgSrc: "https://via.placeholder.com/220x200",
              name: "Canon EOS M50 ミラーレスカメラ",
              details: [
                { label: "種類", value: "ミラーレス" },
                { label: "カラー", value: "ブラック" },
              ],
              price: "¥910.00",
              discount: "¥29.00",
            },
            {
              imgSrc: "https://via.placeholder.com/220x200",
              name: "Apple iPhone X 256 GB スペースグレー",
              details: [
                { label: "メモリ", value: "256 GB" },
                { label: "カラー", value: "スペースグレー" },
              ],
              price: "¥1100.00",
              discount: "—",
            },
            {
              imgSrc: "https://via.placeholder.com/220x200",
              name: "HP LaserJet Pro レーザープリンター",
              details: [
                { label: "種類", value: "レーザー" },
                { label: "カラー", value: "ホワイト" },
              ],
              price: "¥550.00",
              discount: "—",
            },
          ].map((product, index) => (
            <div className="cart-single-list" key={index}>
              <div className="row align-items-center">
                <div className="col-lg-1 col-md-1 col-12">
                  <a href="product-details.html">
                    <img src={product.imgSrc} alt={product.name} />
                  </a>
                </div>
                <div className="col-lg-4 col-md-3 col-12">
                  <h5 className="product-name">
                    <a href="product-details.html">{product.name}</a>
                  </h5>
                  <p className="product-des">
                    {product.details.map((detail, i) => (
                      <span key={i}>
                        <em>{detail.label}:</em> {detail.value}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="col-lg-2 col-md-2 col-12">
                  <div className="count-input">
                    <select className="form-control">
                      {[1, 2, 3, 4, 5].map((quantity) => (
                        <option key={quantity}>{quantity}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-12">
                  <p>{product.price}</p>
                </div>
                <div className="col-lg-2 col-md-2 col-12">
                  <p>{product.discount}</p>
                </div>
                <div className="col-lg-1 col-md-2 col-12">
                  <a className="remove-item" href="javascript:void(0)">
                    <i className="lni lni-close"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* 合計金額セクション */}
          <div className="row">
            <div className="col-12">
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
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="right">
                      <ul>
                        <li>
                          カート小計<span>¥2560.00</span>
                        </li>
                        <li>
                          配送<span>無料</span>
                        </li>
                        <li>
                          割引<span>¥29.00</span>
                        </li>
                        <li className="last">
                          合計<span>¥2531.00</span>
                        </li>
                      </ul>
                      <div className="button">
                        <a href="checkout.html" className="btn">
                          チェックアウト
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
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
