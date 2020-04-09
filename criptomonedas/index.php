<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Criptomonedas </title>
     
     <link href="https://bootswatch.com/4/sandstone/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
    <h1 class="text-center my-5">Cotiza Criptomonedas al Instante</h1>
    <div class="container contenido-principal">

        <div class="row justify-content-center">
            <form class="col-10 col-md-8" id="formulario">
                <div class="formulario-cotizar row">
                        <div class="form-group col-12 col-md-4">
                            <select id="moneda" class="form-control">
                                <option value="" disabled selected>Elige tu Moneda </option>
                                <option value="USD">Dolar Estadounidense</option>
                                <option value="MXN">Peso Mexicano</option>
                                <option value="GBP">Libras</option>
                                <option value="EUR">Euros</option>
                            </select>
                        </div>    
                        <div class="form-group col-12 col-md-4">
                            <select id="criptomoneda" class="form-control">
                                <option value="" disabled selected>Elige Criptomoneda</option>
                            </select>
                        </div>
                        <div class="form-group col-12 col-md-4">
                            <input type="submit" class="btn btn-success" value="Cotizar">
                        </div>
                </div><!--.formulario-cotizar-->

                <div class="panel-resultados row justify-content-center mt-5">
                    <div class="contenido-spinner">
                  
                    </div>
                    <div class="mensajes col-12"></div>
                    <div id="resultado" class="col-12"></div>
                </div><!--panel-resultados-->
            </form>
        </div> 
    </div>
    <script src="js/api.js"></script>
    <script src="js/ui.js"></script>
    <script src="js/app.js"></script>
</body>
</html>