const apiCookiesUrl = "https://fortune-teller-react-app.herokuapp.com/api/v1/cookies"

export function fetchCookies() {
    return(dispatch) => {
        dispatch({ type: 'START_LOADING_COOKIES' })
        fetch(apiCookiesUrl)
        .then(res => res.json())
        .then(cookies => dispatch({type:'LOAD_COOKIES', cookies}))
    }
}

export function showCookies(cookies) {
    return {
        type: 'SHOW_COOKIES',
        payload: cookies
    }
}

// export const fetchCookies = () => {
//     return dispatch => {
//         dispatch({ type: "LOADING_COOKIES" });
//         fetch(apiCookiesUrl)
//         .then((resp) => {
//             try { return resp.json(); }
//             catch { console.error(`bad response: error`)};
//         })
//         .then((randomCookie) => {
//             dispatch({ type: "SHOW_COOKIE", cookie: randomCookie });
//             fetch(`apiCookiesUrl/${cookie.id}`)
//             .then((resp) => {
        
//                 try { return resp.json(); }
//                 catch { console.error(`bad response: error`)};
//             })
//             .then((fortune) => {
//                 fortune = fortune[0];
//                 let fortunes =  fortune.total ? `${Math.floor(Math.random() * ${cookie.id} + 1)}` : "No Data" 
//                 dispatch({ type: "SHOW_FORTUNE", fortunes: fortunes });
//              })
//         })
//     };
// };