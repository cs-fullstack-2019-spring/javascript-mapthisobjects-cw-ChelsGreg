//Write a function that takes a string
// and returns an total representing the character count for each
// letter of each string in the sentence.
// Use .reduce to build this object.
// Hint: See .split()`` and string length``` property.


var letterNum =

    (
        function countThis(sentenceToCount)
        {
            var str = sentenceToCount;

            var chars = str.split(" ");
            console.log(chars());
        }

    );

countThis("Count this sentence");
