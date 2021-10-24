import { ADD_PLACE } from "./places-actions";
import Place from "../models/place";

const initialState = {
  place: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
        const newPlace = newPlace(new Date().toString(), action.placeDate.title);
        return {
            places: state.place.concat(newPlace)
        };
    default:
      return state;
  }
};
