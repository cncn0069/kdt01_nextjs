import MyClockImage from "./MyClockImage";
import MyClockTime from "./MyClockTime";



function MyClock() {
    return (
        <div className="">
            <main className="w-full h-screen flex flex-col justify-center items-center">
                <div className="w-20 hover:rotate-20">
                    <MyClockImage />
                </div>
                <div className="">
                    <MyClockTime />
                </div>
            </main>
        </div>
    )
}

export default MyClock;