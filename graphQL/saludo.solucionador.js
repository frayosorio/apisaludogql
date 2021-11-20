exports.solucionador = {
    Query: {
        saludar: (parent, args, context, info) => {
            const fecha = new Date();
            const hora = fecha.getHours();
            console.log(args.idioma);

            var idiomas = ["ES", "EN", "FR", "DE"];
            var fila = idiomas.indexOf(args.idioma);
            if (fila < 0) fila = 0;

            const saludos = [{ manana: "Buenos días!", tarde: "Buenas tardes!", noche: "Buenas noches!" },
            { manana: "Good morning", tarde: "Good afternoon", noche: "Good evening" },
            { manana: "Bonjour", tarde: "Bonsoir", noche: "Bonne nuit" },
            { manana: "Guten morgen", tarde: "Guten nachmittag", noche: "Gute nacht" }];

            if (hora < 12) {
                return saludos[fila].manana;
            }
            else if (hora < 18) {
                return saludos[fila].tarde;
            }
            else {
                return saludos[fila].noche;
            }
        }
    }
}