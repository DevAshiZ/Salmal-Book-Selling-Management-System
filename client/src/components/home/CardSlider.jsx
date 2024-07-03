import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

const cards = [
  {
    img: "https://images.ctfassets.net/usf1vwtuqyxm/35KbpLHvQvQtBBKs0vKErL/43985bc9e5bea863ccf9cc9561b62827/English_Harry_Potter_6_Epub_9781781100257.jpg?w=914&q=70&fm=jpg",
    title: "Harry Potter and the Half Blood Prince",
    description: "Description for Card 1",
  },
  {
    img: "https://th.bing.com/th/id/R.847ff818eb060a80aa401c0273ee49ef?rik=PitBxG7NXly9yA&riu=http%3a%2f%2fi2.wp.com%2fgeekdad.com%2fwp-content%2fuploads%2f2013%2f02%2fHP1-Kibuishi.jpg&ehk=uafYYv3yMqpRGlecJf0Si6SPSZwksDcZUzc982%2byhlQ%3d&risl=&pid=ImgRaw&r=0",
    title: "Harry Potter and the Sorcerer's Stone",
    description: "Description for Card 2",
  },
  {
    img: "https://th.bing.com/th/id/OIP.k21M23eg3-JcRNZFCWheWgHaLS?pid=ImgDet&w=474&h=722&rs=1",
    title: "Harry Potter and the Deathly Hallows",
    description: "Description for Card 3",
  },
  {
    img: "https://th.bing.com/th/id/OIP.obH4iR7IFR_DyqNlC6kaMwHaLS?pid=ImgDet&w=474&h=722&rs=1",
    title: "Harry Potter and the Goblet Of Fire",
    description: "Description for Card 3",
  },
  {
    img: "https://th.bing.com/th/id/OIP.jLqYqWVIOFavTGlHSAC2hQAAAA?rs=1&pid=ImgDetMain",
    title: "Prince and The Pauper",
    description: "Description for Card 3",
  },
];

export function CardSlider() {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // 2.5 second
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings} className="w-screen">
      {cards.map((card, index) => (
        <div key={index} className="">
          <Card style={{ width: "275px" }} className="relative">
            <div className="relative group">
              <img
                src={card.img}
                alt={`image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105 relative"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div
                  style={{
                    width: "275px",
                    background: "#F4EEE0",
                  }}
                  className="p-4 absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"
                >
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Typography color="blue-gray" className="font-medium">
                      {card.title}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                      {card.description}
                    </Typography>
                    <Button
                      ripple={false}
                      fullWidth={true}
                      className="mt-2 bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </Slider>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      variant="text"
      color="white"
      size="lg"
      onClick={onClick}
      className="!absolute top-2/4 !right-4 -translate-y-2/4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </IconButton>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      variant="text"
      color="white"
      size="lg"
      onClick={onClick}
      className="!absolute top-2/4 left-4 -translate-y-2/4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    </IconButton>
  );
}
