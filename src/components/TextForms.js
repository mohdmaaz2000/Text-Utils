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
    const clear = () => {
        setText('');
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        if (text === '') {
            msg.text = "Nothing to read";
        }
        window.speechSynthesis.speak(msg);
    }

    const copyText = () => {
        var myText = document.getElementById('textArea');
        myText.select();
        navigator.clipboard.writeText(myText.value);
    }
    const removeExtraSpace = () => {
        let myText = text.split(/[ ]+/);    // use of rejex to split the text where there is extra space
        setText(myText.join(" ")); 
    }

    return (
        <>
            <div className='container my-3'>

                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id='textArea' rows="6" value={text} onChange={changeVal} placeholder="Enter the text here"></textarea>
                    <button className="btn btn-primary button" onClick={toUpper}>Convert to Uppercase</button>
                    <button className="btn btn-primary button" onClick={toLower}>Convert to Lowercase</button>
                    <button className="btn btn-primary button" onClick={clear}>Clear</button>
                    <button className="btn btn-primary button" onClick={speak}>Speak</button>
                    <button className="btn btn-primary button" onClick={copyText}>Copy Text</button>
                    <button className="btn btn-primary button" onClick={removeExtraSpace}>Remove Extra Space</button>
                </div>

            </div>
            <div className="container">
                <hr />
                <h2>Summary</h2>
                <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
                <p><b>{text.split(" ").length * 0.008}</b> minutes to read</p>
                <hr />
                <h2>Preview</h2>
                <p>{text}</p>
                <hr />
            </div>
        </>
    )
}