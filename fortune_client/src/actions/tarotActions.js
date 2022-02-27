const apiCardsUrl = "https://fortune-teller-react-app.herokuapp.com/api/v1/cards"

export function fetchCards() {
    return(dispatch) => {
        dispatch({ type: 'START_LOADING_CARDS' })
        fetch(apiCardsUrl)
        .then(res => res.json())
        .then(cards => dispatch({type:'LOAD_CARDS', cards}))
    }
}

export function showCards(cards) {
    return {
        type: 'SHOW_CARDS',
        payload: cards
    }
}