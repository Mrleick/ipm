import tw from "tailwind-styled-components"
import {IoMdSettings, IoIosContrast, IoIosMicrophone, IoIosPulse, IoMdWifi} from "react-icons/io"



const Footer = () => {
    const FooterElm = tw.footer`
    flex
    justify-between
    dark:bg-white
    bg-[#111625]
    sticky
    bottom-0
    shadow-[0px_20px_35px_10px]
    `
    const Button = tw.button`
    rounded-full
    border-none
    bg-transparent
    m-3
    w-24
    h-12
    text-4xl
    text-[#FF6A00] 
    text-center
    `
    return ( 
        <FooterElm>
            <Button className="text-white dark:text-black"><IoIosPulse/></Button>
            <Button><IoIosMicrophone /></Button>
            <Button className="bg-gradient-to-r from-[#FF6A00] to-[#EE0979] text-[#111625] dark:text-white"><IoMdWifi /></Button>
            <Button><IoIosContrast /></Button>
            <Button ><IoMdSettings/></Button>
        </FooterElm>
     );
}
 
export default Footer;