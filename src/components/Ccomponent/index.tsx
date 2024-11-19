import {FC} from "react";

interface I_CProps {
    onClick: ()=>void
}

const C:FC<I_CProps> = ({onClick})=>{
    return (
        <div onClick={onClick}  className="opeC">
            C
        </div>
    )
}

export default C