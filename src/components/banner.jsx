"use client"
import React, {useState, useEffect} from 'react'
export default function Banner(props){
  const [imgslider, setImgslider] = useState([]);
   const menutmp=props||'inicio';
   useEffect(() => {
      fetch("./slider.json")
           .then(res => res.json())
           .then(data => setImgslider(data[menutmp]))
    }, [])
    console.log(imgslider)
   if(imgslider!=undefined)
      return (
         <div id="carouselExample" className="carousel slide" key={"menu-1"}>
            <div className="carousel-inner">
               {               
                  imgslider.map((itemp,key)=>{
                     return(                       
                        <div className="carousel-item active" key={'imageslider'+key}>
                           <img src="/edificios.jpg" className="d-block w-100" alt="Proyecto 01" />
                           <h2 className='textoslider'>{itemp.texto}</h2>
                        </div>                       
                     )
                  })
               }
            
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Next</span>
            </button>
         </div>
      );
   else{
      return (<div key={"espacio-1"}>
        <br /> <br /> <br />
         </div>)
   }

}
