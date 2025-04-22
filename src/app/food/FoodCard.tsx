
import Image from 'next/image';
import { resType } from './FoodType';

type FpTypeUnion = "광역지원센터"|"기초푸드뱅크"|"기초푸드마켓"

type FPType = {
    "광역지원센터" : string;
    "기초푸드뱅크" : string;
    "기초푸드마켓" : string;
}

export default function FoodCard({ res }:resType) {


    //구분에 따라 사진
    let foodPicture:FPType = {
        "광역지원센터" : "/busan.png",
        "기초푸드뱅크" : "/bank.png",
        "기초푸드마켓" : "/market.png",
    }


    return (
        <>
        <div className='flex border-2 h-full'>
            <div className='w-1/3'>
            <Image src={foodPicture[res["구분"] as FpTypeUnion]} width={160} height={190} alt='food'></Image>
            </div>
            <div className='w-2/3 h-full'>
                <div className='text-2xl font-bold h-1/4'>
                    {res["사업장명"]}
                </div>
                <p className=''>
                {res["운영주체명"]}
                </p>
                <p className=''>
                {res["사업장 소재지"]}
                </p>
                <p className='bg-gray-400 h-1/4 text-center'>
                {res["팩스번호"]}
                </p>
            </div>
        </div>
        </>
    )
}


// import React, { useState } from 'react'

// export default function FoodCard({ res }) {

//     let FoodImage = {
//         "광역지원센터" : "./img/busan.png",
//         "기초푸드뱅크" : "./img/bank.png",
//         "기초푸드마켓" : "./img/market.png"
//     }

//     const [isShow,setIsShow] = useState(false);
//     console.log();
//     const handleOnClick = () =>{
//         setIsShow(!isShow);
//     }

//     //구분에 따라 사진

//     return (

//         //h 를 이용해서 위치 높이 영역 결정..!

//         <div className='border-2 w-full h-50 flex'>
//             {/* && 연산자에 대해서 아직 부족함... */}
//             <div className='w-1/3'><img src={`${FoodImage[res["구분"]]}`}></img></div>
//             <div className='w-2/3 flex flex-col p-2'>
//                 <h1 className='text-2xl h-1/4'>{res["사업장명"]}</h1>
//                 <h2 className='font-bold h-1/4'>{res["운영주체명"]}</h2>
//                 <p className='h-2/4'>{res["사업장 소재지"]}</p>
//                 <p className='h-8 bg-gray-500 text-center cursor-pointer' onClick={handleOnClick}>{isShow && res["팩스번호"]}</p>
//             </div>
//         </div>

//     )
// }
