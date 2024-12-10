import React from "react";

const BusinessDayCalendar = () => {
  return (
    <div className="container my-5">
      {/* カレンダーセクション */}
      <div className="card shadow-sm">
        <div className="card-header bg-dark text-white text-center">
          <h3 className="mb-0">営業日カレンダー</h3>
        </div>
        <div className="card-body">
          <div className="row">
            {/* カレンダー (プレースホルダー) */}
            <div className="col-md-12 text-center">
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  backgroundColor: "#f9f9f9",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                  color: "#888",
                }}
              >
                カレンダー表示エリア
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 営業情報セクション */}
      <div className="card mt-4 shadow-sm">
        <div className="card-body">
          <div className="text-left">
            <p className="d-none">
              <span className="text-secondary">■</span> 本日はオペレーターが不在です
            </p>
            <p className="text-danger">本日はオペレーターの不在日です。</p>
            <p><strong>営業日:</strong> 月曜日から金曜日</p>
            <p><strong>定休日:</strong> 土曜日、日曜日、祝日</p>
            <p><strong>配送業務の休業日:</strong> 日曜日、祝日</p>
          </div>
          <hr />
          <div className="text-center">
            <p>
              <strong>注文受付:</strong> <br />
              <span className="text-warning bold">年中無休、24時間対応</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDayCalendar;
