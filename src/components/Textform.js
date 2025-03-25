import React, {useState} from 'react';


export default function Textform(props) {

    const [text, setText]= useState("");

    const handleOnChange=(event)=>{
        setText(event.target.value);
    };
    
    const handleUpClick=()=>{
        let newText= text.toUpperCase();
        setText(newText);
        if(text===""){
            props.showAlert(" No text is Entered!","warning");
        }else{
            props.showAlert(" Text is converted to Uppercase!","success");
        }
    };

    const handleClearClick=()=>{
        let newText= '';
        setText(newText);
        if(text===""){
            props.showAlert(" No text is Entered!","warning");
        }else{
            props.showAlert("Text is Cleared!","success");
        }    
    };

    const handleCopy=()=>{
        let newText= document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        if(text===""){
            props.showAlert(" No text is Entered!","warning");
        }else{
            props.showAlert("Text is Copied!","success");
        }    
    };

    const handleLowClick=()=>{
        let newText= text.toLowerCase();
        setText(newText);
        if(text===""){
            props.showAlert(" No text is Entered!","warning");
        }else{
            props.showAlert("Text is converted to Lowercase!","success");
        }    
    };

    const handleExtraSpace=()=>{
        let newText= text.split(/[" "]+/);
        setText(newText.join(" "));
        if(text===""){
            props.showAlert(" No text is Entered!","warning");
        }else{
            props.showAlert("Extra spaces are removed from text!","success");
        }    
    };

    const handleFirstChar=()=>{
        let newText=text.split(" ");
        let newText2=newText.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        newText=newText2.join(" ");
        setText(newText);
        if(text===""){
            props.showAlert(" No text is Entered!","warning");
        }else{
            props.showAlert("First character of each word is capitalized!","success");
        }    
    };

  return (
    <> 
    <div className="container" style={{color: props.mode==="light"?"black":"white"}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="light"?"white":"grey",color: props.mode==="light"?"black":"white"}} id="myBox" rows="8" placeholder="Enter text here"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleFirstChar}>Convert First Char to Capital</button>
    </div>
    <div className="container my-3" style={{color: props.mode==="light"?"black":"white"}}>
        <h2>Text Summary</h2>
        <p>{(text.split(/[" "]+/).length)-1} words and {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text in above textbox to preview it."}</p>
    </div>
    </>
  )
}

