import uuid from 'react-uuid';

let INITIAL_STATE;

localStorage.hasOwnProperty('memes') ? INITIAL_STATE = JSON.parse(localStorage.getItem('memes')) : INITIAL_STATE = {memes: []};

function rootReducer(state=INITIAL_STATE, action) {
    let payload = action.payload;
    switch (action.type) {
        case 'ADD':
            const {toptext, bottomtext, imgSrc} = payload;
            let memes = {memes: [...state.memes, {id: uuid(), toptext, bottomtext, imgSrc}]}
            localStorage.setItem('memes', JSON.stringify(memes))
            return memes;
        case 'REMOVE':
            localStorage.setItem('memes', JSON.stringify({payload}))
            return payload;
        case 'EDIT':
            localStorage.setItem('memes', JSON.stringify(payload));
            return payload;
        default:
            return state;
    }
}

export default rootReducer;