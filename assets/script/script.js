// les booleens

/* c est une variable a 2 etats : 
            - vrai( true)
            - faux (false)
   c 'est en general utilisé pour tester ou comparer et la reponse renvoyer est un booleen.
   a ne pas mettre entre "" ou '' ou ``*/

   const bool1 = true;
   const bool2 = false;

console.log( bool1, typeof(bool1));
console.log( bool2, typeof(bool2));

// les operateurs de comparaison
//test d egalite.

const nb1= 42;
const nb2 = 24;
const nb3 = 18;

const test1 = (nb1 === nb2)
console.log(`42===24 :`, test1);




// le triple egale est sensible au typage des variables

const nb4 = 13;
const nb5 = '13';

const test4 = ( nb4 === nb5);
console.log( test4);

//le double egale teste uniquement le contenu (meme si le type est different) ici le double egale ne verivie pas le typage 

const test5= (nb4 == nb5);
console.log (test5 );

// test de comparaison

const nb6 = 13;
const nb7 = 42;
const nb8 = 22;
const nb9 = 5.5;


//est ce que nb6 est plus grand que nb7
const test6= nb6> nb7;

//est ce que nb8 est plus petit  que nb9

const test7 = nb8 < nb9;

//est ce que nb8 est plus petit ou egale que nb9
const test8 = nb8 <= nb9;

//est ce que nb8 est plus grand ou egale que nb9
 const test9= nb8 >= nb9;
  

 // operateur logique 
 //*******************

 // 3 type d operateur logique 
// Et (&&)
// ou (||)
// Not (!)


const nb10= 25;
// test si le nombre est entre 20 et 30

const test10 = nb10 >=20 && nb10 <= 30;

 // NAN

 //valeur predefini qui signifie qu un combre n est pas valide 
// conversion echouer 
// ou mauvais utilisation des operateur mathematique

const err1 = parseInt("toto");
const err2 = 5/'x';

// pour test la valeur du NAN ( si cest un chiffre invalide)
// vous devez toujour utiliser la methode "isNAN"
// poru verifier si un nombre est Valide on met ! devant le isNan

//Structure conditionnelle IF

// elle va tester et executer des bloc de code en fonction de la condition demander 

const v1= 10
const v2 = 22
const v3 = 42

if(v1*3 > v2){
    // cela sera executer si la condition est a true
}

if (v3> 10)
{
    // le code sera exectuer si la condition est a true 
}
else{
    // on utilisera cette condition si la precedente et a Faux
}

if( v1>30){
    
} else if ( v2>30){
    // il s executera si la condition precedente est a faux
}
else {
    // toute les conditions precedente sont fausses
}


const inputDemo = document.getElementById('input-demo');
const btnDemo = document.getElementById('btn-demo');
const displayResult = document.getElementById('display-result');

btnDemo.addEventListener('click', () => {
    const inputValue = parseInt(inputDemo.value);

    if(inputValue === 0) {
        displayResult.innerText = 'le reservoir est vide';
    }
    else if(inputValue > 0 && inputValue < 10 ) {
        displayResult.innerText = `le reservoir est presque vide`; 
    }
    else if(inputValue >= 10 && inputValue < 50){
        displayResult.innerText = `le niveau du reservoir est normal`; 
    }
    else if(inputValue === 50){
        displayResult.innerText = `le niveau du reservoir plein`;

    }
    else{
        displayResult.innerText = `la valeur n est pas comprise`;
    }
})

const inputbis = document.getElementById('input-bis');
const btnbis = document.getElementById('btn-bis');
const displaybis = document.getElementById('display-bis');

btnbis.addEventListener('click', () => {
    const inputValue = parseInt(inputbis.value);

    let verbe;

    if((inputValue  % 4 === 0 && inputValue % 100 > 0) || (inputValue % 400 === 0)) {
       verbe= 'est';

        } else {
            verbe= 'n est pas ';
            
        }
        //displaybis.innerText = `l année ${inputValue} ${verbe} bisextile !`;

        // ternaire -> condition ? (valeur de l' {} apres le if) valeur_positive :(valeur de l'{} apres le else ) valeur_negative.
        const verbe2= ((inputValue  % 4 === 0 && inputValue % 100 > 0) || (inputValue % 400 === 0))? 'est': "n est pas " 
        displaybis.innerText = `l année ${inputValue} ${verbe2} bisextile !`;
})





