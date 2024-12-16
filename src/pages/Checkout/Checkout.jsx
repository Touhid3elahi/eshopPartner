import React from "react";

const Checkout = () => {
  return (
    <section className="checkout-wrapper section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="checkout-steps-form-style-1">
              <ul id="accordionExample">
                <li>
                  <h6
                    className="title"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    個人情報
                  </h6>
                  <section
                    className="checkout-steps-form-content collapse show"
                    id="collapseThree"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="single-form form-default">
                          <label>ユーザー名</label>
                          <div className="row">
                            <div className="col-md-6 form-input form">
                              <input type="text" placeholder="名" />
                            </div>
                            <div className="col-md-6 form-input form">
                              <input type="text" placeholder="姓" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-form form-default">
                          <label>メールアドレス</label>
                          <div className="form-input form">
                            <input type="email" placeholder="メールアドレス" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" required />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-form form-default">
                          <label>電話番号</label>
                          <div className="form-input form">
                            <input type="tel" placeholder="電話番号" pattern="[0-9]{10,11}" required />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="single-form form-default">
                          <label>郵送先住所</label>
                          <div className="form-input form">
                            <input type="text" placeholder="住所" required />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-form form-default">
                          <label>市区町村</label>
                          <div className="form-input form">
                            <input type="text" placeholder="市区町村" required />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-form form-default">
                          <label>郵便番号</label>
                          <div className="form-input form">
                            <input type="text" placeholder="郵便番号" pattern="\d{3}-\d{4}" required />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-form form-default">
                          <label>国</label>
                          <div className="form-input form">
                            <input type="text" placeholder="国" required />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-form form-default">
                          <label>都道府県</label>
                          <div className="select-items">
                            <select className="form-control" required>
                              <option value="">選択してください</option>
                              <option value="東京">東京</option>
                              <option value="大阪">大阪</option>
                              <option value="北海道">北海道</option>
                              <option value="福岡">福岡</option>
                              <option value="沖縄">沖縄</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="single-checkbox checkbox-style-3">
                          <input type="checkbox" id="checkbox-3" />
                          <label htmlFor="checkbox-3">
                            <span></span>
                          </label>
                          <p>配送先住所と郵送先住所は同じです。</p>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="single-form button">
                          <button
                            className="btn"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            次へ
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </li>

                <li>
                  <h6
                    className="title collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    配送先住所
                  </h6>
                  <section
                    className="checkout-steps-form-content collapse"
                    id="collapseFour"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="row">
                      {/* Shipping Address Form */}
                      <div className="col-md-12">
                        <div className="single-form form-default">
                          <label>ユーザー名</label>
                          <div className="row">
                            <div className="col-md-6 form-input form">
                              <input type="text" placeholder="名" required />
                            </div>
                            <div className="col-md-6 form-input form">
                              <input type="text" placeholder="姓" required />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Payment Info */}
                      <div className="col-md-12">
                        <div className="checkout-payment-form">
                          <div className="single-form form-default">
                            <label>カード名義人</label>
                            <div className="form-input form">
                              <input type="text" placeholder="カード名義人" required />
                            </div>
                          </div>
                          <div className="single-form form-default">
                            <label>カード番号</label>
                            <div className="form-input form">
                              <input
                                id="credit-input"
                                type="text"
                                placeholder="0000 0000 0000 0000"
                                pattern="\d{16}"
                                required
                              />
                              <img
                                src="assets/images/payment/card.png"
                                alt="card"
                              />
                            </div>
                          </div>
                          <div className="payment-card-info">
                            <div className="single-form form-default mm-yy">
                              <label>有効期限</label>
                              <div className="expiration d-flex">
                                <div className="form-input form">
                                  <input type="text" placeholder="MM" pattern="\d{2}" required />
                                </div>
                                <div className="form-input form">
                                  <input type="text" placeholder="YYYY" pattern="\d{4}" required />
                                </div>
                              </div>
                            </div>
                            <div className="single-form form-default">
                              <label>
                                CVC/CVV <span><i className="mdi mdi-alert-circle"></i></span>
                              </label>
                              <div className="form-input form">
                                <input type="text" placeholder="***" pattern="\d{3}" required />
                              </div>
                            </div>
                          </div>
                          <div className="single-form form-default button">
                            <button className="btn">支払う</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="checkout-sidebar">
              <div className="checkout-sidebar-coupon">
                <p>クーポンを適用して割引を取得！</p>
                <form action="#">
                  <div className="single-form form-default">
                    <div className="form-input form">
                      <input type="text" placeholder="クーポンコード" />
                    </div>
                    <div className="button">
                      <button className="btn">適用</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="checkout-sidebar-price-table mt-30">
                <h5 className="title">価格表</h5>
                <div className="sub-total-price">
                  <div className="total-price">
                    <p className="value">小計:</p>
                    <p className="price">1円</p>
                  </div>
                  <div className="total-price shipping">
                    <p className="value">配送料:</p>
                    <p className="price">$1円</p>
                  </div>
                  <div className="total-price discount">
                    <p className="value">割引:</p>
                    <p className="price">10円</p>
                  </div>
                </div>
                <div className="total-payable">
                  <div className="payable-price">
                    <p className="value">合計:</p>
                    <p className="price">164円</p>
                  </div>
                </div>
                <div className="price-table-btn button">
                  <a href="javascript:void(0)" className="btn btn-alt">
                    チェックアウト
                  </a>
                </div>
              </div>
              <div className="checkout-sidebar-banner mt-30">
                <a href="product-grids.html">
                  <img
                    src="https://via.placeholder.com/400x330"
                    alt="#"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
