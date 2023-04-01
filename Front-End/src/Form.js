import React from "react";
import "./App.css";

function RadioButtons(props) {
    let output = [];
    for (let item in props.items) {
        output.push(
            <p key={item}>
                <input type="radio" id={item} name={props.name} value={item} />
                <label htmlFor={item}>{props.items[item]}</label>
            </p>
        );
    }
    return output;
}
class NumberInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: props.id, label: props.label, value: 0 };
        this.setValue = this.setValue.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.increaseValue = this.increaseValue.bind(this);
        this.decreaseValue = this.decreaseValue.bind(this);
    }
    setValue(value) {
        this.setState({ value: Math.abs(parseInt(value)) });
    }
    handleChange(event) {
        this.setValue(event.target.value);
    }
    increaseValue() {
        this.setState({ value: this.state.value + 1 });
    }
    decreaseValue() {
        if (this.state.value > 0)
            this.setState({ value: this.state.value - 1 });
    }
    render() {
        return (
            <div>
                <div className="labelleft">
                    <label htmlFor={this.state.id}>{this.state.label}</label>
                </div>
                <div className="buttonright"><input type="button" className="chonk" value="-" onClick={this.decreaseValue} />
                    <input type="number" value={this.state.value} onChange={this.handleChange} name={this.state.id} min="0" />
                    <input type="button" className="chonk" value="+" onClick={this.increaseValue} />
                </div>
            </div>
        );
    }
}

function DragDropFile() {
    // drag state
    const [dragActive, setDragActive] = React.useState(false);
    
    // handle drag events
    const handleDrag = function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };
    
    return (
      <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
        <input type="file" id="input-file-upload" multiple={true} />
        <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
          <div>
            <p>Drag and drop your file here or</p>
            <button className="upload-button">Upload a file</button>
        </div> 
      </label>
      </form>
    );
  };

export { RadioButtons, NumberInput, DragDropFile };
