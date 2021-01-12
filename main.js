canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
img_array=["mars.jpg","mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];
randomnumber=Math.floor(Math.random()*5);
console.log(randomnumber);
background_image=img_array[randomnumber];
rover_image="rover.png";
rover_x=100;
rover_y=200;
rover_width=100;
rover_height=100;
function addimage(){
    bg_imgtag=new Image();
    bg_imgtag.onload=uploadbackground;
    bg_imgtag.src=background_image;
    r_imgtag=new Image();
    r_imgtag.onload=uploadrover;
    r_imgtag.src=rover_image;
}
function uploadbackground(){
ctx.drawImage(bg_imgtag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(r_imgtag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38'){
        up();
        console.log ("upkeypressed");
    }
    if(keypressed=='37'){
        left();
        console.log ("leftkeypressed");
    }
    if(keypressed=='39'){
        right();
        console.log ("rightkeypressed");
    }
    if(keypressed=='40'){
        down();
        console.log ("downkeypressed");
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up pressed y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down pressed y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when right pressed x="+rover_x);
        uploadbackground();
        uploadrover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left pressed x="+rover_x);
        uploadbackground();
        uploadrover();
    }
}