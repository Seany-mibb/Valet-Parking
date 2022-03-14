canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car_x = 10;
car_y = 10;

background_image = "park.png";
car_image = "car.png";

car_width = 100;
car_height = 90;

function add()
{
    bg_imgTag = new Image();
    bg_imgTag.onload = uploadBackground();
    bg_imgTag.src = background_image;

    carimgTag = new Image();
    carimgTag.onload = uploadcar();
    carimgTag.src = car_image;
}

function uploadBackground()
{
    ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar()
{
    ctx.drawImage(carimgTag, car_x, car_y, car_width, car_height);
}

function left()
{
    if(car_x >= 0)
    {
        car_x -= 5;
        console.log("x = " + car_x + " y = " + car_y);
        uploadBackground();
        uploadcar();
    }
}

function up()
{
    if(car_y >= 0)
    {
        car_y -= 5;
        console.log("x = " + car_x + " y = " + car_y);
        uploadBackground();
        uploadcar();
    }
}

function right()
{
    if(car_x <= 700)
    {
        car_x += 5;
        console.log("x = " + car_x + " y = " + car_y);
        uploadBackground();
        uploadcar();
    }
}

function down()
{
    if(car_y <= 500)
    {
        car_y += 5;
        console.log("x = " + car_x + " y = " + car_y);
        uploadBackground();
        uploadcar();
    }
}

window.addEventListener("keydown", my_keyDown);

function my_keyDown(e)
{
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '37')
    {
        left();
        console.log("left")
    }

    if(keyPressed == '38')
    {
        up();
        console.log("up")
    }

    if(keyPressed == '39')
    {
        right();
        console.log("right")
    }

    if(keyPressed == '40')
    {
        down();
        console.log("down")
    }
}