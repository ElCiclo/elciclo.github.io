window.onload= () =>{
    let insta = document.getElementById("insta");
    let mail = document.getElementById("mail");
    let icons = document.getElementsByClassName("cicloIcon");
    let daysLeft = document.getElementById("daysLeft");
    let CDay = "2025-08-31";

    //globo
    // let globo = document.getElementById("globoMain");

    // let posX = 50;
    // let posY = 50;
    // let targetX = posX;
    // let targetY = posY;
    // let speed = 2;

    //Carrusel
    let cicloJson;
    let currentSlide = document.getElementById("sliderContent");
    let currentPosition;
    let rightButton = document.getElementById("botonDerecho");
    let leftButton = document.getElementById("botonIzquierdo");

    let corchoSound = document.getElementById("corcho");

    //Projects buttons
    let galaButton = document.getElementById("galaProyectos");
    let musButton = document.getElementById("musProyectos");
    let becaButton = document.getElementById("becasProyectos");
    let proyectos = document.getElementById("proyectos")

    let galaPopUp = document.getElementById("galaPopUp");
    let musPopUp = document.getElementById("musPopUp");
    let nieblaPopUp = document.getElementById("nieblaPopUp");
    let closeGalaPopUp = document.getElementById("closeGalaPopUp");
    let closeMusPopUp = document.getElementById("closeMusPopUp");
    let closeNieblaPopUp = document.getElementById("closeNieblaPopUp");

    cicloJson = loadJson();
    loadInicial();
    checkLocalStorage();
    
    insta.onclick = ()=> {
        window.location = "https://www.instagram.com/elcicloproductions/?hl=es";
    };

    mail.onclick = ()=> {
        navigator.clipboard.writeText("lavidaesunciclog6@gmail.com");
        alert("Copied the gmail: lavidaesunciclog6@gmail.com");
    };

    function loadJson(){
        return [
            {
                "text": "<h1>DEL <del>AÑO</del> CICLO</h1>JOVEN. Nuestro producto más fresco. Con gran carácter y textura (no descartamos nada). Aconsejable para primerizos.",
                "img":"./img/1_delciclo.png",
            },
            {
                "text": "<h1>SAN LORENZO</h1>BLANCO. Vanguardia y tradición. Una selección delicada, pero atrevida, de nuestro catálogo. Muy ligero y aromático.",
                "img":"./img/3_sanlorenzocrianza.png",
            },
            {
                "text": "<h1>ABADÍA DE PIEDAD</h1>RESERVA. Sorprendente en el mejor sentido de la palabra. Un producto respaldado por su solera, que le aporta madurez y estructura.",
                "img":"./img/2_abadia.png",
            },
            {
                "text": "<h1>TREMENDO CHOICE</h1>GRAN RESERVA. La calidad es un valor innegociable, y esta laureada selección es prueba de ello.",
                "img":"./img/4_tremendochoice.png",
            },
            {
                "text": "<h1>VILLA ISABEL</h1>Porque la calidad no lo es todo. Sencillo, pero eficaz.",
                "img":"./img/5_villaisabel.png",
            },
            {
                "text": "<h1>CICLOGÉNESIS EXPLOSIVA</h1>ESPUMANTE. Nuestro producto más arriesgado. No apto para todos los paladares.",
                "img":"./img/6_ciclogenesisexplosiva.png",
            }
        ]
    }

    function loadInicial(){
        calculateDaysUntilCDay();
        currentPosition= 0;
        let currentImg = currentSlide.children[0];
        let currentText = currentSlide.children[1];

        currentImg.src = cicloJson[0].img;
        currentText.innerHTML=cicloJson[0].text;
        
        currentSlide.onclick = cicloFlix;
        toMainPage();

        //globo
        // setInterval(moverGlobo, 500);
        // actualizarPosicion();
    } 

    function toMainPage(){
        for (let icon of icons) {
            icon.onclick = () => {
                window.location.href = "./index.html";
            }
        }
    }

    function calculateDaysUntilCDay(){
        let thisDay = new Date();
        CDay = new Date(CDay);
        console.log(thisDay);
        console.log(CDay);

        timeDiff = CDay - thisDay;
        daysDiff = Math.ceil(timeDiff/(1000*60*60*24));

        daysLeft.innerText = ""+daysDiff;
    }
    
    function changeRight(){
        let newSlide;
        if( currentPosition < cicloJson.length-1){
            currentPosition=currentPosition+1;
        }else if(currentPosition == cicloJson.length-1) {
            currentPosition=0;
        }
        setTimeout(function(){
            currentSlide.classList.remove("sliderMostrarVinoIz");
            currentSlide.classList.remove("sliderMostrarVinoDer");
            currentSlide.classList.add("sliderOcultarVinoDer");

            newSlide = createNewSlide();
            newSlide.children[0].src = cicloJson[currentPosition].img;
            newSlide.children[1].innerHTML = cicloJson[currentPosition].text;
            newSlide.onclick = cicloFlix;

            setTimeout(function(){
                currentSlide.parentNode.replaceChild(newSlide, currentSlide);
                currentSlide = newSlide;
                newSlide.classList.add("sliderMostrarVinoDer");
            }, 500);
        }, 1); 
    }
    function changeLeft(){
        let newSlide;
        if( currentPosition > 0){
            currentPosition=currentPosition-1;
        }else if(currentPosition == 0) {
            currentPosition=cicloJson.length-1;
        }
        setTimeout(function(){
            currentSlide.classList.remove("sliderMostrarVinoDer");
            currentSlide.classList.remove("sliderMostrarVinoIz");
            currentSlide.classList.add("sliderOcultarVinoIz");           

            newSlide = createNewSlide();
            newSlide.children[0].src = cicloJson[currentPosition].img;
            newSlide.children[1].innerHTML = cicloJson[currentPosition].text;
            newSlide.onclick = cicloFlix;
        setTimeout(function(){
                currentSlide.parentNode.replaceChild(newSlide, currentSlide);
                currentSlide = newSlide;
                newSlide.classList.add("sliderMostrarVinoIz");
            }, 500);
        }, 1);
    }
    
    function createNewSlide(){
        //create a new slide
        let slide = document.createElement("div");
        let img = document.createElement("img");
        let text = document.createElement("div");

        slide.id = "sliderContent";
        img.id="currentCicloImg";
        text.id="currentCicloText";
        slide.classList.add("pointer");

        img.classList.add("absoluta");
        text.classList.add("absoluta");
        
        slide.append(img);
        slide.append(text);
        return slide;
    }

    rightButton.onclick = changeRight;
    leftButton.onclick = changeLeft;

    function cicloFlix(){
        document.getElementById("ciclofix").classList.remove("hidePopUp");
        document.getElementById("ciclofix").classList.add("showPopUp");
        
        setTimeout(function(){
            corchoSound.play();
        }, 2200);
        setTimeout(function(){
            document.getElementById("ciclofix").classList.remove("showPopUp");
            document.getElementById("ciclofix").classList.add("hidePopUp");
            window.location.href = "./proyecto/index.html?p="+currentPosition ;
        }, 3000);
    }

    galaButton.onclick = galaOpen;
    function galaOpen(){
        galaButton.innerHTML = "<del>"+galaButton.innerText+"</del>";
        localStorage.setItem("enterGala", "true");
        
        galaPopUp.classList.remove("hidePopUp");
        galaPopUp.classList.add("showPopUp");

        document.getElementById("container").style.overflow = 'hidden';
        document.getElementById("galaPopUp").style.overflowY = 'scroll';
    }
    musButton.onclick = () => {
        musButton.innerHTML = "<del>"+musButton.innerText+"</del>";
        localStorage.setItem("enterMus", "true");

        musPopUp.classList.remove("hidePopUp");
        musPopUp.classList.add("showPopUp");

        document.getElementById("container").style.overflow = 'hidden';
        document.getElementById("musPopUp").style.overflowY = 'scroll';
    }
    becaButton.onclick = () => {
        becaButton.innerHTML = "<del>"+becaButton.innerText+"</del>";
        localStorage.setItem("enterBeca", "true");

        nieblaPopUp.classList.remove("hidePopUp");
        nieblaPopUp.classList.add("showPopUp");

        document.getElementById("container").style.overflow = 'hidden';
        document.getElementById("nieblaPopUp").style.overflowY = 'scroll';
    }

    function checkLocalStorage(){
        if(localStorage.getItem("enterGala") === "true"){
            galaButton.innerHTML = "<del>"+galaButton.innerText+"</del>";
        }
        if(localStorage.getItem("enterMus") === "true"){
            musButton.innerHTML = "<del>"+musButton.innerText+"</del>";
        }
        if(localStorage.getItem("enterBeca") === "true"){
            becaButton.innerHTML = "<del>"+becaButton.innerText+"</del>";
        }
    }

    closeGalaPopUp.onclick = () => {
        closePopUp(galaPopUp);
    }

    closeMusPopUp.onclick = () => {
        closePopUp(musPopUp);
    }

    closeNieblaPopUp.onclick = () => {
        closePopUp(nieblaPopUp);
    }

    function closePopUp(popUpToClose){
        popUpToClose.classList.remove("showPopUp");
        popUpToClose.classList.add("hidePopUp");
        document.getElementById("container").style.overflowY = 'auto';
    }

    //Funciones globo
    function actualizarPosicion() {
        let dx = targetX - posX;
        let dy = targetY - posY;
        let distancia = Math.sqrt(dx * dx + dy * dy);

        if (distancia > 1) { 
            posX += (dx / distancia) * speed;
            posY += (dy / distancia) * speed;
            globo.style.transform = `translate(${posX}px, ${posY}px)`;
        }

        requestAnimationFrame(actualizarPosicion);
    }

    function moverGlobo() {
        let maxX = window.innerWidth - 50;
        let maxY = window.innerHeight - 70;
        targetX = Math.random() * maxX;
        targetY = Math.random() * maxY;
    }

    // globo.onclick = () => {
    //     proyectos.scrollIntoView({behavior:"smooth"});
    //     galaOpen();
    // }
}

