import React from 'react';
import './App.css';
import TodoListTask from './Components/TodoListTask';
import AddTasks from './Components/AddTasks';


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
              task = {task} 
              key={task.id}>
            </TodoListTask>
          ))
        }
        <AddTasks addTasks={this.addTasks}></AddTasks>
      </div>
      )
  }
} 


export default App;
