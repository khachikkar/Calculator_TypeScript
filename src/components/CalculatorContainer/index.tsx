import "./index.css"
import {FC, useState, useEffect} from "react";
import NumberItem from "../NumberItem";
import Value from "../value";
import OperationItem from "../OperationItem";
import C from "../Ccomponent"


interface I_CalcCont{
    numbers: (number | string)[]
    operations: string[]
}

const CalculatorContainer:FC<I_CalcCont> = ({numbers, operations}) => {


const [oper, setOper] = useState<string>("")
const [res, setRes] = useState<(string)>("")


// const onClick = (e:React.MouseEvent<HTMLDivElement>)=>{
//
//     // if already have result after =
//     if(oper.length >0){
//         alert("Delate and start to write")
//         return
//     }
//
//     const content = e.currentTarget.textContent || "";
//
//     if(res.length === 0){
//         if (content === "+" || content === "-" || content === "*" || content === "/"){
//             alert("Start with numbers")
//             return;
//         }
//     }
//
//     //if clicked =
//     if(content === "="){
//
//        try{
//            const result = eval(res ?? "0")
//            setOper(result.toString())
//        }catch(e){
//            console.error("Invalid expression", e);
//            alert("Invalid expression")
//            return
//        }
//     }else{
//         setRes((prev)=> prev + content)
//     }
//
// }
const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const content = e.currentTarget.textContent || ""; // Fallback to empty string
        handleInput(content);
    };

const handleInput = (input: string) => {
        // Prevent appending operators if res is empty
        if (res.length === 0 && ["+", "-", "*", "/"].includes(input)) {
            alert("Start with numbers");
            return;
        }

        // Handle "=" for evaluation
        if (input === "=") {
            try {
                const result = eval(res || "0"); // Evaluate expression
                setOper(result.toString());
            } catch (error) {
                console.error("Invalid expression:", error);
                alert("Invalid Expression");
            }
            return;
        }

        // Append numbers or operators to `res`
    if (
        !isNaN(Number(input)) || // Numbers
        operations.includes(input) || // Operators
        ["(", ")"].includes(input) // Parentheses
    ) {
        setRes((prev) => prev + input);
    }
    };



useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const key = event.key; // Get the pressed key
            if (!isNaN(Number(key)) || operations.includes(key) || key === "=") {
                handleInput(key);
            }
        };

        window.addEventListener("keydown", handleKeyDown); // Add keyboard listener
        return () => {
            window.removeEventListener("keydown", handleKeyDown); // Cleanup listener
        };
    }, [res]); // Track `res` for updates



const hanmdleClearArea = () =>{
    setRes("")
    setOper("")
}


console.log(res, "KKK")


return (
        <div className="CalcCont">

            <div className="value">
              <Value oper={oper} res={res} />
            </div>

            <div className="oprations">
                {operations.map(val=> <OperationItem  onClick={onClick} val={val} />)}
                <C onClick={hanmdleClearArea} />
            </div>

            <div className="Numbers">
                {numbers.map((value) => <NumberItem key={value} onClick={onClick} value={value}/>)}
            </div>

        </div>
)
}


export default CalculatorContainer