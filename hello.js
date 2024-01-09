const mathematics = document.querySelector("#math");
const daa = document.querySelector("#daa");
const mces = document.querySelector("#mces");
const os = document.querySelector("#os");
const UhV = document.querySelector("#UHV");
const INT = document.querySelector("#INT");
const python = document.querySelector("#python");
const bio = document.querySelector("#bio");
const web = document.querySelector("#web");
const coi = document.querySelector("#COI");


function grade(num){
if (num <= 100 && num >= 90) {
  return 10;
} else if (num <= 89 && num >= 80) {
  return 9;
} else if (num <= 79 && num >= 70) {
  return 8;
} else if (num <= 69 && num >= 60) {
  return 7;
} else if (num <= 59 && num >= 55) {
  return 6;
} else if (num <= 54 && num >= 50) {
  return 5;
} else if (num <= 49 && num >= 40) {
  return 4;
} else if (num <= 39 && num >= 0) {
  return 0;
}
}
function result() {
    const mg=grade(mathematics.value)*3;
const daag=grade(daa.value)*4;
const mcesg=grade(mces.value)*4;
const osg=grade(os.value)*3;
const uhvg=grade(UhV.value)*1;
const intg=grade(INT.value)*2;
const pyg=grade(python.value)*1;
const biog=grade(bio.value)*2;
const coig=grade(coi.value)*1;
const webg=grade(web.value)*1;
function clear(x){
    x.value===0;
}

const total=mg+daag+webg+biog+uhvg+mcesg+osg+intg+pyg+coig;
const result=(total/220)*10;
document.getElementById("result").innerHTML=`SGPA:${result}`;
mathematics.value==""; };