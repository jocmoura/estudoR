function toggleMode(){
    const html = document.documentElement

    html.classList.toggle('light')
    // tem que pegar a tag img e substituir 

    const img = document.querySelector("#profile img")
    const alt = document.querySelector('#profile alt')
    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
        alt.setAttribute('alt', "Permance a mesma msg.")
    } else {
        img.setAttribute('src', './assets/img1.jpg')
        alt.setAttribute('alt', 'Caramba, agora mudou. ')

    }

  

    //se tiver light mode, adiocnar img
}