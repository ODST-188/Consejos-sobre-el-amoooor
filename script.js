function clickBoton(){ const respuestas =
 [ "Escucha con atencion porque no lo dire OTRA vez, asi que, escucha, no tengas novia porque ni pa derrumbar una torre en el clash puedes (pal satiango) ",
  "si vas a tener una novia o novio si eres mujer, asegurate, que tenga la cartera bien gigante, de nada.",
   "Pa la otra compa",
    "Que, que quieres un consejo?,jaja, que Sonso, quiere ver si hay un consejo,okay, te lo dire porque estoy de buena onda, cuando des tu primer beso, asegurate, de comerte unas halls, de nada.",
      "Ahora, ve a richi deseando un futuro prometedor a la patria.",
       "cuando la vayas a invitar a cenar, haz la comida, porque habra gente, que se quedara contigo por la comida, de nada", 
       "Si es un toxico, significa PELIGROOO!",
       "si ves que esta triste, dale un abrazo, asi se sentira mejor, y luego, pateale las nalgas pa que ya no llore el cobarde",
       "Si la quieres besar, hazlo, si te rechaza, golpealo, para asi obligarlo a que te bese, de nada.",
       "Este no es un consejo pero nada mas quiero decir que el santiago quiere casarse con rodrigo, lo vi en su cuarto dibujandose con el rodrigo",
       "" ]; const numeroAleatorio = Math.floor(Math.random()*respuestas.length); document.getElementById("respuesta").textContent=respuestas[numeroAleatorio]; }