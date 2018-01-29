import { GOT_DOGS_LIST, GOT_DOG_IMAGES } from '../actions/dog';

const defaultState = {
  dogList: [],
  dogImageList: [],
};

export default function todoDog(state = defaultState, action) {
  switch (action.type) {
    case GOT_DOGS_LIST: {
      return { ...state, dogList: action.payload };
    }
    case GOT_DOG_IMAGES: {
      return { ...state, dogImageList: action.payload };
    }
    default: {
      return { ...state };
    }
  }
}
