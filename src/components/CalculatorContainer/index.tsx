import "./index.css"
import {FC, useState} from "react";
import NumberItem from "../NumberItem";
import Value from "../value";



interface I_CalcCont{
    numbers: number[]
    operations: string[]
}

const CalculatorContainer:FC<I_CalcCont> = ({numbers, operations}) => {


const [oper, setOper] = useState<string>("")

const [res, setRes] = useState<(string)>("")

const onClick = (e:React.MouseEvent<HTMLDivElement>)=>{


    // if already have result after =
    if(oper.length >0){
        alert("Delate and start to write")
        return
    }


    const content = e.currentTarget.textContent || ""; // Fallback to empty string if null


    if(res.length === 0){
        if (content === "+" || content === "-" || content === "*" || content === "/"){
            alert("Start with numbers")
            return;
        }
    }


    //if clicked =
    if(content === "="){

       try{
           const result = eval(res ?? "0")
           setOper(result.toString())
       }catch(e){
           console.error("Invalid expression", e);
           alert("Invalid expression")
           return
       }
    }else{
        setRes((prev)=> prev + content)
    }

}



console.log(res, "KKK")




    return (
        <div className="CalcCont">

            <div className="value">
              <Value oper={oper} res={res} />
            </div>

            <div className="oprations">


                {
                    operations.map(val=> <div onClick={onClick} className="ope" key={val}>{val}</div>)
                }


                <div onClick={()=>{
                    setRes("")
                    setOper("")
                }} className="ope">
                    C
                </div>
            </div>

            <div className="Numbers">
                {
                    numbers.map((value)=> <NumberItem key={value} onClick={onClick} value={value} />)
                }
            </div>

        </div>
    )
}


export default CalculatorContainer