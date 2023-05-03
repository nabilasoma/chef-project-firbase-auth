import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

const About = () => {
    return (
        <Container className='mt-4'>
        <Card className='p-4'>
        <h2 className='text-center text-secondary'>About Us</h2>
        <p className='text-center'>We are a team of talented Chinese chefs with years of experience in creating delicious and authentic Chinese cuisine. Meet our chefs:</p>
        <Row>
          <Col md={4}>
            <Image style={{height: '150px', width: '150px'}} src="https://www.reviewjournal.com/wp-content/uploads/2023/02/17488478_web1_web_M.Y.-Asia_Martin-Yan-Dishes.jpg?crop=1" roundedCircle />
            <h3 className='text-secondary'>Chef Wang</h3>
            <p>With over 20 years of experience, Chef Wang is an expert in Sichuan cuisine and known for his spicy dishes.</p>
          </Col>
          <Col md={4}>
            <Image style={{height: '150px', width: '150px'}} src="https://nerdyfoodies.com/wp-content/uploads/2020/10/Famous-Chinese-Chefs-1024x683.jpg" roundedCircle />
            <h3 className='text-secondary'>Chef Li</h3>
            <p>Chef Li has a passion for Cantonese cuisine and is known for his delicate flavors and use of fresh ingredients.</p>
          </Col>
          <Col md={4}>
            <Image style={{height: '150px', width: '150px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaCzZsZGyHNVErUsVMVUNvqm5KIOJDI3Am_Q&usqp=CAU" roundedCircle />
            <h3 className='text-secondary'>Chef Zhang</h3>
            <p>Chef Zhang specializes in Northern Chinese cuisine and is known for his savory and hearty dishes.</p>
          </Col>
        </Row>
      
        </Card>
        </Container>
    );
};

export default About;