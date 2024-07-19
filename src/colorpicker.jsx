import React, {useState} from 'react';

function ColorPicker(){

    function handleColorChange(event){
        SetColor(event.target.value);
    }

    const [color, SetColor] = useState("#ffffff");
    return (<div className="color-picker-container"> 
             <h1>Color Picker</h1>
             <div className="colorDisplay" style={{backgroundColor:color}}> 
                <p>Selected Color : {color}</p>

             </div>
             <label >Select a color</label>
             <input type="color" value={color} onChange={handleColorChange} />
    
    
    </div>);

}
export default ColorPicker;