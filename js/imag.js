document.getElementById('foto_perfil').onchange = function(e){
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function(){
            let preview = document.getElementById('imag');
            preview.src = reader.result;
    }
}