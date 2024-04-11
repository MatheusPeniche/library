var data_inicio = new Date();
var ultimoDiaDoMes = new Date(data_inicio.getFullYear(), data_inicio.getMonth()+1, 0);
var acrescimo_inicio = 0;
var acrescimo_fim = 0;
var fim =  ultimoDiaDoMes.getDate();
var dia_semana_inicio = new Date(data_inicio.getFullYear(), data_inicio.getMonth(), 1).getDay();
var dia_semana_fim = ultimoDiaDoMes.getDay();
var array_calendario = [];
if (dia_semana_inicio > 0){
 for (i = dia_semana_inicio; i >= 0; i--) {
 acrescimo_inicio++;
 }
}
if (dia_semana_fim > 0){
 if (dia_semana_fim != 6){
 acrescimo_fim = 6 - dia_semana_fim;
 }
}
//Montar o calendario...
for (i = 0; i < acrescimo_inicio-1; i++) {
 array_calendario.push("--");
}
for (i = 1; i <= fim; i++) {
 array_calendario.push(("0" + i).slice(-2));
}
for (i = 0; i <= acrescimo_fim; i++) {
 array_calendario.push("--");
}
var cabecalho = "DO - SE - TE - QA - QU - SE - SA";
console.log(cabecalho);
var tmp = "";
var z = 1;
for (i = 0; i < array_calendario.length; i++) {
 tmp += array_calendario[i] + " - ";
 if (z == 7){
 tmp = tmp.slice(0, -3);
 console.log(tmp);
 }
 z++;
 if (z > 7){
 z = 1;
 tmp = "";
 }
}