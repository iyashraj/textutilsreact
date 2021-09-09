import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleCopy = ()=>{
        // console.log("Hey! i am copied text.");
        var text= document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Clipboard Copid!", "success");
        
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces are removed!", "success");
    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");

    }
    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("TextBox cleared!", "success");

    }

    const handleOnChange = (event) =>{
        // console.log("OnChange");
        setText(event.target.value);
    }


    const [text, setText] = useState("");   //Syntax of State
    // text = "New Text";           // Wrong way to change the state
    // setText("New Text Here");     //Correct way to change the state 
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                 <textarea className="form-control" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2"  onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-danger mx-2 my-2"  onClick={handleLowClick} >Convert to Lowercase</button>
            <button className="btn btn-success mx-2 my-2"  onClick={handleClearClick} >Clear Text</button>
            <button className="btn btn-warning mx-2 my-2"  onClick={handleCopy} >Copy Text</button>
            <button className="btn btn-info mx-2 my-2"  onClick={handleExtraSpaces} >Remove Extra Spaces</button>


        </div>
        <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>Your Test Summary</h1>
            <p>{text.length>0 ? text.trimEnd().split(/\s+/).length:0} words, {text.length} charaters.</p>
            <p>{0.008 * text.trimEnd().split(" ").length} minutes read.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
            {/* <p>{text.length>0 ? text.trimEnd().split(" ").length:0}</p> */}
        </div>
        </>
    )
}