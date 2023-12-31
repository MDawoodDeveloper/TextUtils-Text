import React, {useState} from 'react'

export default function TextForm(props) {
  const handleupclick = () => {
    let newText = text.toUpperCase()
    setText(newText);
    props.showAlert("Converted into Uppercase", "success")
  }
  const handleloclick = () => {
    let newText = text.toLowerCase()
    setText(newText);
    props.showAlert("Converted into Lowercase", "success")
  }
  const handleClearclick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Chat cleared", "success");
  }
  const handleonchange = (event) => {
    setText(event.target.value);
  }

  const handleCopy= () =>{
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");  
  }


  const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'? 'white' : 'black'}}>
    <h1>{props.heading} </h1>
<div className="mb-3">
  
  <textarea className="form-control" id="myBox" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'? 'grey' : 'white', color: props.mode==='dark'? 'white' : 'black' }} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleupclick}>
    Convert to Uppercase
</button>
<button className="btn btn-primary mx-1" onClick={handleloclick}>
    Convert to lowercase
</button>
<button className="btn btn-primary mx-1" onClick={handleClearclick}>
    Clear text
</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>
    Copy text
</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
    Remove Extra Spaces
</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'? 'white' : 'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0? text : "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
