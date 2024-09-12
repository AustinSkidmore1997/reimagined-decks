import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { createUser } from '../utils/api';
import Auth from '../utils/auth';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await createUser(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit} className="space-y-4 p-6 bg-gray-700 rounded-lg shadow-md">
            {showAlert && (
                <Alert
                    dismissible
                    onClose={() => setShowAlert(false)}
                    show={showAlert}
                    variant='danger'
                    className="bg-red-500 text-white border-red-600"
                >
                    Something went wrong with your signup!
                </Alert>
            )}

            <Form.Group className='mb-4'>
                <Form.Label htmlFor='username' className="block text-gray-700 font-medium">Username</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Your username'
                    name='username'
                    onChange={handleInputChange}
                    value={userFormData.username}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <Form.Control.Feedback type='invalid' className="text-red-500 mt-1">Username is required!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mb-4'>
                <Form.Label htmlFor='email' className="block text-gray-700 font-medium">Email</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Your email address'
                    name='email'
                    onChange={handleInputChange}
                    value={userFormData.email}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <Form.Control.Feedback type='invalid' className="text-red-500 mt-1">Email is required!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mb-4'>
                <Form.Label htmlFor='password' className="block text-gray-700 font-medium">Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Your password'
                    name='password'
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <Form.Control.Feedback type='invalid' className="text-red-500 mt-1">Password is required!</Form.Control.Feedback>
            </Form.Group>

            <Button
                disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                type='submit'
                className='w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
            >
                Submit
            </Button>
        </Form>
    </>
  );
};

export default SignupForm;
