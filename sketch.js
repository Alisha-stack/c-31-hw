//examples for variables
//storing string
// var hi="okay";
// console.log(hi);

// //storing a number
// var num=2232;
// console.log(num);

// //boolean value
// var bool=true;
// console.log(bool);

// //undefined
// var object1;
// console.log(object1);

// //null
// object1=null;
// console.log(object1);

//to create ARRAY-to store different values in same variable
// var array1=[123,22,4,333,333];//indexing of array
// console.log(array1);
// var array2=["name",12,true,44,4,444,"alisha"]
// console.log(array2[2]);

// var array3=[[1,2,3],[345,44,55],[555,55]];
// //console.log(array3[2][1]);
// console.log(array3);
// //indexing- means to assign position to value in array. It starts from 0.

// //add new element to the array-->use push()
// array3.push("alishaa")
// console.log(array3);
// array3.push(123);
// console.log(array3);
// array3.pop();
// console.log(array3);
// array3.pop();
// console.log(array3);

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState="ONSLING";


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){

//gameState="LAUNCH"   ! -->NOT
//gameState="ONSLING"

    if(gameState!=="LAUNCH"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});

    }
    
    
}


function mouseReleased(){
    slingshot.fly();
    gameState="LAUNCH";
}

function keyPressed(){
    if(keyCode === 32){
     //   slingshot.attach(bird.body);
    }
}