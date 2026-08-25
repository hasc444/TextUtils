import React,{useState} from 'react'


export default function TextForm(props) {

    const handleChange=(event)=>{
        setText(event.target.value)
    }

    const handleClick=()=>{
        // console.log("you click button"+ text)
        let aText = text.toUpperCase()
        setText(aText)
        props.showAlert("Converted to uppercase!", "success")
    }
    
    const handlelowClick=()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }
    
    const cleartext=()=>{
        let newText = ''
        setText(newText)
        props.showAlert("Clear text!", "success")
    }
    
    const downloadText = () => {
        const element = document.createElement("a");
        
        const file = new Blob([text], {
            type: "text/plain",
        });
        
        element.href = URL.createObjectURL(file);
        element.download = "mytext.txt";
        
        document.body.appendChild(element);
        element.click();
        
        document.body.removeChild(element);
        URL.revokeObjectURL(element.href);
        
        props.showAlert("Downloaded as txt file!", "success")
    };
    
    const hanldeSpaces=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces!", "success")
    }


    const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>

    <div className="mb-3">        
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#1f253f':'white',
            color: props.mode==='dark'?'white':'black'
        }} onChange={handleChange} id="myBox" rows="8"></textarea>
    </div>

    <button className="btn btn-info" onClick={handleClick}>Convert to Uppercase</button>
    <button className="btn btn-info mx-2" onClick={handlelowClick}>Convert to Lowercase</button>
    <button className="btn btn-info mx-2" onClick={cleartext}>Clear Text</button>
    <button className="btn btn-info mx-2" onClick={downloadText}>download</button>
    <button className="btn btn-info mx-2" onClick={hanldeSpaces}>remove extra-spaces</button>

    </div>

    <div className={`conatiner my-3 text-${props.mode==='dark'?'light':'dark'}`}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and total characters are {text.length}</p>
        <p>{0.008* text.split(" ").length} minutes take to read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Enter something in text-box to preview it here"}</p>
    </div>
    </>
  )
}
