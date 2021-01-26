let Home = {
    render: async () => {
        let view = `<div class="container">

                    <div class="row mt-5 mb-5">
                        <div class="col-md-6 m-auto">
                            <div class="flui text-center pt-5">
                                <h2>Saudações!</h2>
                                <p>Aqui você fala e a gente escuta.</p>
                            </div>
                        </div>
                        <div class="col-md-6 m-auto">
                            <img src="https://sujeitoprogramador.com/wp-content/uploads/2019/08/jsjsjs.png"
                            class="img-fluid m-auto" alt="Imagem resposiva">
                        </div>
                    </div>
                </div>`;

        return view;
    },
    after_render: async () => {

    }
}

export default Home;