
import { MouseEvent } from "react";

interface TailButtonProps { 
  caption:string;
  color: "blue"|"orange"|"lime";
  onClick?:(e:MouseEvent<HTMLButtonElement>)=> void; 
}

type BgType = {
  "blue":string;
  "orange":string;
  "lime":string;
}

export default function TailButton({ caption, color, onClick }:TailButtonProps):React.ReactNode {

  const bg:BgType ={
    "blue" : "bg-blue-700",
    "orange" : "bg-orange-700",
    "lime" : "bg-lime-700",
  }

  const bgHover:BgType ={
    "blue" : "bg-blue-400",
    "orange" : "bg-orange-400",
    "lime" : "bg-lime-400",
  }

  return (
    <button className={`flex justify-center items-center w-full p-2 border-2 mr-2 rounded-2xl ${bg[color]} hover:cursor-pointer hover:${bgHover[color]} rounded-2xl`} onClick={onClick}>{`${caption}`}</button>
  )
}
