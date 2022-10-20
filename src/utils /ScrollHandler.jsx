

export const scrollHandler = (id) => { 
    const ypos = document.getElementById(id).getBoundingClientRect().top + window.scrollY;
    window.scrollTo(0, ypos);
}