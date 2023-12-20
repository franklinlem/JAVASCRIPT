function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique o dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade>=0 && idade<2){
                //bebe
                img.setAttribute('src', 'foto-bebeh.png')
            } else if (idade>=2 && idade<13){
                //criança
                img.setAttribute('src', 'foto-menino.png')
            } else if (idade>=13 && idade<=18){
                //adolescente
                img.setAttribute('src', 'foto-adolescenteh.png')
            } else if (idade>18 && idade<=50){
                //adulto
                img. setAttribute('src', 'foto-homem.png' )
            } else if (idade>50){
                //idoso
                img.setAttribute('src', 'foto-idoso.png')
            }

        } else if (fsex[1].checked){
            genero='Mulher'
            if (idade <2){
                //bebe
                img.setAttribute('src', 'foto-bebef.png')
            } else if (idade >= 2 && idade<=12){
                //criança
                img.setAttribute('src', 'foto-menina.png')
            } else if (idade >= 13 && idade<=18){
                //adolescente
                img.setAttribute('src', 'foto-adolescentem.png')
            } else if (idade >= 19 && idade<=50){
                //adulto
                img. setAttribute('src', 'foto-mulher.png' )
            } else if (idade >=51){
                //idoso
                img.setAttribute('src', 'foto-idosa.png')
            }
        }
        res.style.textAlign='center'
        res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}