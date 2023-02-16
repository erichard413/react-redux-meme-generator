import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Meme from './Meme';

const Memes = () => {
    const memes = useSelector(store => store.memes)
    return (
        <div className="Memes">
            {memes && memes.map(m => <Meme key={m.id} id={m.id} top={m.toptext} bottom={m.bottomtext} img={m.imgSrc} />)}
        </div>
    )
}

export default Memes;