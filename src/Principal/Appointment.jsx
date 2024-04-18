import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container, Button, Row, Col } from 'react-bootstrap';
import '../Styles/Appointment.css';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const [calendarVisible, setCalendarVisible] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);

    const onChange = newDate => {
        setDate(newDate);
        setCalendarVisible(false);
    };

    const toggleCalendar = () => {
        setCalendarVisible(!calendarVisible);
    };

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
    };

    return (
        <Container className="mt-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <Button variant="outline-secondary" onClick={() => onChange(new Date(date.getFullYear(), date.getMonth() - 1, 1))}>&lt;</Button>
                <div className="text-center" onClick={toggleCalendar}>
                    <h4>{date.toLocaleString('default', { month: 'long' })}</h4>
                    <p>{date.getFullYear()}</p>
                </div>
                <Button variant="outline-secondary" onClick={() => onChange(new Date(date.getFullYear(), date.getMonth() + 1, 1))}>&gt;</Button>
            </div>
            {calendarVisible && (
                <div className="d-flex justify-content-center">
                    <Calendar onChange={onChange} value={date} />
                </div>
            )}

            <div className="d-flex justify-content-center mt-3">
                <h1 className='tittle'>Ingresa tus datos</h1>
            </div>

            <div className="d-flex justify-content-left mt-3">
                <h1 className='subtittle'>Servicios</h1>
            </div>

            <Container className="mt-3">
                <div className="button-container">
                    <Row className="button-row">
                        <Col xs={5} md={6} lg={4} className="text-center">
                            <Button variant="primary" 
                                className={`button ${selectedButton === 'Ortodoncia' ? 'selected' : ''}`} onClick={() => handleButtonClick('Ortodoncia')}>Ortodoncia</Button>
                        </Col>
                        <Col xs={5} md={6} lg={4} className="text-center">
                            <Button variant="primary" 
                                className={`button ${selectedButton === 'Limpieza' ? 'selected' : ''}`} onClick={() => handleButtonClick('Limpieza')} style={{ marginLeft: '50px' }}>Limpieza</Button>
                        </Col>
                        <Col xs={5} md={6} lg={4} className="text-center">
                            <Button variant="primary" 
                                className={`button ${selectedButton === 'Ortodoncia' ? 'selected' : ''}`} onClick={() => handleButtonClick('Ortodoncia')} style={{ marginTop: '8px' }}>Ortodoncia</Button>
                        </Col>
                        <Col xs={5} md={6} lg={4} className="text-center">
                            <Button variant="primary" 
                                className={`button ${selectedButton === 'Limpieza' ? 'selected' : ''}`} onClick={() => handleButtonClick('Limpieza')} style={{ marginTop: '8px', marginLeft: '50px' }}>Limpieza</Button>
                        </Col>

                    </Row>
                    <Row className="button-row">
                        <Col xs={5} md={6} lg={4} className="text-center">
                            <Button variant="primary" 
                                className={`button ${selectedButton === 'Ortodoncia' ? 'selected' : ''}`} onClick={() => handleButtonClick('Ortodoncia')} style={{ marginLeft: '32px' }}>Ortodoncia</Button>
                        </Col>
                        <Col xs={5} md={6} lg={4} className="text-center">
                            <Button variant="primary" 
                                className={`button ${selectedButton === 'Limpieza' ? 'selected' : ''}`} onClick={() => handleButtonClick('Limpieza')} style={{ marginLeft: '82px' }}>Limpieza</Button>
                        </Col>
                        <Col xs={5} md={6} lg={4} className="text-center">
                            <Button variant="primary" 
                                className={`button ${selectedButton === 'Ortodoncia' ? 'selected' : ''}`} onClick={() => handleButtonClick('Ortodoncia')} style={{ marginTop: '8px', marginLeft: '32px' }}>Ortodoncia</Button>
                        </Col>
                        <Col xs={5} md={6} lg={4} className="text-center">
                            <Button variant="primary" 
                                className={`button ${selectedButton === 'Limpieza' ? 'selected' : ''}`} onClick={() => handleButtonClick('Limpieza')} style={{ marginTop: '8px', marginLeft: '82px' }}>Limpieza</Button>
                        </Col>
                    </Row>
                </div>
            </Container>

            <Container className="mt-3">
                <div className="d-flex justify-content-left mt-3">
                    <h1 className='subtittle'>Horario</h1>
                </div>
            </Container>
        </Container>
    );
};

export default Appointment;
