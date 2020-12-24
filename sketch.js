
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render= Matter.Render
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    g1=new Ground(400,650,800,10)
    b1=new boy(200,530+60)
    tr=new tree(650,430)
    st=new stone(150,400+120)
    sl=new Slingshot(st.body,{x:150,y:520})
    m1=new mango(620,250,50)
    m2=new mango(630,350,50)
    m3=new mango(550,350,50)
    m4=new mango(680,280,50)
    m5=new mango(680,400,50)
    m6=new mango(730,330,50)
    m7=new mango(780,380,50)
	Engine.run(engine);
var render = Render.create({ 
  element: document.body, engine: engine, 
  options: { width: 1300, height: 600, wireframes: false } });
 Render.run(render);
 console.log(st.body)
}



function draw() {
  rectMode(CENTER);
  background(0);
  
  

  drawSprites();
  g1.display()
  tr.display()
  b1.display()
  st.display()
  sl.display()
  m1.display()
  m2.display()
  m3.display()
  m4.display()
  m5.display()
  m6.display()
  m7.display()

  detectCollision(st,m1);
  detectCollision(st,m2);
  detectCollision(st,m3);
  detectCollision(st,m4);
  detectCollision(st,m5);
  detectCollision(st,m6);
  detectCollision(st,m7);
  }

function mouseDragged(){
  Matter.Body.setPosition(st.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
 sl.birdfly()
}

function detectCollision(lstones,lmango){
    var ra=lmango.body.circleRadius
	if(lstones.body.position.x- lmango.body.position.x <ra+ lstones.width/2
		&& lmango.body.position.x - lstones.body.position.x  < ra+ lstones.width/2
		&&lstones.body.position.y -lmango.body.position.y < ra + lstones.height/2
		&& lmango.body.position.y - lstones.body.position.y < ra + lstones.height/2){
    Matter.Body.setStatic(lmango.body,false);
    console.log(lmango.body)
	}

}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(st.body,{x:100,y:465});
		sl.Launch(st.body);
	}
}