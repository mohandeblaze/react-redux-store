import { ADD_ARTICLE, ADD_ITEM } from "../constants/action-types";
export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
}

export function addListItem(payload) {
    return { type: ADD_ITEM, payload };
}
