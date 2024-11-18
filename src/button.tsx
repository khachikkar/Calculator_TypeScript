import {FC} from "react"

type T_Size = "large" | "midlle" | "small"
type T_Type = "primary" | "default" | "link" | "text"



interface I_ButtonProps{
    text: string
    type?: T_Type
    onClick?: ()=>void
    block?: boolean
    loading?: boolean
    disabled?: boolean
    size?: T_Size
}

// type T_Operator = "+" | "-" | "*" | "/"

const Button:FC<I_ButtonProps> = ({text, onClick})=>{

// const [count, setCount] =  useState<string>("0") // useState<string>("0")

//What is Enum in TS

// const handleCalculate  = ()=>{
//         setCount("text")
//     }
// handleCalculate()


    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

export default Button