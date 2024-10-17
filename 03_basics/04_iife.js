// Immediately Invoked Function Expression **********

(function chai(){                        // when we give name to a function its called named iife
    console.log(`DB CONNECTED`);
})();                                    //we can use () for iife immediate result but at the end you have to use ;

( (name) =>{                          // when we give name to a function its called normal iife
    console.log(`DB CONNECTED TWO ${name}`);     //same will work with arrow functions also 
} )('Sushant');

