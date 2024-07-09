import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoImg from "../../images/logo.svg";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Docs
        </a>
      </Typography>
    </ul>
  );
}

export function MiniNavBar() {
  return (
    <div
      className="mx-auto max-w-screen  bg-blue-gray-900 rounded-none pt-2 pb-2 px-2 items-center "
      style={{ backgroundColor: "#393646" }}
    >
      <div className="flex items-center justify-center gap-9 text-blue-gray-900">
        <div className="hidden lg:block">
          <img
            src={logoImg}
            alt="Logo"
            style={{ width: "100px", height: "auto" }}
          />
        </div>
        <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
          <div className="inline-flex relative w-full gap-2 md:w-max">
            <Input
              type="search"
              placeholder="Search"
              containerProps={{
                className: "min-w-[288px]",
              }}
              className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            {/*Icon Search*/}

            <div className="!absolute left-3 top-[10px]">
              <FontAwesomeIcon icon={faSearch} color="white" size="sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
