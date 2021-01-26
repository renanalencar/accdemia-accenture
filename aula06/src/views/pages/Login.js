let Login = {
    render: async () => {
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
                                        <label for="username">Usuário</label>
                                        <input type="text" id="username" class="form-control  mb-4">
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Senha</label>
                                        <input type="password" id="password" class="form-control  mb-4">
                                    </div>
                                    <button id="submit_login" class="btn btn-primary">Entrar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>`;

        return view;
    },
    after_render: async () => {
        document.getElementById('submit_login').addEventListener('click', () => {
            let userName = document.getElementById('username').value,
                userPassword = document.getElementById('password').value;

            if (userPassword <= 6) {
                console.log();
                axios.post(baseURL, {
                    username: userName,
                    password: userPassword
                }).then(res => {
                    console.log(res.data);
                    localStorage.setItem('@token', res.data.token);
                    sessionStorage.setItem('@token', res.data.token);
                    Cookies.set('@token', res.data.token, { expires: 1 });
                })
            } else {
                console.log('Erro de login');
            }
        });
    }
}

export default Login;
