//Create variables here
var pet;
var petI,petI2;
var database;
var milkCount,milk;
var milkCountref;

function preload()
{
  petI=loadAnimation("images/dogImg.png")
  petI2=loadAnimation("images/dogImg1.png")
}
function setup() {
  database=firebase.database();
	createCanvas(800, 700);
  dog=createSprite(400,500,30,30)
    dog.addAnimation("sad",petI2)
  dog.addAnimation("happy",petI)
  dog.scale=0.25
 

  
  
   milkCountref=database.ref("Dog/milk")
   milkCountref.on("value",readCount,showerror)
}


function draw() {  
  
  background(0)
  text("Milk="+milkCount,300,300)
  drawSprites();
  //add styles here
  if(keyDown(UP_ARROW)){
  Eat(milkCount);}
  if(keyDown(UP_ARROW)){
    dog.changeAnimation("happy",petI)
    dog.scale=0.25
  }

}
function Eat(milkCount){
  if(milkCount<=0){milkCount=0}
  else{milkCount=milkCount-1}
  database.ref("Dog").set({
    milk:milkCount
  })
}

function readCount(data){
  milkCount=data.val();
}
function showerror(){
  console.log("try agen")
}