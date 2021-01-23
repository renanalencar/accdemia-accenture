(function () {
    
    var header = document.getElementById('header');
    header.innerHTML = `<header class="align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                            
                            <nav class="navbar navbar-light">
                                <div class="container">
                                    <a class="navbar-brand" href="#">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
                                            width="128px" alt=""> Bootstrap Parte #01
                                    </a>
                                </div>
                            </nav>

                        </header>`;
    
    var loginForm = document.getElementById('login-form');
    loginForm.innerHTML = `<div class="container">

                                <div class="row mt-5 mb-5">
                                    <div class="col-md-6 m-auto">
                                        <div class="flui text-center pt-5">
                                            <h2>Formulário de login</h2>
                                            <p>Seje bem-vinde ao Boostrap</p>
                                        </div>
                                        <div class="container d-block">
                                            <img src="https://logodownload.org/wp-content/uploads/2016/10/html5-logo-10.png"
                                            class="img-fluid m-auto" alt="Imagem resposiva">
                                        </div>
                                    </div>
                                    <div class="col-md-6 m-auto">
                                        <div class="card">
                                            <h2 class="mt-5 mb-4 text-center">Informe aqui seu usuário e senha</h2>
                                            <form class="p-5">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Seu email</label>
                                                    <input type="email" class="form-control  mb-4">
                                                    <small class="form-text text-muted">Adicione aqui seu email.</small>
                                                </div>
                                                <div class="form-group">
                                                    <label for="senha">senha</label>
                                                    <input type="password" class="form-control  mb-4">
                                                </div>
                                                <div class="form-group form-check mb-4">
                                                    <input type="checkbox" class="form-check-input">
                                                    <label class="form-check-label" for="manter">Me mantenha conectado</label>
                                                </div>
                                                <button type="submit" class="btn btn-primary">Clique aqui para logar</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
    
    var footer = document.getElementById('footer');
    footer.innerHTML = `<footer class="my-5 pt-5 text-muted text-center text-small">
                            <p>Copyright © 2021</p>
                        </footer>`;

}) ();