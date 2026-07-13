import React, { useEffect, useMemo, useState } from "react";
import "./BookingCalendar.css";

const API_BASE = process.env.REACT_APP_BOOKING_API_URL;

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const WEEKDAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const toISODate = (date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

// "YYYY-MM-DD" is parsed as UTC midnight by `new Date(string)`, which shifts
// by a day once converted to local time in any timezone behind UTC. Since
// these are calendar dates with no real time component, parse the parts
// directly into a local Date instead of going through the UTC string parser.
const parseISODateLocal = (isoString) => {
  const [year, month, day] = isoString.split("-").map(Number);
  return new Date(year, month - 1, day);
};

const startOfDay = (date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

const buildMonthGrid = (year, month) => {
  const firstOfMonth = new Date(year, month, 1);
  const startOffset = firstOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let day = 1; day <= daysInMonth; day++) cells.push(new Date(year, month, day));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
};

const isWithinRange = (date, rangeStart, rangeEnd) => {
  // Half-open interval: booked check_in <= date < check_out
  return date >= rangeStart && date < rangeEnd;
};

const BookingCalendar = ({ checkIn, checkOut, onChange }) => {
  const today = useMemo(() => startOfDay(new Date()), []);
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [bookedRanges, setBookedRanges] = useState([]);
  const [status, setStatus] = useState(API_BASE ? "loading" : "unavailable");

  useEffect(() => {
    if (!API_BASE) return;
    let cancelled = false;

    fetch(`${API_BASE}/api/bookings`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load availability");
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setBookedRanges(
          data
            .filter((b) => b.status === "booked")
            .map((b) => ({
              start: startOfDay(parseISODateLocal(b.check_in)),
              end: startOfDay(parseISODateLocal(b.check_out)),
            }))
        );
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("unavailable");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const isBooked = (date) =>
    bookedRanges.some((r) => isWithinRange(date, r.start, r.end));

  const isPast = (date) => date < today;

  const handleDayClick = (date) => {
    if (isPast(date) || isBooked(date)) return;
    const iso = toISODate(date);

    if (!checkIn || (checkIn && checkOut)) {
      onChange(iso, "");
      return;
    }

    const checkInDate = startOfDay(parseISODateLocal(checkIn));
    if (date <= checkInDate) {
      onChange(iso, "");
      return;
    }

    // Reject a range that would straddle an already-booked date.
    const straddlesBooked = bookedRanges.some(
      (r) => r.start < date && r.end > checkInDate
    );
    if (straddlesBooked) {
      onChange(iso, "");
      return;
    }

    onChange(checkIn, iso);
  };

  const changeMonth = (delta) => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + delta, 1));
  };

  const cells = buildMonthGrid(viewDate.getFullYear(), viewDate.getMonth());
  const checkInDate = checkIn ? startOfDay(parseISODateLocal(checkIn)) : null;
  const checkOutDate = checkOut ? startOfDay(parseISODateLocal(checkOut)) : null;

  return (
    <div className="booking-calendar">
      <div className="booking-calendar-header">
        <button
          type="button"
          className="booking-calendar-nav"
          onClick={() => changeMonth(-1)}
          aria-label="Previous month"
        >
          ‹
        </button>
        <span className="booking-calendar-title">
          {MONTH_NAMES[viewDate.getMonth()]} {viewDate.getFullYear()}
        </span>
        <button
          type="button"
          className="booking-calendar-nav"
          onClick={() => changeMonth(1)}
          aria-label="Next month"
        >
          ›
        </button>
      </div>

      <div className="booking-calendar-weekdays">
        {WEEKDAY_LABELS.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>

      <div className="booking-calendar-grid">
        {cells.map((date, index) => {
          if (!date) {
            return <div key={index} className="booking-day empty" />;
          }
          const booked = isBooked(date);
          const past = isPast(date);
          const isCheckIn = checkInDate && date.getTime() === checkInDate.getTime();
          const isCheckOut = checkOutDate && date.getTime() === checkOutDate.getTime();
          const inRange =
            checkInDate && checkOutDate && date > checkInDate && date < checkOutDate;

          const classNames = ["booking-day"];
          if (booked) classNames.push("booked");
          if (past) classNames.push("past");
          if (isCheckIn || isCheckOut) classNames.push("selected");
          if (inRange) classNames.push("in-range");

          return (
            <button
              type="button"
              key={index}
              className={classNames.join(" ")}
              disabled={past || booked}
              onClick={() => handleDayClick(date)}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>

      <div className="booking-calendar-legend">
        <span><i className="legend-swatch selected"></i> Selected</span>
        <span><i className="legend-swatch booked"></i> Booked</span>
        {status === "unavailable" && (
          <span className="booking-calendar-note">
            Live availability isn't connected yet — all dates shown as open.
          </span>
        )}
      </div>
    </div>
  );
};

export default BookingCalendar;
