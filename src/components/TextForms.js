import React, { useState } from 'react'

export default function TextForms(props) {

    const [text, setText] = useState('');

    const changeVal = (event) => {
        setText(event.target.value)
    }

    const toUpper = () => {
        let myText = text;
        setText(myText.toUpperCase());
    }
    const toLower = () => {
        let myText = text;
        setText(myText.toLowerCase());
    }

    return (
        <>
            <div className='container my-3'>

                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" rows="6" value={text} onChange={changeVal} placeholder="Enter the text here"></textarea>
                    <button className="btn btn-primary button" onClick={toUpper}>Convert to Uppercase</button>
                    <button className="btn btn-primary button" onClick={toLower}>Convert to Lowercase</button>
                </div>
            </div>
            <div className="container">
                <hr />
                <h2>Preview</h2>
                <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
                <p><b>{text.split(" ").length * 0.008}</b> minutes to read</p>
                <hr />
                <h2>Summary</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
