import './CreatedTasks.css'


interface TasksProps{
  content: string 
  isTaskChecked: boolean
  id: string
  checkState: (taskId: string) => void
  deleteTask: (deleteTaskId: string) => void
}

export function CreatedTasks({content , isTaskChecked, id , checkState , deleteTask}:TasksProps){

    return(
      <div className='created-tasks' key={id}>
            <div className={`${isTaskChecked ? 'completed' : ''}`} onClick={() => checkState(id)}>
              <input type="checkbox" className='checkbox' defaultChecked={isTaskChecked} />
              <label htmlFor="checkbox" >{content}</label>
            </div>
            <button onClick={() => deleteTask(id)}></button>
          </div>
    )
}