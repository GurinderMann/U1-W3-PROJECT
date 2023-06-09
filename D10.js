/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.

  */
 const x = 10+20

 console.log(x)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random =Math.floor(Math.random()* 21)
console.log(random)



/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me ={
    name: 'Gurinder',
    surname: 'Mann',
    age : 23
}

console.log(me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.

*/

delete me.age

console.log(me)



/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["Javascript", "HTML", "CSS" ]




/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push  ("GitHub")



/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop()


// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.


*/

const dice = () =>{

  const randomN =  Math.floor(Math.random()*6)+1

  console.log (randomN)



}

dice()

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (num1 ,num2) => {

  if (num1 > num2){
    console.log ('Num1 è maggiore di Num2')
  }

  else{
    console.log('Num2 è maggiore di Num1')
  }


}

const result = whoIsBigger(29,20)
console.log(result)

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe= () =>{
  const stringa = 'Ciao epicode '
  const array = stringa.split(' ')
  console.log(array)

}

splitMe()


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = ()=>{

    const str = 'Epicode'
    const boolean = false 

    if (boolean === true ){

      console.log(str.slice(1))

    }
     else {

      console.log(str.slice(0, -1))
      
     }

}

deleteOne()


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = () =>{

    const str = 'Ciao siamo in 4'
    const str1 = str.replace(/[0-9]/g, '');
    console.log(str1)

}

onlyLetters()


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = (str) =>{
  if (str.includes ('@') && str.includes('.com') && str.indexOf('.') > str.indexOf('@')) {
    console.log(true)
  }
  else{
    console.log(false)
  }

}

isThisAnEmail('giovannimario.com')

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt=()=>{
    const now = new Date()
    const date = now.getDay()
    console.log(date)
}

whatDayIsIt()

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/



function rollTheDices(num) {
  const result = {
    sum: 0,
    values: []
  };

  for (let i = 0; i < num; i++) {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    result.values.push(diceValue);
    result.sum += diceValue;
  }

  return result;
}

const rollResult = rollTheDices(3);
console.log(rollResult);



/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/


const howManyDays = () => {
  const now = new Date()
  const startOfYear = new Date(now.getFullYear(), 0, 1)
  const differenceInTime = now.getTime() - startOfYear.getTime()
  const daysPassed = Math.floor(differenceInTime / (1000 * 60 * 60 * 24))
  console.log(daysPassed)
}

howManyDays()


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday= ()=>{

    const now = new Date()
    const date = now.getDate()
    const birthday = new Date ('2023-06-09')
    if (birthday.getDate()===date && birthday.getMonth() === now.getMonth()){
      console.log('Today is your birthday')
    }
     else{

      console.log('Today is not your birthday')
     }
    

}

isTodayMyBirthday()


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/


const deleteProp= () =>{

    const obj = {
      name: 'mario', 
      surname: 'rossi',
      age:20
    }

    const str = 'mario'

    if (obj.surname === str){

      delete obj.surname
      console.log (obj)

    }
    else if (obj.name === str)  {
      delete obj.name
      console.log (obj)
    }
    else if (obj.age === str)  {
      delete obj.age
      console.log (obj)
    }

    else{
      console.log (obj)
    }
}

deleteProp()

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/



  



/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/


const container = () => {
  
  const container = document.getElementById('container')
  return container
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const td = () =>{
  const td = document.querySelectorAll('td')
  return td
}
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printTd = ()=>{

  const td = document.querySelectorAll('td')
  td.forEach((td) => {
    const text = td.textContent;
    console.log(text);
  });
}


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const background =()=>{
  const link = document.querySelectorAll ('[href]')
  link.Style.backgroundColor = 'red'
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const newElement= () =>{
  const list = getElementById('myList')
  const element = document.createElement ('li')
  element.innerText = 'Epicode'

  list.appendChild(element)

}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const empty = () =>{
  const list = document.getElementById ('myList')
  list.innerText = ''
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const cssClass = () =>{
  const tr = document.querySelectorAll ('tr')
  tr.classList.add('test')
}


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const tree=(n) => {
  for (let i = 1; i <= n; i++) {
    const stars = '*'.repeat (i);
    console.log( stars);
  }
}
tree(4)

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
const Trees =(n) => {
  for (let i = 1; i <= n; i++) {
    const spaces = ' '.repeat(n - i);
    const stars = '*'.repeat( i * 2 );
    console.log(spaces + stars);
  }
}
Trees (3)
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/


/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


// ESERCIZIO 12


const newestMovie = () =>{

  let newest = null;

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const movieYear = parseInt(movie.Year);

    if (!isNaN(movieYear)) {
      if (newest === null || movieYear > newest.Year) {
        newest = movie;
      }
    }
  }

  return newest;
}

const newest = newestMovie(movies);
console.log(newest);


// ESERCIZIO 13

const countMovies = ()=>{

    const moviesNumber = movies.length
    console.log(moviesNumber)

}

countMovies()


// ESERCIZIO 14


const onlyTheYears= ()=>{

  const arrayYears = movies.map(movies => movies.Year)
  console.log(arrayYears)

}

onlyTheYears()


// ESERCIZIO 15

const onlyInLastMillennium= ()=>{
  const moviesLastMillennium = movies.filter(movie => {
    const movieYear = parseInt(movie.Year);
    return movieYear >= 2000 ;
  });
    return moviesLastMillennium
  }

const moviesLastMillennium = onlyInLastMillennium();
console.log(moviesLastMillennium);


// ESERCIZIO 16

const sumAllTheYears= () =>{

  const sum = movies.reduce((total,movie)=>{
    const movieYear = parseInt(movie.Year);
    return total + movieYear},0)
  

  console.log(sum)
}

sumAllTheYears()


// ESERCIZIO 17

const  searchByTitle =(str)=> {
  const matchingMovies = movies.filter((movie) =>
    movie.Title.includes(str)
  );
  return matchingMovies;
}
const search = searchByTitle('Avengers')
console.log(search)

// ESERCIZIO 18

function searchAndDivide(str) {
  const match = [];
  const unmatch = [];

  movies.forEach((movie) => {
    if (movie.Title.includes(str)) {
      match.push(movie.Title);
    } else {
      unmatch.push(movie.Title);
    }
  });

  return {
    match,
    unmatch
  };
}

moviesList = searchAndDivide ('Avengers')
console.log(moviesList)

// ESERCIZIO 19

const removeIndex =(n) => {
  if (n < 0 || n >= movies.length) {
        return movies;
  }
  const updatedMovies = [...movies.slice(0, n), ...movies.slice(n + 1)];
  return updatedMovies;
}
const updatedMovies = removeIndex(2);
console.log(updatedMovies);