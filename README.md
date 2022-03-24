# Verificador_de_idade<!DOCTYPEhtml >
< html  lang =" pt-BR " >
< cabeça >
    < meta  charset =" UTF-8 " >
    < meta  http-equiv = " Conteúdo compatível com X-UA " =" IE=edge " >
    < meta  name =" viewport " content =" largura=largura do dispositivo, escala inicial=1.0 " >
    < title > verificador de idade </ title >
< link  rel =" folha de estilo " href =" estilo.css " >
</ cabeça >
< corpo >

    < cabeçalho >
        < h1 > Verificador de idade </ h1 >
    </ cabeçalho >    

    < seção >
< div >
   < p > Ano de Nascimento
      < tipo de entrada  =" número " nome =" txtano " id =" txtano " min =" 0 " >
   </ p >
   < p >
< input  type =" radio " name =" radsex " id =" masc " marcado >
< label  for =" masc " > Masculino </ label >
   < input  type =" radio " name =" radsex " id =" fem " >
   < label  for =" fem " > Feminino </ label >
</ p >
< p > < input  type =" button " value =" Verificar " onclick =" verificar() " >
</ p >
</ div >

< div  id = " res " >
Preencha os dados acima para ver o resultado!
</ div >
    </ seção >

    < Rodapé >
        < p > © Márcinho Sites </ p >
    </ Rodapé >
    < script  src =" script.js " > </ script >

</ corpo >
</ html >
