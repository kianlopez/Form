import { useState } from "react";
import Swal from "sweetalert2";
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import './SectionLogin.css';

function SectionLogin() {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [telefono, setTelefono] = useState('');
    const [servicios, setServicios] = useState('');
    const [correo, setCorreo] = useState('');
    const [totalCita, setTotalCita] = useState('');
    const [history, setHistory] = useState([]);

    const handlerClick = (event) => {
        const newEntry = {
            nombre,
            edad,
            telefono,
            servicios,
            correo,
            totalCita,
        };
        setHistory([...history, newEntry]);

        Swal.fire({
            title: "Registro del Paciente",
            html: `
            <p><strong>Nombre del Paciente:</strong> ${nombre}</p>
            <p><strong>Edad del Paciente:</strong> ${edad}</p>
            <p><strong>Número de Teléfono:</strong> ${telefono}</p>
            <p><strong>Servicios a Realizar:</strong> ${servicios}</p>
            <p><strong>Correo del Paciente:</strong> ${correo}</p>
            <p><strong>Total de Cita:</strong> ${totalCita}</p>
        `,
            icon: "success"
        });
        setNombre('');
        setEdad('');
        setTelefono('');
        setServicios('');
        setCorreo('');
        setTotalCita('');
    }

    return (
        <div id="login_section">
            <Field type="text" placeholder="p.e. Kian Lopez" text="Nombre del Paciente" val={nombre} fnVal={setNombre}/>
            <Field type="number" placeholder="Edad" text="Edad del Paciente" val={edad} fnVal={setEdad}/>
            <Field type="tel" placeholder="p.e. 123-456-7890" text="Número de Teléfono" val={telefono} fnVal={setTelefono}/>
            <Field type="text" placeholder="p.e. Consulta General" text="Servicios a Realizar" val={servicios} fnVal={setServicios}/>
            <Field type="email" placeholder="p.e. paciente@correo.com" text="Correo del Paciente" val={correo} fnVal={setCorreo}/>
            <Field type="text" placeholder="p.e. $50.00" text="Total de Cita" val={totalCita} fnVal={setTotalCita}/>
            <Button title="Registrar" onclick={handlerClick}></Button>

            <div className="history">
                <h3>Historial de Registros</h3>
                {history.map((entry, index) => (
                    <div key={index} className="history-entry">
                        <p><strong>Nombre del Paciente:</strong> {entry.nombre}</p>
                        <p><strong>Edad del Paciente:</strong> {entry.edad}</p>
                        <p><strong>Número de Teléfono:</strong> {entry.telefono}</p>
                        <p><strong>Servicios a Realizar:</strong> {entry.servicios}</p>
                        <p><strong>Correo del Paciente:</strong> {entry.correo}</p>
                        <p><strong>Total de Cita:</strong> {entry.totalCita}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SectionLogin;