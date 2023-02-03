
const theme_setter =  document.documentElement
theme_setter.className = 'theme-light'
var theme_colors = getComputedStyle(document.body)
const toggle_div = document.querySelector('#toggle-div')
const toggle_btn = document.querySelector('.toggle-btn-div')
const btn_right = document.querySelector('.btn-right')
const theme_mode = document.querySelector('.theme-mode')
toggle_btn.addEventListener('mouseenter' , ()=>{
    // console.log("IN")
    if(theme_setter.className === "theme-dark")
    {   
        // console.log(theme_mode.style)
        theme_mode.style.color = "white";
    }
})
toggle_btn.addEventListener('mouseleave' , ()=>{
    // console.log("OUT")
    theme_mode.style.color = theme_colors.getPropertyValue('--text-color-blue')
    
})

toggle_btn.addEventListener('click',()=>{
    const button = document.getElementById("toggle-btn")
    if(button.classList.contains("toggle-inactive"))
    {
        button.classList.remove("toggle-inactive")
        button.classList.add("toggle-active")
        theme_setter.className = "theme-dark"
    }
    else{
        button.classList.remove("toggle-active")
        button.classList.add("toggle-inactive")
        theme_setter.className = "theme-light"
    }
    theme_mode.style.color = theme_colors.getPropertyValue('--text-color-blue')
})




