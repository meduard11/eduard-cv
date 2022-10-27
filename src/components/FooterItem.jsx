

export const FooterItem = ({image, desc, onClick, link}) => {
    return (
        <div className="mt-16 h-auto mx-16 flex text-light text-center" onClick={onClick}> 
            
            { image? 
            <img className="m-2 h-6 w-6" src={image} alt=""/>
            : ""
            }
            {link ? 
            <a className="my-2 text-base no-underline" rel="noreferrer" target="_blank" href="https://www.instagram.com/eduardmihaila/"> eduardmihaila </a>
            :
            <div className={desc==="About me" ? "": "my-2" }>  {desc}</div>
}           
        </div>
    )
}