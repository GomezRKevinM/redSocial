const loginBtn = document.getElementById("login");
const form_pic = document.getElementById("form-userPic");
const inputPost = document.getElementById("post");

const DB = []
const usuario = {
    usuario : "KevinGr",
    nombre: "Kevin",
    password: "@K2212."
}

const userLogin = {
    usuario: "none",
    nombre: "none",
    password: "none"
}

DB.push(usuario)

function login(){
    const usuario = prompt("Usuario:");
    const password = prompt("Contraseña: ");

    DB.forEach(item=>{
        if(item.usuario == usuario && item.password == password){
            userLogin.usuario = item.usuario;
            userLogin.nombre = item.nombre;
            userLogin.password = item.password;
            alert(`Bienvenid@ ${userLogin.nombre}`)
            savePic()
        }else{
            alert("Usuario no encontrado, valide los datos ingresados")
        }
    })
}

function savePic(){
    form_pic.innerHTML = userLogin.nombre.charAt(0);
}

function createPost(name,username){
    const section = document.createElement('section');
    section.classList.add("post-user");

    const picContent = document.createElement('div');
    picContent.classList.add("pic-content")

    const userPic = document.createElement('span');
    userPic.classList.add("user-pic");
    userPic.textContent = userLogin.nombre.charAt(0);

    const contentPost = document.createElement('div');
    contentPost.classList.add("content-post");

    const userInfo = document.createElement('p');
    userInfo.classList.add("user-post-info");

    const userName = document.createElement('span');
    userName.classList.add("username-info");
    userName.textContent = userLogin.nombre;

    const postInfo = document.createElement('span')
    postInfo.classList.add("post-info");
    postInfo.textContent = `${userLogin.usuario} • MAR 12`;

    const pText = document.createElement('p');
    pText.textContent= inputPost.value;
}

loginBtn.addEventListener("click",login)