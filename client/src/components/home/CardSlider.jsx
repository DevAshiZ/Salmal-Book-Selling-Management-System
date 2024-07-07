import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Typography, Button, IconButton } from "@material-tailwind/react";

const cards = [
  {
    img: "https://images.ctfassets.net/usf1vwtuqyxm/35KbpLHvQvQtBBKs0vKErL/43985bc9e5bea863ccf9cc9561b62827/English_Harry_Potter_6_Epub_9781781100257.jpg?w=914&q=70&fm=jpg",
    title: "Harry Potter and the Half Blood Prince",
    price: "Rs.1500.00",
  },
  {
    img: "https://th.bing.com/th/id/R.847ff818eb060a80aa401c0273ee49ef?rik=PitBxG7NXly9yA&riu=http%3a%2f%2fi2.wp.com%2fgeekdad.com%2fwp-content%2fuploads%2f2013%2f02%2fHP1-Kibuishi.jpg&ehk=uafYYv3yMqpRGlecJf0Si6SPSZwksDcZUzc982%2byhlQ%3d&risl=&pid=ImgRaw&r=0",
    title: "Harry Potter and the Sorcerer's Stone",
    price: "Rs.1670.00",
  },
  {
    img: "https://th.bing.com/th/id/OIP.k21M23eg3-JcRNZFCWheWgHaLS?pid=ImgDet&w=474&h=722&rs=1",
    title: "Harry Potter and the Deathly Hallows",
    price: "Rs.1700.00",
  },
  {
    img: "https://th.bing.com/th/id/OIP.obH4iR7IFR_DyqNlC6kaMwHaLS?pid=ImgDet&w=474&h=722&rs=1",
    title: "Harry Potter and the Goblet Of Fire",
    price: "Rs.1200.00",
  },
  {
    img: "https://th.bing.com/th/id/OIP.jLqYqWVIOFavTGlHSAC2hQAAAA?rs=1&pid=ImgDetMain",
    title: "Prince and The Pauper",
    price: "Rs.1300.00",
  },
];

function NextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      variant="text"
      color="white"
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
      onClick={onClick}
      className="!absolute top-2/4 left-4 transform -translate-y-2/4 z-10"
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

export function CardSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-4">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index}>
            <Card
              style={{
                height: "auto",
                width: "250px",
                maxWidth: "100%",
                boxSizing: "border-box",
              }}
            >
              <div className="relative group  w-full h-full">
                <img
                  src={card.img}
                  alt={`image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex items-end bg-black bg-opacity-50 opacity-0 group-hover:scale-105 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxSizing: "border-box" }}
                >
                  <div
                    style={{
                      background: "#191919",
                    }}
                    className="w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"
                  >
                    <div
                      style={{
                        background: "#191919",
                      }}
                      className="w-full p-2 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"
                    >
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Typography
                          style={{ color: "#FAF6F0" }}
                          className="font-medium text-center uppercase"
                        >
                          {card.title}
                        </Typography>

                        <div className="flex">
                          <Typography
                            style={{ color: "#FAF6F0" }}
                            className="text-sm mt-2"
                          >
                            {card.price}
                          </Typography>
                          <div
                            className="absolute inline-flex justify-center right-2 items-center mt-2 p-1"
                            style={{
                              verticalAlign: "middle",
                              backgroundColor: "#1E5128",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="#4E9F3D"
                              className="size-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                clipRule="evenodd"
                              />
                            </svg>

                            <Typography
                              style={{
                                fontSize: "12px",
                                letterSpacing: "2px",
                                color: "#FAF6F0",
                                marginLeft: "8px",
                              }}
                            >
                              5.0
                            </Typography>
                          </div>
                        </div>
                        <Button
                          ripple={false}
                          fullWidth={true}
                          size="sm"
                          className="mt-4 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}
