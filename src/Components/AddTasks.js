import React from 'react';

class AddTasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input:'',
            dscInput:'',
            timeInput:''
        };
    }

    addTasks = () => {
        if(this.state.input || this.state.dscInput || this.state.timeInput){
            this.props.addTasks(this.state.input, this.state.dscInput, this.state.timeInput);
            this.setState({ input:'', dscInput:'', timeInput:'' });
        }
    }


    inputChange = event => {
        this.setState({ input: event.target.value })
    }

    descChange = event => {
        this.setState({ dscInput: event.target.value })
    }

    timeChange = event => {
        this.setState({ timeInput: event.target.value })
    }


    render(){

        return(
            <div className="add_input">
                <p>Add the title:</p>
                <input onChange = { this.inputChange } value={this.state.input} ></input>
                <p>Add the description:</p>
                <input type="text" onChange = { this.descChange } value={this.state.dscInput} ></input>
                <p>Add the time:</p>
                <input onChange = { this.timeChange } value={this.state.timeInput}/>
                <button onClick={this.addTasks}>Add</button><br/>
            </div>
        )
    }
}

export default AddTasks;