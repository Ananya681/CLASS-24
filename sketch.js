const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,log1;
var box2,pig2,log2,log3,log4,log5;
var box3,box4,box5,bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(680,300,70,70);
    box2 = new Box(870,300,70,70);
    box5 = new Box(770,150,70,70);
    ground = new Ground(width/2,height,width,20)
    pig1 = new Pig(770,300)
    pig2 = new Pig(770,200)
    bird1 = new bird (400,200)
    box3 = new Box(680,230,70,70);
    box4 = new Box(870,200,70,70);
    log1 = new LOG(770,250,300,PI/2);
    log3 = new LOG(770,170,300,PI/2);
    log4 = new LOG(725,120,160,PI/7);
    log5 = new LOG(815,100,160,-PI/7);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box5.display();
    box4.display();
    ground.display();
    pig1.display();
    log1.display();
    pig2.display();
    log3.display();
    log4.display();
    log5.display();
    bird1.display();
}