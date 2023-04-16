  import pluslogo from '../assets/plus-logo.svg'
  import { NoTask } from './NoTask'
  import { Statistics } from './Statistics'
  import './Content.css'
  import { CreatedTasks } from './CreatedTasks'
  import { FormEvent, useEffect, useState } from 'react'
  import { v4 as uuidv4 } from 'uuid';

  interface Task{
    content: string 
    isTaskChecked: boolean
    id: string
  }

  export function Content(){

      const [tasks , setTasks] = useState<Task[]>([])

      const [newTask , setNewTaks] = useState('') 

      const [totalNumber , setTotalNumber] = useState(0)

      const [totalCompletedNumber , setTotalCompletedNumber] = useState(0)

      useEffect(() => {
        checkTasksNumber()
      }, [tasks])

      function checkState(taskId: string){

        const taskArray = [...tasks]
        
        const newTasks = taskArray.map(task => {
          
          if(task.id === taskId){
            return {
              ...task, //copia o objeto task atualizando o valor do isTaskChecked
              isTaskChecked: !task.isTaskChecked
            };
          } else {
            return task;
          }
        })

        setTasks([...newTasks])
      }

      function createNewTask(event: FormEvent){
        event.preventDefault()
        
        const newValue = {
          content: newTask,
          isTaskChecked: false ,
          id: uuidv4() 
        }
        
        setTasks([...tasks, newValue])

        setNewTaks('')

      }
      
      function deleteTask(deleteTaskId: string){

        const taskArray = [...tasks]

        const taskId = taskArray.findIndex(task => task.id === deleteTaskId)

        if(taskId !== -1){
          taskArray.splice(taskId, 1)    
        }

        setTasks([...taskArray])

      }

      function checkTasksNumber(){

        const taskArray = [...tasks]

        const totalTaskNumber = taskArray.length;

        const totalCompletedNumber = taskArray.filter(task => task.isTaskChecked)

        setTotalCompletedNumber(totalCompletedNumber.length)
      
        setTotalNumber(totalTaskNumber)
      
      }

      function checkNoTaks(){
        if(totalNumber === 0){
         return <NoTask/>
        }
      }

      return(
        <div className="content">

          <form className="new-task" onSubmit={createNewTask}>
            <label htmlFor="task">
              <input type="text" 
              placeholder='Adicione uma nova tarefa' 
              value={newTask}
              onChange={(event) => {
                setNewTaks(event.target.value)
              }}
              id='task'/>
              <button type='submit'>Criar <img src={pluslogo} alt="Símbolo de soma"/></button>
            </label>
          </form>

          <Statistics totalNumber={totalNumber} completedNumber={totalCompletedNumber}/>

          {tasks.map((task) => {
            return <CreatedTasks key={task.id} content={task.content} isTaskChecked={task.isTaskChecked} id={task.id} checkState={checkState} deleteTask={deleteTask}/>
          })} 

          {checkNoTaks()}  

        </div>   
      )
  }