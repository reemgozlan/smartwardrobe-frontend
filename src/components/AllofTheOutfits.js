import React from "react";
import { Card, CardImg, Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";




import {useState, useEffect} from "react";

function AllofTheOutfits() {
    const[data, setData] = useState([]);

        useEffect (() => {
            fetch("https://smartwardrobe.onrender.com/outfits")
            .then(res => res.json())
            .then(data => {setData(data)}).catch(err => console.log(err))
        }, [])

        console.log('outfits', data)
 
    return data.length ?(
      <div>
        {data.map(outfit => {
            return <div>
           {/*  {item.name}
            <br></br>
            {item.brand}
            {item.category}
            {item.color}
            {item.whichPart}
            {item.matchesWith} */}
            <Card style={{margin: '10px'}}>
          
                <Card.Body className="outfit" style={{backgroundColor: '#887BB0'}}>
                    
                   <Row>
                
                            {/* <Card.Text> */}<div style={{backgroundColor: '#cdb4db'}}>
                            Name: {outfit.name}<br/>
                            Category: {outfit.category}<br/>
                            The Outfit Items: </div>
                            {outfit.itemReference.length && outfit.itemReference.map(item =>
                            <Col style={{ width: '40%' }}>
                                <p>{item.name}</p>
                                {item.image !== undefined ? <img className="item-image" src={item.image}/> : "no photo"}
                            </Col> )}<br/>
                     
                    </Row>     
                        
                </Card.Body>
               
            </Card>
            
            
            
            
            
            </div>
        })}
        <Button style={{marginBottom: '50px'}, {backgroundColor:'#cdb4db'}}>
                Set a new Outfit
            </Button>
      </div>
    ): "...loading";
  }
  
  export default AllofTheOutfits;
  