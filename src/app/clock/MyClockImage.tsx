
import Image from "next/image";


function MyClockImage() {
    return (
        <>
            <Image src="/clock.png" height={200} width={200} alt="시계"></Image>
        </>

    )
}

export default MyClockImage;