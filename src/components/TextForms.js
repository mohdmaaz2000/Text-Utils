import React, { useState } from 'react'

export default function TextForms(props) {

    const [text, setText] = useState('');

    const changeVal = (event) => {
        setText(event.target.value)
    }

    const toUpper = () => {
        let myText = text;
        setText(myText.toLocaleUpperCase());
    }
    return (
        <div className='container my-3'>

            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" rows="6" value={text} onChange={changeVal} placeholder="Enter the text here"></textarea>
                <button className="btn btn-primary button" onClick={toUpper}>Convert to Uppercase</button>
            </div>
        </div>
    )
}
