import React from 'react';
import { Container, Row, Col, Button, ListGroup, Image, Card } from 'react-bootstrap';
import '../../../client/style.css'; // Import your custom stylesheet here

const TopPick = ({ name, rating, hours, imageSrc }) => (
  <Card className="top-pick-card mb-3">
    <Card.Body className="d-flex">
      <Image src="/images/Burger.jpg" alt={name} className="img-fluid top-pick-image mr-3" />
      <div>
        <Card.Title className="top-pick-name">{name}</Card.Title>
        <Card.Text className="top-pick-rating">{rating}</Card.Text>
        <Card.Text className="top-pick-hours">{hours}</Card.Text>
      </div>
    </Card.Body>
  </Card>
);

const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row className="justify-content-center">
      <Col md={8} className="mb-4">
        <Row className="justify-content-center">
          <Col md={8}>
        <div className="top-picks-header text-center">
          <h1>Today's Top Picks</h1>
        </div>
      </Col>
    </Row>
        <ListGroup variant="flush" className="top-pick-list">

          <TopPick
            name="BRITO"
            rating="★★★★★"
            hours="Today's hours: 10:00AM - 2:00PM"
            imageSrc="/path/to/image.jpg"
          />
          <TopPick
            name="BRITO"
            rating="★★★★★"
            hours="Today's hours: 10:00AM - 2:00PM"
            imageSrc="/path/to/image.jpg"
          />
          <TopPick
            name="BRITO"
            rating="★★★★★"
            hours="Today's hours: 10:00AM - 2:00PM"
            imageSrc="/path/to/image.jpg"
          />

        </ListGroup>
        <Row className="justify-content-center">
          <Col md={8} /* Adjust the size to match your cards' column size */>
            <Button size="lg" block className="top-picks-header text-center mt-3 custom-review-button">
              See all of today's top picks!
            </Button>
          </Col>
        </Row>

      </Col>

      <Col md={4} className="mb-4">
        <div className="cta-container cta-card text-center">
              <h2>Are you a vendor?</h2>
              <Button size="lg" className="custom-review-button">Vendor Dashboard</Button>

              <h2>Are you a student?</h2>
              <Button size="lg" className="custom-review-button">Leave a review!</Button>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Landing;
