'use client'

import React, { useState } from 'react'
import FoodCard from './FoodCard'
import FoodData from '@/db/fooddata.json'
import TailButton from '@/UI/TailButton';
import { FoodDataType } from './FoodType';

export default function FoodMain() {
  //맵으로 불러오기 카테고리
 
  let FoodDataJson:FoodDataType[] = FoodData;

  let category:string[] = FoodDataJson.map((item:Partial<FoodDataType>) => item["운영주체 분류"] != undefined ? item["운영주체 분류"].replaceAll(" ", "") : "");
  const [contents, setContents] = useState<React.ReactNode[]>([]);
  //카테고리 중복 제거
  category = [...new Set(category)];

  //카테고리 수만큼 버튼 생성
  //{caption,color,onClick}

  const handleOnClick = (value:string) => {
    let fillterFoodData:FoodDataType[] = FoodDataJson.filter((item:FoodDataType) => item['운영주체 분류'].replaceAll(" ", "") == value);

    setContents(fillterFoodData.map(item => <FoodCard key={item["사업장명"]} res={item} />));
  }

  let categoryButton = category.map((item:string) => <TailButton key={`${item}`} caption={item} color={'blue'} onClick={() => handleOnClick(item)} />);

  return (
    //여기서 h를 풀로 안 해줘서 플렉스 박스가 짤렸음
    //TailButton({caption,color,onClick}
    <main className=''>
      <div className='flex'>
        {categoryButton}
      </div>
      <div className='grid grid-cols-2 overflow-y-auto gap-2'>
        {contents}
      </div>

    </main>
  )
}




















// export default function FoodMain() {
//   //tags 생성
//   const [tags, setTags] = useState([]);
//   //setTags(FoodData.map(item => <FoodCard res={item} />));

//   let category = FoodData.map(item => item["운영주체 분류"].replaceAll(' ', ''));

//   //중복제거
//   category = [...new Set(category)];

//   const buttons = category.map(item => <TailButton key={item} caption={item} color={'bg-blue-400'} onClick={() => { handleOneClick(item) }} />)

//   const handleOneClick = (value) => {
//     let foodcard = FoodData.filter(item => (item["운영주체 분류"].replaceAll(' ', '') == value));
//     setTags(foodcard.map(item => <FoodCard res={item} />));

//   }

//   return (
//     //여기서 h를 풀로 안 해줘서 플렉스 박스가 짤렸음
//     //TailButton({caption,color,onClick}
//     <>
//         <div className='flex flex-row justify-center p-1'>
//           {buttons}
//         </div>
//         <div className='grid grid-cols-2 w-full gap-2 h-full overflow-y-auto'>
//         {tags}
//         </div>
//     </>
//   )
// }