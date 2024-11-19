import {FC} from "react";


interface I_Value{
    res: string
    oper:string
}

const makestringsplited = (str:string)=>{

    return "="+Number(str).toFixed(2).toString()
}

const Value:FC<I_Value> = ({res, oper})=>{

    return (

            <h1>
                {res}
                {oper && makestringsplited(oper)}
            </h1>

    );
}

export default Value