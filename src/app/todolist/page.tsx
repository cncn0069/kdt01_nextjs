'use client'

import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
import TodoForm from '@/components/Todo/TodoForm';
import TodoItem from '@/components/Todo/TodoItem';

type oxType = "O" | "X";

// type oxType = {
//   "O" : string;
//   "X" : string;
// }

interface TdataType {
  "id": string;
  "text": string | undefined;
  "completed": oxType;
}

interface TdataRespType {
  [key: string]: {
    "id": string;
    "text": string;
    "completed": oxType;
  }
}



const url = "http://localhost:3005/todos";

export default function TodoList() {

  const [tdata, setTdata] = useState<TdataType[] | null>();

  const [tags, setTags] = useState<React.ReactNode[]>([]);

  //O,X값
  const refOption = useRef<HTMLSelectElement>(null);
  const refInput = useRef<HTMLInputElement>(null);

  const getData = async () => {

    const resp = await axios.get<TdataRespType>(url);
    console.log(resp.data);
    const data:TdataType[] = Object.values(resp.data).map((item:TdataType)=>item)
    setTdata(data);
  };

  const checkOnChange = async (id: string | undefined, completed: boolean) => {

    // setOX(!ox);
    //let fil:TdataType = (tdata.filter((item:TdataType) => item['id'] == id))[0];
    if(id == undefined)
      return;

    let putComplted:oxType = completed ? "X" : "O";

    let putData:Partial<TdataType> = {
      "completed": `${putComplted}`,
    }

    await axios.patch(`${url}/${id}`, putData);
    getData();
  };

  const deleteOnClick = async (id:string | undefined) => {
    if(id == undefined)
        return;

    await axios.delete(`${url}/${id}`);

    getData();
  };

  const InsertOnClick = async () => {

    if (refOption.current?.value == "" || refInput.current?.value == "") {
      alert("값을 입력하세요");
      refInput.current?.focus();
      return;
    }

    let putData = {
      "completed": `${refOption.current?.value}`,
      "text": `${refInput.current?.value}`
    }
    await axios.post(url, putData);

    getData();
  };

  const cancleOnClick = async () => {

    if(refOption.current?.value == null || refInput.current?.value == null)
        return;

    refOption.current.value = "O";
    refInput.current.value = "";

    refInput.current.focus();
  };

  useEffect(() => {
    if (tdata == undefined) return;

    setTags(tdata.map((item:TdataType) => <TodoItem key={item['id']} id={item['id']} onChange={checkOnChange} onClick={deleteOnClick} completed={item['completed'] == "O" ? true : false} text={item['text']} />));
  }, [tdata]);

  useEffect(() => {

    getData();
  }, []);

  return (
    <div className=''>
      <TodoForm inputVar={refInput} optionVar={refOption} onClick={InsertOnClick} onCancleClick={cancleOnClick} />
      <main>
        {tags}
      </main>
    </div>
  )
}
