import React, {Component} from 'react';
import anime from './lib/anime.es.js';
import $ from 'jquery';
import {Container, Card, Navbar, Row, Col, Button} from 'react-bootstrap';
import projectsInfo from './projectsInfo.js';

/*
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={projectsInfo[elem].thumbnail} />
        <Card.Body>
            <Card.Title>{projectsInfo[elem].title}</Card.Title>
            <Card.Text>
                {projectsInfo[elem].text}
            </Card.Text>
            <Button variant="primary">{projectsInfo[elem].buttonText}</Button>
        </Card.Body>
        </Card>
*/

const numbers = [1, 2, 3, 4, 5];
var cards = numbers.map(number => (
    <Card style={{ width: '14rem', height: '25rem'}}>
        <Card.Img variant="top" src={"https://via.placeholder.com/500"} />
        <Card.Body>
            <Card.Title>{number}</Card.Title>
            <Card.Text>
                {number}
            </Card.Text>
            <Button variant="primary">{number}</Button>
        </Card.Body>
    </Card>
));

class ContentCanvas extends Component {
    constructor(props) {
        super();
    }
    componentDidMount() {
        // Wrap every letter in a span
        $('.ml9 .letters').each(function(){
            $(this).html($(this).text().replace(/(\w)/g, "<span class='letter'>$&</span>"));
        });
        anime.timeline({loop: false})
        .add({
            targets: '.ml9 .letter',
            scale: [0, 0.95],
            duration: 1000,
            elasticity: 600,
            delay: function(el, i) {
            return 50 * (i+1)
            }
        }).add({
            targets: '.ml9 .letter',
            scale: [0.95, 1.0],
            elasticity: 100,
            duration: 1000,
        });
        console.log(projectsInfo);
    }
    render() {
        return(
            <Container>
                <Row>
                    {cards}
                </Row>
            </Container>
        );
    }
}

export default ContentCanvas;