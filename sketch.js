const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var martalo, burracha, preda, ferror;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    martalo = new Hammer(10,100);
    burracha = new Rubber(900,450,70);
    preda = new Pedregulho(700,320,100,100);
    ferror = new Iron(500, 220, 100, 100)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    martalo.display();
    burracha.display();
    preda.display();
    ferror.display();
}