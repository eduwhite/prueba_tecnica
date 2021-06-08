$(document).ready(function(){
        $("#formulario").submit(function(event){
                var parametros = $(this).serialize();
                $.ajax({
                        type: "POST",
                        url: "php/registro.php",
                        dataType: 'text',
                        data: parametros,
                        success: function(datos){
                                //Si retorna exito, se ejecutará lo siguiente
                                $("#mensaje").html(datos);
                                document.getElementById("formulario").reset();
                                setTimeout(function(){
                                        $("#mensaje").hide();
                                }, 2500);        
                        },
                        error : function(datos){
                                //Si retorna error, se ejecutará lo siguiente
                                $("#mensaje").html(datos);
                                document.getElementById("formulario").reset();
                                setTimeout(function(){
                                        $("#mensaje").hide();
                                }, 2500); 
                        }
                });
                event.preventDefault();
        });
});        