
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[QUE RAIVA] moss escreve a DATA de NASCIMENTO e escolhe se é HOMEM ou MULHER caraio ')
} else  {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    res.innerHTML = 'Idade cauculada: ' + idade
    var gênero = ''
    var img = document.createElement('img') 
    img.setAttribute('id' , 'foto')
    if (fsex[0].checked){
        gênero = 'homem'
        if (idade >= 0 && idade < 8) {img.setAttribute('src','./images/bebehomem.png')} //criança
        else if(idade >= 8 && idade < 18){img.setAttribute('src','./images/jovemhomem.png')} // jovem
        else if(idade >= 18 && idade < 60){img.setAttribute('src','./images/adultohomem.png')} //adulto
        else {img.setAttribute('src','velhohomem.png')}//idoso
        
    } else if (fsex[1].checked){
        gênero = 'mulher'
        if (idade >= 0 && idade < 8) {img.setAttribute('src','./images/bebermulher.png')} //criança
        else if(idade >= 8 && idade < 18){img.setAttribute('src','./images/jovemmenina.png')} // jovem
        else if (idade >= 18 && idade < 60){img.setAttribute('src','./images/adultomulher.png')} //adulto
        else {img.setAttribute('src','velhamulher.png')}//idoso
    }
    res.style.textAlign = 'center'    
    res.innerHTML = 'detectamos ' + gênero + ' com ' + idade + ' anos'
    res.appendChild(img)
     }
    }