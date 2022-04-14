import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleEmailPass = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const Password = passwordRef.current.value;

    }
    const handleNavigate = () => {
        navigate('/register')
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleEmailPass}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New to Genius CAr???<Link to="/register" onClick={handleNavigate} className="text-primary text-decoration-none">Please Register</Link></p>
        </div>
    );
};

export default Login;