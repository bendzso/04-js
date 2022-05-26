/*
PSZEUDÓ KÓD –> szöveges logikai vázlat

kávéfőző bekapcsolása
IF nincs elég kávé THEN
    kávé hozzáadása
ENDIF
IF nincs elég víz THEN
    víz hozzáadása
ENDIF
WHILE nem melegedett fel
    10 mp várakozás
ENDWHILE
csésze odahelyezése
gomb megnyomása
*/

/*
1. Összegző algoritmus

összeg = 0
CIKLUS AMÍG van még szám, ADDIG
    szám = következő elem
    összeg = összeg + szám
CIKLUS VÉGE 
*/
let numericArray = [11, 3, 2, 5, 4, 7, 6, 9, 8];
let itemNumber = numericArray.length;
let sum = 0;

for (i=0; i<itemNumber; i++) {
    sum += numericArray[i];
}
console.log("Szum: ", sum);

/*
2. Számláló algoritmus

db = 0
CIKLUS AMÍG van még szám ADDIG
    szám = következő elem
    HA igaz a feltétel a számra, AKKOR
        db = db + 
    FELTÉTEL VÉGE
CIKLUS VÉGE

*/
let count = 0;

for (i=0; i<itemNumber; i++) {
    if (numericArray[i] % 2 == 0) {
        count++;
    }
}
console.log("A páros számok mennyisége: ", count);

/*
3. Szélső érték kereső algoritmus

legnagyobb = első elem
CIKLUS AMÍG van még szám, ADDIG
    szám = következő szám
    HA szám > legnagyobb, AKKOR
        legnagyobb = szám
    FELTÉTEL VÉGE
CIKLUS VÉGE

*/

let max = numericArray[0];
let number = 0;

for (i=0; i<itemNumber; i++) {
    number = numericArray[i].lenght;
    if (max < number) {
        max = number;
    }
}

console.log("A legnagyobb szám: ", max);

let min = numericArray[0];

for (i=0; i<itemNumber; i++) {
    number = numericArray[i].valueOf();
    if (number < min) {
        min = number;
    }
}

console.log("A legkisebb szám: ", min);

/*
4. Eldöntés algoritmusa

találat = HAMIS;
CIKLUS AMÍG van elem ÉS NEM találat
    szám = követlező elem
    HA igaz a feltétel a számra, AKKOR
        találat = IGAZ
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let found = false;
let find = 1;
let talalat = "Nincs";
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] == find) {
        found = true;
        talalat = "Van";
    }
}
console.log(found,talalat);