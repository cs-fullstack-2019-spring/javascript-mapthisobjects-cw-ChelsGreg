

//MAP
// Use .map to create a new array of objects
// where each object has a property for petnumber and pettype
// based on the elements in the array. Print the new array of objects.




let arr = ["dog", "cat", "pig", "hamster"];

var listPet2 = arr.map
(function(anything, ndx)
    {
        let petObj = {};

        petObj.petNum = ndx;
        petObj.petType = anything;

        return petObj;

    });

console.log(listPet2);