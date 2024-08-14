// program to check a number is positive ,negative or zero using if-else ststements

let a = 0;
if(a>0)
    console.log("it is a positive number")
else if(a<0)
    console.log("it is a negative number")
else
    console.log("it is zero")

 // program to print week days using switch-statements
 
 let day=8
 switch(day){
        case ( day = 1):
        console.log("monday")
        break;
        case (day = 2):
        console.log("tuesday")
        break;
        case (day = 3):
        console.log("wednesday")
        break;
        case (day = 4):
        console.log("thursday")
        break;
        case (day = 5):
        console.log("friday")
        break;
        case (day = 6):
        console.log("saturday")
        break;
        case (day = 7):
        console.log("sunday")
        break;
        default:
            console.log('there is only 7 weeks days in a week')
 }

 // program to print adult or minor using ternary operator

 let age = 20;
 let  print = (age<=18) ? "adult" : "major";
 console.log(print)

 // program to print numbers from 1 to 10 using for loop

 for(let i=1;i<=10;i++)
 {
    console.log(i);
 }

 //reverse for loop

 for(let i=10;i>=1;i--)
    {
       console.log(i);
    }
