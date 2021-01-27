canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
player_object="";
block_image_object="";
block_image_height=30;
block_image_width=30;
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToHeight(140);
        player_object.scaleToWidth(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function block_update(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPress=e.keyCode;
    console.log(keyPress);
    if(e.shiftKey == true && keyPress=='65'){
        console.log("Shift + a pressed together");
        block_image_height=block_image_height+10;
        block_image_width=block_image_width+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey == true && keyPress=='83'){
        console.log("Shift + s pressed together");
        block_image_height=block_image_height-10;
        block_image_width=block_image_width-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keyPress=='38'){
        console.log("up");
        up();
    }
    if(keyPress=='40'){
        console.log("down");
        down();
    }
    if(keyPress=='37'){
        console.log("left");
        left();
    }
    if(keyPress=='39'){
        console.log("right");
        right();
    }
    if(keyPress=='70'){
        console.log("f");
        block_update("ironman_face.png");
    }
    if(keyPress=='66'){
        console.log("b");
        block_update("spiderman_body.png");
    }
    if(keyPress=='76'){
        console.log("l");
        block_update("hulk_legs.png");
    }
    if(keyPress=='82'){
        console.log("r");
        block_update("thor_right_hand.png");
    }
    if(keyPress=='72'){
        console.log("h");
        block_update("captain_america_left_hand.png");
    }
}
function up(){
    if(player_y > 0){
        player_y=player_y-block_image_width;
        if(player_y<0){
            player_y=10;
        }
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y < 650){
        player_y=player_y+block_image_width;
        if(player_y>550){
            player_y=550;
        }
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x > 0){
        player_x=player_x-block_image_width;
        if(player_x<0){
            player_x=10;
        }
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x < 1080){
        player_x=player_x+block_image_width;
        if(player_x>1200){
            player_x=900;
        }
        canvas.remove(player_object);
        player_update();
    }
}
