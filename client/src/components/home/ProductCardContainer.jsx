import React from "react";
import {
  Button,
  Card,
  Typography,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

export default function ProductCardContainer({ cards, content }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-5 mx-10 mb-5">
      {content === "best-sellers" ? (
        cards.map((card, index) => (
          <Card
            key={index}
            className="w-full sm:w-56 h-56 sm:h-auto"
            style={{
              boxSizing: "border-box",
            }}
          >
            <div className="relative group w-full h-full">
              <img
                src={card.img}
                alt="image"
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
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Typography
                      className="font-medium text-center uppercase md:text-lg lg:text-lg text-xs sm:text-xs"
                      style={{
                        color: "#FAF6F0",
                        lineHeight: "1.5",
                      }}
                    >
                      {card.title}
                    </Typography>

                    <div className="flex">
                      <Typography
                        style={{
                          color: "#FAF6F0",
                          lineHeight: "1.25",
                        }}
                        className="font-medium mt-2 text-xs md:text-sm lg:text-sm sm:text-xs"
                      >
                        {card.price}
                      </Typography>
                      <div
                        className="absolute inline-flex justify-center right-4 items-center mt-2 p-1"
                        style={{
                          verticalAlign: "middle",
                          backgroundColor: "#1E5128",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#4E9F3D"
                          className="mini-header-svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <Typography
                          style={{
                            letterSpacing: "1px",
                            color: "#FAF6F0",
                          }}
                          className="text-xs sm:text-xs md:text-xs"
                        >
                          5.0
                        </Typography>
                      </div>
                    </div>
                    <Button
                      ripple={false}
                      fullWidth={true}
                      size="sm"
                      className="mt-4 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 text-xs"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))
      ) : content === "stationary" ? (
        cards.map((card, index) => (
          <Card className="w-full sm:w-56 h-48 sm:h-auto flex flex-col justify-between">
            <CardHeader shadow={false} floated={false} className="h-32 sm:h-44">
              <img
                src={card.img}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody className="flex-1 flex flex-col justify-between p-2 sm:p-4">
              <div className="mb-1 sm:mb-2 text-center sm:text-left">
                <Typography
                  color="blue-gray"
                  variant="h6"
                  className="text-xs sm:text-base"
                >
                  {card.title}
                </Typography>
                <Typography
                  color="green"
                  className="font-semibold text-xs sm:text-sm"
                >
                  {card.price}
                </Typography>
              </div>
              <Button
                ripple={false}
                fullWidth={true}
                className="mt-2 bg-gray-900 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 text-xs sm:text-sm"
              >
                Add to Cart
              </Button>
            </CardBody>
          </Card>
        ))
      ) : (
        // Default case if type is neither "cards" nor "stationary"
        <div>
          <h2>Default Cards</h2>
        </div>
      )}
    </div>
  );
}
