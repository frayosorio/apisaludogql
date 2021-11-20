exports.solucionador = {
    Query:{
        saludar: () => {
            const fecha=new Date();
            const hora=fecha.getHours();

            if(hora<12){
                return "Buenos días!";
            }
            else if (hora<18){
                return "Buenas tardes!"
            }
            else{
                return "Buenas noches!"
            }
        }
    }
}