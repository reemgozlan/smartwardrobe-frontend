import React from "react";
import {useState, useEffect} from "react";
import { Card, CardImg, Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";

//{data[Math.floor(Math.random()*data.length)]}
function OutfitofTheDay() {
    const[data, setData] = useState([]);
    const [random, setRandom] = useState({})

        useEffect (() => {
            fetch("https://smartwardrobe.onrender.com/outfits")
            .then(res => res.json())
            .then(data => {
                setData(data)
                setRandom(data[Math.floor((Math.random()*data.length))])
            }).catch(err => console.log(err))
        }, [])

        console.log('outfits data', data)
        console.log('random', data[Math.random()*data.length - 1])
 
    return data.length && random ?( 
        <div>
           
            <Card style={{margin: '10px'}}>
          
                <Card.Body className="outfit-ofthe-day" style={{backgroundColor: '#AAE3E2'}}>
                    
                 <Row>
                    <div>
                  Name:  {random.name}<br/> 
                  Category: {random.category}<br/>
                  Outfit Items:
                   </div>
                    {random.itemReference.map(item => 
                    <Col style={{backgroundColor: '#887BB0'}}>
                       <p>{item.name}</p> 
                        <img className="item-image" src={item.image}/>
                        </Col> 
                        
                    )}
                     
                     
                    </Row>    
                </Card.Body>
               
            </Card>
             {/* <Card style={{margin: '10px'}}>
          
          <Card.Body className="outfit" style={{backgroundColor: '#887BB0'}}>
              
             <Row>
          
                     <div style={{backgroundColor: '#cdb4db'}}>
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
         
      </Card>  */}
            
     
      </div>
    ): "...loading";
        
  
    }
    
    export default OutfitofTheDay;