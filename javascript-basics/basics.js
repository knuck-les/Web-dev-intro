
c=20 //global variable
var d=30 //function scope
let e=50 //block scope
//array functions:: push,pop,indexOf,shift->remove from front,unshift->add from front
//javascript allows to create objects without defining the class
var bird={
    x:100,
    y:20,
    color: "white",
    eggs: [1,2,3,4],
    
    fly: function()
    {
        console.log('bird is flying',this.x,this.y)
    }
}

bird.eggs.push(5)
bird.eggs.unshift(0)
//-----------------------------------------------------------------------------------------------------
//one way of making object
function Fruit(taste,color)
{
    this.color=color
    this.taste=taste
}

let mango= new Fruit("sweet" ,"yellow")
let orange= new Fruit("sour","orange")

// another way of making object

var apple={
    taste: "sweet",
    color:"red"
}

// another way of making object

class fruitclass{

    constructor(taste,color)
    {
        this.color=color
    this.taste=taste
    }

};

let kiwi =new fruitclass("sour","green")

//------------------------------------------------------------------------------------




console.log(beta())

function alpha()
{
    return "A"
}



/*hoisted so we can call it before it is defined*/
//function declaration
function beta()
{
    return "B"
}


/*Not hoisted so we can't call it before it is defined*/
// function expression
let gamma=function()
{
    return "C"
}


/*we can't write this function twice as we do in c++ and java polymorphism,if we do it here ,it simply override the fuction written above */
function area(height,width)
{
    if(!width)
    {
        return Math.PI*height*height
    }

    return height*width
}

console.log('area 3 4',area(3,4))

console.log('area 4', area(4))


function hello()
{
    console.log('hello world', arguments[0]+arguments[1])
}

hello(1,2)


/*Higher order function :: create a function that generates another function*/

function creategreeter(greeting)
{
    function greet(name) 
    {
        console.log(greeting,name)
    }

    return greet
}


function getname()
{
    return document.getElementById('namebox').value
}

let g1= creategreeter('Good morning')
let g2= creategreeter('Good Evening')

console.log(typeof g1)
/*------------------------------------------------------------------------------------------------ */
  