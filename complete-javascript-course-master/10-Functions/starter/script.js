'use strict';

const poll = {

    Display :('what is your programming language'),
     
    option : [' 0 :javascript', '1 : python' , '2: Rust','3:c++' ],

    answers: new Array(4).fill(0),

    registerNewAnswer(){
       
        const answer = Number(prompt(`${this.Display}\n${this.option.join('\n')}\n(write option number)`));
    
      // Register Answer

      typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;     
      
      this.displayResults();
      this.displayResults('string');
    },
      
    

           
         displayResults(type = 'array'){
          if(type === 'array'){
            console.log(this.answers);
          }else if(type === 'string'){
            console.log(`poll results are ${this.answers.join(',  ')}`)

          }

         }
     
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers:[ 5 ,2 , 3,6,9,11]} , 'string');
// [ 5 ,2 , 3]
// [1, 5 , 3, 9 , 6 ,1]
 

(function(){

const header = document.querySelector('h1');
header.style.color = 'red';

document.querySelector('body').addEventListener('click',function(){
header.style.color = 'blue';
    
});

}) ();

const arr = [23 , 25, 27, 29];

console.log(arr.at(0));

console.log(arr[arr.length -1]);


const movements = [400 , 500 , -600 , -750 , 800 , -1050];


movements.forEach(function(movement , index ,array){

if(movement > 0){
    console.log(`movement ${index +1} :you deposited ${movement}`);
}else{
console.log(`movement ${index+1} :you withdraw ${Math.abs(movement) }`) ;
}
});

const currencies = new Map([
['USD' ,'UNITED STATE OF     DOLLAR'],
['EU','EURO'],
['RS','RUPEES'],

])
currencies.forEach(function(value, key , Map){
console.log(`${key}:${value}`);
})










