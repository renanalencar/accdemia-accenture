let Nav = {
    render : async () => {
        let view = `<header class="align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand" href="#">
                            <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                                width="30" height="30" alt=""> Full JavaScript App
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#/login">Entrar</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#/signup">Cadastrar</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </header>`;

        return view;
    },
    after_render : async () => {

    }
}

export default Nav;