import React from "react";
import { VscKey } from "react-icons/vsc";
import { CiFaceSmile } from "react-icons/ci";
import {
  PiAnchorSimpleThin,
  PiTrophyLight,
  PiBriefcase,
  PiWineThin,
  PiLifebuoyLight,
} from "react-icons/pi";
import { TfiCamera } from "react-icons/tfi";

export type TFacility = {
  id: number;
  img: React.ReactElement;
  title: string;
  desc: string;
};

export const dataFacilities: TFacility[] = [
  {
    id: 0,
    img: <VscKey />,
    title: "Accomodation",
    desc: "205 contemporary rooms, most of them with sea view, and all with balconies. Additionally, there are 22 contemporary suites.",
  },
  {
    id: 1,
    img: <CiFaceSmile />,
    title: "Wellness & Spa",
    desc: "Luxury Wellness & Spa, awarded as the Best Spa Centre in Montenegro in 2016, includes a 135m2 outdoor and a 200m2 indoor pool.",
  },
  {
    id: 2,
    img: <PiAnchorSimpleThin />,
    title: "Beach",
    desc: "Guests of Maestral Resort & Casino have access to a private, sandy beach with modern and comfortable equipment.",
  },
  {
    id: 3,
    img: <PiTrophyLight />,
    title: "Fitness Centre",
    desc: "Within the Hotel, there is a modernly equipped Fitness Centre in which you can use the gym or have individual training.",
  },
  {
    id: 4,
    img: <PiBriefcase />,
    title: "Meetings & Events",
    desc: "The Conference Centre offers several different halls with the latest equipment, in which you can organize business events.",
  },
  {
    id: 5,
    img: <PiWineThin />,
    title: "Restaurants & Bars",
    desc: "Our guests can enjoy in rich offer of restaurants and bars that make Maestral a luxury destination for dining. Room service is available 24/7.",
  },
  {
    id: 6,
    img: <TfiCamera />,
    title: "Entertainments",
    desc: "Maestral is well known and recognizable in organizing concerts which making it center of best entertainment in region.",
  },
  {
    id: 7,
    img: <PiLifebuoyLight />,
    title: "Casino",
    desc: "There is no need to go anywhere, because within the Hotel is the best casino in Montenegro which has been renovated and expanded in 2017.",
  },
];
