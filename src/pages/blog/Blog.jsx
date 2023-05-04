import React from 'react';
import { Button, Container } from 'react-bootstrap';
import ReactPrint from 'react-to-print';
import { useRef } from 'react';

const Blog = () => {
    const ref = useRef();

    return (
        <Container className='mx-auto text-center mt-4'>
            <ReactPrint trigger={() => <Button variant="outline-dark">Make PDF?</Button>}
                content={() => ref.current}
            />
            <div>
                <div ref={ref}>
                    <h4 className='text-success'>1. Tell us the differences between uncontrolled and controlled components?</h4>
                    <p>In ReactJS, components can be classified as either controlled or uncontrolled depending on how they manage and update their state.

                        A controlled component is a component that manages its state through props. In other words, the component receives its state as props from its parent and notifies its parent of any changes through callbacks. The parent component is responsible for updating the state of the controlled component. This means that the component's state is always in sync with its parent component's state.

                        Here are some key differences between controlled and uncontrolled components:

                        1. State management: Controlled components are managed by their parent component using props, while uncontrolled components manage their state internally.

                        2. Event handling: In controlled components, the parent component handles all events and updates the state accordingly. In uncontrolled components, the component handles its own events and updates its state.

                        3. Data flow: In controlled components, data flows from the parent component to the child component through props. In uncontrolled components, data flows from the child component to the parent component through callbacks.

                        When deciding whether to use controlled or uncontrolled components, consider the complexity of your application and the level of control you need over the component's state.</p>
                    <h4 className='text-success'>2. How to validate React props using PropTypes</h4>
                    <p>In ReactJS, PropTypes is a library used to validate the props passed to a component. PropTypes provides a way to check that the props passed to a component conform to the expected data type and structure.</p>
                    <p> we're using PropTypes to validate the title and description props passed to the MyComponent component.

                        The isRequired property is added to ensure that the props are mandatory and must be present when the component is used. If the prop is not passed or is of the wrong data type, PropTypes will throw a warning in the console.

                        PropTypes is a powerful tool for catching errors in your code early and ensuring that your components receive the correct data. It's also a helpful way to document the expected props for a component, making it easier for other developers to understand how to use your code.
                    </p>
                    <h4 className='text-success'>3. Tell us the difference between nodejs and express js</h4>
                    <p>Node.js and Express.js are both popular web development technologies, but they serve different purposes.

                        Node.js is a runtime environment that allows developers to use JavaScript on the server-side. Node.js provides a server-side platform for building scalable and high-performance applications. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

                        Here are some key differences between Node.js and Express.js:

                        1. Functionality: Node.js provides a runtime environment for executing JavaScript code on the server-side, while Express.js provides a set of features and tools for building web applications and APIs.

                        2. Architecture: Node.js uses a single-threaded event loop to handle requests and scale applications, while Express.js uses middleware to handle requests and responses.

                        3. Learning curve: Node.js has a steeper learning curve as it requires a deep understanding of server-side programming concepts, while Express.js provides a more streamlined and organized approach to building web applications and APIs.</p>
                    <h4 className='text-success'>4. What is a custom hook, and why will you create a custom hook?</h4>
                    <p>In React, a custom hook is a JavaScript function that allows you to extract reusable logic from a component and share it between multiple components. It is a way to reuse stateful logic between multiple components without duplicating code.

                        A custom hook is created when you have a piece of logic that is used in multiple components or when you need to abstract away some complexity from a component to make it more manageable.

                        For example, if you have a form that needs to perform some validation before submitting, you can create a custom hook that encapsulates the validation logic. This hook can be used in multiple components that require form validation.

                        Another use case for a custom hook is when you need to integrate with an external API or service. You can create a custom hook that handles the API call and returns the data to the component. This way, the component doesn't have to deal with the details of making an API call, and the logic is reusable across multiple components.

                        Overall, creating custom hooks can help simplify the codebase and make it more maintainable by separating concerns and reducing code duplication.</p>
                </div>
            </div>
            
        </Container>
    );
};

export default Blog;