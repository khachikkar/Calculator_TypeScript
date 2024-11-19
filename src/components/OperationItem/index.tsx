import {FC} from "react";


interface I_OperationItemProps {
    onClick: (e:React.MouseEvent<HTMLDivElement>)=> void
    val: string
}

const OperationItem: FC<I_OperationItemProps> = ({onClick, val}) => {
    return (
        <div className="ope" onClick={onClick}>
            {val}
        </div>
    )
}

export default OperationItem