import { ADD_CHAT } from '../constants/action-types';

const initialState = {
    chats: []
};

function rootReducer(state = initialState, action){
    if (action.type === ADD_CHAT){
        return Object.assign({}, state, {
            chats: state.chats.concat(action.payload)
        })
    }
    return state;
};

export default rootReducer;