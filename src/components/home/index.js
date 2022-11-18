import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './style.css'
import axios from "axios"


const Index = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const url = 'https://opentdb.com/api.php?amount=20&category=21&difficulty=medium&type=multiple'
        axios.get(url)
            .then((res) => {
                setData(res.data.results)
            })
            .catch((err) => console.log(err))
    }, [])
  return (
    <>
      <h1 className='text'>product</h1>
    <Row xs={1} sm={2} md={3}  className="g-4">

        
    {Array.from({ length: 7 }).map((_, idx) => (
      <Col>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      ))}
      </Row>
    </>
  )
}

export default Index