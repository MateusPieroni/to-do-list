import './Statistics.css'

interface Statistics{
  totalNumber: number
  completedNumber: number
}

export function Statistics ({totalNumber , completedNumber}: Statistics){
    return(
        <div className="statistics">
        <div className="statistics-created-tasks">
          <div>Tarefas criadas</div>
          <span>{totalNumber}</span>
        </div>
        <div className="completed-tasks">
          <div>Concluídas</div>
          <span>{completedNumber} de {totalNumber}</span>
        </div>
      </div>
    )
}