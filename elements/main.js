let current_element;
let wait_validate = false;
let selected_emplacement;

const square_size = 25;
const square_margin = 5;
const table_descriptor = [
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
    [1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");



function draw_table() {
    ctx.fillStyle = '#555';
    for (let i in table_descriptor) {
        for (let j in table_descriptor[i]) {
            if (table_descriptor[i][j] == 1) {
                ctx.fillRect(j*square_size + j*square_margin, i*square_size + i*square_margin, square_size, square_size);
            }
        }
    }
}

draw_table();

canvas.addEventListener('mousedown', (e) => {
    x = e.clientX - canvas.getBoundingClientRect().left;
    y = e.clientY - canvas.getBoundingClientRect().top;
    
    i = Math.floor(x/30);
    j = Math.floor(y/30);
    
    if (table_descriptor[j][i] == 1) {
        draw_table();
        ctx.fillStyle = '#992';
        ctx.fillRect(i*square_size + i*square_margin, j*square_size + j*square_margin, square_size, square_size);
        selected_emplacement = [j, i];
    }
});

function Element (name, symbol, atomic_number, weight, position) {
    this.name = name;
    this.symbol = symbol;
    this.atomic_number = atomic_number;
    this.weight = weight;
    this.position = position;
}

const elements = [
    new Element(
        "hydrogen",
        "H",
        1,
        1.01,
        0
    ),
    new Element(
        "helium",
        "He",
        2,
        4.00,
        1
    ),
    new Element(
        "lithium",
        "Li",
        3,
        6.94,
        2
    ),
    new Element(
        "beryllium",
        "Be",
        4,
        9.01,
        3
    ),
    new Element(
        "boron",
        "B",
        5,
        10.81,
        4
    ),
    new Element(
        "carbon",
        "C",
        6,
        12.01,
        5
    ),
    new Element(
        "nitrogen",
        "N",
        7,
        14.01,
        6
    ),
    new Element(
        "oxygen",
        "O",
        8,
        16.00,
        7
    ),
    new Element(
        "fluorine",
        "F",
        9,
        19.00,
        8
    ),
    new Element(
        "neon",
        "Ne",
        10,
        20.18,
        9
    ),
    new Element(
        "sodium",
        "Na",
        11,
        23.00,
        10
    ),
    new Element(
        "magnesium",
        "Mg",
        12,
        24.31,
        11
    ),
    new Element(
        "aluminium",
        "Al",
        13,
        26.98,
        12
    ),
    new Element(
        "silicon",
        "Si",
        14,
        28.09,
        13
    ),
    new Element(
        "phosphorus",
        "P",
        15,
        30.97,
        14
    ),
    new Element(
        "sulfur",
        "S",
        16,
        32.07,
        15
    ),
    new Element(
        "chlorine",
        "Cl",
        17,
        35.45,
        16
    ),
    new Element(
        "argon",
        "Ar",
        18,
        39.95,
        17
    ),
    new Element(
        "potassium",
        "K",
        19,
        39.10,
        18
    ),
    new Element(
        "calcium",
        "Ca",
        20,
        40.08,
        19
    ),
    new Element(
        "scandium",
        "Sc",
        21,
        44.96,
        20
    ),
    new Element(
        "titanium",
        "Ti",
        22,
        47.87,
        21
    ),
    new Element(
        "vanadium",
        "V",
        23,
        50.94,
        22
    ),
    new Element(
        "chromium",
        "Cr",
        24,
        52.00,
        23
    ),
    new Element(
        "manganese",
        "Mn",
        25,
        54.94,
        24
    ),
    new Element(
        "iron",
        "Fe",
        26,
        55.84,
        25
    ),
    new Element(
        "cobalt",
        "Co",
        27,
        58.93,
        26
    ),
    new Element(
        "nickel",
        "Ni",
        28,
        58.69,
        27
    ),
    new Element(
        "copper",
        "Cu",
        29,
        63.55,
        28
    ),
    new Element(
        "zinc",
        "Zn",
        30,
        65.38,
        29
    ),
    new Element(
        "gallium",
        "Ga",
        31,
        69.72,
        30
    ),
    new Element(
        "germanium",
        "Ge",
        32,
        72.63,
        31
    ),
    new Element(
        "arsenic",
        "As",
        33,
        74.92,
        32
    ),
    new Element(
        "selenium",
        "Se",
        34,
        78.97,
        33
    ),
    new Element(
        "bromine",
        "Br",
        35,
        79.90,
        34
    ),
    new Element(
        "krypton",
        "Kr",
        36,
        83.30,
        35
    ),
    new Element(
        "rubidium",
        "Rb",
        37,
        85.47,
        36
    ),
    new Element(
        "strontium",
        "Sr",
        38,
        87.62,
        37
    ),
    new Element(
        "yttrium",
        "Y",
        39,
        88.91,
        38
    ),
    new Element(
        "zirconium",
        "Zr",
        40,
        91.22,
        39
    ),
    new Element(
        "niobium",
        "Nb",
        41,
        92.91,
        40
    ),
    new Element(
        "molybdenum",
        "Mo",
        42,
        95.95,
        41,
    ),
    new Element(
        "technetium",
        "Tc",
        43,
        96.91,
        42
    ),
    new Element(
        "ruthenium",
        "Ru",
        44,
        101.07,
        43
    ),
    new Element(
        "rhodium",
        "Rh",
        45,
        102.91,
        44
    ),
    new Element(
        "palladium",
        "Pd",
        46,
        106.42,
        45
    ),
    new Element(
        "silver",
        "Ag",
        47,
        107.87,
        46
    ),
    new Element(
        "cadmium",
        "Cd",
        48,
        112.41,
        47
    ),
    new Element(
        "indium",
        "In",
        49,
        114.82,
        48
    ),
    new Element(
        "tin",
        "Sn",
        50,
        118.71,
        49
    ),
    new Element(
        "antimony",
        "Sb",
        51,
        121.76,
        50,
    ),
    new Element(
        "tellurium",
        "Te",
        52,
        127.60,
        51,
    ),
    new Element(
        "iodine",
        "I",
        53,
        126.90,
        52
    ),
    new Element(
        "xenon",
        "Xe",
        54,
        131.29,
        53
    ),
    new Element(
        "cesium",
        "Cs",
        55,
        132.91,
        54
    ),
    new Element(
        "barium",
        "Ba",
        56,
        137.33,
        55
    ),
    new Element(
        "lanthanum",
        "La",
        57,
        138.91,
        88
    ),
    new Element(
        "cerium",
        "Ce",
        58,
        140.12,
        89
    ),
    new Element(
        "praseodymium",
        "Pr",
        59,
        140.91,
        90
    ),
    new Element(
        "neodymium",
        "Nd",
        60,
        144.24,
        91
    ),
    new Element(
        "promethium",
        "Pm",
        61,
        144.91,
        92
    ),
    new Element(
        "samarium",
        "Sm",
        62,
        150.36,
        93
    ),
    new Element(
        "europium",
        "Eu",
        63,
        151.96,
        94
    ),
    new Element(
        "gadolinium",
        "Gd",
        64,
        157.25,
        95
    ),
    new Element(
        "terbium",
        "Tb",
        65,
        158.93,
        96
    ),
    new Element(
        "dysprosium",
        "Dy",
        66,
        162.50,
        97
    ),
    new Element(
        "holmium",
        "Ho",
        67,
        164.93,
        98
    ),
    new Element(
        "erbium",
        "Er",
        68,
        167.26,
        99
    ),
    new Element(
        "thulium",
        "Tm",
        69,
        168.93,
        100
    ),
    new Element(
        "ytterbium",
        "Yb",
        70,
        173.05,
        101
    ),
    new Element(
        "luterium",
        "Lu",
        71,
        174.97,
        102
    ),
    new Element(
        "hafnium",
        "Hf",
        72,
        178.49,
        56
    ),
    new Element(
        "tantalum",
        "Ta",
        73,
        180.95,
        57
    ),
    new Element(
        "tungsten",
        "W",
        74,
        183.84,
        58
    ),
    new Element(
        "rhenium",
        "Re",
        75,
        186.21,
        59
    ),
    new Element(
        "osmium",
        "Os",
        76,
        190.23,
        60
    ),
    new Element(
        "iridium",
        "Ir",
        77,
        192.22,
        61
    ),
    new Element(
        "platinium",
        "Pt",
        78,
        195.08,
        62
    ),
    new Element(
        "gold",
        "Au",
        79,
        196.97,
        63
    ),
    new Element(
        "mercury",
        "Hg",
        80,
        200.59,
        64
    ),
    new Element(
        "thallium",
        "Tl",
        81,
        204.38,
        65
    ),
    new Element(
        "lead",
        "Pb",
        82,
        207.21,
        66
    ),
    new Element(
        "bismuth",
        "Bi",
        83,
        208.98,
        67
    ),
    new Element(
        "polonium",
        "Po",
        84,
        208.98,
        68
    ),
    new Element(
        "astatine",
        "At",
        85,
        209.99,
        69
    ),
    new Element(
        "radon",
        "Rn",
        86,
        222.02,
        70
    ),
    new Element(
        "francium",
        "Fr",
        87,
        223.02,
        71
    ),
    new Element(
        "radium",
        "Ra",
        88,
        226.03,
        72
    ),
    new Element(
        "actinium",
        "Ac",
        89,
        227.03,
        103
    ),
    new Element(
        "thorium",
        "Th",
        90,
        232.04,
        104
    ),
    new Element(
        "protactinium",
        "Pa",
        91,
        231.04,
        105
    ),
    new Element(
        "uranium",
        "U",
        92,
        238.03,
        106
    ),
    new Element(
        "neptunium",
        "Np",
        93,
        237.05,
        107
    ),
    new Element(
        "plutonium",
        "Pu",
        94,
        244.06,
        108
    ),
    new Element(
        "americium",
        "Am",
        95,
        243.06,
        109
    ),
    new Element(
        "curium",
        "Cm",
        96,
        204.07,
        110,

    ),
    new Element(
        "berkelium",
        "Bk",
        97,
        247.07,
        111
    ),
    new Element(
        "californium",
        "Cf",
        98,
        251.058,
        112
    ),
    new Element(
        "einsteinium",
        "Es",
        99,
        252.08,
        113
    ),
    new Element(
        "fermium",
        "Fm",
        100,
        257.10,
        114
    ),
    new Element(
        "mendelevium",
        "Md",
        101,
        258.10,
        115
    ),
    new Element(
        "nobelium",
        "No",
        102,
        259.10,
        116
    ),
    new Element(
        "lawrencium",
        "Lr",
        103,
        266.12,
        117
    ),
    new Element(
        "rutherfordium",
        "Rf",
        104,
        267.12,
        73
    ),
    new Element(
        "dubnium",
        "Db",
        105,
        268.13,
        74
    ),
    new Element(
        "seaborgium",
        "Sg",
        106,
        269.13,
        75
    ),
    new Element(
        "bohrium",
        "Bh",
        107,
        270.13,
        76
    ),
    new Element(
        "hassium",
        "Hs",
        108,
        269.13,
        77
    ),
    new Element(
        "meitnerium",
        "Mt",
        109,
        277.15,
        78
    ),
    new Element(
        "darmstadtium",
        "Ds",
        110,
        282.17,
        79
    ),
    new Element(
        "roentgenium",
        "Rg",
        111,
        282.17,
        80
    ),
    new Element(
        "copernicium",
        "Cn",
        112,
        286.18,
        81
    ),
    new Element(
        "nihonium",
        "Nh",
        113,
        286.12,
        82
    ),
    new Element(
        "flerovium",
        "Fl",
        114,
        290.19,
        83
    ),
    new Element(
        "moscovium",
        "Mc",
        115,
        290.20,
        84
    ),
    new Element(
        "livermorium",
        "Lv",
        116,
        293.21,
        85
    ),
    new Element(
        "tennessine",
        "Ts",
        117,
        294.21,
        86
    ),
    new Element(
        "oganesson",
        "Og",
        118,
        295.22,
        87
    )
]

let unlockeds = -1;
let fluency = [];


function display_element(element) {
    document.getElementById("r_symbol").innerHTML = element.symbol;
    document.getElementById("r_atomic_number").innerHTML = element.atomic_number;
    document.getElementById("r_weight").innerHTML = element.weight.toLocaleString('en-US', {minimumFractionDigits: 2}) + " g.mol<sup>-1</sup>";
}

function empty_results() {
    [].slice.call(document.getElementById("result_span").children).map((a) => {
        a.innerHTML = ""; 
        a.classList.remove("true");
        a.classList.remove("false");
        a.classList.remove("new");
    });

}

function empty_question() {
    [].slice.call(document.getElementById("question_span").children).map((a) => {a.innerHTML = "";a.value= "";});
    selected_emplacement = null;
}

function check_result() {
    if (wait_validate) {
        let local_fluency = 0;
        let e = elements[current_element];
        document.getElementById("r_symbol").classList.add( (document.getElementById("q_symbol").value == e.symbol).toString())
        document.getElementById("r_atomic_number").classList.add( (document.getElementById("q_atomic_number").value == e.atomic_number).toString())
        document.getElementById("r_weight").classList.add( (document.getElementById("q_weight").value == e.weight).toString())
        display_element(e);
        [].slice.call(document.getElementById("result_span").children).map((a) => {
            if (a.classList.contains("true")) {
                local_fluency += 0.25;
            }
            else if (a.classList.contains("false")) {
                local_fluency -= 0.25;
            }
        });
        
        let c = pos2coord(e.position);
        if (selected_emplacement != null && (selected_emplacement[0] == c[0] && selected_emplacement[1] == c[1])) {
            ctx.fillStyle = "#00ff00";
            local_fluency += 0.25;
        }
        else {
            ctx.fillStyle = "#ff0000";
            local_fluency -= 0.25;
        }
        ctx.fillRect(c[1]*square_size + c[1]*square_margin, c[0]*square_size + c[0]*square_margin, square_size, square_size);
        wait_validate = false;
        document.getElementById("vbutton").innerHTML = "next";

        fluency[current_element] += local_fluency*0.8;
        fluency[current_element] = Math.max(0, Math.min(fluency[current_element], 1));
        hide_inputs();
        save_progression();
    }
    else {
        if (mean_fluency() >= 0.8) {
            introduce_element();
        } else {
            document.getElementById("vbutton").innerHTML = "validate";

            let smallestRadom = 1;
            let id = 0;
            for (let i = 0; i <= unlockeds; i++) {
                let f = fluency[i]*0.6+0.2; // shrink the fluency so that it is between 0.2 and 0.8
                let r = Math.random()*f;
                if (r < smallestRadom) {
                    smallestRadom = r;
                    id = i;
                }
            }
            ask_element(id);
            draw_table();
            show_inputs();
        }

    }
}

function ask_element(id) {
    wait_validate = true;
    empty_results();
    empty_question();
    let e = elements[id];
    document.getElementById("q_name").innerHTML = e.name;
    current_element = id;
}

function pos2coord(pos) {
    let z = -1;
    for (let i in table_descriptor) {
        for (let j in table_descriptor[i]) {
            if (table_descriptor[i][j] == 1) {
                z++;
            }
            if (z == pos) {
                return [i,j];
            }
        }
    }
}

function coord2pos(coord) {
    let z = -1;
    for (let i in table_descriptor) {
        for (let j in table_descriptor[i]) {
            if (table_descriptor[i][j] == 1) {
                z++;
            }
            if (coord[0] == i && coord[1] == j) {
                return z;
            }
        }
    }
}

function mean_fluency() {
    let tot = 0;
    for (i of fluency) {
        tot += i;
    }
    return tot/fluency.length;
}

function introduce_element() {
    if (unlockeds < elements.length) {
        is_new = true;
        unlockeds++;
        fluency.push(0.0);
        display_element(elements[unlockeds]);
        document.getElementById("n_title").innerHTML = "NEW : " + elements[unlockeds].name;
        [].slice.call(document.getElementById("result_span").children).map((a) => {a.classList.add("new")});
        save_progression();
    }
}

function hide_inputs() {
    [].slice.call(document.getElementsByTagName("input")).map((a) => {a.hidden = true});
}

function show_inputs() {
    [].slice.call(document.getElementsByTagName("input")).map((a) => {a.hidden = false});
}

function save_progression() {
    let d = new Date();
    d.setTime(d.getTime()+(30* 24*3600*1000));
    save = ""+unlockeds+"!"+fluency.toString();
    document.cookie = "save="+ save +";expires="+d.toUTCString()+";path=/;SameSite=Strict";
}

function check_cookies() {
    let a = decodeURIComponent(document.cookie);
    let b = a.split(';')
    for (i of b) {
        while (i.charAt(0) == ' ') {
            i = i.substring(1);
        }
        if (i.startsWith("save=")) {
            i = i.substring(5);
            let c = i.split('!');
            unlockeds = c[0];
            let d = c[1].split(',');
            let f = [];
            d.map((e) => {f.push(parseFloat(e))});
            fluency = f;
        }
    }
}

function main() {
    check_cookies();
    hide_inputs();
    if (unlockeds == -1 || fluency[0] == NaN) {
        empty_question();
        introduce_element();
    }
}


main()