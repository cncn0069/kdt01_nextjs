
import { useRef } from 'react'
import { useAtom } from 'jotai';
import { loginState } from '../atoms/IsLoginAtom';
import { MouseEvent } from 'react';



export default function Login() {

    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const [, setLoginState] = useAtom(loginState);

    //const navigate = useNavigate();
    

    //console.log(password.current.value);
    //console.log(email.current.value);

    const handleClick= (e:MouseEvent<HTMLButtonElement>):void =>{
        e.preventDefault;
        let pass = "1234";
        let em = "rlacl@naver.com";
    
        console.log(email.current?.value);

        if(email.current?.value == ''){
            alert("아이디를 입력하세요.")
            email.current.focus();
        }

        if(password.current?.value == ''){
          alert("비밀번호를 입력하세요.")
          password.current.focus();
      }

        if(email.current?.value == em && password.current?.value == pass){

                localStorage.setItem('username',email.current?.value);
                setLoginState(true);
                //navigate("/");
            }

    }

    // useEffect(()=>{
    //   //기억하기 버튼이 눌러져잇으면
    //   if(localStorage.getItem('rememberCheck') == true){
                  
    //   }
    // },[])

  return (
    <div>
       <form className="max-w-sm mx-auto">
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your email
        </label>
        <input
          type="email"
          ref={email}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
          
        />
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your password
        </label>
        <input
          type="password"
          ref={password}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          
        />
      </div>
      <button
        onClick={handleClick}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
    </div>
  )
}
