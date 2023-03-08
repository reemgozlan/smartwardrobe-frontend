import React from "react";
import {useState, useEffect} from "react";
import { Card, CardImg, Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";


function OutfitofTheDay() {
    const[data, setData] = useState([]);

        useEffect (() => {
            fetch("https://smartwardrobe.onrender.com/outfits")
            .then(res => res.json())
            .then(data => {setData(data)}).catch(err => console.log(err))
        }, [])

        console.log('outfits', data)
 
    return data.length ?( 
        <div>
            {/* random outift */}
           const data=  {data[Math.floor(Math.random()*data.length)]}
        {data.map(outfit => {
            return 
          
            <Card style={{margin: '10px'}}>
          
                <Card.Body className="outfit-ofthe-day" style={{backgroundColor: '#AAE3E2'}}>
                    
                 
                
                           <div>
                            Name: {outfit.name}<br/>
                            Category: {outfit.category}<br/>
                            The Outfit Items: </div>
                            {outfit.itemReference.length && outfit.itemReference.map(item =>
                            <Col style={{ width: '40%' }}>
                                <p>{item.name}</p>
                                {item.image !== undefined ? <img className="item-image" src={item.image}/> : "no photo"}
                            </Col> )}<br/>
                     
                        
                        
                </Card.Body>
               
            </Card>
            
            
            
            
            
            
        })}
        
      </div>
    ): "...loading";
        
  
    }
    
    export default OutfitofTheDay;