import { DELETEBOOKING, NEWBOOKING } from "./bookingActionTypes";

const initialState = [];

const bookingActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWBOOKING:
      return [
        ...state,
        {
          id: action.payload.id,
          destinationFrom: action.payload.destinationFrom,
          destinationTo: action.payload.destinationTo,
          journeyDate: action.payload.journeyDate,
          guests: action.payload.guests,
          classType: action.payload.classType,
        },
      ];

    case DELETEBOOKING:
      return state.filter((bookData) => bookData.id !== action.payload);

    default:
      return state;
  }
};

export default bookingActionReducer;
