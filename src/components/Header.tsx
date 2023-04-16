import todologo from '../assets/to-do-logo.svg'
import './Header.css'


export function Header(){

return(
    <div className="header"> 
        <div className="blackbox">
        <img src={todologo} alt="Foguete" />
        </div>
    </div>
)
}