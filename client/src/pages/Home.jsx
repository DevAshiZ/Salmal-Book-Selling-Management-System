import React from "react";
import Book from "../components/about/Book";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";

import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { CardSlider } from "../components/home/CardSlider";
import PopularBooks from "../components/home/PopularBooks";

export default function Home() {
  return (
    <div className="w-screen">
      <div
        style={{
          position: "relative",
          height: 150,
        }}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src="https://img.freepik.com/premium-photo/library-bookshelves-with-books-textbooks-learning-education-concept_629685-2059.jpg?w=826"
          alt="Library"
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            style={{
              color: "white",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            Welcome To SalMal Book Store{" "}
          </Typography>
        </div>
      </div>
      <div
        className="flex items-center justify-center h-2 "
        style={{ color: "white", background: "#393646" }}
      ></div>

      <div className="flex w-screen">
        {/* Side Bar */}
        <Card className="w-48 pr-2 pt-2 shadow-xl shadow-blue-gray-900/5 rounded-none">
          <List>
            <ListItem className="w-48">Best Sellers</ListItem>
            <ListItem className="w-48">New Arrival</ListItem>
            <ListItem className="w-48">Offers</ListItem>
            <ListItem className="w-48">On-Demand</ListItem>
            <ListItem className="w-48">Office Stationary</ListItem>
            <ListItem className="w-48">Bundle Offers</ListItem>
            <ListItem className="w-48">Authors</ListItem>
            <ListItem className="w-48">Publishers</ListItem>
            <ListItem className="w-48">Gift Vouchers</ListItem>
            <ListItem className="w-48">School Book Lists</ListItem>
            <ListItem className="w-48">Toys</ListItem>
          </List>
        </Card>

        {/* Main Content */}
        <div className=" inner-layout-home w-screen">
          <div className="  w-[67rem] ">
            <CardSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
