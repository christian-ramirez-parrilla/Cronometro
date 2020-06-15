"use strict"


var centesima=0;

var segundo=0;

var minuto=0;

var hora=0;

var miIntervalCente;




// *******************************************************
// ********************* EMPEZAR *************************


var nodoBtnEmpezar=document.querySelector("#empezar");

nodoBtnEmpezar.classList.remove("desactivado");

nodoBtnEmpezar.addEventListener("click",function(){

    this.disabled=true;

    if( this.disabled==true ){

        this.classList.add("desactivado");

    }

    nodoBtnParar.disabled=false;

    if( nodoBtnParar.disabled==false || nodoBtnParar.classList.contains("desactivado") ){

        nodoBtnParar.classList.remove("desactivado");

    }

    nodoBtnGuardar.disabled=false;

    if( nodoBtnGuardar.disabled==false || nodoBtnGuardar.classList.contains("desactivado") ){

        nodoBtnGuardar.classList.remove("desactivado");

    }

    nodoBtnReiniciar.disabled=true;

    if( nodoBtnReiniciar.disabled==true ){

        nodoBtnReiniciar.classList.add("desactivado");

    }

    nodoBtnBorrar.disabled=false;

    if( nodoBtnBorrar.disabled==false || nodoBtnBorrar.classList.contains("desactivado") ){

        nodoBtnBorrar.classList.remove("desactivado");

    }
    
    miIntervalCente=setInterval(function(){

        centesima++;
      
    
        if( centesima<10 ){
    
            centesimas.innerHTML="<h1>0"+centesima+"</h1>";
    
        }else{
    
            centesimas.innerHTML="<h1>"+centesima+"</h1>";
    
    
        }
    
        
        
        
        
        if( centesima==99 ){
    
            centesima=0-1;
    
            segundo++;
    
            if( segundo<10 ){
    
                segundos.innerHTML="<h1>0"+segundo+":</h1>";
    
            }else{
    
                segundos.innerHTML="<h1>"+segundo+":</h1>";         
    
            }
    
            
    
            
            
            
            if( segundo==59 ){
    
                segundo=0-1;
    
                minuto++;

               
                
                if( minuto<10 ){
    
                    minutos.innerHTML="<h1>0"+minuto+":</h1>";
        
                }else{
        
                    minutos.innerHTML="<h1>"+minuto+":</h1>";         
        
                }
               
               
               
               
               
               
                if( minuto==59 ){
    
                    minuto=0-1;
    
                    hora++;
        
                    if( hora<10 ){
    
                        horas.innerHTML="<h1>0"+hora+":</h1>";
            
                    }else{
            
                        horas.innerHTML="<h1>"+hora+":</h1>";         
            
                    }
    
    
                }
    
            }
    
        }
    
    
    }, 10);

});




// *******************************************************
// ******************** PARAR ****************************



var nodoBtnParar=document.querySelector("#parar");

nodoBtnParar.disabled=true;

nodoBtnParar.addEventListener("click",function(){

    nodoBtnEmpezar.disabled=true;

    if( nodoBtnEmpezar.disabled==true ){

        nodoBtnEmpezar.classList.add("desactivado");


    }

    this.disabled=true;

    if( this.disabled==true){

        this.classList.add("desactivado");

    }

    nodoBtnGuardar.disabled=true;

    if( nodoBtnGuardar.disabled==true ){

        nodoBtnGuardar.classList.add("desactivado");

    }

    nodoBtnReiniciar.disabled=false;

    if( nodoBtnReiniciar.disabled==false || nodoBtnReiniciar.classList.contains("desactivado") ){

        nodoBtnReiniciar.classList.remove("desactivado");

    }

    nodoBtnBorrar.disabled=false;

    if( nodoBtnBorrar.disabled==false || nodoBtnBorrar.classList.contains("desactivado") ){

        nodoBtnBorrar.classList.remove("desactivado");

    }
   

    clearInterval(miIntervalCente);


});






// *******************************************************
// ******************* GUARDAR ***************************



var nodoBtnGuardar=document.querySelector("#guardar");

nodoBtnGuardar.disabled=true;

nodoBtnGuardar.addEventListener("click",function(){

    nodoBtnEmpezar.disabled=true;

    if( nodoBtnEmpezar.disabled==true ){

        nodoBtnEmpezar.classList.add("desactivado");

    }

    nodoBtnParar.disabled=false;

    if( nodoBtnParar.disabled==false || nodoBtnParar.classList.contains("desactivado") ){

        nodoBtnParar.classList.remove("desactivado");

    }

    this.disabled=false;

    if( this.disabled==false || this.classList.contains("desactivado") ){

        this.classList.remove("desactivado");

    }

    nodoBtnReiniciar.disabled=true;

    if( nodoBtnReiniciar.disabled==true ){

        nodoBtnReiniciar.classList.add("desactivado");

    }

    nodoBtnBorrar.disabled=false;

    if( nodoBtnBorrar.disabled==false || nodoBtnBorrar.classList.contains("desactivado") ){

        nodoBtnBorrar.classList.remove("desactivado");

    }


            // h1 texto **********************************

            let nodoH1Memoria=document.createElement("h1");

            let strCentesima = "";

            let strSegundo = "";

            let strMinuto = "";

            let strHora = "";

            if( centesima<10 ){

                strCentesima="0"+centesima;
    
            }else{

                strCentesima=centesima;

            } 

            if( segundo<10 ){
    
            strSegundo="0"+segundo;

            }else{

            strSegundo=segundo;

            }    

            if( minuto<10 ){
    
                strMinuto="0"+minuto;
    
            }else{
    
                strMinuto=minuto;         
    
            }

            if( hora<10 ){
    
                strHora="0"+hora;
    
            }else{
    
                strHora=hora;         
    
            }

            nodoH1Memoria.innerHTML=strHora+":"+strMinuto+":"+strSegundo+":"+strCentesima;


        // div texto *************************************

        let nodoDivTexto=document.createElement("div");

        nodoDivTexto.classList.add("texto");

        nodoDivTexto.append(nodoH1Memoria);


            // i casilaX *********************************

            let nodoIcasillaX=document.createElement("i");

            nodoIcasillaX.classList.add("fas");
            nodoIcasillaX.classList.add("fa-times");


        // div casillaX *********************************
        
        let nodoDivCasillaX=document.createElement("div");

        nodoDivCasillaX.classList.add("casillaX");

        nodoDivCasillaX.append(nodoIcasillaX);

        nodoDivCasillaX.addEventListener("click",function(){

           // nodoDivCasilla.classList.add("desaparece");

            nodoDivCasilla.remove();

        });

    // div casilla **************************************
    
    let nodoDivCasilla=document.createElement("div");

    nodoDivCasilla.classList.add("casilla");

    nodoDivCasilla.append(nodoDivTexto);
    nodoDivCasilla.append(nodoDivCasillaX);

// div memoria ******************************************

let nodoDivMemoria=document.querySelector("#memoria");

nodoDivMemoria.append(nodoDivCasilla);


});











// *******************************************************
// ****************** REINICIAR **************************



var nodoBtnReiniciar=document.querySelector("#reiniciar");

nodoBtnReiniciar.disabled=true;

nodoBtnReiniciar.addEventListener("click",function(){

    nodoBtnEmpezar.disabled=true;

    if( nodoBtnEmpezar.disabled==true ){

        nodoBtnEmpezar.classList.add("desactivado");

    }

    nodoBtnParar.disabled=false;

    if( nodoBtnParar.disabled==false || nodoBtnParar.classList.contains("desactivado")){

        nodoBtnParar.classList.remove("desactivado");

    }

    nodoBtnGuardar.disabled=false;

    if( nodoBtnGuardar.disabled==false || nodoBtnGuardar.classList.contains("desactivado") ){

        nodoBtnGuardar.classList.remove("desactivado");

    }

    this.disabled=true;

    if( this.disabled==true ){

        this.classList.add("desactivado");

    }

    nodoBtnBorrar.disabled=false;

    if( nodoBtnBorrar.disabled==false || nodoBtnBorrar.classList.contains("desactivado") ){

        nodoBtnBorrar.classList.remove("desactivado");

    }
    
    

    miIntervalCente=setInterval(function(){

        centesima++;
    
        if( centesima<10 ){
    
            centesimas.innerHTML="<h1>0"+centesima+":</h1>";
    
        }else{
    
            centesimas.innerHTML="<h1>"+centesima+":</h1>";
    
    
        }
    
        
        
        
        
        if( centesima==99 ){
    
            centesima=0-1;
    
            segundo++;
    
            if( segundo<10 ){
    
                segundos.innerHTML="<h1>0"+segundo+":</h1>";
    
            }else{
    
                segundos.innerHTML="<h1>"+segundo+":</h1>";         
    
            }
    
            
    
            
            
            
            if( segundo==59 ){
    
                segundo=0-1;
    
                minuto++;
    
                if( minuto<10 ){
    
                    minutos.innerHTML="<h1>0"+minuto+":</h1>";
        
                }else{
        
                    minutos.innerHTML="<h1>"+minuto+":</h1>";         
        
                }
               
               
               
               
               
               
                if( minuto==59 ){
    
                    minuto=0-1;
    
                    hora++;
        
                    if( hora<10 ){
    
                        horas.innerHTML="<h1>0"+hora+":</h1>";
            
                    }else{
            
                        horas.innerHTML="<h1>"+hora+":</h1>";         
            
                    }
    
    
                }
    
            }
    
        }
    
    
    }, 10);


});



















// *******************************************************
// ********************** BORRAR *************************


var nodoBtnBorrar=document.querySelector("#borrar");

nodoBtnBorrar.disabled=true;

nodoBtnBorrar.addEventListener("click",function(){

    nodoBtnEmpezar.disabled=false;

    if( nodoBtnEmpezar.disabled==false || nodoBtnEmpezar.classList.contains("desactivado") ){

        nodoBtnEmpezar.classList.remove("desactivado");

    }

    nodoBtnParar.disabled=true;

    if( nodoBtnParar.disabled==true ){

        nodoBtnParar.classList.add("desactivado");

    }

    nodoBtnGuardar.disabled=true;

    if( nodoBtnGuardar.disabled==true ){

        nodoBtnGuardar.classList.add("desactivado");

    }

    nodoBtnReiniciar.disabled=true;

    if( nodoBtnReiniciar.disabled==true ){

        nodoBtnReiniciar.classList.add("desactivado");

    }

    this.disabled=true;

    if( this.disabled==true ){

        this.classList.add("desactivado");

    }

    clearInterval(miIntervalCente);
    
    centesima=0;

    segundo=0;

    minuto=0;

    hora=0;

    centesimas.innerHTML="<h1>00:</h1>";

    segundos.innerHTML="<h1>00:</h1>";

    minutos.innerHTML="<h1>00:</h1>";

    horas.innerHTML="<h1>00:</h1>";


});