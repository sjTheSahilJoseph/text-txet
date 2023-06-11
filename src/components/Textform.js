import React, { useState } from 'react'

function Textform() {

    const [text, setText] = useState("");

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleUpperClick = () => {
        setText(text.toUpperCase());
    }

    const handleLowerClick = () => {
        setText(text.toLowerCase());
    }

    const handleCapatalizeClick = () => {
        const str = text.toLowerCase();
        const arr = str.split(" ");

        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }

        const str2 = arr.join(" ");
        setText(str2);
    }

    const handleLineBreaksClick = () => {
        let tempText = text;
        var tempTextLineBreak = tempText.replace(/\n|\r/g, " ");
        if (!/\s/.test(tempTextLineBreak)) {
          tempTextLineBreak += " ";
        }
        setText(tempTextLineBreak);
      };
      

    const handleClearClick = () => {
        setText("");
    }

    return (
        <div className="container">
            <div className="my-3">
                <h2>Enter the Text : </h2>
                <textarea onChange={handleOnChange} value={text} className="form-control" id="textForm" rows="8" placeholder='Write Here ... '></textarea>
                <button onClick={handleUpperClick} type="button" className="btn btn-primary my-3 mx-1">UPPERCASE</button>
                <button onClick={handleLowerClick} type="button" className="btn btn-primary my-3 mx-1">lowercase</button>
                <button onClick={handleCapatalizeClick} type="button" className="btn btn-primary my-3 mx-1">Capatalize</button>
                <button onClick={handleLineBreaksClick} type="button" className="btn btn-primary my-3 mx-1">Remove Line Breaks</button>
                <button onClick={handleClearClick} type="button" className="btn btn-danger my-3 mx-1">Clear</button>
            </div>
        </div>
    )
}
export default Textform