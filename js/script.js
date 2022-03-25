// Dato un array di pianeti, trovare quello col diametro maggiore e stamparlo
const solarSistemData =
[
    {
        nome: 'Saturno',
        distanzaMinimaSoleKm: 1352550000,
        distanzaMassimaSoleKm: 1515500000,
        satelliti: 82,
        diametroEquatoreKm: 108728,
    },
    {
        nome: 'Venere',
        distanzaMinimaSoleKm: 107480000,
        distanzaMassimaSoleKm: 10894000,
        satelliti: 0,
        diametroEquatoreKm: 12103.6
    },
    {
        nome: 'Nettuno',
        distanzaMinimaSoleKm: 4459631496,
        distanzaMassimaSoleKm: 4536874325,
        satelliti: 14,
        diametroEquatoreKm: 49528
    },
    {
        nome: 'Giove',
        distanzaMinimaSoleKm: 740742598,
        distanzaMassimaSoleKm: 816081455,
        satelliti: 79,
        diametroEquatoreKm: 142984
    },
    {
        nome: 'Terra',
        distanzaMinimaSoleKm: 147098074,
        distanzaMassimaSoleKm: 152097701,
        satelliti: 1,
        diametroEquatoreKm: 12756.274
    },
    {
        nome: 'Urano',
        distanzaMinimaSoleKm: 2741300000,
        distanzaMassimaSoleKm: 3003620000,
        satelliti: 27,
        diametroEquatoreKm: 51118
    },
    {
        nome: 'Marte',
        distanzaMinimaSoleKm: 206644545,
        distanzaMassimaSoleKm: 249228730,
        satelliti: 2,
        diametroEquatoreKm: 6804.9
    },
    {
        nome: 'Mercurio',
        distanzaMinimaSoleKm: 46000000,
        distanzaMassimaSoleKm: 69820000,
        satelliti: 0,
        diametroEquatoreKm: 4879.4
    }
];

let diametri = [];
for (let i = 0; i < solarSistemData.length; i++) {
    let d = solarSistemData[i].diametroEquatoreKm;
    diametri.push(d);
}

console.log(diametri);
diametri = diametri.sort((a, b) => b - a);
console.log(diametri[0]);