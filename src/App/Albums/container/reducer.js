import { types } from "./actions";
import { merge } from "ramda";

const initialState = {
  loading: false,
  data: [],
  selected: null,
  error: null
};

export default (state = initialState, action) => {
  const mergeState = merge(state);

  switch (action.type) {
    case types.FETCH_ALBUMS_REQUEST:
      return mergeState({ loading: true });
    case types.FETCH_ALBUMS_SUCCESS:
      return mergeState({
        loading: false,
        data: action.albums
      });
    case types.FETCH_ALBUMS_FAILURE:
      return mergeState({ loading: false, error: action.message });
    case types.SELECT_ALBUM:
      return mergeState({ selected: action.album });
    default:
      return state;
  }
};
