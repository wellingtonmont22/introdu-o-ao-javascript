function clickbtn(){
    document.getElementById('agradecimento').innerHTML = "<b>Obrigado por clickar!</b>"
    console.log(document.getElementById('agradecimento'));
    
//    alert("Obrigado por clickar!");
}
function redirecionar(){
    window.open('https://globallabs.academy/');
    //window.location.href = "https://globallabs.academy/";
}
function trocar(elemento) {
    //document.getElementById('mousemove').innerHTML = "Obrigado por passa o mouse!"
    elemento.innerHTML = "Obrigado por passa o mouse!"
}
function volta(elemento) {
    //document.getElementById('mousemove').innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}
function load() {
    alert("pagina carregada...")
}
function funcaoChange(elemento) {
    console.log(elemento.value);
}
/*
function soma(n1, n2){
    return n1 + n2;
}
function validaIdade(idade){
    var validar;
    if(idade >= 18){
        return validar =  true;
    }else{
        return validar = false;
    }
    
}
var idade =  prompt("Qual a sua idade?");
alert(validaIdade(idade));

*/
/*var d = new Date();
alert(d.getMonth());
alert(d.getFullYear());
alert(d.toLocaleDateString());*/


/*var count;
for(count=0; count <= 5; count++){
    alert(count);
}*/

/*var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count = count ++;
};*/


/*var idade = prompt("Sua idade:");
//var idade = 18;
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};*/



/*var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*var fruta = {
    nome: "maça",
    cor: "vermelha"
};
console.log(fruta);
console.log(fruta.nome, fruta.cor);
*/
/*var lista = ["manga", "laranja", "caju"];
lista.push("toranja")
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
*/
/*var nome = "Wellington Monteiro";
var idade = 12;
var idade2 = 36
var frase = "Brasil é o melhor time do mundo";
console.log(nome);
console.log(idade + idade2);
console.log(frase);
console.log(frase.replace("Brasil", "Africa do sul"));
console.log(frase.toUpperCase());
console.log(frase.toLocaleLowerCase());*/