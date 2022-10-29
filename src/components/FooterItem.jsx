
export const FooterItem = ({image, desc, url}) => {
    return (
        <div className="lg:mt-18 h-auto lg:mx-10 flex text-light text-center sm:mt-4 sm:mx-auto my-auto"> 
            
            { image? 
            <img className="m-2 h-6 w-6" src={image} alt=""/>
            : ""
            }
            {url ? 
            <a className="my-2 text-base no-underline" rel="noreferrer" target="_blank" href={url}> {desc ? desc : ""} </a>
            :
            <div className={desc==="About me" ? "": "my-2" }>  {desc}</div>
}           
        </div>
    )
}