import clipboard from '../assets/clipboard.svg'
import './NoTask.css'

export function NoTask(){
    return(
        <div className="no-tasks">
        <div className='no-tasks-primary'>
          <img src={clipboard} alt="Prancheta" />
          <span className='span1'><strong>Você ainda não tem tarefas cadastradas</strong></span>
          <span className='span2'>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </div>
    )
}