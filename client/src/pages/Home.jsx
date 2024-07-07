import React from "react";
import { Card, Typography, List, ListItem } from "@material-tailwind/react";
import { CardSlider } from "../components/home/CardSlider";
import ProductCardContainer from "../components/home/ProductCardContainer";

const stationaryItems = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvMsiyMTKdhBIiT0CDggBfbwiLY8L6QZgWSw&s",
    title: "Harry Potter and the Half Blood Prince",
    price: "Rs.1500.00",
  },
  {
    img: "https://th.bing.com/th/id/R.847ff818eb060a80aa401c0273ee49ef?rik=PitBxG7NXly9yA&riu=http%3a%2f%2fi2.wp.com%2fgeekdad.com%2fwp-content%2fuploads%2f2013%2f02%2fHP1-Kibuishi.jpg&ehk=uafYYv3yMqpRGlecJf0Si6SPSZwksDcZUzc982%2byhlQ%3d&risl=&pid=ImgRaw&r=0",
    title: "Harry Potter and the Sorcerer's Stone",
    price: "Rs.1670.00",
  },
  {
    img: "https://th.bing.com/th/id/R.847ff818eb060a80aa401c0273ee49ef?rik=PitBxG7NXly9yA&riu=http%3a%2f%2fi2.wp.com%2fgeekdad.com%2fwp-content%2fuploads%2f2013%2f02%2fHP1-Kibuishi.jpg&ehk=uafYYv3yMqpRGlecJf0Si6SPSZwksDcZUzc982%2byhlQ%3d&risl=&pid=ImgRaw&r=0",
    title: "Harry Potter and the Sorcerer's Stone",
    price: "Rs.1670.00",
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
  {
    img: "https://images.ctfassets.net/usf1vwtuqyxm/35KbpLHvQvQtBBKs0vKErL/43985bc9e5bea863ccf9cc9561b62827/English_Harry_Potter_6_Epub_9781781100257.jpg?w=914&q=70&fm=jpg",
    title: "Harry Potter and the Half Blood Prince",
    price: "Rs.1500.00",
  },
  {
    img: "https://th.bing.com/th/id/OIP.jLqYqWVIOFavTGlHSAC2hQAAAA?rs=1&pid=ImgDetMain",
    title: "Prince and The Pauper",
    price: "Rs.1300.00",
  },
  {
    img: "https://th.bing.com/th/id/OIP.jLqYqWVIOFavTGlHSAC2hQAAAA?rs=1&pid=ImgDetMain",
    title: "Prince and The Pauper",
    price: "Rs.1300.00",
  },
];

const best_sellers = [
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
    img: "https://th.bing.com/th/id/R.847ff818eb060a80aa401c0273ee49ef?rik=PitBxG7NXly9yA&riu=http%3a%2f%2fi2.wp.com%2fgeekdad.com%2fwp-content%2fuploads%2f2013%2f02%2fHP1-Kibuishi.jpg&ehk=uafYYv3yMqpRGlecJf0Si6SPSZwksDcZUzc982%2byhlQ%3d&risl=&pid=ImgRaw&r=0",
    title: "Harry Potter and the Sorcerer's Stone",
    price: "Rs.1670.00",
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
  {
    img: "https://images.ctfassets.net/usf1vwtuqyxm/35KbpLHvQvQtBBKs0vKErL/43985bc9e5bea863ccf9cc9561b62827/English_Harry_Potter_6_Epub_9781781100257.jpg?w=914&q=70&fm=jpg",
    title: "Harry Potter and the Half Blood Prince",
    price: "Rs.1500.00",
  },
  {
    img: "https://th.bing.com/th/id/OIP.jLqYqWVIOFavTGlHSAC2hQAAAA?rs=1&pid=ImgDetMain",
    title: "Prince and The Pauper",
    price: "Rs.1300.00",
  },
  {
    img: "https://th.bing.com/th/id/OIP.jLqYqWVIOFavTGlHSAC2hQAAAA?rs=1&pid=ImgDetMain",
    title: "Prince and The Pauper",
    price: "Rs.1300.00",
  },
];

export default function Home() {
  return (
    <div className="w-screen">
      <div className="relative h-32 sm:h-36 md:h-40 lg:h-48">
        <img
          className="w-full h-full object-cover"
          src="https://img.freepik.com/premium-photo/library-bookshelves-with-books-textbooks-learning-education-concept_629685-2059.jpg?w=826"
          alt="Library"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Typography
            variant="h2"
            className="font-bold text-shadow text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            style={{ color: "#ffff" }}
          >
            Welcome To SalMal Book Store
          </Typography>
        </div>
      </div>

      <div
        className="items-center justify-center h-2 hidden md:block"
        style={{ color: "#ffff", background: "#393646" }}
      ></div>

      <div className="flex w-screen">
        {/* Side Bar */}
        <div className="hidden md:block">
          <Card className="w-48  pt-2 shadow-xl shadow-blue-gray-900/5 rounded-none">
            <List>
              <ListItem className="w-48">Best Sellers</ListItem>
              <ListItem className="w-48">New Arrival</ListItem>
              <ListItem className="w-48">Offers</ListItem>
              <ListItem className="w-48">Office Stationary</ListItem>
              <ListItem className="w-48">Bundle Offers</ListItem>
              <ListItem className="w-48">Authors</ListItem>
              <ListItem className="w-48">Publishers</ListItem>
              <ListItem className="w-48">Gift Vouchers</ListItem>
              <ListItem className="w-48">School Book Lists</ListItem>
            </List>
          </Card>
        </div>

        <div className=" inner-layout-home w-screen hidden md:block">
          <div className="  w-[67rem] ">
            <CardSlider />
          </div>
        </div>
      </div>

      {/* Best Sellers Section */}
      <div>
        <div className="flex items-center justify-center pt-2 pb-2 bg-[#393646] text-white">
          <Typography
            className="uppercase text-xs sm:text-sm md:text-base lg:text-lg"
            style={{ letterSpacing: "4px" }}
          >
            Best Sellers
          </Typography>
        </div>

        <ProductCardContainer cards={best_sellers} content={"best-sellers"} />
      </div>

      {/* Stationary Products Section */}

      <div>
        <div className="flex items-center justify-center pt-2 pb-2 bg-[#393646] text-white mt-4">
          <Typography
            className="uppercase text-xs sm:text-sm md:text-base lg:text-lg "
            style={{ letterSpacing: "4px" }}
          >
            STATIONERY PRODUCTS
          </Typography>
        </div>

        <ProductCardContainer cards={stationaryItems} content={"stationary"} />
      </div>
    </div>
  );
}
