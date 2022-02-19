const apiCardsUrl = "https://fortune-teller-react-app.herokuapp.com/api/v1/cards"

export function fetchCards() {
    return(dispatch) => {
        fetch(apiCardsUrl)
        .then(res => res.json())
        .then(res => dispatch({type:'LOAD_CARDS', cards: res}))
    }
}

export function showCards(cards) {
    return {
        type: 'SHOW_CARDS',
        payload: cards
    }
}