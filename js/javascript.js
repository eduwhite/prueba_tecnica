$(document).ready(function(){
        $("#formulario").submit(function(event){
                event.preventDefault();
                var parametros = $(this).serialize();
                $.ajax({
                        type: "POST",
                        url: "registro.php",
                        dataType: 'text',
                        data: parametros,
                        success: function(datos){
                                //Si retorna exito, se ejecutará lo siguiente
                                $("#mensaje").html(datos);
                        },
                        error : function(datos){
                                //Si retorna error, se ejecutará lo siguiente
                                $("#mensaje").html(datos);
                        }
                });
        });
});        