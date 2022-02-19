const apiCookiesUrl = "https://fortune-teller-react-app.herokuapp.com/api/v1/cookies"

export function fetchCookies() {
    return(dispatch) => {
        fetch(apiCookiesUrl)
        .then(res => res.json())
        .then(res => dispatch({type:'LOAD_COOKIES', cards: res}))
    }
}

export function showCookies(cookies) {
    return {
        type: 'SHOW_COOKIES',
        payload: cookies
    }
}