import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpclick =()=>{
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is converted to Upper case ","success");
  }
  const handleLwclick =()=>{
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text is converted to Lower case ","success");

  }
  const handleClclick =()=>{
    setText("");

  }
  const handleOnchange =(event)=>{
    setText(event.target.value); //new value set i.e value state changed
  }
  const handleCpyclick =(event)=>{
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied Successfully","success");

  }
  const handleRemoveclick =(event)=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space removed","success");

  }
  const [text,setText]= useState("");
  //setText("Enter the text for change into uppper case");
  return (
    <>
    <div className='container' style={{color:props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="mybox" rows="10" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'black'}}></textarea>
          <button className='btn btn-primary mt-2 mx-2' onClick={handleUpclick}>Convert to Upper case</button>
          <button className='btn btn-primary mt-2 mx-2' onClick={handleLwclick}>Convert to Lower case</button>
          <button className='btn btn-primary mt-2 mx-2' onClick={handleCpyclick}>Copy text</button>
          <button className='btn btn-primary mt-2 mx-2' onClick={handleRemoveclick}>Remove Extra Spacce</button>
          <button className='btn btn-danger mt-2 mx-2' onClick={handleClclick}>Clear Text</button>
        </div>
    </div>
    <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
      <h1 style={{color:props.mode === 'dark'?'white':'black'}}>Your Text Summery</h1>
      <p>{text.split(" ").length} words and {text.length} total characters</p>
      <p>{0.008 * text.split("").length} Minutes to read</p>
      <h1>Preview</h1>
      <p>{text.length>0?text:"Enter something to preview it here!"}</p>
    </div>
    </>
  )
}
