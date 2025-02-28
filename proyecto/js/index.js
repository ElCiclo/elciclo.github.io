window.onload  = () =>{
    let proyectos = document.getElementById("proyectos");
    let menu = document.getElementById("menu");
    let titulo = document.getElementById("thisCiclo");
    let cortos = document.getElementById("content");
    let menuArrow = document.getElementById("menuArrow");
    let icons = document.getElementsByClassName("cicloIcon");
    let passPage = document.getElementById("passPage");
    let querystring = window.location.search;
    let params = new URLSearchParams(querystring);
    let jsonProyectos = loadJson();

    iniProject();

    function loadJson(){
        return  [
            {
                "name":"DEL <del>AÑO</del> CICLO",
                "cortos":[
                    {
                        "img":"./img/51.jpg",
                        "titulo":"ABREJAIME",
                        "autor":"VII. By Rodrigo",
                    },
                    {
                        "img":"./img/60.jpg",
                        "titulo":"AVE",
                        "autor":"VII. By Diego",
                    },
                    {
                        "img":"./img/62.jpg",
                        "titulo":"B*** SHOWER",
                        "autor":"VII. By Diego",
                    },
                    {
                        "img":"./img/47.jpg",
                        "titulo":"CAMERA C***",
                        "autor":"VII. By Diego",
                    },
                    {
                        "img":"./img/40.jpg",
                        "titulo":"COSI",
                        "autor":"VII. By Alberto",
                    },
                    {
                        "img":"./img/43.jpg",
                        "titulo":"DGT",
                        "autor":"VII. By Alberto",
                    },
                    {
                        "img":"./img/59.jpg",
                        "titulo":"DIOS APRIETA",
                        "autor":"VII. By Dieg",
                    },
                    {
                        "img":"./img/48.jpg",
                        "titulo":"*****DUNE",
                        "autor":"VII. By Rodrigo",
                    },
                    {
                        "img":"./img/38.jpg",
                        "titulo":"ECOSIA",
                        "autor":"VII. By Rodrigo",
                    },
                    {
                        "img":"./img/33.jpg",
                        "titulo":"INTRO VII",
                        "autor":"VII. By Alberto",
                    },
                    {
                        "img":"./img/58.jpg",
                        "titulo":"*****SAURUS",
                        "autor":"VII. By Rodrigo",
                    },
                    {
                        "img":"./img/42.jpg",
                        "titulo":"O CARALHO",
                        "autor":"VII. By Alberto",
                    },
                    {
                        "img":"./img/57.jpg",
                        "titulo":"PLAN B",
                        "autor":"VII. By Rodrigo",
                    },
                    {
                        "img":"./img/61.jpg",
                        "titulo":"PORRÓNPOMERO",
                        "autor":"VII. By Diego",
                    },
            {
                        "img":"./img/45.jpg",
                        "titulo":"PQNQ",
                        "autor":"VII. By Alberto&Diego",
                    },
                    {
                        "img":"./img/52.jpg",
                        "titulo":"SARTÉN",
                        "autor":"VII. By Diego",
                    },
                    {
                        "img":"./img/49.jpg",
                        "titulo":"SONIDO SECRETO",
                        "autor":"VII. By Diego",
                    },
                    {
                        "img":"./img/50.jpg",
                        "titulo":"TIENDA DE CAMPAÑA",
                        "autor":"VII. By Alberto&Diego",
                    },
    
                ]
        },
        {
            "name":"SAN LORENZO",
            "cortos":[
                {
                    "img":"./img/20.jpg",
                    "titulo":"CAYÓ LA NOCHE",
                    "autor":"V. By Diego",
                },
                {
                    "img":"./img/4.jpg",
                    "titulo":"CICLO 4D",
                    "autor":"V. By EL CICLO",
                },
                {
                    "img":"./img/3.jpg",
                    "titulo":"DEC*****",
                    "autor":"II. By Rodrigo",
                },
                {
                    "img":"./img/10.jpg",
                    "titulo":"DEMASIADAS MUJERES",
                    "autor":"IV. By EL CICLO",
                },
    {
                    "img":"./img/2.jpg",
                    "titulo":"GENIUS: BAD BUNNY",
                    "autor":"II. By EL CICLO",
                },
    {
                    "img":"./img/6.jpg",
                    "titulo":"HANNAH MONTANA",
                    "autor":"V. By Diego",
                },
    {
                    "img":"./img/55.jpg",
                    "titulo":"HARRY POTTER",
                    "autor":"VI. By Rodrigo",
                },
    {
                    "img":"./img/9.jpg",
                    "titulo":"INC*****",
                    "autor":"VI. By Diego",
                },
    {
                    "img":"./img/26.jpg",
                    "titulo":"LEAVE THE DOOR OPEN",
                    "autor":"IV. By EL CICLO",
                },
    {
                    "img":"./img/54.jpg",
                    "titulo":"MAYERLING",
                    "autor":"VI. By Alberto",
                },
    {
                    "img":"./img/7.jpg",
                    "titulo":"MENÚ ********",
                    "autor":"VI. By Rodrigo",
                },
    {
                    "img":"./img/1.jpg",
                    "titulo":"PEUGEOOT 205",
                    "autor":"I. By EL CICLO",
                },
    {
                    "img":"./img/8.jpg",
                    "titulo":"ROBOT",
                    "autor":"VI. By Rodrigo",
                },
    {
                    "img":"./img/12.jpg",
                    "titulo":"SCARLET",
                    "autor":"IV. By Diego",
                },
    {
                    "img":"./img/5.jpg",
                    "titulo":"TINDER",
                    "autor":"V. By Diego",
                },
    {
                    "img":"./img/17.jpg",
                    "titulo":"TO CICLAOS",
                    "autor":"V. By Raúl",
                },
            ]
        },
        {
            "name":"ABADÍA DE PIEDAD",
            "cortos":[
                {
                    "img":"./img/35.jpg",
                    "titulo":"AHÍ HAY ALGO",
                    "autor":"VI. By EL CICLO",
                },
                {
                    "img":"./img/21.jpg",
                    "titulo":"CICLONAVIR",
                    "autor":"III. By Diego",
                },
    {
                    "img":"./img/25.jpg",
                    "titulo":"COCA TARRADELLAS",
                    "autor":"III. By Raúl",
                },
    {
                    "img":"./img/14.jpg",
                    "titulo":"C*********",
                    "autor":"IV. By Diego",
                },
    {
                    "img":"./img/28.jpg",
                    "titulo":"DIVERSIDAD CON BANDERAS",
                    "autor":"V. By EL CICLO",
                },
    {
                    "img":"./img/19.jpg",
                    "titulo":"GTA: SALOU CITY",
                    "autor":"V. By Diego",
                },
    {
                    "img":"./img/65.jpg",
                    "titulo":"OH DE RODRA",
                    "autor":"II. By Rodrigo",
                },
    {
                    "img":"./img/27.jpg",
                    "titulo":"SEAT",
                    "autor":"V. By Rodrigo",
                },
    {
                    "img":"./img/11.jpg",
                    "titulo":"TRAILER IV",
                    "autor":"IV. By EL CICLO",
                },
            ]
        },
        {
            "name":"TREMENDO CHOICE",
            "cortos":[
    {
                    "img":"./img/36.jpg",
                    "titulo":"AUTOBÚS A BARCELONA",
                    "autor":"VI. By Diego",
                },
    {
                    "img":"./img/67.jpg",
                    "titulo":"CADENA",
                    "autor":"By EL CICLO",
                },
    {
                    "img":"./img/41.jpg",
                    "titulo":"LA FINCA DE DON SEVERIANO",
                    "autor":"VII. By Alberto&Diego",
                },
    {
                    "img":"./img/68.jpg",
                    "titulo":"LA NIEBLA",
                    "autor":"VIII. By Alberto&Diego",
                },
    {
                    "img":"./img/72.jpg",
                    "titulo":"LOW BATTERY",
                    "autor":"V. By Rodrigo",
                },
    {
                    "img":"./img/46.jpg",
                    "titulo":"MAMÁ, QUIERO SER ARTISTA",
                    "autor":"VIII. By Rodrigo",
                },
    {
                    "img":"./img/69.jpg",
                    "titulo":"SUERTE",
                    "autor":"V. By Alberto&Diego",
                },
            ]
        },
        {
            "name":"VILLA ISABEL",
            "cortos":[
    {
                    "img":"./img/16.jpg",
                    "titulo":"ARROCES PERMATRAGO",
                    "autor":"V. By Alberto",
                },
    {
                    "img":"./img/18.jpg",
                    "titulo":"BOMBA",
                    "autor":"IV. By Diego",
                },
    {
                    "img":"./img/34.jpg",
                    "titulo":"CONSULTORIO DE BENITO",
                    "autor":"VI. By Alberto",
                },
    {
                    "img":"./img/64.jpg",
                    "titulo":"CREP",
                    "autor":"II. By Rodrigo",
                },
    {
                    "img":"./img/22.jpg",
                    "titulo":"CTRL",
                    "autor":"III. By Rodrigo",
                },
    {
                    "img":"./img/30.jpg",
                    "titulo":"DUREX",
                    "autor":"IV. By Diego",
                },
    {
                    "img":"./img/31.jpg",
                    "titulo":"STRAIGHT",
                    "autor":"VI. By Rodrigo",
                },
    {
                    "img":"./img/70.jpg",
                    "titulo":"JUST DANCE",
                    "autor":"III. By EL CICLO",
                },
    {
                    "img":"./img/37.jpg",
                    "titulo":"MOTO",
                    "autor":"VI. By Rodrigo",
                },
    {
                    "img":"./img/32.jpg",
                    "titulo":"PA TODA LA VIDA",
                    "autor":"IV. By EL CICLO",
                },
    {
                    "img":"./img/39.jpg",
                    "titulo":"PANDA",
                    "autor":"VI. By Alberto",
                },
    {
                    "img":"./img/13.jpg",
                    "titulo":"SILENCIO",
                    "autor":"V. By Rodrigo",
                },
    {
                    "img":"./img/15.jpg",
                    "titulo":"WAVIN FLAG",
                    "autor":"IV. By EL CICLO",
                },
            ]
        },
        {
            "name":"CICLOGÉNESIS EXPLOSIVA",
            "cortos":[
    {
                    "img":"./img/23.jpg",
                    "titulo":"COCINA CON SERGIO",
                    "autor":"III. By Rodrigo",
                },
    {
                    "img":"./img/63.jpg",
                    "titulo":"HAMBRE",
                    "autor":"II. By Rodrigo",
                },
    {
                    "img":"./img/56.jpg",
                    "titulo":"I WANT TO BREAK FREE",
                    "autor":"III. By Rodrigo",
                },
    {
                    "img":"./img/71.jpg",
                    "titulo":"INTRO VI",
                    "autor":"VI. By Lidia",
                },
    {
                    "img":"./img/29.jpg",
                    "titulo":"JUEVES",
                    "autor":"IV. By Alberto",
                },
    {
                    "img":"./img/24.jpg",
                    "titulo":"P******",
                    "autor":"III. By Diego",
                },
            ]
        },
    ]
    }

    function iniProject(){
        if(params.get("p") == null || jsonProyectos.length-1 < params.get("p") || 0 > params.get("p")){
            window.location.href = "./index.html?p=0";
        }else{
            loadContent(params.get("p"));
            setLocalStorage(params.get("p"));
            toMainPage();
            if(params.get("p") == 5 && localStorage.getItem("accesoPermitido") != "true"){
                cicloGenesisContrasena();
            }
        }
    }

    function setLocalStorage(currentProject){
        localStorage.setItem("currentProject",currentProject);
    }

    function toMainPage(){
        for (let icon of icons) {
            icon.onclick = () => {
                window.location.href = "../index.html";
            }
        }
    }

    function loadContent(projectNumber){
        proyecto = jsonProyectos[projectNumber];
        titulo.innerHTML = proyecto.name;

        proyecto.cortos.forEach(corto => {
            // console.log(corto.autor)
            let cortoContainer = document.createElement("div");
            let imagenCorto = document.createElement("img");
            let tituloCorto = document.createElement("div");
            let boldTitulo = document.createElement("b");
            let autorCorto = document.createElement("div");

            cortoContainer.classList.add("cortoContainer");
            imagenCorto.classList.add("imgCorto");

            cortoContainer.classList.add("pointer");
            imagenCorto.src= corto.img;
            boldTitulo.classList.add("tituloCorto");
            tituloCorto.append(boldTitulo);
            boldTitulo.innerHTML= corto.titulo;
            autorCorto.innerHTML= corto.autor;

            cortoContainer.append(imagenCorto,tituloCorto,autorCorto);
            cortoContainer.onclick = () => {
                window.location.href = "./corto/index.html?c="+corto.titulo;
            };

            cortos.appendChild(cortoContainer);
        });
    }

    menu.onclick = () =>{        
        let menuPopUp = document.createElement("div");
        let menuFondo = document.createElement("div");

        menuPopUp.id = "menuPopUp";
        menuFondo.id = "menuBackground";

        for(let i = 0; jsonProyectos.length>i; i++){
            let ciclo = jsonProyectos[i];

            let newElementList = document.createElement("div");
            newElementList.innerHTML = ciclo.name;

            newElementList.onclick = () => {
                window.location.href = "./index.html?p="+i;
            };

            menuPopUp.append(newElementList);
        }

        menuFondo.onclick = () => {
            document.body.style.overflowY = 'auto';
            menuPopUp.remove();
            menuFondo.remove();

            arrowClose();
        };

        document.body.style.overflowY = 'hidden';
        proyectos.append(menuFondo);
        menu.append(menuPopUp);

        arrowOpen();
    };

    function arrowOpen(){
        menuArrow.classList.remove("arrowClose");
        menuArrow.classList.add("arrowOpen");
    }
    function arrowClose(){
        menuArrow.classList.remove("arrowOpen");
        menuArrow.classList.add("arrowClose");
    }

    function cicloGenesisContrasena(){
        let sendPass = document.getElementById("sendPass");
        let pass = document.getElementById("passInput");
        passPage.classList.remove("hidePass");
        passPage.classList.add("showPass");
        document.body.style.overflow = 'hidden';

        sendPass.onclick = () => {
            if (pass.value == "YL0quenosirve_yonolorecicl0") {
                localStorage.setItem("accesoPermitido", "true");

                passPage.classList.remove("showPass");
                passPage.classList.add("hidePass");
                document.body.style.overflow = 'auto';
            }else{
                addPromoEmail();
            }
        }
    }
    
    function addPromoEmail(){
        let passContent = document.getElementById("passContent");
        let newDiv = document.createElement("div");
        
        newDiv.innerHTML ="system# error preguntar a lavidaesunciclog6@gmail.com"
        passContent.appendChild(newDiv);
    }
}