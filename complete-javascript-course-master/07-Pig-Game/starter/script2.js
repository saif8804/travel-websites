'use strict'

const arr = [2, 3, 4 ];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x ,y ,z ]= arr;
//console.log(x ,y,z);


const restaurant = {

    Name: 'Tunday Kababi',
    location: 'Aminabad',
    categories:['kababparatha','biryani','mutton','swarma', ],
    starter:['pizza','burger','momos'],
    Mainmenu:['boti kabab','daal chawal','Anda kari'],
    order: function (starterIndex , MainIndex) {
return[this.starter[starterIndex],this.Mainmenu[MainIndex]];

    },

    openinHours: {

     thur:{
        open:12,
        close:22,
     },
     fri: {
        open:11,
        close:23,
     },
     sat: {
        open: 0,
        close:24,
     },



    },
     
    orderpasta:  function(ingr1, ingr2 , ingr3){

     //console.log(`wow how delicious pasta with ${ingr1}, ${ingr2},${ingr3}  `);


    },
}

// console.log(restaurant.order( 1,0));
let[Main, , secondry] = restaurant.categories;

//console.log(Main, secondry);

[Main,  secondry] = [secondry, Main];
//console.log(Main, secondry);

const nested = [2,[5,6]];

const [i,  j] = nested;

// console.log(i, [j,k]);

const {Name , openinHours, categories} = restaurant; 

//console.log(Name,openinHours,categories);

const newArray = {...restaurant};

// newArray.Name = 'dastarkhwan';
// console.log(newArray);

const str = [...restaurant.Name,'a'];
//console.log(restaurant.Name);

// const ingredients = [prompt("let's make pasta! ingredient 1? "),
// prompt("let's make pasta! ingredient 2 ? "),
// prompt("let's make pasta! ingredient 3 ? ")];

// console.log(ingredients);
// restaurant.orderpasta(ingredients[0],ingredients[1],ingredients[2]);

// restaurant.orderpasta(...ingredients);

//objects
// const Newrestaurant = {foundin:1985,...restaurant,founder:'ehteshm'};
// console.log(Newrestaurant);
 
const restaurantcopy = {...restaurant};
restaurantcopy.Name = 'sheesha Dhaba';

const [paneer , ,sabzi, ...others] = [...restaurant.starter, ...restaurant.Mainmenu];

console.log(paneer ,sabzi , others );

const [ d , e , f] = [1,2,[2,3,5]];

console.log(d, e,f);

 console.log(3 || 'jonas');

 const guest1 = restaurant.guestnames ? restaurant.guestnames :10;
 //console.log(guest1);

restaurant.guestnames ;

const guestcorrect =  restaurant.guestnames ?? 10;

//console.log(restaurant.guestnames);

  const rest1 = {
    Name:'tunday kababi',
     numguest: 20,
  };
 
  const rest2 = {
   Name:'tunday kababi',
    owner: 'saif',
 };
  
//  rest1.numguest = rest1.numguest || 10;

//  rest2.numguest = rest2.numguest || 10;

rest1.numguest ||= 10;
rest2.numguest ||= 10;


 //console.log(rest1 , rest2);