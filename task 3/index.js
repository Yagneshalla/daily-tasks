//program that prints the multiplication table of 5 using a for loop

let n= 4;
for(let i = 1;i <= 10;i++){
    console.log(n + " x " + i +" = " + n * i);
}

//Sum of Even Numbers Between 1 and 50

for(let j=1;j<=50;j++)
    if(j%2==0)
    console.log(j)

// while loop
 // countdown timer-to print prime numbers
 let p = 2
let count =0
let j
while(p<=20){
    j=1
    count = 0
    while(j<=p){
      if(p%j == 0)
      {
        count++
      }
      j++
    }
    if(count == 2)
       {
        console.log(p)
       }
    p++   
}

// program to print sum of odd numbers using while loop

let num =1
while(num<=20){
    if(num%2 == 1){
        console.log(num)
    }
    num++
}

// factorial number

let m=1;
let fact =5;
while(fact>=1){
    m=m*fact;
    fact--
}
console.log(m)