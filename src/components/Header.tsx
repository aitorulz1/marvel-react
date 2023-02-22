import Image from 'next/image'
import marvelLogo from '../../public/header-images/marvel_logo.jpg'
import bitbanLogo from '../../public/header-images/bitban_logo.jpg'


export const Header = () => {

    return(    
    <div className="bg-red h-16 .my-auto .mx-auto w-full shadow-[0px_0px_5px_5px_#cbd5e0] mb-10">
        <div className='mx-auto w-full '>
            <div className="w-40 float-left">
                <Image src={marvelLogo} alt="Marvel" />
            </div>
            <div className="w-40 float-right">
                <Image src={bitbanLogo} alt="Bitban"/>
            </div>
        </div>
    </div>    
    )
}

