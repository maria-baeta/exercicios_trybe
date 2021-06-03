export const REQUEST_IMAGE = 'REQUEST_IMAGE';
export const REQUEST_IMAGE_SUCESS = 'REQUEST_IMAGE_SUCESS';
export const REQUEST_IMAGE_ERROR = 'REQUEST_IMAGE_ERROR';

const INITIAL_STATE = {
  isLoading: false,
  imagePath: '',
  error: '',
}


function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case REQUEST_IMAGE:
        return {
          ...state,
          isLoading: true,
        };
      case REQUEST_IMAGE_SUCESS:
        return {
          ...state,
          isLoading: false,
          imagePath: action.payload
        };
      case REQUEST_IMAGE_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }

export default rootReducer;