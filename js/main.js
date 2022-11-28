//imagenes 
//let imagenes = ['img/img1.jpg','img/img2.jpg','img/img3.jpg','img/img4.jpg','img/img5.jpg']; //[img0 , img 1 , img2 , img3 , img4] 

/*
let img=document.getElementsByClassName("imagen");

if (window.XMLHttpRequest)
{
    // Objeto para IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
}else{
    // Objeto para IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

// Abrimos el archivo que esta alojado en el servidor cd_catalog.xml
xmlhttp.open("GET","gallery.xml",false);
xmlhttp.send();

// Obtenemos un objeto XMLDocument con el contenido del archivo xml del servidor
xmlDoc=xmlhttp.responseXML;

// Obtenemos todos los nodos denominados foro del archivo xml
var galeria=xmlDoc.getElementsByTagName("imagen");

url = galeria[2].getElementsByTagName("url")[0].childNodes[0].nodeValue
img[0].setAttribute("src",url)

*/

//funcion que recibe el contenedor y devuelve respuesta adelante o atras
/*function carrousel(direccion){
let direccion1 = direccion;

//funcion atras
if(direccion1=='atras'){

    //si el contador no es cero retrocede
  if(contador > 0){
    document.getElementById('imagen').src= imagenes[contador-1]; //se obtiene el id y la imagen correspondiente sera la ultima
    contador--; 
    url = galeria[contador-1].getElementsByTagName("url")[0].childNodes[0].nodeValue
    img[contador-1].setAttribute("src",url)
    //si el contador es menor a todas las imagenes (img intermedia) 
  }else { //esta en la primera imagen y vuelve a la ultima 
    document.getElementById('imagen').src= imagenes[imagenes.length-1]; //se devuelve una casilla el indice 
    contador= imagenes.length - 1; //contador en la ultima imagen
  }
}

if(direccion1=='adelante'){ //hacia adelante
  if(contador < imagenes.length-1){ //si el contador es diferente a cero 
    document.getElementById('imagen').src= imagenes[contador+1];
    contador++; //se aumenta el contador a la img correspondiente

    url = galeria[contador+1].getElementsByTagName("url")[0].childNodes[0].nodeValue
    img[contador+1].setAttribute("src",url)
  }
  else {
    document.getElementById('imagen').src= imagenes[0]; //se devuelve a la imagen 0 
    contador=0; //contador se reinicia 
  }
} 
}
*/

contador = 0
function carrousel_xml(direccion){
//controla que imagen vamos a ver 

let direccion1 = direccion;
//obtener tag en html 
let img=document.getElementsByClassName("imagen");
let desc=document.getElementsByClassName("desc"); //descripcion
let titulo=document.getElementsByClassName("title"); //descripcion


if (window.XMLHttpRequest)
{
    // Objeto para IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
}else{
    // Objeto para IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

// Abrimos el archivo que esta alojado en el servidor cd_catalog.xml
xmlhttp.open("GET","gallery.xml",false);
xmlhttp.send();

// Obtenemos un objeto XMLDocument con el contenido del archivo xml del servidor
xmlDoc=xmlhttp.responseXML;

// Obtenemos todos los nodos denominados foro del archivo xml
var galeria=xmlDoc.getElementsByTagName("imagen");

url = galeria[0].getElementsByTagName("url")[0].childNodes[0].nodeValue
img[0].setAttribute("src",url)

descripcion = galeria[0].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue //texto en array 
document.getElementsByClassName('desc')[0].innerHTML = descripcion; //lo pone en el array

titulo = galeria[0].getElementsByTagName("titulo")[0].childNodes[0].nodeValue //texto en array 
document.getElementsByClassName('title')[0].innerHTML = titulo; //lo pone en el array

  //funcion atras
  if(direccion1=='atras'){
  //si el contador no es cero retrocede

    if(contador > 0){
      url = galeria[contador-1].getElementsByTagName("url")[0].childNodes[0].nodeValue
      img[0].setAttribute("src",url)

      descripcion = galeria[contador-1].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue //texto en array 
      document.getElementsByClassName('desc')[0].innerHTML = descripcion; //lo pone en el array

      titulo = galeria[contador-1].getElementsByTagName("titulo")[0].childNodes[0].nodeValue //texto en array 
      document.getElementsByClassName('title')[0].innerHTML = titulo; //lo pone en el array

      contador--;

      //si el contador es menor a todas las imagenes (img intermedia) 
    }else {
      //esta en la primera imagen y vuelve a la ultima 
      url = galeria[galeria.length-1].getElementsByTagName("url")[0].childNodes[0].nodeValue //vuelve al indice
      contador = galeria.length-1; //contador 

      descripcion = galeria[galeria.length-1].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue //texto en array 
      document.getElementsByClassName('desc')[0].innerHTML = descripcion; //lo pone en el array

      titulo = galeria[galeria.length-1].getElementsByTagName("titulo")[0].childNodes[0].nodeValue //texto en array 
      document.getElementsByClassName('title')[0].innerHTML = titulo; //lo pone en el array

    }
    img[0].setAttribute("src",url)
  }
  
  if(direccion1=='adelante'){ //hacia adelante

    if(contador < galeria.length-1){ //si el contador es diferente a cero 

      url = galeria[contador+1].getElementsByTagName("url")[0].childNodes[0].nodeValue //vuelve al indice

      descripcion = galeria[contador+1].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue //texto en array 
      document.getElementsByClassName('desc')[0].innerHTML = descripcion; //lo pone en el array

      titulo = galeria[contador+1].getElementsByTagName("titulo")[0].childNodes[0].nodeValue //texto en array 
      document.getElementsByClassName('title')[0].innerHTML = titulo; //lo pone en el array

      contador++; //contador 
    }
    else {
      url = galeria[0].getElementsByTagName("url")[0].childNodes[0].nodeValue //vuelve al indice

      descripcion = galeria[0].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue //texto en array 
      document.getElementsByClassName('desc')[0].innerHTML = descripcion; //lo pone en el array

      titulo = galeria[0].getElementsByTagName("titulo")[0].childNodes[0].nodeValue //texto en array 
      document.getElementsByClassName('title')[0].innerHTML = titulo; //lo pone en el array

      contador = 0;
    }
    img[0].setAttribute("src",url)
  } 
}

function carrousel_json(direccion){

console.log('dentro de la funcion');

const xhttp = new XMLHttpRequest();
xhttp.open('GET','galeria.json',true);
xhttp.send();

xhttp.onreadystatechange = function(){

    console.log(this.responseText);
    let datos = JSON.parse(this.responseText);
    console.log(datos);
}

}

 //funcion json
function init(){

  let rand=0;
  let imagen = document.getElementsByClassName("imagen");
  let descripcion = document.getElementsByClassName("desc");
  let titulo = document.getElementsByClassName("title");

  if (window.XMLHttpRequest)
  {
	  // Objeto para IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
  }else{
	  // Objeto para IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
 
    // Abrimos el archivo
    xmlhttp.open("GET","galeria.json",true);
    xmlhttp.send();
    
    xmlhttp.onload = function(){
      const jsonDoc = JSON.parse(xmlhttp.responseText);
      const imagenes = jsonDoc.galeria.imagen;

      tit=imagenes[rand].titulo;
      desc=imagenes[rand].descripcion;
      url=imagenes[rand].url;

      imagen[0].setAttribute("src", url);
      document.getElementsByClassName('desc')[0].innerHTML = desc; 
      document.getElementsByClassName('titulo')[0].innerHTML = tit; 
      let button = document.querySelector('#button');
      button.addEventListener('mouseup', (e) => {
       let log = document.querySelector('#log');
       switch (e.button) {
      case 0:
          if(rand < imagenes.length-1 && rand >=0){
            rand=rand+1;
            tit=imagenes[rand].titulo;
            desc=imagenes[rand].descripcion;
            url=imagenes[rand].url;
  
            imagen[0].setAttribute("src", url);
            document.getElementsByClassName('desc')[0].innerHTML = desc; 
            document.getElementsByClassName('titulo')[0].innerHTML = tit; 
            }
          break;
        case 2:
            
            if(rand>0 && rand < imagenes.length ){
            rand=rand-1;
            url=imagenes[rand].url;

            imagen[0].setAttribute("src", url);
            descripcion[0].setAttribute("src",desc);
            titulo[0].setAttribute("src",tit);
            }
          break;
        default:
        }
        });
      
    }

    
} 
    