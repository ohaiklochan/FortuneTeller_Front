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
    fortune: "",
    setTarot: initialTarot,
    setCookie: initalCookie
}

export function rootReducer(state = initalState, action) {
    switch(action.type) {
        case "START_LOADING_COOKIES":
        case "START_LOADING_CARDS":
        case "LOAD_CARDS":
            return {...state, cards: action.payload}
        case "LOAD_COOKIES":
            return {...state, cookies: action.payload}
        // case "SHOW_RANDOM_FORTUNE":
        //     return {...state, fortune: action.payload.fortune}
        // case "SHOW_RANDOM_CARD":
        //     return {...state, card: action.payload.card}
        default:
            return {...state}
    }
}

export default rootReducer