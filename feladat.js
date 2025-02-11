
//1. Feladat

<script>
 	
function adatok_kiirasa() {
    
    document.write("Szakacs Peter");
    document.write("<br>Team16<hr>");
    document.write("HTML:90");
    document.write("<br>CSS:80");
    document.write("<br>JavaScript:60");
}
    
    adatok_kiirasa();
    

</script>


//2. Feladat

<script>
 	
function Hatvanyozo(szam, hatvany) {
    return szam ** hatvany;
}


document.write(Hatvanyozo(2, 3)); 
    
</script>


//3. Feladat

<script>

function randomParosSzam() {
    let hatar_egy = Number(prompt("Add meg az egyik határértéket:"));
    let hatar_ketto = Number(prompt("Add meg a másik határértéket:"));


    let alsoHatar = Math.min(hatar_egy, hatar_ketto);
    let felsoHatar = Math.max(hatar_egy, hatar_ketto);

    
    let generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;

    if (alsoHatar === felsoHatar && alsoHatar % 2 === 1) {
        document.write(`A [${alsoHatar},${felsoHatar}] intervallumban NEM generálható páros szám!`);
    } else if (generaltSzam % 2 === 0) {
        document.write(`A generált random páros számom a [${alsoHatar},${felsoHatar}] intervallumban: ${generaltSzam}`);
    } else if (generaltSzam !== felsoHatar) {
        document.write(`A generált random páros számom a [${alsoHatar},${felsoHatar}] intervallumban: ${generaltSzam + 1}`);
    } else {
        document.write(`A generált random páros számom a [${alsoHatar},${felsoHatar}] intervallumban: ${generaltSzam - 1}`);
    }
}

randomParosSzam();

</script>


//4. feladat


function Eletkor(kor) {
    if (kor < 0) {
    document.write("Hibás adat!");
}
else if (kor <= 6) {
    document.write("Kisgyermekkor!");
}
else if (kor <= 12) {
    document.write("Gyermekkor:!");
}
else if (kor <= 16) {
    document.write("Serdülőkor!");
}
else if (kor <= 20) {
    document.write("Ifjúkor!");
}
else if (kor <= 30) {
    document.write("Fiatal felnőttkor!");
}
else if (kor <= 60) {
    document.write("Felnőttkor!");
}
else if (kor <= 120) {
    document.write("Aggkor!");
}
else {
    document.write("Hibás adat!");
}
}

Eletkor(23);
document.write("<hr>");
Eletkor(45);
document.write("<hr>");
Eletkor(75);
document.write("<hr>");
Eletkor(200);
document.write("<hr>");

//5. feladat

function Parososzto(szam, oszto) {

if (szam % oszto == 0) {
    document.write(`A(z) ${szam}-nak osztója a ${oszto}`);
}
else {
    document.write(`A(z) ${szam}-nak NEM osztója ${oszto}`);
}
}
Parososzto(500,10);
document.write("<hr>");
Parososzto(100,45);
document.write("<hr>");

//6. feladat

function Negyzetszamok(szam){
for (let i = 1; i <= 10; i++) {
    document.write(`${i * i},`);
}
}
Negyzetszamok(1,4,9,16,25,36,49,64,81,100)