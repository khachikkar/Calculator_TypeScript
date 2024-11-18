import "./index.css"
import {FC} from "react";

interface I_NUmberItem{
    value: number
    onClick: (e:React.MouseEvent<HTMLDivElement>)=> void
}


const NumberItem:FC<I_NUmberItem> = ({value, onClick}) => {
    return (
        <div onClick={onClick}  className="num">{value}</div>
    )
}

export default NumberItem