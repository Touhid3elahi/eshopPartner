import React from "react";

const BusinessDayCalendar = () => {
  const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
  const placeholderDates = Array.from({ length: 31 }, (_, i) => i + 1); // Placeholder for dates

  return (
    <div className="container my-5">
      {/* Calendar Section */}
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white text-center">
          <h5 className="mb-0">営業日カレンダー</h5>
        </div>
        <div className="card-body">
          <div className="row">
            {/* Calendar Placeholder */}
            <div className="col-md-12">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7, 1fr)",
                  gap: "2px",
                  padding: "5px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                {/* Days of the Week */}
                {daysOfWeek.map((day, index) => (
                  <div
                    key={index}
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      padding: "2px",
                    }}
                  >
                    {day}
                  </div>
                ))}

                {/* Placeholder Dates */}
                {placeholderDates.map((date, index) => (
                  <div
                    key={index}
                    style={{
                      textAlign: "center",
                      padding: "2px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      backgroundColor: index % 7 === 0 || index % 7 === 6 ? "#f8d7da" : "#fff",
                      color: index % 7 === 0 || index % 7 === 6 ? "#721c24" : "#000",
                    }}
                  >
                    {date}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Information Section */}
      <div className="card mt-4 shadow-sm">
        <div className="card-body">
          <div className="text-left">
            <h6 className="text-danger">[営業日]</h6>
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
