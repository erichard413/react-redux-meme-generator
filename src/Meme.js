import React, {useState} from 'react';
import EditForm from './EditForm';
import {useSelector, useDispatch} from 'react-redux';

const Meme = ({top, bottom, img, id}) => {
    const [isEditHidden, setIsEditHidden] = useState(true);
    const dispatch = useDispatch();
    const memes = useSelector(store => store.memes);

    const toggleForm = () => {
        const toggle = !isEditHidden;
        setIsEditHidden(toggle);
    }

    const handleRemove = (e) => {
        e.preventDefault();
        const memesCopy = memes.filter(m=> m.id != id);
        dispatch({
            type: 'REMOVE',
            payload: {memes: memesCopy}
    })
    }

    return (
        <>
        <div className="Meme" onClick={toggleForm} style={{position: 'relative', backgroundImage: `url(${img})`, height: `400px`, width: `400px`, backgroundSize: 'cover', backgroundPosition: 'center center', textAlign: 'center'}}>
            <p style={{color: 'white', fontFamily: 'impact', WebkitTextStroke: '2px black', margin: '5px', paddingTop: '20px'}} className="Meme-toptext">{top}</p>
            <p style={{color: 'white', fontFamily: 'impact', WebkitTextStroke: '2px black', position: 'absolute', margin: '5px', bottom: '5%', textAlign: 'center', padding: '0px', width: '100%'}} className="Meme-bottomtext">{bottom}</p>
        </div>
        {isEditHidden &&  <EditForm top={top} bottom={bottom} img={img} id={id} remove={handleRemove} />}
        </>

    )
}

export default Meme;