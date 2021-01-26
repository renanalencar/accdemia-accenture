let Error404 = {
    render : async () => {
        let view = `
        <div>
            <h1>View de nossa 404</h1>
        </div>
        `;

        return view;
    },
    after_render : async () => {

    }
}

export default Error404;