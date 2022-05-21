import React, { useState } from 'react'

export default function TextForms(props) {

    const [text, setText] = useState('');

    const changeVal = (event) => {
        setText(event.target.value)
    }

    const toUpper = () => {
        let myText = text;
        setText(myText.toUpperCase());
        props.showAlert('Converted to Upper Case', 'success');
    }
    const toLower = () => {
        let myText = text;
        setText(myText.toLowerCase());
        props.showAlert('Converted to Lower Case', 'success');

    }
    const clear = () => {
        setText('');
        props.showAlert('Cleared the text area', 'success');
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        if (text === '') {
            msg.text = "Nothing to read";
        }
        window.speechSynthesis.speak(msg);
        props.showAlert('Speaking', 'success');
    }

    const copyText = () => {  
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to clipboard', 'success');
    }
    const removeExtraSpace = () => {
        let myText = text.split(/[ ]+/);    // use of rejex to split the text where there is extra space
        setText(myText.join(" "));
        props.showAlert('Extra Spaces are removed', 'success');
    }

    return (
        <>
            <div className='container my-3'>

                <div className="mb-3">
                    <h1 style={props.style}>{props.heading}</h1>
                    <textarea className="form-control" id='textArea' rows="6" value={text} onChange={changeVal} placeholder="Enter the text here" style={props.style}></textarea>
                    <button disabled={text.length === 0} className="btn btn-primary button" onClick={toUpper}>Convert to Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary button" onClick={toLower}>Convert to Lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary button" onClick={clear}>Clear</button>
                    <button disabled={text.length === 0} className="btn btn-primary button" onClick={speak}>Speak</button>
                    <button disabled={text.length === 0} className="btn btn-primary button" onClick={copyText}>Copy Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary button" onClick={removeExtraSpace}>Remove Extra Space</button>
                </div>

            </div>
            <div className="container">
                <hr style={props.style} />
                <h2 style={props.style}>Summary</h2>
                <p style={props.style}><b>{text.split(/\s+/).filter((element)=>{return element.length!==0;}).length}</b> words and <b>{text.length}</b> characters</p>
                <p style={props.style}><b>{text.split(/\s+/).filter((element)=>{return element.length!==0;}).length * 0.008}</b> minutes to read</p>
                <hr style={props.style} />
                <h2 style={props.style}>Preview</h2>
                <p style={props.style}>{text.length===0?'Nothing to preview' : text}</p>
                <hr />
            </div>
        </>
    )
}