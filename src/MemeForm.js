import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

const MemeForm = () => {
    const dispatch = useDispatch();
    const initialState = {
        toptext: "",
        bottomtext: "",
        imgSrc: ""
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
        dispatch({
            type: 'ADD',
            payload: formData
        })
        setFormData(initialState);
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
            <button type="submit">Make Meme</button>
        </form>
        </div>
    )
}

export default MemeForm;