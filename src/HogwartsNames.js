let Gryffindor_Name = [
    // "MCGONAGALL",
    // "SIRIUS",
    // "NEVILLE",
    // "HAGRID",
    "RON",
    "HERMIONE",
    // "DUMBLEDORE",
    // "LILY",
    "HARRY",
    // "LUPIN",
    // "WOOD",
    // "SEAMUS",
    // "JAMES",
    // "PERCY",
    // "FRED",
    // "GEORGE",
    // "GINNY",
];

let Slytherin_Name = [
    // "UMBRIDGE",
    // "LETA",
    "SNAPE",
    // "TOM",
    "MALFOY",
    // "GOYLE",
];

let Ravenclaw_Name = [
    "LUNA",
    // "CHO",
    "CHO CHANG",
    // "MYRTLE",
    // "LOCKHART",
];

let Hufflepuff_Name = [
    // "SUSAN",
    // "THESEUS",
    "NEWT",
    "CEDRIC",
    // "SPROUT",
];


function randomName(house="Gryffindor") {
    if (house === "Gryffindor"){
        return Gryffindor_Name[
            Math.floor(Math.random() * Gryffindor_Name.length)
        ];
    } else if (house === "Slytherin") {
        return Slytherin_Name[
            Math.floor(Math.random() * Slytherin_Name.length)
        ];
    } else if (house === "Ravenclaw") {
        return Ravenclaw_Name[
            Math.floor(Math.random() * Ravenclaw_Name.length)
        ];
    } else {
        return Hufflepuff_Name[
            Math.floor(Math.random() * Hufflepuff_Name.length)
            ];
    }
}

export { randomName };
