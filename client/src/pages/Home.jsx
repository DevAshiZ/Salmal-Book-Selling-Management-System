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

export default function Home() {
  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100vw",
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

      <div className="flex ">
        {/* Side Bar */}
        <Card className=" pr-2 pt-2 shadow-xl shadow-blue-gray-900/5 rounded-none">
          <List>
            <ListItem>Best Sellers</ListItem>
            <ListItem>New Arrival</ListItem>
            <ListItem>Offers</ListItem>
            <ListItem>On-Demand</ListItem>
            <ListItem>Office Stationary</ListItem>
            <ListItem>Bundle Offers</ListItem>
            <ListItem>Authors</ListItem>
            <ListItem>Publishers</ListItem>
            <ListItem>Gift Vouchers</ListItem>
            <ListItem>School Book Lists</ListItem>
            <ListItem>Toys</ListItem>
          </List>
        </Card>
        <div className="inner-layout-home ">
          <CardSlider />
        </div>
      </div>
    </div>
  );
}
