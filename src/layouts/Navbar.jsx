import "./Navbar.css";

function Navbar({ children, setComponent, component }) {
    return (
        <div>
            <ul>
                <li>
                    <a className={component === "contador" ? "active" : ""}
                     onClick={() => setComponent('contador')}>
                    Contador</a>
                </li>
                <li>
                    <a className={component === "formulario" ? "active" : ""} onClick={() => setComponent('formulario')}>Formulario</a>
                </li>
                <li>
                    <a className={component === "color" ? "active" : ""} onClick={() => setComponent(null)}>Cambiar Color</a>
                </li>
            </ul>
            {children}
        </div>

    );
}
export default Navbar