import Header from "./Header";
import Footer from "./Footer";
import Card from 'react-bootstrap/Card';
import { CardImg } from "react-bootstrap";



function Homepage() {
  return (
    <div>
        
        <Card className="bg-homepage" style={{backgroundColor: '#887BB0'}}>
      
      <Card.ImgOverlay>
        <Card.Title>The Smart Wardrobe</Card.Title>
        <Card.Text>
          Here can I help you to choose every outing Outfit.
        </Card.Text>
    </Card.ImgOverlay>
        </Card>
       
    </div>
  );
}

export default Homepage;