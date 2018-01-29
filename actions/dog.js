import axios from 'axios';

export const GOT_DOGS_LIST = 'GOT_DOGS_LIST';
export const GOT_DOG_IMAGES = 'GOT_DOG_IMAGES';
export const DOG_LIST_FETCH_ERROR = 'DOG_LIST_FETCH_ERROR';

export const getDogList = () => async (dispatch) => {
  let dogList = [];

  try {
    const res = await axios.get('https://dog.ceo/api/breeds/list/all', {
      headers: { 'Content-Type': 'application/json' },
    });

    dogList = Object.keys(res.data.message);
  } catch (e) {
    dispatch({
      type: DOG_LIST_FETCH_ERROR,
    });
  }

  dispatch({
    type: GOT_DOGS_LIST,
    payload: dogList,
  });
};

export const getBreenImages = breedName => async (dispatch) => {
  let dogImageList = [];
  try {
    const res = await axios.get(`https://dog.ceo/api/breed/${breedName}/images`, {
      headers: { 'Content-Type': 'application/json' },
    });

    dogImageList = res.data.message;
  } catch (e) {
    dispatch({
      type: DOG_LIST_FETCH_ERROR,
    });
  }

  dispatch({
    type: GOT_DOG_IMAGES,
    payload: dogImageList,
  });
};
