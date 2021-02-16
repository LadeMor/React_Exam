import React from 'react';

class CreateProject extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputProjetcTitle:'',
            inputProject:''
        }
    }


    createProject = () => {
        if(this.state.inputProject && this.state.inputProjetcTitle){
            this.props.createProject(this.state.inputProject, this.state.inputProjetcTitle);
            this.setState({inputProject:'', inputProjetcTitle:''})
        }
    }

    addProjetcTaks = () =>{
        if(this.state.inputProject){
            this.props.addTaskProject(this.state.inputProject);
            this.setState({inputProject:''})
        }
    }

    createChange = event => {
        this.setState({ inputProject: event.target.value })
    }

    createProjetcTitle = event => {
        this.setState({ inputProjetcTitle: event.target.value })
    }

    render(){
        return(
            <div className="create_project">
                <h3>Create project</h3>
                <button>Create</button>
                <h5>Name:</h5>
                <input onChange = { this.createProjetcTitle } value={this.state.inputProjetcTitle}/>
                <h5>Tasks:</h5>
                <input onChange = { this.createChange } value={this.state.inputProject}/>
                <button onClick={this.createProject}>Add</button>
            </div>
        )
    }
}



export default CreateProject;