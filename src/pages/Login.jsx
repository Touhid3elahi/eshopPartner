import React from "react";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Login = () => {
    return (
        <>
            <div className="account-login mt-2 mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                            <form className="card login-form" method="post">
                                <div className="card-body">
                                    <div className="title">
                                        <h3>今すぐログイン</h3>
                                        <p>ソーシャルアカウントまたはメールアドレスでログインしてください。</p>
                                    </div>
                                    <div className="form-group input-group">
                                        <label>メールアドレス</label>
                                        <input type="email" className="form-control" required />
                                    </div>
                                    <div className="form-group input-group">
                                        <label>パスワード</label>
                                        <input type="password" className="form-control" required />
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                    <div className="col-md-6 button d-flex justify-content-center">
                                        <button className="btn btn-primary" type="submit">ログイン</button>
                                    </div>
                                    </div>
                                    <p className="outer-link">
                                        アカウントをお持ちではありませんか？ <a href="/register">こちらで登録</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;
