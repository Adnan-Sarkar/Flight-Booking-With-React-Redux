import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newBooking } from "./../redux/booking/bookingActions";

const InputForm = () => {
  const totalBookings = useSelector((state) => state.length);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: null,
    destinationFrom: null,
    destinationTo: null,
    journeyDate: null,
    guests: null,
    classType: null,
  });
  const [isDisable, setIsDisable] = useState(false);

  useEffect(() => {
    if (totalBookings >= 3) {
      setIsDisable(true);
    }
  }, [totalBookings]);

  const handleFormData = (e) => {
    e.preventDefault();

    dispatch(newBooking(formData));
  };

  const handleDestinationFormInput = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        destinationFrom: e.target.value,
        id: totalBookings + 1,
      };
    });
  };

  const handleDestinationToInput = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        destinationTo: e.target.value,
      };
    });
  };

  const handleJourneyDateInput = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        journeyDate: e.target.value,
      };
    });
  };

  const handleGuestsInput = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        guests: e.target.value,
      };
    });
  };

  const handleClassTypeInput = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        classType: e.target.value,
      };
    });
  };

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form onSubmit={handleFormData} className="first-hero lws-inputform">
          {/* <!-- From --> */}
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="from"
                id="lws-from"
                required
                onChange={handleDestinationFormInput}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- To --> */}
          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="to"
                id="lws-to"
                required
                onChange={handleDestinationToInput}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- Date --> */}
          <div className="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
              required
              onChange={handleJourneyDateInput}
            />
          </div>

          {/* <!-- Guests --> */}
          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src="./img/icons/Vector (1).svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="guests"
                id="lws-guests"
                required
                onChange={handleGuestsInput}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          {/* <!-- className --> */}
          <div className="des-from !border-r-0">
            <p>className</p>
            <div className="flex flex-row">
              <img src="./img/icons/Vector (3).svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="ticketclassName"
                id="lws-ticketclassName"
                required
                onChange={handleClassTypeInput}
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          <button
            className="addCity"
            type="submit"
            id="lws-addCity"
            disabled={isDisable}
          >
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
