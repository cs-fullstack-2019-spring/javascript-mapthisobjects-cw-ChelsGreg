//Use .filter to create an array of pet objects that only holds the hamsters.





let pets = [
    {
        name: 'Spot',
        type: 'Hamster'
    },
    {
        name: 'Harry',
        type: 'Hamster'
    },
    {
        name: 'Kitty',
        type: 'Cat'
    }
]




let hamsters = pets.filter
(function(onlyHam)
{
    return (onlyHam.type === "Hamster" );
});

console.log(hamsters);