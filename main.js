var canvas = new fabric.Canvas("myCanvas");

block_w = 30;
block_h = 30;

player_x = 10;
player_y = 10;
player_object = "";

background_image = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    })
     
}

function background_update() {
    fabric.Image.fromURL("sky.jpeg", function(Img) {
        background_image = Img;
        //background_image.scaleToWidth(150);
        //background_image.scaleToHeight(150);
        background_image.set({
            top:0,
            left:0
        });
        canvas.add(background_image);
    })
     
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_object = Img;
        block_object.scaleToWidth(block_w);
        block_object.scaleToHeight(block_h);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    })
     
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keypress = e.keyCode;
    console.log(keypress);

    if (keypress == '38') {
        console.log('up');
        up();
    }

    if (keypress == '40') {
        console.log('down');
        down();
    }

    if (keypress == '37') {
        console.log('left');
        left();
    }

    if (keypress == '39') {
        console.log('right');
        right();
    }

    if (keypress == '87') {
        console.log('w');
        new_image("wall.jpg");
    }

    if (keypress == '71') {
        console.log('g');
        new_image("ground.png");
    }

    if (keypress == '76') {
        console.log('l');
        new_image("light_green.png");
    }

    if (keypress == '84') {
        console.log('t');
        new_image("trunk.jpg");
    }

    if (keypress == '82') {
        console.log('r');
        new_image("roof.jpg");
    }

    if (keypress == '89') {
        console.log('y');
        new_image("yellow_wall.png");
    }

    if (keypress == '68') {
        console.log('d');
        new_image("dark_green.png");
    }

    if (keypress == '85') {
        console.log('u');
        new_image("unique.png");
    }

    if (keypress == '67') {
        console.log('c');
        new_image("cloud.jpg");
    }

    if (e.shiftKey == true && keypress == '80') {
        console.log("both shift and p have been pressed");

        block_w = block_w + 10;
        block_h = block_h + 10;

        document.getElementById('current_width').innerHTML=block_w;
        document.getElementById('current_height').innerHTML=block_h;
    }

    if (e.shiftKey == true && keypress == '77') {
        console.log("both shift and m have been pressed");

        block_w = block_w - 10;
        block_h = block_h - 10;

        document.getElementById('current_width').innerHTML=block_w;
        document.getElementById('current_height').innerHTML=block_h;
    }
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - 10;
        canvas.remove(player_object);
        player_update();
        console.log("When up arrow key is pressed, X = " + player_x + "Y = " + player_y);
    }
}

function down() {
    if (player_y <= 595) {
        player_y = player_y + 10;
        canvas.remove(player_object);
        player_update();
        console.log("When down arrow key is pressed, X = " + player_x + "Y = " + player_y);
    }
}

function left() {
    if (player_x > 0) {
        player_x = player_x - 10;
        canvas.remove(player_object);
        player_update();
        console.log("When left arrow key is pressed, X = " + player_x + "Y = " + player_y);
    }
}

function right() {
    if (player_x < 995) {
        player_x = player_x + 10;
        canvas.remove(player_object);
        player_update();
        console.log("When right arrow key is pressed, X = " + player_x + "Y = " + player_y);
    }
}
