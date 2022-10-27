import { NavBarItem } from './NavBarItem'
import { scrollHandler } from '../utils /ScrollHandler'


const BLUE = "#62B6CB"
const ORANGE = "#FFAD69"
const PURPLE = "#8F3985"
const RED = "#FF6A6A"

export const NavBar = () => {
    return (
        <> 
            <div className="flex bg-grr text-whit w-full min-w-min">
                <div className = "pl-24 m-16 w-1/2 mx-6 text-5xl font-light">Eduard Mihaila</div>                
                <div className="flex mx-6"> 
                    <NavBarItem color ={BLUE} desc="About me" onClick = {() => scrollHandler("idx-1")}/>
                    <NavBarItem color={ORANGE}desc="Experience" onClick = {() => scrollHandler("idx-2")} />
                    <NavBarItem color={PURPLE} desc="Formation"onClick = {() => scrollHandler("idx-3")} />
                    <NavBarItem color={RED} desc="Langue"onClick = {() => scrollHandler("idx-4")}/>
                </div>
            </div>  
        </> 
    )


}