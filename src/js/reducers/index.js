import { ADD_ARTICLE, ADD_ITEM } from "../constants/action-types";
const initialState = {
    articles: [],
    addItem: ['List 1', 'List 1', 'List 1', 'List 1', 'List 1', 'List 1', 'List 1', 'List 1',]
};
function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }

    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {
            addItem: state.addItem.concat(action.payload)
        });
    }
    return state;
}
export default rootReducer;
