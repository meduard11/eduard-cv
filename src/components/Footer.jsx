import mail from '../images/mail.svg'
import phone from '../images/phone.svg'
import loc from '../images/location-marker.svg'
import insta from '../images/insta.svg'


import { FooterItem } from './FooterItem'


export const Footer = () => {
    return (
        <> 
            <div className="flex">                
                <div className="flex m-32 mt-14 w-full text-white font-light" id="idx-5"> 
                    <FooterItem image={mail}  desc="emihaila101@gmail.com"/>
                    <FooterItem image={phone} desc="+32485115406"/>
                    <FooterItem image={insta} desc="eduardmihaila" link={true}/>
                    <FooterItem image={loc} desc="Brussels, Belgium"/>

                </div>
            </div>  
        </> 
    )


}