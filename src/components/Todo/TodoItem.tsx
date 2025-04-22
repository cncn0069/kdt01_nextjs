import TailButton from '../../UI/TailButton'

interface TodoItem{
    completed:boolean;
    text:string | undefined;
    id:string | undefined;
    onChange: (id:string | undefined,completed:boolean)=>void;
    onClick: (id:string | undefined)=> void;
}

export default function TodoItem({completed,text,id,onChange,onClick}:TodoItem) {
    
    return (
        <div className='flex flex-row m-1 justify-between items-center h-15 w-full rounded-2xl border-1 border-gray-300-50 bg-white'>
            <input
                id="checked-checkbox"
                type="checkbox"
                checked={completed}
                onChange={()=>{onChange(id,completed)}}
                className="w-4 h-4 m-1 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <p>
                {text}
            </p>
            <div className='m-1 '>
                <div onClick={()=>{onClick(id)}}>
                    <TailButton color={"blue"} caption={"삭제"}/>
                </div>
            </div>
            
        </div>
    )
}
