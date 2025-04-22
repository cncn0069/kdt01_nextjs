'use client'
import { useAtom } from 'jotai';
import React, { useEffect, useRef, useState } from 'react'
import { loginState } from '@/atoms/IsLoginAtom';
import TailSelectBox from '@/UI/TailSelectBox';
import sarea from '@/db/sarea.json';
import FcstRecode from '@/UI/FcstRecode';
import scode from '@/db/scode.json'
import { useRouter } from 'next/navigation';

interface Sarea {
    "코드": string;
    "측정소": string
}

interface Scord {
    [key: string]: {
        name: string;
        unit: string;
        description: string;
    }
}

interface FcstRecodeFor {
    "controlnumber":string
    "id": string;
    "pm10" : string;
    "pm25" : string;
    "co" : string;
    "co2" : string;
    "fad" : string;
    "no" : string;
    "no2" : string;
    "nox" : string;
    "o3" : string;
}
// item['pm10']} pm25={item['pm25']} co={item['co']} co2={item['co2']} fad={item['fad']}
//     no={item['no']} no2={item['no2']} nox={item['nox']} o3={item['o3']

export default function Subway() {


    const [ls] = useAtom(loginState);
    const router = useRouter();

    //메뉴로 쓸 옵션 값
    const refOption = useRef<HTMLSelectElement>(null);

    const [option, setOption] = useState<React.ReactNode | undefined>();
    const [tdata, setTdata] = useState<FcstRecodeFor[] | undefined>();

    //표 내용
    const [tags, setTags] = useState<React.ReactNode[]>([]);

    //표 헤더
    const [headtags, setHeadTags] = useState<React.ReactNode[]>([]);

    //scode
    const scodeTs = scode as Scord;

    const getFetch = async () => {

        let station: Sarea = (sarea as Sarea[]).filter(item => item["측정소"] == refOption.current?.value)[0]

        let station_code: string = station["코드"];



        const API_KEY: string = process.env.NEXT_PUBLIC_API_KEY == undefined ? "" : process.env.NEXT_PUBLIC_API_KEY;

        console.log(process.env.NEXT_PUBLIC_API_KEY)

        const URL: string = "https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?serviceKey="
            + API_KEY
            + "&pageNo=1&numOfRows=1&resultType=json&controlnumber=20250408"
            + "&areaIndex=" + station_code;


        console.log(URL)
        const resp: Response = await fetch(URL);
        const data = await resp.json();
        

        setTdata(data.response.body.items.item);

    }

    const handleOnChange = () => {
        getFetch();
        if (refOption.current?.value != "측정소를 선택하세요" || !!refOption.current) {

            getFetch();

        }

    }

    useEffect(() => {
        if (tdata == undefined)
            return;

        let head: React.ReactNode[] = [];
        for (let key of Object.keys(tdata[0])) {
            if (scodeTs[key] != undefined)
                head.push(<th scope="col" className="px-6 py-3">{scodeTs[key]['name']}<br />{scodeTs[key]['unit']}</th>);
        }
        setHeadTags(head);

        console.log(tdata);
        setTags(tdata.map((item: FcstRecodeFor) => <FcstRecode key={item['controlnumber']} pm10={item['pm10']} pm25={item['pm25']} co={item['co']} co2={item['co2']} fad={item['fad']}
            no={item['no']} no2={item['no2']} nox={item['nox']} o3={item['o3']} />))

    }, [tdata])


    useEffect(() => {
        if (!ls) { router.push("/"); }


        if (sarea != undefined) {
            setOption(<TailSelectBox ref={refOption} handleChange={handleOnChange} category={sarea.map(item => item["측정소"])} defalutValue={"측정소를 선택하세요"} />);
        }


    }, []);



    return (
        <div className=''>
            <div className='flex w-full justify-between'>
                <h2 className='w-2/3'>측정소 선택</h2>
                <div className='w-1/3'>{option}</div>
            </div>
            <div>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm rtl:text-center text-gray-500 dark:text-gray-400 text-center">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                {headtags}
                            </tr>
                        </thead>
                        <tbody>
                            {tags}
                        </tbody>
                        <tfoot>
                        </tfoot>
                    </table>

                </div>
            </div>
        </div>

    )
}
