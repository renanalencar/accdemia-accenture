let Dash = {
    render: async () => {
        let view = `
        <div class="container">
            <div class="card-group">
                <div class="card">
                    <br>
                    <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                    width="100" height="100" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <br>
                    <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                    width="100" height="100" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.
                        </p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <br>
                    <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                    width="100" height="100" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to show that equal height
                            action.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 m-auto">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Texto</th>
                                <th scope="col">Variável</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>João</td>
                                <td>joao</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Maria</td>
                                <td>maria</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
        `;

        return view;
    },
    after_render: async () => {

    }
}

export default Dash;