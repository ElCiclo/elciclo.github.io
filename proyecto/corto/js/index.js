window.onload  = () =>{
    let titulo = document.getElementById("titulo");
    let cortoVideo = document.getElementById("cortoVideo");
    let curiosidades = document.getElementById("curiosidades");
    let icons = document.getElementsByClassName("cicloIcon");
    let querystring = window.location.search;
    let params = new URLSearchParams(querystring);
    let jsonCortos = loadJson();

    function loadJson(){
        return  [
            {
                "titulo":"ABREJAIME",
                "embedId": "A_jlltfv2bY",
                "curiosidades":"El actor que interpreta a Jaime en el tráiler, se llama Jaime en la vida real",
            },
            {
                "titulo":"AVE",
                "embedId": "mgJSowisf4Q",
                "curiosidades":"En las tomas aéreas de la vía de tren, hay un doble de acción muy fácil de detectar",
            },
            {
                "titulo":"B*** SHOWER",
                "embedId": "e-u2NLKhKts",
                "curiosidades":"Protagonizado por la familia de Diego",
            },
            {
                "titulo":"CAMERA C***",
                "embedId": "-Hb3aVowb4I",
                "curiosidades":"Rodado en el Centro Científico Tecnológico de la Universidad de la Rioja",
            },
	        {
                "titulo":"COSI",
                "embedId": "BOadpezHu6o",
                "curiosidades":"Es el vídeo con el tiempo de rodaje más largo. Tres ciclos entre la primera y la última secuencia",
            },
	        {
                "titulo":"DGT",
                "embedId": "edV_TGAXomc",
                "curiosidades":"El papel de Lidia hace referencia a una situación similar que se produjo en las calles del municipio de Ezcaray",
            },
	        {
                "titulo":"DIOS APRIETA",
                "embedId": "2K9W5Rl2jzI",
                "curiosidades":"El brazo de Dios que aparece en el vídeo es de Alberto, actual pareja de la actriz protagonista",
            },
	        {
                "titulo":"*****DUNE",
                "embedId": "cfoX7JS2c1Y",
                "curiosidades":"Los planos escalando una montaña son un homenaje a \"OH DE RODRA\", que se rodó en la misma localización",
            },
	        {
                "titulo":"ECOSIA",
                "embedId": "fqYK_FvHSnk",
                "curiosidades":"Para prepararse este papel y concienciarse con el medio ambiente, Rodrigo, protagonista del anuncio, trabajó para Ecoembes",
            },
	        {
                "titulo":"INTRO VII",
                "embedId": "NWoSRuRLnU0",
                "curiosidades":"Basado en hechos reales. Inspirado en el documental \"Cuando fuimos campeones\"",
            },
	        {
                "titulo":"*****SAURUS",
                "embedId": "P0gs_AyVrcs",
                "curiosidades":"Nuestro tributo a Jurassic Park",
            },
	        {
                "titulo":"O CARALHO",
                "embedId": "Toc7A7KOkAA",
                "curiosidades":"El licor \"O Carallo\" proviene del mismo árbol que aparece en el vídeo",
            },
	            {
                "titulo":"PLAN B",
                "embedId": "gOajq3I7Uqg",
                "curiosidades":"4 personas, 10 personajes, una cámara y una perra. Aparece la tienda de campaña del sketch \"Tienda de campaña\"",
            },
	                {
                "titulo":"PORRÓNPOMERO",
                "embedId": "DJfSk-Hhegk",
                "curiosidades":"Estamos tratando de patentar este invento",
            },
	                {
                "titulo":"PQNQ",
                "embedId": "pnav1vaY7tc",
                "curiosidades":"Inspirado en la frase mítica de nuestro amigo David (protagonista del anuncio)",
            },
	            {
                "titulo":"SARTÉN",
                "embedId": "3_eNJKI_tq0",
                "curiosidades":"En un principio, el protagonista de este anuncio iba a ser Rodrigo, pero el papel no le pareció original",
            },
	            {
                "titulo":"SONIDO SECRETO",
                "embedId": "WrV68TnkCx4",
                "curiosidades":"Se nos olvidó hacer el jingle de \"Cadena Ciclo\". Aparecerá en próximas entregas",
            },
	                {
                "titulo":"TIENDA DE CAMPAÑA",
                "embedId": "Zp9wKt-kByo",
                "curiosidades":"Este vídeo nace del sentimiento vengativo de Diego (el del cuchillo) por haber pasado todo el Riverland (festival de música en Asturias) en esa tienda con fugas de agua. DEP",
            },
	                {
                "titulo":"CAYÓ LA NOCHE",
                "embedId": "XeEM253bcAE",
                "curiosidades":"David y Raúl se jugaron a cara o cruz quien era Ortega y quien Gasset",
            },
            {
                "titulo":"CICLO 4D",
                "embedId": "0GIQzlo_XcA ",
                "curiosidades":"Es nata",
            },
            {
                "titulo":"DEC*****",
                "embedId": "3WyXlLroqXg",
                "curiosidades":"Atrezzo obsequiado por las calles de Logroño",
            },
            {
                "titulo":"DEMASIADAS MUJERES",
                "embedId": "ICPF63mwbss",
                "curiosidades":"El vestido de la abuela es el mismo que el del protagonista en \"GTA Salou City\"",
            },
            {
                "titulo":"GENIUS: BAD BUNNY",
                "embedId": "P_B5cEya15s",
                "curiosidades":"La frase \"no es lo mismo el boxeo que la lucha libre\" procede de una entevista al artista puertorriqueño Residente, que Chema (Bad Bunny) usó como inspiración para su acento boricua",
            },
            {
                "titulo":"HANNAH MONTANA",
                "embedId": "dSRIPERgLiE",
                "curiosidades":"El grafiti de \"JM\" se puede visitar en la bajada al Parque del Ebro, por las escaleras del Navarrete el Mudo",
            },
            {
                "titulo":"HARRY POTTER",
                "embedId": "m9LfOhOLcMU",
                "curiosidades":"La escena de \"Opticalia\" no estaba en el guión",
            },
            {
                "titulo":"INC*****",
                "embedId": "pI_g5hgkNts",
                "curiosidades":"Cuenta con la prodigiosa voz de Ignacio Marco, el mítico narrador de \"Detrás del Ciclo\"",
            },
            {
                "titulo":"LEAVE THE DOOR OPEN",
                "embedId": "OGML_niA_yo",
                "curiosidades":"El personaje de Sergio (sombrero de paja) surgió a última hora con el atrezzo para otro sketch que se rodaba el mismo día",
            },
            {
                "titulo":"MAYERLING",
                "embedId": "t95_g4abujQ",
                "curiosidades":"Este anuncio está inspirado en \"El ladrón de Coca-Cola\", que aparece en el cortometraje \"Llámame Claudia\" de los Venga Monjas",
            },
            {
                "titulo":"MENÚ ********",
                "embedId": "",
                "curiosidades":"Todos los sonidos del vídeo (incluido el doblaje de voz) son ejecutados por Rodrigo.",
            },
            {
                "titulo":"PEUGEOOT 205",
                "embedId": "fGgUmMLbAZg",
                "curiosidades":"El único vídeo del I Ciclo que se puede ver en la página. Contigo hasta el fin del mundo",
            },
            {
                "titulo":"ROBOT",
                "embedId": "HD1jbrec_Co",
                "curiosidades":"En un fotograma del vídeo, se puede ver que el fabricante del robot es \"Bosonit Dynamics\". Un guiño a la estupenda consultora \"Bosonit\"",
            },
            {
                "titulo":"SCARLET",
                "embedId": "zLO8jvSpAAU",
                "curiosidades":"Basado en la apasionante vida de Roberwido",
            },
            {
                "titulo":"TINDER",
                "embedId": "4Spt7EnpEjk",
                "curiosidades":"Este vídeo entra en el exclusivo grupo de \"Cortos rodados en la oficina de la directora de La Gota de Leche de Logroño\"",
            },
            {
                "titulo":"TO CICLAOS",
                "embedId": "KgaWnB2uPu4",
                "curiosidades":"La Jessi es, posiblemente, el mejor papel de Judith en una producción del Ciclo",
            },
            {
                "titulo":"AHÍ HAY ALGO",
                "embedId": "kYOFg2D9izM",
                "curiosidades":"Este vídeo se proyectó en La Gota de Leche un 25 de noviembre, día de la eliminación de la Violencia contra la Mujer",
            },
            {
                "titulo":"CICLONAVIR",
                "embedId": "E7Iyk3DhIKY",
                "curiosidades":"Para rodar las escenas de la presentadora todo el equipo técnico tuvo que salir el estudio, con tal de no poner nerviosa a la actriz",
            },
            {
                "titulo":"COCA TARRADELLAS",
                "embedId": "VoSFcVv-GQQ",
                "curiosidades":"Rodado en la finca de nuestro amigo Adrián Moreno González. DEP",
            },
            {
                "titulo":"C*********",
                "embedId": "wabufZQWArk",
                "curiosidades":"La petaca que aparece en el vídeo es un souvenir traído de Canadá, al cual se aplicó el \"descuento de los cinco dedos\"",
            },
            {
                "titulo":"DIVERSIDAD CON BANDERAS",
                "embedId": "wabufZQWArk",
                "curiosidades":"Las voces de la sintonía final pertenecen a Alberto, Diego y David",
            },
            {
                "titulo":"GTA: SALOU CITY",
                "embedId": "igXHmoEd5Fs",
                "curiosidades":"Obviamente no está rodado en Salou. Es sólo que nuestro grupo de amigos se forjó allí y le tenemos cariño",
            },
            {
                "titulo":"OH DE RODRA",
                "embedId": "39fhP8woNd0",
                "curiosidades":"Rodado en las Bardenas Reales",
            },
            {
                "titulo":"SEAT",
                "embedId": "o0lKzF3c84g",
                "curiosidades":"Una carta de amor a la España profunda",
            },
            {
                "titulo":"TRAILER IV",
                "embedId": "nlS8f8Dnung",
                "curiosidades":"Nuestro pequeño homenaje a \"La Batamanta\"",
            },
            {
                "titulo":"AUTOBÚS A BARCELONA",
                "embedId": "_VmAKWuGERk",
                "curiosidades":"Ganador del segundo premio del concurso \"SEVEN UR\" 2023 de la Universidad de la Rioja",
            },
            {
                "titulo":"CADENA",
                "embedId": "",
                "curiosidades":"Una trilogía sobre un triángulo amoroso. 3 son multitud",
            },
            {
                "titulo":"LA FINCA DE DON SEVERIANO",
                "embedId": "rO64wPpNKzc",
                "curiosidades":"Ganador del primer premio del concurso \"SEVEN UR\" 2024 de la Universidad de la Rioja",
            },
            {
                "titulo":"LA NIEBLA",
                "embedId": "",
                "curiosidades":"Proyecto ganador de las BECAS INICIA 2023, del Ayuntamiento de Logroño",
            },
            {
                "titulo":"LOW BATTERY",
                "embedId": "fGgUmMLbAZg",
                "curiosidades":"Ganador del tercer premio del concurso \"DICIEMBRE EN CORTO\" 2022",
            },
            {
                "titulo":"MAMÁ, QUIERO SER ARTISTA",
                "embedId": "ThkMLSdD_fs",
                "curiosidades":"Ganador del segundo premio del concurso \"DICIEMBRE EN CORTO\" 2024",
            },
            {
                "titulo":"SUERTE",
                "embedId": "tSMOxK5-8L4",
                "curiosidades":"Ganador del segundo premio del concurso \"DICIEMBRE EN CORTO\" 2022",
            },
            {
                "titulo":"ARROCES PERMATRAGO",
                "embedId": "-OMZ8q1ROLU",
                "curiosidades":"La idea de Arroces Permatrago surge por la fama de los rissotos de Alberto",
            },
            {
                "titulo":"BOMBA",
                "embedId": "_dD7RjqPH54",
                "curiosidades":"Rodado el mismo día que \"Cumquerque\" y \"Durex\"",
            },
            {
                "titulo":"CONSULTORIO DE BENITO",
                "embedId": "we115PyTZ00",
                "curiosidades":"Para falsear las reacciones de Benito, Alberto se sentaba en la otra silla y le decía las frases",
            },
            {
                "titulo":"CREP",
                "embedId": "Z2FIsaGIF8E",
                "curiosidades":"Este vídeo entra en el extenso grupo de \"Vídeos musicales que consisten en un juego de palabras\"",
            },
            {
                "titulo":"CTRL",
                "embedId": "3AN9Yp0dkiA",
                "curiosidades":"Este vídeo entra en el extenso grupo de \"Vídeos musicales que consisten en un juego de palabras\"",
            },
            {
                "titulo":"DUREX",
                "embedId": "C4Iyi0fmbhg",
                "curiosidades":"Spin-off de \"Cumquerque\"",
            },
            {
                "titulo":"STRAIGHT",
                "embedId": "OgVbHPXKxKk",
                "curiosidades":"Este vídeo entra en el extenso grupo de \"Vídeos musicales que consisten en un juego de palabras\"",
            },
            {
                "titulo":"JUST DANCE",
                "embedId": "47_1ShlJHpw",
                "curiosidades":"Alberto se tuvo que ir nada mas terminar, ya que tenía que ir a trabajar de socorrista",
            },
            {
                "titulo":"MOTO",
                "embedId": "UZj6MqmqSCk",
                "curiosidades":"Basado en hechos reales. Hay una cantidad ingente de easter-eggs de otros vídeos del VI Ciclo en la conversación",
            },
            {
                "titulo":"PA TODA LA VIDA",
                "embedId": "pDJ2PAC8U7o",
                "curiosidades":"Así nos imaginamos que sería el videoclip de esta canción, al verlo en tantas stories el verano que se pegó",
            },
            {
                "titulo":"PANDA",
                "embedId": "6GhdJrKjzVs",
                "curiosidades":"El Panda tiene 69 CV de verdad",
            },
            {
                "titulo":"SILENCIO",
                "embedId": "OUdDhnh8Hc4",
                "curiosidades":"Este vídeo entra en el extenso grupo de \"Vídeos musicales que consisten en un juego de palabras\"",
            },
            {
                "titulo":"WAVIN FLAG",
                "embedId": "2D3Srzk6Gxo",
                "curiosidades":"Durante este rodaje, un tío se lesionó el tobillo",
            },
            {
                "titulo":"COCINA CON SERGIO",
                "embedId": "ABp8QI1IA7o",
                "curiosidades":"Basado en hechos reales",
            },
            {
                "titulo":"HAMBRE",
                "embedId": "lJrkafJjlMw",
                "curiosidades":"Blackface",
            },
            {
                "titulo":"I WANT TO BREAK FREE",
                "embedId": "oToO_RhiCiQ",
                "curiosidades":"El nombre del aclamado personaje de David con peluca es \"Elettra\"",
            },
            {
                "titulo":"INTRO VI",
                "embedId": "i5OM33tLzYw",
                "curiosidades":"El atrezzo fue obsequiado por el Hospital Provincial de La Rioja",
            },
            {
                "titulo":"JUEVES",
                "embedId": "SMG-aWXwBvQ",
                "curiosidades":"Se rodó en un trayecto Logroño-Agoncillo con el vagón vacío. Era agosto y el aire acondicionado estaba averiado",
            },
            {
                "titulo":"P******",
                "embedId": "TFLjjaBh888",
                "curiosidades":"La voz de la madre de Sergio es la misma que la de la actriz del vídeo",
            },
        ]
    }

    iniProject();
    function iniProject(){
        if(params.get("c") == null || !jsonCortos.find((corto) => params.get("c") === corto.titulo)){
            window.location.href = "./index.html?c="+jsonCortos[Math.floor(Math.random() * jsonCortos.length)].titulo;
        }else{
            loadContent();
            checkLocalStorage();
            toMainPage();
        }
    }

    function checkLocalStorage(){
        if(!localStorage.getItem("currentProject")){
            localStorage.setItem("currentProject","0");
        }

        titulo.onclick = () => {
            window.location.href = "../index.html?p="+localStorage.getItem("currentProject");
        }
    }

    function toMainPage(){
        for (let icon of icons) {
            icon.onclick = () => {
                window.location.href = "../../index.html";
            }
        }
    }

    function loadContent(){
        let currentCorto = jsonCortos.find((corto) => params.get("c") === corto.titulo);

        // titulo.innerText = currentCorto.titulo;
        cortoVideo.src = "https://www.youtube.com/embed/"+currentCorto.embedId;
        curiosidades.innerText = currentCorto.curiosidades;
    }
}