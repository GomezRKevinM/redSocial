const loginBtn = document.getElementById("login");
const form_pic = document.getElementById("form-userPic");
const inputPost = document.getElementById("post");
const containerPosts = document.getElementById("container-posts");
const btn_Post = document.getElementById("post-btn");

const fecha = new Date();
let mes = fecha.getMonth()
let dia = fecha.getDate()


switch(mes){
    case 0:
        mes = "EN";
        break;
    case 1:
        mes = "FEB"
        break
    case 2:
        mes = "MAR"
        break;
    case 3:
        mes = "ABR"
        break
    case 4: 
        mes = "MAY"
        break
    case 5: 
        mes = "JUN"
        break
    case 6: 
        mes = "JUL"
        break
    case 7:
        mes = "AGO"
        break
    case 8:
        mes = "SEP"
        break
    case 9:
        mes = "OCT"
        break
    case 10:
        mes = "NOV";
        break
    case 11:
        mes = "DIC"
        break
}

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

    picContent.appendChild(userPic);

    const contentPost = document.createElement('div');
    contentPost.classList.add("content-post");

    const userInfo = document.createElement('p');
    userInfo.classList.add("user-post-info");

    const userName = document.createElement('span');
    userName.classList.add("username-info");
    userName.textContent = userLogin.nombre;

    userInfo.appendChild(userName);

    const postInfo = document.createElement('span')
    postInfo.classList.add("post-info");
    postInfo.textContent = ` ${userLogin.usuario} • ${mes} ${dia}`;

    userInfo.appendChild(postInfo);

    const pText = document.createElement('p');
    pText.textContent= inputPost.value;

    contentPost.appendChild(postInfo);
    contentPost.appendChild(pText);
    section.appendChild(picContent);
    section.appendChild(contentPost);
    document.getElementById("container-posts").appendChild(section);
    inputPost.value="";
}

function search(busqueda){
    const sections = document.querySelectorAll('section');
    const regex = new RegExp(busqueda, 'i'); // Expresión regular dinámica (insensible a mayúsculas/minúsculas)

    sections.forEach(section => {
        let nombre = section.querySelector('.username-info');

        if (nombre && regex.test(nombre.textContent)) { // Verifica que nombre no sea null
            section.style.display = "flex";
        } else {
            section.style.display = "none"; // Oculta si no coincide
        }
    });
}
const inputSearch = document.getElementById("search");
inputSearch.addEventListener('input',()=>{
    search(inputSearch.value)
})

loginBtn.addEventListener("click",login)
btn_Post.addEventListener('click',()=>{
    createPost(userLogin.nombre,userLogin.usuario)
})