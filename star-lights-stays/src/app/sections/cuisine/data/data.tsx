export type TCuisineItem = {
  id: number;
  title: string;
  desc: string;
  img: string;
  bottomTitle:string,
  bottomDesc:string,
};

export const dataCuisine: TCuisineItem[] = [
  {
    id: 0,
    title: "JADE CHINESE RESTAURANT",
    desc: "If you are a fan of exotic flavors from the East, we recommend that you try authentic Chinese specialties of the ‘’Jade’’ restaurant.",
    img: "/images/cuisineImages/team-1.jpg",
    bottomTitle:"JADE CHINESE",
    bottomDesc:"RESTAURANT",
  },
  {
    id: 2,
    title: "MAESTRAL CLUB RESTAURANT",
    desc: "During your stay at Maestral Resort & Casino take the opportunity to enjoy the authentic Mediterranean cuisine and international food, while tasting some of the best local and international wines.",
    img: "/images/cuisineImages/team-2.jpg",
    bottomTitle:"MAESTRAL CLUB",
    bottomDesc:"RESTAURANT",
  },
  {
    id: 3,
    title: "BACCARAT RESTAURANT",
    desc: "Set in a prime location in a spectacular setting and with stunning view, Baccarat bar restaurant is reserved for guests with exquisite taste and special expectations.",
    img: "/images/cuisineImages/team-3.jpg",
    bottomTitle:"BACCARAT",
    bottomDesc:"RESTAURANT",
  },
  {
    id: 4,
    title: "ROYAL FLUSH BAR",
    desc: "Great fun and entertainment offered in our Flush Royal Casino bar make our Resort widely known. Join the fun and spend pleasant moments with live music, cabaret programmes or concerts.",
    img: "/images/cuisineImages/team-4.jpg",
    bottomTitle:"JADE CHINESE",
    bottomDesc:"BAR",
  },
];

