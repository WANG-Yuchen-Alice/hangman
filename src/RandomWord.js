let Programming_Language = [
    "MCGONAGALL",
    "SIRIUS",
    "NEVILLE",
    "HAGRID",
    "RON",
    "HERMIONE",
    "DUMBLEDORE",
    "LILY",
    "HARRY",
    "LUPIN",
    "WOOD",
    "SEAMUS",
    "JAMES",
    "PERCY",
    "FRED",
    "GEORGE",
    "GINNY",
];

function randomWord() {
  return Programming_Language[
    Math.floor(Math.random() * Programming_Language.length)
  ];
}

export { randomWord };
