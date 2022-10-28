

export const FooterItem = ({image, desc, onClick, link}) => {
    return (
        <div className="lg:mt-16 h-auto lg:mx-16 flex text-light text-center sm:mt-12 sm:mx-auto" onClick={onClick}> 
            
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