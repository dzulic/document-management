import {CREATE_USER} from "../utils/actionTypes";

export const createUser = (property) => ({
    type: CREATE_USER,
    property
});
