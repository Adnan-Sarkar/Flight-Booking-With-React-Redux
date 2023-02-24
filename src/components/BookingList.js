import React from "react";
import BookingInfo from "./BookingInfo";
import { useSelector } from "react-redux";

const BookingList = () => {
  const bookings = useSelector((state) => state);

  if (bookings.length === 0) return;

  return (
    <div className="table-container">
      <table className="booking-table">
        <thead className="bg-gray-100/50">
          <tr className="text-black text-left">
            <th>Destination From</th>
            <th>Destination To</th>
            <th className="text-center">Journey Date</th>
            <th className="text-center">Guests</th>
            <th className="text-center">className</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
          {bookings?.map((singleBookingInfo) => (
            <BookingInfo
              key={singleBookingInfo.id}
              details={singleBookingInfo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
