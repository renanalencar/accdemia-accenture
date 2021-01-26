import baseURL from '../../service/baseURL.js';

// let postRegisterNewUser = async () => {
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     };

//     try {
//         const registerData = {
//             username: document.getElementById('username').nodeValue,
//             email: document.getElementById('email').nodeValue,
//             password: document.getElementById('password').nodeValue
//         };

//         const response = await fetch(baseURL, {
//             method: 'post',
//             body: JSON.stringify(registerData)
//         });

//         // axios.post(baseURL, registerData, options).then((response) => { console.log(ressponse.data) });

//         const json = await response.json();
//         return json;
//     } catch (err) {
//         console.log('Ocorreu erro', err);
//     }
// }

let SignUp = {
    render: async () => {
        // let postData = postRegisterNewUser();
        let view = `<div class="container">

                    <div class="row mt-5 mb-5">
                        <div class="col-md-6 m-auto">
                            <div class="flui text-center pt-5">
                                <h2>Saudações!</h2>
                                <p>Aqui você fala e a gente escuta.</p>
                            </div>
                            <img  class="img-fluid m-auto" width="100%" alt="Imagem resposiva" src="https://sujeitoprogramador.com/wp-content/uploads/2019/08/jsjsjs.png"/>
                        </div>
                        <div class="col-md-6 m-auto">
                            <div class="card">
                                <h2 class="mt-5 mb-4 text-center">Informe aqui seu usuário e senha</h2>
                                <form class="p-5">
                                    <div class="form-group">
                                        <label for="username">Nome</label>
                                        <input type="text" id="username" class="form-control  mb-4">
                                    </div>
                                    <div class="form-group">
                                        <label for="cpf">CPF</label>
                                        <input type="text" id="cpf" class="form-control  mb-4">
                                    </div>
                                    <div class="form-group">
                                        <label for="email">E-mail</label>
                                        <input type="email" id="email" class="form-control  mb-4">
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Senha</label>
                                        <input type="password" id="password" class="form-control  mb-4">
                                    </div>
                                    <div class="form-group">
                                        <label for="re_password">Repita a senha</label>
                                        <input type="password" id="re_password" class="form-control  mb-4">
                                    </div>
                                    <button id="submit_new_register" class="btn btn-primary">Cadastrar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>`;

        return view;
    },
    after_render: async () => {
        document.getElementById('submit_new_register').addEventListener('click', () => {
            let userName = document.getElementById('username').value,
                userEmail = document.getElementById('email').value,
                userPassword = document.getElementById('password').value,
                userRepassword = document.getElementById('re_password').value,
                userCpf = document.getElementById('cpf').value.replace(/[^\d]/g, "");
            
            if (userPassword === userRepassword) {
                console.log();
                axios.post(`${baseURL}usuarios`, {
                    cpf: userCpf,
                    login: userEmail,
                    nome: userName,
                    senha: userPassword
                },
                {
                    'Content-Type': 'application/json'
                }).then(res => {
                    
                    if (res.status === 200) {
                        window.location.hash.replace('#/login');
                    }
                })
            } else {
                console.log('Confira a sua senha!');
            }
        });
    }
}

export default SignUp;
