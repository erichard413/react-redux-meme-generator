import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

const EditForm = ({top, bottom, img, id, remove}) => {
    const memes = useSelector(store => store.memes)
    const dispatch = useDispatch();
    const initialState = {
        toptext: top,
        bottomtext: bottom,
        imgSrc: img
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const memesCopy = memes.filter(m=> m.id != id);
        dispatch({
            type: 'EDIT',
            payload: {memes: [...memesCopy, { toptext : formData.toptext, bottomtext: formData.bottomtext, imgSrc : formData.imgSrc }]}
        })
    }
    return (
        <div className="MemeForm">
            <form onSubmit={handleSubmit}>
                <input 
                name = "toptext"
                id="toptext"
                type="text" 
                placeholder="Top Text" 
                value={formData.toptext} 
                onChange={handleChange} 
            />
                <input 
                name = "bottomtext"
                id="bottomtext"
                type="text" 
                placeholder="Bottom Text" 
                value={formData.bottomtext} 
                onChange={handleChange} 
            />
                <input 
                name = "imgSrc"
                id="imgSrc"
                type="text" 
                placeholder="http://" 
                value={formData.imgSrc} 
                onChange={handleChange} 
            />
            <button onClick={handleSubmit} type="submit">Edit Meme</button>
            <button onClick={remove}>Remove</button>
        </form>
        </div>
    )
}

export default EditForm;