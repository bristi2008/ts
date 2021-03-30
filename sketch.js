const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box17;
var box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,box31;

function preload(){





}
function setup(){

    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(510,295,30,40);
    box2 = new Box(540,295,30,40);
    box3 = new Box(570,295,30,40);
    box4 = new Box(600,295,30,40);
    box5 = new Box(630,295,30,40);
    box6 = new Box(660,295,30,40);
    box7 = new Box(690,295,30,40);
    box8 = new Box(540,200,30,40);
    box9 = new Box(570,200,30,40);
    box10 = new Box(600,200,30,40);
    box11 = new Box(630,200,30,40);
    box12 = new Box(660,200,30,40);
    box13 = new Box(570,105,30,40);
    box14 = new Box(600,105,30,40);
    box15 = new Box(630,105,30,40);

    box16 = new Box(910,195,30,40);
    box17 = new Box(940,195,30,40);
    box18 = new Box(970,195,30,40);
    box19 = new Box(1000,195,30,40);
    box20 = new Box(1030,195,30,40);
    box21 = new Box(1060,195,30,40);
    box22 = new Box(1090,195,30,40);
    box23 = new Box(940,105,30,40);
    box24 = new Box(970,105,30,40);
    box25 = new Box(1000,105,30,40);
    box26 = new Box(1030,105,30,40);
    box27 = new Box(1060,105,30,40);
    box28 = new Box(970,65,30,40);
    box29 = new Box(1000,65,30,40);
    box30 = new Box(1030,65,30,40);
    box31 = new Box(1000,25,30,40);
    

    
    ground1 = new Ground(600,300,300,10);
    ground2 = new Ground(1000,200,300,10);

    polygon = Bodies.circle(50,200,20)
    World.add(world,polygon);
    
    sling = new SlingShot(this.polygon,{x:100,y:200})

}

function draw(){
    background(200)
    Engine.update(engine);
    rectMode(CENTER)
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();

    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    polygon.display();
    sling.display();

    imageMode(CENTER)
    image(this.image, polygon.position.x, polygon.position.y, 40, 40);
    
   
   
    ground1.display();
    ground2.display();
}
