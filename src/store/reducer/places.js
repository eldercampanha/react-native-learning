import { 
    ADD_PLACE, 
    DELETE_PLACE
} from '../actions/actionTypes';

const initialState = {
    places: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                        key: Math.random().toString(),
                        name: action.placeName,
                        image: {
                            uri: "https://helpx.adobe.com/in/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image.img.jpg/visual-reverse-image-search-v2_1000x560.jpg"
                        }
                    })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter((place) => {
                    return place.key !== action.placeKey
                }),
            };
        default: return  state 
    }
};

export default reducer;