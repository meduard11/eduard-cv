import { HeaderItem } from './HeaderItem'
import { scrollHandler } from '../utils /ScrollHandler'



export const Header = () => {
    return (
        <> 
            <div className="flex bg-grr text-whit w-full min-w-min">
                <div className = "pl-24 m-16 w-1/2 mx-6 text-5xl font-light">Eduard Mihaila</div>
                
                <div className="flex mx-6"> 
                    <HeaderItem color ="#62B6CB" desc="About me" onClick = {() => scrollHandler("idx-1")}/>
                    <HeaderItem color="#FFAD69"desc="Experience" onClick = {() => scrollHandler("idx-2")} />
                    <HeaderItem color="#8F3985" desc="Formation"onClick = {() => scrollHandler("idx-3")} />
                    <HeaderItem color="#FF6A6A" desc="Langue"onClick = {() => scrollHandler("idx-4")}/>
                </div>
            </div>  
        </> 
    )


}