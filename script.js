const exibeUsuario = (usuario) => {
   console.log(`o Usuario${usuario.login} possui ${usuario.public_repos} seguidores`)

}

const iniciar = () => {
   fetch('https://api.github.com/users/iihsamat')
       .then((response) => response.json())
       .then((dados) => console.log(dados))
       .then(() => console.log('Passei do fetch'));

   console.log('depois do fetch');
};

document.addEventListener("DOMContentLoaded", iniciar);