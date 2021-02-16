import React from 'react';
import './App.css';
import TodoListTask from './Components/TodoListTask';
import AddTasks from './Components/AddTasks';
import CreateProject from './Components/CreateProject';
import Project from './Components/Project';
import ProjectTask from './Components/ProjectTask';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      listTasks:[
        {
          id: 0,
          title: "Buy milk",
          description: "Go by milk in ATB",
          isDone: false,
          Priority:false,
          time:"12:30"
        },
        {
          id: 1,
          title: "Go do some",
          description: "Go by milk in ATB",
          isDone: false,
          Priority:true,
          time:"12:30"
        },
        {
          id: 2,
          title: "Buy milk",
          description: "Go by milk in ATB",
          isDone: false,
          Priority:false,
          time:"12:30"
        },
      ],
      projectList:[
        {
          id:0,
          projetcTitle:"First project",
          projectTask:"Do this thing in the project"
        },
        {
          id:1,
          projetcTitle:"First project",
          projectTask:"Do sss thing in the project"
        }
      ]
    }
    const { listTasks } = this.state;
  }

  deleteTask = id => {
    const index = this.state.listTasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { listTasks } = state;
      delete listTasks[index];
      return listTasks;
    });
  };

  addTasks = (input, dscInput, timeInput) => {
    this.setState(state => {
      let { listTasks } = state;
      listTasks.push({
        id: this.state.listTasks.length,
        title: input,
        description: dscInput,
        done: false,
        Priority:false,
        time:timeInput
      });
      return this.state.listTasks;
    });
  };
  
  editTasks = (id, input, dscInput, timeInput) => {
    const index = this.state.listTasks.map(Task => Task.id).indexOf(id);
    this.setState(state => {
      let { listTasks } = state;
      listTasks[index].title = "Edit value";
      listTasks[index].description = "Edit value";
      listTasks[index].time = "Edit value";
      return listTasks;
    })
  };

  createProject = (inputProject, inputProjetcTitle) => {
    this.setState(state => {
      let { projectList } = state;
      projectList.push({
        id:this.state.projectList.length,
        projetcTitle:inputProjetcTitle,
        projectTask:inputProject
      });
      return projectList;
    })
  }

  addTaskProject = (id, inputProject) => {
    const index = this.state.listTasks.map(Task => Task.id).indexOf(id);
    this.setState(state => {
      let { projectList } = state;
      projectList[index].projectTask = "inputProject";
      return projectList;
    })
  }

  impTask = id => {
    const index = this.state.listTasks.map(Task => Task.id).indexOf(id);
    this.setState(state => {
      let { listTasks } = state;
      listTasks[index].Priority = true;
      return listTasks;
    })
  }

  render(){

    const notimpTasks = this.state.listTasks.filter(Task => !Task.Priority)
    const impTasks = this.state.listTasks.filter(Task => Task.Priority)

    return(
      <div className ="App">
        <h1>To do list</h1>
        <h1 className="Title">Num of tasks - {this.state.listTasks.length}</h1>
        {
          [...impTasks, ...notimpTasks].map(task => (
            <TodoListTask 
              deleteTask={() => this.deleteTask(task.id)}
              impTask={() => this.impTask(task.id)}
              editTasks={() => this.editTasks(task.id)}
              task = {task} 
              key={task.id}>
            </TodoListTask>
          ))
        }
        <AddTasks addTasks={this.addTasks}></AddTasks>
        <div className ="contain_create">
          <CreateProject createProject={this.createProject}></CreateProject>
            {
              this.state.projectList.map(project =>(
              <Project
              project = {project}
              key = {project.id}
              >  
              </Project>
              ))
            }
           {
              this.state.projectList.map(project =>(
              <ProjectTask
              project = {project}
              key = {project.id}
              >  
              </ProjectTask>
              ))
            }
        </div>
      </div>
      )
  }
} 


export default App;
