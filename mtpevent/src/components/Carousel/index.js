import { Carousel } from 'react-carousel-minimal';

const CarouselComponent = (props) => {
   
     const captionStyle = {
       fontSize: '2em',
       fontWeight: 'bold',
     }
     const slideNumberStyle = {
       fontSize: '30px',
       fontWeight: 'bold',
     }
     return (
       <div className="Carousel">
             <Carousel
               data={props.data}
               time={2000}
               width="750px"
               height="450px"
               captionStyle={captionStyle}
               radius="10px"
               slideNumber={true}
               slideNumberStyle={slideNumberStyle}
               captionPosition="bottom"
               automatic={false}
               dots={true}
               pauseIconColor="white"
               pauseIconSize="40px"
               slideBackgroundColor="darkgrey"
               slideImageFit="cover"
               thumbnails={true}
               thumbnailWidth="100px"
               style={{
                 textAlign: "center",
                 maxWidth: "850px",
                 maxHeight: "500px",
                 margin: "40px auto",
               }}
             />
           </div>

     );
   }
   
   export default CarouselComponent;