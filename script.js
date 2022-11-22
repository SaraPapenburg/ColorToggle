function menuShow() {
    var hamburger = document.getElementById("mainMenu");
    if (hamburger.style.display === "none") {
        hamburger.style.display = "block";
    }
    else {
        hamburger.style.display = "none";
    }
}

const Home = document.getElementById("Home");

Home.addEventListener('click', function () { document.body.style.backgroundColor = 'lightgrey'; });
Home.addEventListener('click', function () { mainMenu.style.display = 'none' });

const Red = document.getElementById("Red");

Red.addEventListener('click', function () { document.body.style.backgroundColor = 'red'; });
Red.addEventListener('click', function () { mainMenu.style.display = 'none' });



const Purple = document.getElementById("Purple");

Purple.addEventListener('click', function () { document.body.style.backgroundColor = 'purple'; });
Purple.addEventListener('click', function () { mainMenu.style.display = 'none' });



const Orange = document.getElementById("Orange");

Orange.addEventListener('click', function () { document.body.style.backgroundColor = 'orange'; });
Orange.addEventListener('click', function () { mainMenu.style.display = 'none' });


const Green = document.getElementById("Green");

Green.addEventListener('click', function () { document.body.style.backgroundColor = 'green'; });
Green.addEventListener('click', function () { mainMenu.style.display = 'none' });



