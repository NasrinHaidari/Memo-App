import createDataContext from "./createDataContext";


export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";


const initialState = [];

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];

    case DELETE_NOTE:
      return state.filter((note) => note.id !== action.payload);
      case SEARCH_NOTE:
        return [...state,action.payload];

    default:
      return state;
  }
}

const addnote = dispatch => async(notes) => {
  
    dispatch ({type: ADD_NOTE, payload: notes})
}

const deletenote = dispatch => async(id) => {
    dispatch({type: DELETE_NOTE, payload: id})
}

export const {Provider, Context} = createDataContext(
    noteReducer, {addnote, deletenote},
    []
)