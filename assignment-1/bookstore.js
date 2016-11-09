var program = require('commander');


var Title1 = "To Kill a Mockingbird";
var Author1 = "Harper Lee";
var Price1 = 9.50;
var Kind1 = "Paperback"

var Title2 = "Lord of the Flies";
var Author2 = "William Golding";
var Price2 = 10.99;
var Kind2 = "Paperback"

var Title3 = "Neuromancer";
var Author3 = "William Gibson";
var Price3 = 13.99;
var Kind3 = "Hardcover"

var Title4 = "1984";
var Author4 = "George Orwell";
var Price4 = 10.99;
var Kind4 = "Paperback"

var Title5 = "Absolutely on Music";
var Author5 = "Haruki Murakami";
var Price5 = 22.95;
var Kind5 = "Hardcover"


program
  .version('0.0.1')
  .option('-T, --Title, [String]', 'Title of the book', 'null')
  .option('-A, --Author, [String]' , 'Author of the book', 'null')
  .option('-P, --Price, [String]' , 'Price of the book' , "null")
  .parse(process.argv);

switch(program.Title)
{
    case(Title1):
        console.log(Title1);
        console.log(Author1);
        console.log(Price1);
        console.log(Kind1)
        break;
    case(Title2):
        console.log(Title2);
        console.log(Author2);
        console.log(Price2);
        console.log(Kind2)
        break;
    case(Title3):
        console.log(Title3);
        console.log(Author3);
        console.log(Price3);
        console.log(Kind3)
        break;
    case(Title4):
        console.log(Title4);
        console.log(Author4);
        console.log(Price4);
        console.log(Kind4)
        break;
    case(Title5):
        console.log(Title5);
        console.log(Author5);
        console.log(Price5);
        console.log(Kind5)
        break;
    case("null"):
        break;
    default:
        console.log('empty');
        break;
}
switch(program.Author)
{
    case(Author1):
        console.log(Title1);
        console.log(Author1);
        console.log(Price1);
        console.log(Kind1)
        break;
    case(Author2):
        console.log(Title2);
        console.log(Author2);
        console.log(Price2);
        console.log(Kind2)
        break;
    case(Author3):
        console.log(Title3);
        console.log(Author3);
        console.log(Price3);
        console.log(Kind3)
        break;
    case(Author4):
        console.log(Title4);
        console.log(Author4);
        console.log(Price4);
        console.log(Kind4)
        break;
    case(Author5):
        console.log(Title5);
        console.log(Author5);
        console.log(Price5);
        console.log(Kind5)
        break;
    case("null"):
        break;
    default:
        console.log('empty');
        break;
}