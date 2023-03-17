//--------------------------
// 1. ZMIENNE I TYPY
//--------------------------

console.log("------------------1. ZMIENNE I TYPY ------------------\n");

// zadanie a

function oneZadanieA() {
  console.log("Zadanie a\n");
  const prawda = true;
  const liczba = 12;
  const slowo = "Hello";
  console.log(
    prawda,
    typeof prawda,
    liczba,
    typeof liczba,
    slowo,
    typeof slowo
  );
}
oneZadanieA();
console.log();

// zadanie b

function oneZadanieB() {
  console.log("Zadanie b\n");
  console.log(`wynik dzialania to: ${2 + "2"} a typ to: ${typeof (2 + "2")}`);
  console.log(`wynik dzialania to: ${2 + 2} a typ to: ${typeof (2 + 2)}`);
  console.log(`wynik dzialania to: ${2 * "2"} a typ to: ${typeof (2 * "2")}`);
  console.log(
    `wynik dzialania to: ${1 == true} a typ to: ${typeof (1 == true)}`
  );
  console.log(
    `wynik dzialania to: ${0 == false} a typ to: ${typeof (1 == false)}`
  );
  console.log(
    `wynik dzialania to: ${0 == null} a typ to: ${typeof (0 == null)}`
  );
  console.log(
    `wynik dzialania to: ${null == undefined} a typ to: ${typeof (
      null == undefined
    )}`
  );

  console.log(
    "= - operator przypisania, \n== - operator porownania sprawdza czy obie wartosci sa takie same, \n=== tak samo jak poprzedni operator, dodatkowo sprawdza typ wartosci "
  );
}
oneZadanieB();
console.log();

// zadanie c

function oneZadanieC() {
  console.log("Zadanie c\n");
  console.log(
    "Typy referencyjne przechowują referencje do wartości, \na typy proste przechowują same wartości.\nTypy proste tp: Number, String, Boolean, Null itd.\nTyp złożony to: Object, Array, Function"
  );
}
console.log();
oneZadanieC();

// zadanie d
function oneZadanieD() {
  console.log("Zadanie d\n");
  let val = 0;
  console.log(Boolean(val));
  let num = "2137";
  console.log(Number(num));
  let str = 007;
  console.log(String(str));
  let und = undefined;
  console.log(Boolean(und));
}
console.log();
oneZadanieD();

// zadanie e
function oneZadanieE() {
  console.log("Zadanie e\n");
  const array = new Array();
  array.push("Dawid");
  array.push("Natalia");
  array.push("Ania");
  console.log(array);
}
console.log();
oneZadanieE();

// zadanie f
function oneZadanieF() {
  console.log("Zadanie f\n");
  const object = new Object();
  object.name = "Dawid";
  object.lastname = "Stachera";
  object.age = 33;
  console.log(object);
}
console.log();
oneZadanieF();

// zadanie g

function oneZadanieG() {
  console.log("Zadanie g\n");
  console.log(
    "NaN to skrot od Not a Number,\nwartosc NaN jest zwracana \ngdy wartosci dzialania \nnie mozna obliczyc."
  );
}
console.log();
oneZadanieG();

// zadanie h
function oneZadanieH() {
  console.log("Zadanie h\n");
  console.log(
    "Symbol służy do tworzenia unikalnych identyfikatorów, \nktóre mogą być używane jako klucze w obiektach \nlub jako atrybuty właściwości \nw celu utworzenia prywatnej właściwości."
  );
}
console.log();
oneZadanieH();

console.log("------------------2. FUNKCJE & WARUNKI ------------------\n");

// zadanie a

function twoZadanieA(a, b, c) {
  console.log("Zadanie a\n");
  return a + b + c;
}
const resoult = twoZadanieA(1, 2, 3);
console.log(resoult);

// zadanie b

function twoZadanieB(base, height) {
  console.log("Zadanie b\n");
  return (1 / 2) * base * height;
}
const area = twoZadanieB(10, 10);
console.log(area);

// zadanie c

function twoZadanieC(age) {
  console.log("Zadanie c\n");
  if (age > 18) {
    console.log("Tyle lat mineło od kiedy mozesz legalnie pic: ", age - 18);
  } else {
    console.log("nie dorastaj - nie warto");
  }
}
twoZadanieC(19);

// zadanie d

const array3 = [10, 20, 30];

function twoZadanieD(array3) {
  console.log("Zadanie d\n");
  console.log(
    `Przekazana tablica ma ${array3.length} elementy a elementem numer 3 jest ${array3[2]}`
  );
}
twoZadanieD(array3);

//  zadanie e (wroc do tego jeszcze)

let testPerson = {
  name: "Jan",
  surname: "Kowalski",
  age: 20,
  height: 180,
};

const anotherPerson = {
  name: "Anna",
  surname: "Kowalska",
  age: 44,
  height: 340,
};

function twoZadanieE(testPerson) {
  console.log("Zadanie e\n");
  console.log(
    `Pan/i ${testPerson.name} ${testPerson.surname} ma ${testPerson.age} lat oraz ${testPerson.height} cm wzrostu`
  );
}
twoZadanieE(anotherPerson);

// zadanie f

function twoZadanieF(testPerson, mod) {
  console.log("Zadanie f\n");
  testPerson.age = mod;
  console.log(
    `Pan/i ${testPerson.name} ${testPerson.surname} ma ${testPerson.age} lat oraz ${testPerson.height} cm wzrostu`
  );
}
twoZadanieF(testPerson, 80);

// zadanie g

function twoZadanieG(number) {
  console.log("Zadanie g\n");
  if (typeof number !== "number") {
    console.log("wprowadz wartosc typu number");
  } else {
    console.log(number);
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz");
    } else if (number % 3 === 0) {
      console.log("Fizz");
    } else if (number % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(`${number} nie jest podzielne przez 3 i 5`);
    }
  }
}
twoZadanieG(15);

// zadanie h

function twoZadanieH(number) {
  console.log("Zadanie h\n");
  number % 2 === 0
    ? console.log(`${number} jest liczba parzysta`)
    : console.log(`${number} jest liczba nieparzysta`);
}
twoZadanieH(20);

// *zadanie i ( Math.floor i Math.random() do nauki)

function twoZadanieI() {
  console.log("Zadanie i\n");
  const ranNum = Math.floor(Math.random() * 10) + 1;
  console.log(ranNum);
}
twoZadanieI();

// **zadanie j

function twoZadanieJ(min, max) {
  console.log("Zadanie j\n");
  console.log(Math.floor(Math.random() * (max - min)) + min);
}
twoZadanieJ(25, 28);

// ***zadanie k 

function twoZadanieK(x, y) {
  console.log("Zadanie k\n");
  console.log(Math.abs(Math.round(x)));
  console.log(Math.pow(Math.round(x), y));
  console.log(Math.ceil(Math.round(x)));
}
twoZadanieK(-9.45, 2);

//--------------------------
// FUNKCJE & PĘTLE
//--------------------------

console.log("------------------ 3. FUNKCJE & PĘTLE ------------------\n");

// zadanie a

function threeZadanieA() {
  console.log("Zadanie a\n");
  for (i = 0; i <= 9; i++) {
    console.log(i);
  }
}
threeZadanieA();

// zadanie b

function threeZadanieB() {
  console.log("Zadanie b\n");
  for (i = 10; i > 0; i--) {
    console.log(i);
  }
}
threeZadanieB();
// zadanie c

function threeZadanieC() {
  console.log("Zadanie c\n");
  for (i = 5; i <= 15; i++) {
    console.log(i);
  }
}
threeZadanieC();

// zadanie d

function threeZadanieD() {
  console.log("Zadanie d\n");
  for (i = 0; i >= -10; i--) {
    console.log(i);
  }
}
threeZadanieD();

// zadanie e

function threeZadanieE() {
  console.log("Zadanie e\n");
  for (i = 1; i <= 20; i += 2) {
    console.log(i);
  }
}
threeZadanieE();

// zadanie f

function threeZadanieF() {
  console.log("Zadanie f\n");
  for (i = 10; i >= -10; i--) {
    console.log(i);
  }
}
threeZadanieF();

// zadanie g

function threeZadanieG() {
  console.log("Zadanie g\n");
  for (i = 1; i <= 100; i *= 2) {
    console.log(i);
  }
}
threeZadanieG();

// zadanie h
function threeZadanieH() {
  console.log("Zadanie h\n");
  for (i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
threeZadanieH();

// zadanie i

function threeZadanieI() {
  console.log("Zadanie i\n");
  for (let i = 1; i <= 10; i++) {
    i % 2 !== 0
      ? console.log(`${i} nieparzysta liczba`)
      : console.log(`${i} parzysta liczba`);
  }
}
threeZadanieI();

// zadanie j

function threeZadanieJ(number) {
  console.log("Zadanie j\n");
  for (i = 1; i <= number; i++) {
    console.log(i);
  }
}
threeZadanieJ(4);

// zadanie k

function threeZadanieK(number) {
  console.log("Zadanie k\n");
  for (i = number; i <= 50; i += number) {
    console.log(i);
  }
}
threeZadanieK(9);

//  zadanie l

const arrNames = [
  "Ksawery",
  "Zenobiusz",
  "Klementyna",
  "Apolonia",
  "Jeremiasz",
  "Bernadetta",
];
function threeZadanieL(arrNames) {
  console.log("Zadanie l\n");
  for (i = 0; i < arrNames.length; i++) {
    console.log(`Hello ${arrNames[i]}`);
  }
}
threeZadanieL(arrNames);

// zadanie ł
const arrObjects = [
  {
    brand: "Mustang",
    color: "niebieski",
  },
  {
    brand: "Tesla",
    color: "czarna",
  },
  {
    brand: "Polonez",
    color: "żółty",
  },
  {
    brand: "Toyota",
    color: "fioletowa",
  },
];

function threeZadanieŁ(arrObjects) {
  console.log("Zadanie ł\n");
  for (i = 0; i < arrObjects.length; i++) {
    const behindYou = arrObjects[i];
    console.log(`Przed Tobą stoi ${behindYou.color} ${behindYou.brand}`);
  }
}
threeZadanieŁ(arrObjects);

// zadanie m

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function threeZadanieM(arrNumbers) {
  console.log("Zadanie m\n");
  for (i = 0; i < arrNumbers.length; i++) {
    const element = arrNumbers[i];
    if (element % 2 == 0) {
      console.log(element);
    }
  }
}
threeZadanieM(arrNumbers);

// *zadanie n

const arrTypes = [
  2,
  4,
  5,
  undefined,
  null,
  "val",
  NaN,
  7,
  10,
  333,
  "874",
  22,
  21,
  400,
  "400",
  "undefined",
];

function threeZadanieN(arrTypes) {
  console.log("Zadanie n\n");
  const arrOther = [];
  const arrNumbers = [];
  const arrEven = [];

  for (let i = 0; i < arrTypes.length; i++) {
    const element = arrTypes[i];

    if (typeof element !== "number" || isNaN(element)) {
      arrOther.push(element);
    } else {
      arrNumbers.push(element);
      if (element % 2 === 0) {
        arrEven.push(element);
      }
    }
  }
  console.log(arrOther);
  console.log(arrNumbers);
  console.log(arrEven);
}

threeZadanieN(arrTypes);

//--------------------------
// METODY
//--------------------------

console.log("------------------ 4. METODY ------------------\n");

// zadanie a

const names = ["Seba", "Kari", "Mati", "Andżi"];
function fourZadanieA() {
  console.log("Zadanie a\n");
  const halloNames = names.map(function (item) {
    return " Hello " + item;
  });
  console.log(halloNames.toString());
}
fourZadanieA();

// zadanie b

const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function fourZadanieB() {
  console.log("Zadanie b\n");
  const arrayModulo = array10.filter(function (item) {
    return item % 2 === 0;
  });
  console.log(arrayModulo);
}
fourZadanieB();

//  zadanie c

const people = [
  {
    name: "Tomasz",
    lastname: "Kowalski",
    gender: "male",
  },
  {
    name: "Karol",
    lastname: "Nowak",
    gender: "male",
  },
  {
    name: "Joanna",
    lastname: "Kowalska",
    gender: "female",
  },
  {
    name: "Anna",
    lastname: "Nowak",
    gender: "female",
  },
];
function fourZadanieC() {
  console.log("Zadanie c\n");
  const femalePeople = people.filter(function (item) {
    return item.gender === "female";
  });
  console.log(femalePeople);
}
fourZadanieC();
// zadanie d ( split(), slice(), sort(), map(), charAt(), toLowerCase(), toUpperCase())

const shopping =
  "kawa MaSŁo chleb WODA ogórki jabłka Ziemniaki chipsy salcesoN wędLIna pieczarki Włoszczyzna heRBata truskawKi maliny";

function fourZadanieD(shopping) {
  console.log("Zadanie d\n");
  const list = shopping.split(" ");
  const lowerList = list.map((word) => word.toLowerCase());
  const upperList = lowerList.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1)
  );
  const sortList = upperList.sort();
  console.log(sortList);
}
fourZadanieD(shopping);

// zadanie e

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
function fourZadanieE() {
  console.log("Zadanie e\n");
  const revers = alphabet.reverse();
  const together = revers.join("");
  console.log(together);
}
fourZadanieE();
