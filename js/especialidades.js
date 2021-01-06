$(document).ready(function () {
    var especialistas = ["Dra. Lazaro, Carmen <br>  Dra. Reyna, Cecilia", 
    "Dra. Heredia, Maria Cecilia <br> Dra. Kos, Verónica", 
    "Lic. Fernandes, Mariela",
    "Dr. Fiszerowicz, Ricardo", 
    "Lic. Barrionuevo, Noelia <br> Lic. Garcia, Daiana",
    "Dr. Soto, Ricardo", 
    "Dr. Beigelman, Ricardo <br> Dr. Dzembrowski, Leonel",
    "Lic. Marcinkowski, Gisela",
    "Dr. Onorati, Daniel",
    "Dr. Fiszerowicz, Ricardo", 
    "Dr. Murillo, Yoryi",
    "Dra. Ruiz Gonzalez, Gisela"];
    
    var textoCardio = $('#especialidad-cardio');
    var textoDiabetes = $('#especialidad-diabetes');
    var textoNutri = $('#especialidad-nutricion');
    var textoGastro = $('#especialidad-gastro');
    var textoPsico = $('#especialidad-psico');
    var textoTrauma = $('#especialidad-trauma');
    var textoDoppler = $('#especialidad-doppler');
    var textoRehab = $('#especialidad-rehab');
    var textoFlebo = $('#especialidad-flebologia');
    var textoClinica = $('#especialidad-clinica');
    var textoEco = $('#especialidad-eco');
    var textoGineco = $('#especialidad-gineco');

    textoCardio.mouseover(function (e) {
        e.preventDefault();
        textoAnterior = textoCardio.children("p").text();
        textoCardio.children("p").html(especialistas[0]);
        textoCardio.mouseout(function (e) {
            e.preventDefault();
            textoCardio.children("p").text(textoAnterior);
        });
    })
  
    textoDiabetes.mouseover(function (e) {
        e.preventDefault();
        textoAnterior = textoDiabetes.children("p").text();
        textoDiabetes.children("p").html(especialistas[1]);
        textoDiabetes.mouseout(function (e) {
            e.preventDefault();
            textoDiabetes.children("p").text(textoAnterior);
        });
    })

    textoNutri.mouseover(function (e) {
        e.preventDefault();
        textoAnterior = textoNutri.children("p").text();
        textoNutri.children("p").text(especialistas[2]);
        textoNutri.mouseout(function (e) {
            e.preventDefault();
            textoNutri.children("p").text(textoAnterior);
        });
    })

    textoGastro.mouseover(function (e) {
        e.preventDefault();
        textoAnterior = textoGastro.children("p").text();
        textoGastro.children("p").text(especialistas[3]);
        textoGastro.mouseout(function (e) {
            e.preventDefault();
            textoGastro.children("p").text(textoAnterior);
        });
    })

    textoPsico.mouseover(function (e) {
        e.preventDefault();
        textoAnterior = textoPsico.children("p").text();
        textoPsico.children("p").html(especialistas[4]);
        textoPsico.mouseout(function (e) {
            e.preventDefault();
            textoPsico.children("p").text(textoAnterior);
        });
    })

    textoTrauma.mouseover(function (e) {
        e.preventDefault();
        textoAnterior = textoTrauma.children("p").text();
        textoTrauma.children("p").text(especialistas[5]);
        textoTrauma.mouseout(function (e) {
            e.preventDefault();
            textoTrauma.children("p").text(textoAnterior);
        });
    })

    textoDoppler.mouseover(function (e) {
        e.preventDefault();
        textoAnterior = textoDoppler.children("p").text();
        textoDoppler.children("p").html(especialistas[6]);
        textoDoppler.mouseout(function (e) {
            e.preventDefault();
            textoDoppler.children("p").text(textoAnterior);
        });
    })

    textoRehab.mouseover(function (e) {
        e.preventDefault();
        textoAnterior = textoRehab.children("p").text();
        textoRehab.children("p").text(especialistas[7]);
        textoRehab.mouseout(function (e) {
            e.preventDefault();
            textoRehab.children("p").text(textoAnterior);
        });
    })

    textoFlebo.mouseover(function (e) {
        e.preventDefault();
        textoAnterior = textoFlebo.children("p").text();
        textoFlebo.children("p").text(especialistas[8]);
        textoFlebo.mouseout(function (e) {
            e.preventDefault();
            textoFlebo.children("p").text(textoAnterior);
        });
    })

    textoClinica.mouseover(function (e) {
        e.preventDefault();
        textoAnterior = textoClinica.children("p").text();
        textoClinica.children("p").text(especialistas[9]);
        textoClinica.mouseout(function (e) {
            e.preventDefault();
            textoClinica.children("p").text(textoAnterior);
        });
    })

    textoEco.mouseover(function (e) {
        e.preventDefault();
        textoAnterior = textoEco.children("p").text();
        textoEco.children("p").text(especialistas[10]);
        textoEco.mouseout(function (e) {
            e.preventDefault();
            textoEco.children("p").text(textoAnterior);
        });
    })

    textoGineco.mouseover(function (e) {
        e.preventDefault();
        textoAnterior = textoGineco.children("p").text();
        textoGineco.children("p").text(especialistas[11]);
        textoGineco.mouseout(function (e) {
            e.preventDefault();
            textoGineco.children("p").text(textoAnterior);
        });
    })


  
})

