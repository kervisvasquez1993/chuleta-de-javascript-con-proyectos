[select patrocinante  "Dynamics" "Surgery" "Dental"]
<p class="red">SELECIONALA MODALIDAD</p>
[radio modalidad label_first default:2 "Ciclo" "Conferencista"]

[group Conferencista]
   
       <!--TITULO -->
       <div class="grupo1-cabecera">
              <span class="resaltado"> Ciclo </class>
           
              <label> Titulo (*)
                 [text* titulo placeholder "Titulo"]
              </label>
              <label> Área de Especialización  (*)
                 [select readeEspecializacin "area1" "area2" "area3" "area4"]
              </label>
      </div>
       <!--FIN DE TITULO -->

       <!--conferencia inicio -->
   <div class="grupo1-cuerpo">
      <div class="wrap-dia-padre"> <!--AQUI FUNCIONARA EL LOOP PARA AÑADIR DIAS-->
         <div class="wrap-day-child">   
            <span class="dias-ciclos"></span>
            <!-- ========CONFERENCIA ======= -->
            <div class="grupo1-conferencia">
                 <span class="resaltado">CONFERENCIA</span>
                 <label> 
                   [text titulo placeholder "Título"]
                 </label>
                 <label>
                     [textarea descripcion placeholder "Descripción"] 
                 </label>
            </div> 
            <!-- =========== FIN DE CONFERENCIA ============ -->
            <!-- ========== INICIO CONFERENCISTA ===== -->
            <div class="grupo1-conferencista">
               <div class="wrap-conferencista-padre"> 
                    <div class="wrapp-conferencista-child">
                      <span class="resaltado">CONFERENCISTA</span>
                      <label>
                         [text nombre placeholder "Nombre"]
                      </label>
                      <label>
                         [tel telefono placeholder "teléfono"]
                      </label> 
                      <label>
                         [email email placeholder "Email"]
                      </label>
                      <label>
                         [text pais_origen placeholder "País de Origen"]
                      </label>
                      <label>
                         [text* pais_residencia placeholder "País de 
                         Residencia"]
                      </label>
             
                      <div class="adjuntar_informacion">
                           <label>
                               Adjuntar CV
                              [file* adjuntar_cv]
                           </label>
                           <label>
                                Fotografía
                                [file fotografia]
                           </label>
                      </div>
                    </div>
               </div>
               <!--============ inicio de boton para añadir conferencista-->
               <p class="boton-añadir-conferencista">Añadir Conferencista</p>
               <!-- ========== fin de boton ========== ------>
            </div> 
            <!--========FIN DE CONFERENCISTA ====== -->
            <!-- ========== MODERADORES =========== ------>
            <div class="grupo1-moderador">
                <div class="wrap-moderador-padre"> 
                     <div class="wrap-moderadores-child">
                         <span class="resaltado">MODERADOR</span>
                         [text* nombre placeholder placeholder "Nombre"]
                         [tel* telefono-moderador placeholder "Teléfono"]
                         [email correo-moderador placeholder "E-mail"]
                         [text especializacion-moderador placeholder "Especialización"]
                         <div class="adjuntar_informacion">
                           <label>
                               Adjuntar CV
                              [file* adjuntar_cv]
                           </label>
                           <label>
                                Fotografía
                                [file fotografia]
                           </label>
                         </div>
                     </div>
                </div>    
                <!--============ inicio de boton para añadir moderadores-->
                <p class="boton-añadir-moderador">Añadir Moderador</p>
                <!-- ========== fin de boton ========== ------>
            </div>
           
         </div>   
        
      </div>
      <p class="anadir-dia">Añadir Dia</p>
   </div>
[/group]
[group Ciclo]

[text hola]

[/group]

[submit "Enviar"]