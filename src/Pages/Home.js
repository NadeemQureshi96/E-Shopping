import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import image from '../banner.jpg'
import iphone11 from '../iphone11promax.png'
import iphone12 from '../iphone12.png'
import iphone12mini from '../iphone12mini.png'
import shirt from '../cloth1.png'
import suit from '../suit.png'
import jeans from '../jeans.png'
import bangles from '../bangles.png'
import rings from '../rings.png'
import bracelat from '../bracelat.png'
import '.././App.css'





const Home = () => {
  

  return (
    <div >
        
       <Card className="bg-dark text-white ">
      <Card.Img src={image} alt="Card image" width="100%" height="500px"/>
      <Card.ImgOverlay>
        <Card.Text   style={{ fontWeight:"bold"}}>
        </Card.Text>               
      </Card.ImgOverlay>
    </Card>
        <div  className=" d-flex justify-content-center my-2 ">
        <h1 className='fw-bold text-secondary'>Electronic item's</h1>

        </div>
    <div className="product-card d-flex justify-content-center ">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={iphone11} />
      <Card.Body>
        <Card.Title>iphone 11</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nisi dolore nesciunt, eius iure corporis           
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
     <Card className='mx-2' style={{ width: '18rem ' }}>
      <Card.Img variant="top" src={iphone12} />
      <Card.Body>
        <Card.Title>iphone 12</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nisi dolore nesciunt, eius iure corporis           
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
     <Card className='mx-2'style={{ width: '18rem ' }}>
      <Card.Img variant="top" src={iphone12mini} />
      <Card.Body>
        <Card.Title>iphone 12 mini</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nisi dolore nesciunt, eius iure corporis           
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>    
    </div>
    <div  className=" d-flex justify-content-center my-2 ">
        <h1 className='fw-bold text-secondary'>Men's Fashion</h1>
        </div>

        <div className="product-card d-flex justify-content-center ">
        <Card className='mx-2'style={{ width: '18rem ' }}>
      <Card.Img variant="top" src={shirt} />
      <Card.Body>
        <Card.Title>Men's shirt</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nisi dolore nesciunt, eius iure corporis           
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    <Card className='mx-2'style={{ width: '18rem ' }}>
      <Card.Img variant="top" src={suit} />
      <Card.Body>
        <Card.Title>Wedding Suit</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nisi dolore nesciunt, eius iure corporis           
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    <Card className='mx-2'style={{ width: '18rem ' }}>
      <Card.Img variant="top" src={jeans} />
      <Card.Body>
        <Card.Title>Men's Jeans</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nisi dolore nesciunt, eius iure corporis           
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card> 
        </div>

        <div  className=" d-flex justify-content-center my-2 ">
        <h1 className='fw-bold text-secondary'>Jewellery's</h1>
        </div>

        <div className="product-card d-flex justify-content-center" >
        <Card className='mx-2'style={{ width: '18rem ' }}>
      <Card.Img variant="top" src={bangles} />
      <Card.Body>
        <Card.Title>New Bangles</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nisi dolore nesciunt, eius iure corporis           
        </Card.Text>
        <Button variant="primary my-5">Buy Now</Button>
      </Card.Body>
    </Card>
    <Card className='mx-2'style={{ width: '18rem ' }}>
      <Card.Img variant="top" src={rings} />
      <Card.Body>
        <Card.Title>New Rings</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nisi dolore nesciunt, eius iure corporis  ,eius iure corporis eius iure corporis          
        </Card.Text>
        <Button variant="primary my-5">Buy Now</Button>
      </Card.Body>
    </Card>
    <Card className='mx-2'style={{ width: '18rem ' }}>
      <Card.Img variant="top" src={bracelat}  />
      <Card.Body>
        <Card.Title>New Earrings</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nisi dolore nesciunt, eius iure corporis           
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card> 
        </div>
        <br />
       
        


    </div>
  )
}

export default Home
