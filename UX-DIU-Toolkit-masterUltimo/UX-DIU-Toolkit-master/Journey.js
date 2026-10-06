/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Carlos Martínez",
                Photo: "man.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere siempre que pueda hacer una escapada, irse con su barco y estar en calma",
                touch1: "Su agenda personal y nuestra web",
                feel1: "4",
                con1: "Esta muy liado con el trabajo y no sabe cuando va a porder irse",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet ofertas para poder alquilar un barco las fechas que pueda",
                touch2: "Nuestra web en el apartado de los barcos",
                feel2: "2",
                con2: "Hay muchos barcos y no sabe cual quiere",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Se decide unas fechas y ya se alquila el barco que se adecua a sus necesidades y gustos. Lo coge en fechas de sol y calor",
                touch3: "Movil reservando el barco los dias deseados y mirando el tiempo",
                feel3: "3",
                con3: "Está preocupado por el tiempo y el desplazamiento (coche y aparcamiento)",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Comprueba nuestros precios respecto a los de otras páginas",
                touch4: "ordenador",
                feel4: "3",
                con4: "Busca a traves de otras paginas buscando la mejor opcion calidad precio",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra el barco que quiere y se adecua a sus preferencias y ademas se ayuda a decidirse la buenas reseñas de nuestra web",
                touch5: "móvil (whatsapp)",
                feel5: "4",
                con5: "Comunica a los amigos su decisión para que la valoren",
                ima5: "cartoon-phoning.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue reservar el barco que queria en las fechas que podia",
                touch6: "ordenador",
                feel6: "5",
                con6: "Puso el seguro de cancelación por si le pasaba algun imprevisto",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Laura Fernández",
                Photo: "woman.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere prepara un viaje con unos amigos a un puerto y quiere pescar en barco",
                touch1: "agenda",
                feel1: "5",
                con1: "Quiere pasar unos buenos dias con sus amigos",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Pregunta a sus amigos para que le den una fecha concreta y irse unos dias al puerto",
                touch2: "Servicio (agencia)",
                feel2: "3",
                con2: "Tiene que explicarle su plan a sus amigos y que estos le den el visto bueno",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Sus amigos le dan el visto bueno y se ponen a mirar barcos material de pesca y sus fechas disponibles",
                touch3: "Móvil llamando y pagina web",
                feel3: "4",
                con3: "Piensa que va a ser dificil buscar algo",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Empieza a ver lo que busca",
                touch4: "Nuestra Web",
                feel4: "1",
                con4: "No entiende mucho del tema y se tiene que apoyar de sus amigos",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra el barco que quiere y el material de pesca y lo reserva unos dias",
                touch5: "Nuestra Web",
                feel5: "5",
                con5: "Le pide muchos datos y le resulta incómodo completar formulario",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consiguie reservar todo lo que queria y encima a buen precio",
                touch6: "En nuestra web se completa la reserva",
                feel6: "3",
                con6: "Buscara que uno de los amigos con los que vaya sepa manejar un barco y que sepa algo de pesca para poder enseñar a todo el grupo de amigos",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



