const initialTarot = {
    title: "",
    upright_meaning: "",
    reversed_meaning: "",
    imgUrl: "",
    imgUrl_reversed: "",
    reading: "",
    reversed_reading: ""
}

const initalCookie = {
    fortune: "",
    meaning: ""
}

const initalState = {
    fortune: [],
    setTarot: initialTarot,
    setCookie: initalCookie
}

export function rootReducer(state = initalState, action) {
    switch(action.type) {
        case "SHOW_CARDS":
            return {...state, cards: action.payload}
        case "SHOW_COOKIES":
            return {...state, cookies: action.payload}
        default:
            return {...state}
    }
}