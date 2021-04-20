console.log("galería en construcción");
let indiceImagen = 0;
function sumarIndice (n){
    indiceImagen = indiceImagen + n;
    mostrarImagenes();
   }
function mostrarImagenes (){
    //Traer a JS los contenedores de imágenes
    let imagenes = document.getElementsByClassName ("imagen");
    //Poner display = none en todos los contenedores de imágenes
    for (let i = 0; i < imagenes.length; i ++){

        imagenes [i] .style.display = "none";
    }
    //Poner display = block en el contenedor de imagen seleccionado
    imagenes [indiceImagen] .style.display = "block";
}
mostrarImagenes ();