import * as types from  '../constants/ActionTypes';

export function onAddUserInfo(obj) {
    return {
        type: types.ADD_USER,
        payload: {
            id: Date.now().toString(),
            firstName: obj["firstName"],
            lastName: obj["lastName"],
            email: obj["email"]
        }
    }
}

export function onAddPAssword(pass) {
    return {
        type: types.ADD_PASSWORD,
        password: pass.password
    }
}
