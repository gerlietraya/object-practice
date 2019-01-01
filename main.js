let lachmannHousehold = {
    'family members' : {
        Dad : {
            name : 'Jacob',
            job : 'financial adviser',
            age : 49,
            hobby: 'work-out'
        },
        Mom : {
            name : 'Louise',
            job : 'CEO',
            age : 45,
            hobby: 'work-out'
        },
         
        Children : {
            daughter : {
                name : 'Lucca',
                job : 'student',
                age : 13,
                hobby : 'tennis'
            },
            son : {
                name:'Louis',
                job :'student',
                age : 11,
                hobby:'football',

            },

        },
        Aupair: {
            name : 'Gerlie',
            job : 'chambermaid',
            age : 28,
            hobby : 'coding'
        },
        pets : {
            giant : {
                name : 'lula',
                job : 'dog',
                age : 4,
                hobby : 'sleep',  
            },
            


            tiny : {
                name : 'Fnuller',
                job : 'rabbit',
                age : 1,
                hobby : ['chew','jump','poop','pee']
            }
            
        }

    }
};
// console logging the lachmannHousehold showing the list of its memebers and the data of each of them
console.log(lachmannHousehold);
// accessing the name of the giant pet which is lula
console.log(lachmannHousehold['family members'].pets.giant.name);
// accessing the first hobby of the tiny pet
console.log(lachmannHousehold['family members'].pets.tiny.hobby[0]);
lachmannHousehold['family members'].pets.giant = {
    appearance : 'super fat'
}
// adding a new key to the first object in pets(giant)
console.log(lachmannHousehold['family members'].pets.giant);
//for...in
//console log list of family members and names
for(let familyMember in lachmannHousehold['family members']){
    console.log(`${familyMember}: ${lachmannHousehold['family members'][familyMember].name}`)
  
}
//console.log family member age
for(let familyMember in lachmannHousehold['family members']){
    console.log(`${familyMember}: ${lachmannHousehold['family members'][familyMember].age}`)
}