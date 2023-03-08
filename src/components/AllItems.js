import React from "react";
import { Card, CardImg, Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Header from "./Header";
import Footer from "./Footer";



import {useState, useEffect} from "react";

function AllItems() {
    const[data, setData] = useState([]);

        useEffect (() => {
            fetch("https://smartwardrobe.onrender.com/items")
            .then(res => res.json())
            .then(data => {setData(data)}).catch(err => console.log(err))
        }, [])

        console.log('data state', data)
 
    return data.length ?(
      <div>
        {data.map(item => {
            return <div>
           {/*  {item.name}
            <br></br>
            {item.brand}
            {item.category}
            {item.color}
            {item.whichPart}
            {item.matchesWith} */}
            <Card style={{margin: '10px'}}>
           
                <Card.Body style={{backgroundColor: '#887BB0'}}>
                    <Row>
                        <Col style={{position: 'relative', left: '50px'}}>
                            {item.image !== undefined ? <img className="item-image" src={item.image}/> : "no photo"}
                        </Col>
                        <Col  style={{position: 'relative', right: '80px'}}>
                            <Card.Text style={{backgroundColor: '#cdb4db'}}>
                            Name: {item.name}<br/>
                            Brand: {item.brand}<br/>
                            Category: {item.category}<br/>
                            Color: {item.color}<br/>
                            Which Part: {item.whichPart}<br/>
                            Matches with: {item.matchesWith}<br/>
                            </Card.Text>
                            
                        </Col>
                        </Row>
                </Card.Body>
            </Card>
            
            
            
            
            
            </div>
        })}
        <Button style={{marginBottom: '50px'}, {backgroundColor:'#ffafcc'}}>
                Add new Item
            </Button>
      </div>
    ): "...loading";
  }
  
  export default AllItems;
  