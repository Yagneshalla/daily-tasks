let number = 5;
if(number%2===0)
    console.log(number,'it is a even number')
else
    console.log(number,'it is a odd number')

    //self divisible

    let a=3;
    if(a%a===0)
        console.log(a,'it is a self divisible number')
    else
    console.log(a,'it is not  number')

    // greater than - less than in range

let number1 = 6;
if(number1>5 && number1<9)
    console.log(number1,'it lies between 5 and 9')
else
   console.log(number1,'it  not lies between 5 and 9')

   //vowels-a,i,e,o, u , OR operators 

let char1 ='a'
let char2 ='b'
if((char1 == 'a' ||char1 == 'e' ||char1 == 'i' ||char1 == 'o' ||char1 == 'u' ) && ( char2 =='a' || char2 =='e' || char2 =='i' || char2 =='o' || char2 =='u'))
    console.log( 'both are vowel')
else if( char1 =='a' || char1 =='e' || char1 =='i' || char1 =='o' || char1 =='u')
    console.log(char1,'it is a vowel')
else if( char2 =='a' || char2 =='e' || char2 =='i' || char2 =='o' || char2 =='u')
    console.log(char2,'it is a vowel')
else
console.log('both are not vowel')


// nested if else

let country1 = 'x'
let age1 = '17'
let currency1 = 'xinr'

let country2 = 'x'
let age2 = '15'
let currency2 = 'yinr'

let inputcountry ='x'
let inputage = 20;


if(inputcountry === country1 || inputcountry === country2){
    if(inputage <= age1){
        console.log(currency1)
    }else if(inputage > age2){
        console.log(currency2)
    }
}else
console.log('currency not found')

//switch ststement

let gender = 'male'
switch(gender){
    case 'male':
        console.log('person is male')
        break;
    case 'female':
        console.log('person is female')
        break;
    default:
        console.log('person is others')
}

// else if conditions
let c =150
if( c>=0 && c<=10)
    console.log(' it is in the range of 0 and 10')
else if(c>=-1 && c<= -10 )
    console.log('it is in the range between -1 and -10')
else if(c>=100 && c<=300 )
    console.log( 'it is in the range of 100 and 300')
else
 console.log(' the given number is not in between these ranges')


 // same logic using switch 
  let d=5
 switch(true){
    case ( d>=0 && d<=10):
        console.log(' it is in the range of 0 and 10')
        break;
    case  (d>=-1 && d<= -10 ):
         console.log('it is in the range between -1 and -10')
         break;
    case (d>=100 && d<=300 ):
         console.log( 'it is in the range of 100 and 300') 
         break;
    default:
        console.log(' the given number is not in between these ranges')

    
 }



















































 


