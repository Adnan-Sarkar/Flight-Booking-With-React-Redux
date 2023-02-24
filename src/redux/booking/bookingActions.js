import { DELETEBOOKING, NEWBOOKING } from "./bookingActionTypes";

export const newBooking = ({
  id,
  destinationFrom,
  destinationTo,
  journeyDate,
  guests,
  classType,
}) => {
  return {
    type: NEWBOOKING,
    payload: {
      id,
      destinationFrom,
      destinationTo,
      journeyDate,
      guests,
      classType,
    },
  };
};

export const deleteBooking = (id) => {
  return {
    type: DELETEBOOKING,
    payload: id,
  };
};
