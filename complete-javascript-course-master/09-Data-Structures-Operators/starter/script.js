'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // // Data needed for first part of the section


// const openingHours = {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   };




// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//    openingHours,

//    order(starterIndex , mainIndex) {

//     return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    
//     },

// };
  
// console.log(restaurant.order(2 , 0));



// const day = ['mon','tue','wed','thurs','fri','sat','sun'];
// // console.log(restaurant.openingHours?.fri.open);
      
// if(restaurant.openingHours &&restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//   [
//   'Neuer',
//   'Pavard',
//   'Martinez',
//   'Alaba',
//   'Davies',
//   'Kimmich',
//   'Goretzka',
//   'Coman',
//   'Muller',
//   'Gnarby',
//   'Lewandowski',
//   ],
//   [
//   'Burki',
//   'Schulz',
//   'Hummels',
//   'Akanji',
//   'Hakimi',
//   'Weigl',
//   'Witsel',
//   'Hazard',
//   'Brandt',
//   'Sancho',
//   'Gotze',
//   ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//   'Hummels'],
  // date: 'Nov 9th, 2037',
  // odds: {
  // team1: 1.33,
  // x: 3.25,
  // team2: 6.5,
  // },
  // };
       
  // 1. // game scored Array 
  // for(const [i , player] of game.scored.entries() ) {
       
  //console.log(`goal ${i +1}: ${player}`);
            
  //}
      
  2.   // Average of odd Number
     
  // const odds = Object.values(game.odds);
  //     let average = 0 ;

  //     for(const odd of odds )
  //       average += odd;
       
  //     average /= odds.length;
        
      //console.log(average);
        
            
      //
      // for(const[team, odd] of Object.entries(game.odds)) {    
      //   const teamstr = team === 'x' ? 'draw': `victory ${game[team]}`;
            
      //   //console.log(`odd of ${teamstr}  ${odd}`);

      // }
      
// sets 

// const ordersets = new Set([
 
//   'pizza',
//   'pasta',
//   'kabab',
//   'pasta',
//   'kabab',
//   'pizza',

// ]);

//console.log(ordersets);

//console.log(ordersets.has('pizza'));

// ordersets.delete('pizza');

// console.log(ordersets);

// ordersets.add('mutton');

// const order = ['pizza','mutton','kabab', ]

//console.log(new Set(order));



// const rest = new Map ()


// rest.set('name' , 'dastarkhwaan')
// .set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],)
// .set('open' , 11)
// .set('close', 23)
// .set('true', 'we are open')
// .set('false', 'we are close');
// // console.log(rest.get('name'));
// // console.log(rest.get('categories'));

//  //console.log(rest.get('true'));
// const time = 21;

//console.log(rest.get(time > rest.get('open') && time < rest.get('close')));













// const [player1 , player2] = game.players;

// console.log(player1, player2);
      

// const [gk , ...player] = player1;

// console.log(gk , player);

// const allplayers = [...player1 , ...player2];

// console.log(allplayers);

// const {odds:{
//   team1 , x :draw  , team2 
// }} = game;

// console.log(team1 , draw , team2);

// const printgoals = function(...players){

//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// }



// // printgoals('david','muller','cristiano','messi');

// // printgoals('david','muller');

// printgoals(...game.scored);



// team1 < team2 && console.log('team1 is likely to win');

// team2 < team1 && console.log('team1 is likely to win');


// const menu = [ ...restaurant.starterMenu, ...restaurant.mainMenu];


// for(const item of menu) {
//   console.log(item);
// }


// for(const[i ,el] of menu.entries()) {
//   console.log(`${ i + 1 }:${[el]}`);
// }

 
// const event = new Set(['goal', 'substitution','goal','substitution','yellow card','red card','substitution','sunstitution','goal','goal']);

// console.log(event);


// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
//   ]);

// console.log(gameEvents.get(64));

// gameEvents.delete(64);
// console.log(gameEvents);


//console.log(gameEvents.values());



// const variable = function(name){

// const name1 = name1.toUppercase();
// console.log(name1);

// }


// underscore_case
// first_name
// Some_Variable 
// calculate_AGE
// delayed_departure

// document.body.append(document.createElement('textarea'));

// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click',function(){
//   const text = document.querySelector('textarea').value;
   
//    const rows = text.split('/n');
//    console.log(rows);

//   });



  

