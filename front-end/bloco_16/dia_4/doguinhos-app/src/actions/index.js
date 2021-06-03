import { REQUEST_IMAGE, REQUEST_IMAGE_ERROR, REQUEST_IMAGE_SUCESS } from "../reducers";


function getImage() {
    return { type: REQUEST_IMAGE }
  }
  
  function getImageSucess(payload) {
    return {
      type: REQUEST_IMAGE_SUCESS,
      payload: payload.message
    }
  }
  
  function getImageError(payload) {
    return {
      type: REQUEST_IMAGE_ERROR,
      payload: payload,
    }
  }
  
  export function fetchDog() {
    return (dispatch) => {
      dispatch(getImage());
  
      return fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) =>
          response.json()
            .then(
              (resolve) => dispatch(getImageSucess(resolve)),
              (error) => dispatch(getImageError(error))
            )
        )
    }
  }
  