import React from "react";
import Book from "../components/about/Book";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

export default function About() {
  return (
    <div style={{ overflowY: "auto" }}>
      <Typography
        variant="h4"
        className="text-center pt-3  font-bold "
        style={{
          backgroundColor: "#4F4557",
          color: "#EEEEEE",

          marginBottom: "0",
        }}
      >
        About Us
      </Typography>

      <Typography
        className="text-center pb-2 "
        style={{
          backgroundColor: "#4F4557",
          // fontFamily: "Nunito, sans-serif",
          fontSize: "0.875rem",
          color: "#EEEEEE",
          marginTop: "0",
        }}
      >
        <Link
          className=" hover:text-hoverColor transition-colors duration-300"
          to="/"
        >
          Home
        </Link>{" "}
        &gt; About Us
      </Typography>
      <Card className="max-w-full m-6 pt-3 ">
        <CardHeader color="blue-gray" className=" "></CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="text-center">
            Who We Are
          </Typography>
          <Typography
            variant="h6 "
            className="mb-4 border-t-4 border-gray-800 text-center mt-4"
          >
            SalMal Bookshop (Pvt) Ltd is truly a proper combination of the
            tradition and the modernity that brings the future to the present .
          </Typography>
          <Typography className="text-center">
            Salmal Book Store stands as a beacon of literary excellence in Sri
            Lanka, cherished for its wide-ranging collection that caters to
            diverse tastes and interests. Nestled in the heart of Colombo, our
            store is a haven for book lovers of all ages, offering a curated
            selection of both local gems and international bestsellers. Step
            inside to discover shelves brimming with over 100,000 titles,
            carefully chosen to satisfy every reader, from children exploring
            their first stories to seasoned academics delving into specialized
            subjects. Alongside our extensive book collection, we also feature
            educational materials, essential stationery, and a thoughtfully
            curated assortment of magazines.
          </Typography>
          <div className="inline-flex gap-5 border-t-2 mt-2">
            <img
              className="h-96 w-96 rounded-lg object-cover object-center mt-4"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="nature image"
            />
            <div>
              <Typography className=" text-justify mt-5">
                At Salmal, we take pride in our partnerships with esteemed
                publishers worldwide, ensuring that our shelves are always
                stocked with the latest releases and timeless classics alike.
                Our commitment to quality extends beyond our offerings to the
                service we provide. Our knowledgeable staff is always on hand to
                assist, making every visit a personalized experience. Beyond
                books, Salmal Book Store has made a notable impact on the
                cultural landscape, producing acclaimed films that resonate with
                audiences nationwide.
              </Typography>
              <Typography className=" text-justify mt-2">
                Our dedication to creativity and community engagement has earned
                us recognition and accolades, reinforcing our role as more than
                just a bookstore. In an era where convenience is key, Salmal
                Book Store offers seamless online browsing and ordering through
                our user-friendly website, www.salmalbooks.lk. Whether you're
                browsing our aisles in person or exploring our digital catalog
                from the comfort of your home, our "Salmal Snap Order" feature
                ensures quick and convenient purchases with just a tap on your
                smartphone. As we continue to grow and evolve, Salmal Book Store
                remains committed to fostering a love for literature and
                learning. Join us on a journey of discovery and enrichment,
                where every visit promises new treasures and meaningful
                connections.
              </Typography>
              <Typography className="text-justify mt-2">
                As we continue to grow and evolve, Salmal Book Store remains
                committed to fostering a love for literature and learning. Join
                us on a journey of discovery and enrichment, where every visit
                promises new treasures and meaningful connections.
              </Typography>
            </div>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
