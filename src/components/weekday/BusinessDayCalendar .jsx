import React from "react";

const BusinessDayCalendar = () => {
  return (
    <div className="box2 box">
      <h3 className="text-small border border-dark text-center p-2">
      営業日カレンダー
      </h3>

      <div className="calendar-cont">
        {/* Embedded Calendars */}
        <iframe
          src="https://www.denzai-net.jp/calendar/index.html"
          title="Business Calendar 1"
          width="100%"
          height="400px"
          frameBorder="0"
          style={{ border: "0" }}
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.denzai-net.jp/calendar/index-n.html"
          title="Business Calendar 2"
          width="100%"
          height="400px"
          frameBorder="0"
          style={{ border: "0" }}
          allowFullScreen
        ></iframe>
      </div>

      <div className="business-info text-small text-left mt-3">
        <p className="d-none">
          <span className="text-secondary">■</span> Operator is absent today
        </p>
        <p className="holiday-string">This is an operator-free day.</p>
        <p>Business days: Monday to Friday</p>
        <p>Closed: Saturdays, Sundays, and holidays</p>
        <p>Delivery business holidays: Sundays and holidays</p>

        <hr />

        <p className="text-center">
          We accept <strong>orders</strong> <br />
          <span className="text-warning bold">24 hours a day, 365 days a year.</span>
        </p>

        <hr />
      </div>
    </div>
  );
};

export default BusinessDayCalendar;
