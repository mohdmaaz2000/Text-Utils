import React from 'react'


export default function About(props) {

let style = {
    color: props.mode==='light'? 'black' : 'white',
    backgroundColor : props.mode==='light' ? 'white' : '#03153cf0'
}
    return (
        <div className='container my-3'>
            <h2 className='my-3' style={style}>About Text Utils</h2>

            <div className="accordion" id="accordionExample"  >
                <div className="accordion-item" style={style}>
                    <h2 className="accordion-header " id="headingOne">
                        <button className="accordion-button" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong>Easy to Access</strong> 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={style}>
                            You can easily manipulate your text. Text Utils helps you to convert your text from upper case to lower case and lower case to upper case. You can remove extra spaces from your sentence.You can pronounce your text and many more
                        </div>
                    </div>
                </div>
                <div className="accordion-item " style={style}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Features</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={style}>
                            <ul>
                                <li>Convert your text from upper case to lower case</li>
                                <li>Convert your text from lower case to upper case</li>
                                <li>Remove Extra spaces from the sentence</li>
                                <li>You can pronounce your sentence</li>
                                <li>Copy the sentence to the Clipboard</li>
                                <li>Count number of words and characters</li>
                                <li>Gives average reading time of the given sentence</li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={style}>
                    <h2 className="accordion-header" id="headingThree" >
                        <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Free</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={style}>
                            Text Utils is free for everyone. You can visist Text Utils and manipulate with you text anywhere any time.
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
