'use client'

import { loginState } from "@/atoms/IsLoginAtom";
import Login from "@/components/Login";
import { useAtom } from "jotai";
import Image from "next/image";

export default function Home() {
  const [ls] = useAtom(loginState);

  const username = localStorage.getItem('username');

  return (
    <div className="flex flex-col h-screen justify-center items-center">
    {ls ? username + "님 반갑습니다..!"
        : <Login />
    }
    </div>
  );
}
