'use client'
import { useEffect, useState } from 'react'
import {useAtom} from "jotai";
import { loginState } from '@/atoms/IsLoginAtom';
import Link from 'next/link';
import Image from 'next/image';
import TailButton from '@/UI/TailButton';

import { useRouter } from 'next/router';

export default function Nav() {

    //const navigate = useRouter();
    const [login, setLogin] = useAtom(loginState);

    const [button, setButton] = useState<React.ReactNode>();

    const handleClick = ()=>{
        
        if(login == true)
            setLogin(!login);
        
        //navigate.push("/page");
    }

    useEffect(()=>{

        if(login){
            setButton(<TailButton color='lime' caption={"로그아웃"} onClick={handleClick}/>);
        }else{
            setButton(<TailButton color='lime' caption={"로그인"} onClick={handleClick} />);
        }

    },[login])

  return (
    <div className='flex w-full flex-row justify-between items-center'>
        <div className='m-2'><Image src="react.svg" alt="react" width={32} height={32} /></div>
        <ul className='flex justify-center items-center text-white p-2 gap-x-4'>
            <li><Link className='m-2' href="/">홈으로</Link></li>
            {login && <>
                    <li><Link href="/clock">시계</Link></li>
                    <li><Link href="/food">푸드 마켓</Link></li>
                    <li><Link href="/subway">지하철</Link></li>
                    <li><Link href="/todolist">할일목록</Link></li>
                </>
            }
        </ul>
        <div>
            {button}
        </div>
    </div>
    

  )
}
