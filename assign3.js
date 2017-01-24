const myMeal = process.argv;
var sum = Number(myMeal[2]) + Number(myMeal[3]);
if(sum > 10 && 100> sum)
   {console.log`The sum is greater than 10, but smaller than 100`}
else if(sum > 100 && 1000> sum)
   {console.log `The sum is greater than 100, but smaller than 1000`}
 
   