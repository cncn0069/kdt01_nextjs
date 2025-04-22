'use client'

import React, { useState } from 'react'
import TailBall from './TailBall'
import TailButton from '@/UI/TailButton'


export default function Lotto() {
    const [tags, setTags] = useState<React.ReactNode>([]);


    const handleOneClick = () => {
        let numbers:number[] = [];

        while (numbers.length < 7) {
            let randomValue:number = Math.floor(Math.random() * 45 + 1);

            if(numbers.indexOf(randomValue,0) != -1)
            {
                continue;
            }
            
            numbers.push(randomValue);
        }

        let lottoLast:Array<number> = numbers.splice(-1);

        let lottoNum:Array<number | string> = [...numbers,'+',...lottoLast]

        setTags(lottoNum.map(item => item === '+'? <span className='w-15 h-15 m-1 flex justify-center items-center'>{item}</span>:<TailBall key={`n`+item} n={item} />));

    }

    return (
        <main className=''>
            <div>
                <div className='w-full flex mb-10'>
                    {tags}
                </div>
                <div className='flex justify-center items-center text-center'>
                    {/* 헷갈렸던 이유는 와... 페이지가 이동한다고 생각했다... 페이지는 이동하지 않고 태그를 불러오는건데..;; */}
                    <TailButton caption="로또번호생성" color="blue" onClick={handleOneClick}/>
                </div>
                
            </div>
        </main>

    )
}
