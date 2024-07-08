import mail from '../images/mail.svg'
import phone from '../images/phone.svg'
import loc from '../images/location-marker.svg'
import insta from '../images/insta.svg'
import git from "../images/git.png"
import linkedin from '../images/linkedin.svg'

import { FooterItem } from './FooterItem'


export const Footer = () => {
    return (
        <> 
            <div className="flex">                
                <div className="gap-2 flex-wrap flex mx-auto mt-14 mb-14 w-max text-white font-light justify-center" id="idx-5"> 
                    <FooterItem image={mail}  desc="emihaila101@gmail.com"/>
                    <FooterItem image={linkedin} url='https://www.linkedin.com/in/eduard-mihaila-1033a0219/' desc="Eduard Mihaila"/>
                    <FooterItem image={phone} desc="+32485115406"/>
                    <FooterItem image={git} url="https://github.com/meduard11" desc="meduard11" link={true}/>
                    <FooterItem image={insta} url="https://www.instagram.com/eduardmihaila/" desc="eduardmihaila" link={true}/>
                </div>
            </div>  
        </> 
    )


}