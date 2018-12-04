
// Set initial state
const initialState = {
  newsData: {}
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case 'fetchNews': {
      if (action.data) {
        const input = action.data;
        return {
          ...state,
          newsData: input
        };
      }
      return {};
    }

    default:
      return state;
  }
}
