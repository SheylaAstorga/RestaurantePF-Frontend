import { Button } from "react-bootstrap";

const Admin = () => {
    return (
        <article className='fondo d-flex justify-content-between my-5'>
            <h1 className="display-2">Administrar Menú</h1>
            <Button variant="outline-success" ><i className="bi bi-file-earmark-plus"> agregar</i></Button>
        </article>
    );
};

export default Admin;