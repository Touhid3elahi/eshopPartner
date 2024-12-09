import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import locationData from '../data/prefecture.json'; // Import JSON file

const Registration = () => {
  const [selectedPrefecture, setSelectedPrefecture] = useState('');
  const [availableCities, setAvailableCities] = useState([]);

  // Handle prefecture selection and filter cities
  useEffect(() => {
    if (selectedPrefecture) {
      const filteredCities = locationData.cities.filter(
        (city) => city.ken === selectedPrefecture
      );
      setAvailableCities(filteredCities);
    } else {
      setAvailableCities([]);
    }
  }, [selectedPrefecture]);

  return (
    <>
      <div className="account-login m-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
              <div className="register-form">
                <div className="title">
                  <h3>アカウントがありませんか？登録</h3>
                  <p>登録は1分未満で完了しますが、注文を完全に管理できるようになります。</p>
                </div>
                <form className="row" method="post">
                  {/* First Name */}
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="reg-fn">名前 (First Name)</label>
                      <input
                        className="form-control"
                        type="text"
                        id="reg-fn"
                        placeholder="例: 太郎"
                        required
                      />
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="reg-ln">苗字 (Last Name)</label>
                      <input
                        className="form-control"
                        type="text"
                        id="reg-ln"
                        placeholder="例: 山田"
                        required
                      />
                    </div>
                  </div>

                  {/* Gender */}
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="reg-gender">性別 (Gender)</label>
                      <select className="form-control" id="reg-gender" required>
                        <option value="" disabled>
                          選択してください
                        </option>
                        <option value="male">男性 (Male)</option>
                        <option value="female">女性 (Female)</option>
                      </select>
                    </div>
                  </div>

                  {/* Age */}
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="reg-age">年齢 (Age)</label>
                      <input
                        className="form-control"
                        type="number"
                        id="reg-age"
                        placeholder="例: 30"
                        min="1"
                        required
                      />
                    </div>
                  </div>

                  {/* Prefecture */}
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="reg-prefecture">都道府県 (Prefecture)</label>
                      <select
                        className="form-control"
                        id="reg-prefecture"
                        value={selectedPrefecture}
                        onChange={(e) => setSelectedPrefecture(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          選択してください
                        </option>
                        {locationData.provinces.map((pref, index) => (
                          <option key={index} value={pref.ken}>
                            {pref.ken}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* City */}
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="reg-city">市区町村 (City)</label>
                      <select className="form-control" id="reg-city" required>
                        <option value="" disabled>
                          選択してください
                        </option>
                        {availableCities.map((city, index) => (
                          <option key={index} value={city.shi}>
                            {city.shi}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Password */}
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="reg-pass">パスワード (Password)</label>
                      <input
                        className="form-control"
                        type="password"
                        id="reg-pass"
                        required
                      />
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="reg-pass-confirm">パスワードの確認 (Confirm Password)</label>
                      <input
                        className="form-control"
                        type="password"
                        id="reg-pass-confirm"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="button">
                    <button className="btn" type="submit">
                      登録する (Register)
                    </button>
                  </div>
                  <p className="outer-link">
                    すでにアカウントをお持ちですか？ <a href="login.html">今すぐログイン</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
