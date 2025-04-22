import { RefObject } from 'react'
import TailButton from '../../UI/TailButton'

interface TodoFormType{
    optionVar: RefObject<HTMLSelectElement | null>;
    inputVar: RefObject<HTMLInputElement | null>;
    onClick : ()=> void;
    onCancleClick: ()=> void;


}

export default function TodoForm({optionVar, inputVar,onClick,onCancleClick}:TodoFormType) {

    return (
            <div className='bg-amber-100 border-1 w-full flex-col'>
                <h1 >Todo List</h1>

                <main className='flex bg-white justify-center'>
                    <select className='mr-2 border-1 rounded-2xl' name="do" ref={optionVar}>
                        <option value="X">X</option>
                        <option value="O">O</option>
                    </select>
                    <input className='border-1 mr-1 rounded-2xl w-2/4' ref={inputVar} type="text" placeholder='내용 입력' />
                    <div className='flex w-1/4'>
                        <TailButton onClick={onClick} color='orange' caption={"확인"}/>
                        <TailButton caption={"취소"} color='orange' onClick={onCancleClick}/>
                    </div>
                   
                </main>
                
            </div>
    )
}
