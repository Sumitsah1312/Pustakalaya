import React ,{useState,useEffect}from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Card from "./Card";
function freebook() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
    try {
      const res= await axios.get("http://localhost:4001/book");
      console.log(res.data);
      setBook(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  getBook();
  },[]);
  const filterdata = book.filter((data) =>data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log(filterdata)
  return (
    <>
      <div className="mb-6 mt-6 max-w-screen-2xl container mx-auto md:px-20 px-4 mt-6 mb-6">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            commodi reprehenderit dolor, magnam harum corrupti ea expedita eius
            nesciunt quo eligendi enim veritatis molestias odio consequatur id
            vitae! Temporibus, aspernatur?
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {
                filterdata.map((item)=>(
                    <Card item={item} key={item.id}/>
                ))
            }
          </Slider>
        </div>
      </div>
    </>
  );
}

export default freebook;
