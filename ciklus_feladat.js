/*
//2. Tetszőleges betűvel tetszőleges (1-10) sort töltsünk fel a képernyőn!

let sorokSzama = 6
let betu = "*"
for (let i = 0; i < sorokSzama; i++) {
    console.log(betu.repeat(i))

}



// 3. Írassuk ki 99-től csökkenő sorrendben az összes pozitív, 3-mal osztható egész számot!
for (let i = 99; i > 0; i-- ){
    if (i % 3 === 0)
        {
            console.log(i)
        }
}

// 4. HF



// 5. Határozzuk meg az első N természetes szám összegét!
let N = 10
let osszeg = 0 

for (let i = 1; i <= N; i++) 
    {
        osszeg += i
    } 

console.log(osszeg)


// 6. Írjuk ki az első N négyzetszám átlagát!
let N = 10
let osszeg = 0

for (let i = 1; i <= N; i++) {
    osszeg += i ** 2
}

let atlag = osszeg / N
console.log(atlag)


// 8. Készítsünk N-es szorzótáblát (1xN, 2xN,...)!
let N2 = 6
for (let i = 1; i <= N2; i++) 
{
    console.log(`${i} x ${N2} = ${i * N2}`)
}

// Szimuláljunk kockadobást: dobjuk fel addig a kockát, amíg hatost nem dobunk. Írjuk ki az egyes dobások eredményét, majd a sorozat végén a dobások átlagát is!
let dobasokSzama = 0
let dobasokOsszege = 0

while (true) {
    let dobas = Math.floor(Math.random() * 6) + 1
    console.log(dobas)
    dobasokSzama++
    dobasokOsszege += dobas
    if (dobas === 6) {
        break
    }
}
let atlag = dobasokOsszege / dobasokSzama
console.log(`A dobások átlaga: ${atlag}`)

// Szimuláljunk kockadobást: dobjuk fel addig a kockát, amíg 3 db hatost nem dobunk. Írjuk ki az egyes dobások eredményét, majd a sorozat végén a dobások átlagát is!

let dobasokSzama = 0
let dobasokOsszege = 0
let hatosDobasokSzama = 0

while (hatosDobasokSzama < 3) {
    let dobas = Math.floor(Math.random() * 6) + 1
    console.log(dobas)
    dobasokSzama++
    dobasokOsszege += dobas

    if (dobas === 6) {
        hatosDobasokSzama++;
    }
}
let atlag = dobasokOsszege / dobasokSzama
console.log(`A dobások átlaga: ${atlag}`)

// 13. HF


*/
// Kérjen be a program számokat mindaddig, amíg 0-át nem írunk be! Ezután írja ki, hogy
//páros szám volt a beírt számok között!

let szam = null
let parosSzamTalalva = false

while (true) {
    szam = parseInt(prompt("Adj meg egy számot (0 a kilépéshez):"))
    if (isNaN(szam)) 
        {
            alert("Kérem, érvényes számot adj meg!")
            continue
        }
        console.log(`Beírt szám: ${szam}`)
    if (szam === 0) {
        break
    }
    if (szam % 2 === 0) {
        parosSzamTalalva = true
    }
}
if (parosSzamTalalva) {
    console.log("Volt páros szám a beírt számok között.")
} else {
    console.log("Nem volt páros szám a beírt számok között.")
}

