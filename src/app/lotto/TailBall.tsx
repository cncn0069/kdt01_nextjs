interface TailBallF{
  n : number | string;
}

type bgBackType  = "n0" | "n1" | "n2" | "n3" | "n4";

type bgColorType = {
  "n0" :string;
  "n1" :string;
  "n2" :string;
  "n3" :string;
  "n4" :string;
}


export default function TailBall({n}:TailBallF) {
  const num = typeof n === 'string' ? parseInt(n) : n ;


  const bgColor:bgColorType = {
    "n0" : "bg-yellow-400",
    "n1" : "bg-blue-400",
    "n2" : "bg-red-400",
    "n3" : "bg-black",
    "n4" : "bg-green-400",
  }

  return (
    <div className={`w-15 h-15 border-2 m-1 border-black ${bgColor[`n${Math.floor(num/10)}` as bgBackType]} text-white rounded-4xl flex justify-center items-center`}>
      {n}
    </div>
  )
}
