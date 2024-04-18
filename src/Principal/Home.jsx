import React from 'react';
import logo from '../Assets/Images/Logo-Dentiz.png';
import { Container, Button, Image, Col } from 'react-bootstrap';
import '../Styles/Home.css';

const Home = () => {
    return (
        <Container fluid className="d-flex align-items-center justify-content-center vh-100">
            <div className="card text-center p-4 bg-transparent">
                <Container className="logo-container" style={{ marginTop: '50px', marginBottom: '0px' }}>
                    <div className="bg-white rounded-circle d-flex justify-content-center align-items-center" style={{ width: '280px', height: '280px' }}>
                        <Image src={logo} roundedCircle style={{ width: '280px' }} />
                    </div>
                </Container>

                <Container style={{ marginTop: '-30px', marginBottom: '200px' }}>
                    <div className="info" style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '0px' }}>
                        <p>Consultorio Cobix</p>
                    </div>

                    <div className="info" style={{ fontSize: '17px', marginTop: '-15px' }}>
                        <p>Dr. Mauricio Cobix</p>
                    </div>

                    <div className="info" style={{ fontSize: '13px', padding: '5px' }}>
                        <p>Descripción de relleno, que se pudran los del América y el Real Madrid. ¡Visca Barca y Visca Catalunya!</p>
                    </div>
                </Container>


                <Container style={{ marginTop: '-150px', marginBottom: '200px'}}>
                    <Col xs={12} md={6} lg={4} className="text-center">
                        <Button variant="primary" style={{ fontSize: '20px', width: '100%', backgroundColor: '#333', borderColor: '#333' }} onClick={() => console.log("Botón 1 clickeado")}>Agendar cita</Button>
                    </Col>
                    <Col xs={12} md={6} lg={4} style={{ marginTop: '12px' }} className="text-center">
                        <Button variant="secondary" style={{ fontSize: '20px', width: '100%', backgroundColor: 'white', borderColor: 'black', color: 'black' }} onClick={() => console.log("Botón 2 clickeado")}>Página web</Button>
                    </Col>
                    <Col xs={12} md={6} lg={4} style={{ marginTop: '12px' }} className="text-center">
                        <Button variant="secondary" style={{ fontSize: '20px', width: '100%', backgroundColor: 'white', borderColor: 'red', color: 'black' }} onClick={() => console.log("Botón 3 clickeado")}>Facebook</Button>
                    </Col>
                    <Col xs={12} md={6} lg={4} style={{ marginTop: '12px' }} className="text-center">
                        <Button variant="secondary" style={{ fontSize: '20px', width: '100%', backgroundColor: 'white', borderColor: 'red', color: 'black' }} onClick={() => console.log("Botón 3 clickeado")}>WhatsApp</Button>
                    </Col>
                </Container>
            </div>
        </Container>
    );
};

export default Home;
