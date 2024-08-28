
type Slug = {
    _type: string;
    current: string;
}
type CoverImage = {
    url: string;
}

export type Image = {
    _key: string;
    url: string;
}
type Amenity = {
    _key: string;
    amenity: string;
    icon: string;
}
export type Room = {
    _id : string;
    coverImage: CoverImage ;
    description: string;
    dimension: string;
    discount?: number;
    images: Image[];
    isBooked: boolean;
    isFeatured: boolean;
    name: string;
    numberOfBeds: number;
    offeredAmenities: Amenity[];
    price?: number;
    slug: Slug;
    link:string,
    specialNote: string;
    type: string;
}

export const mockRooms: Room[] = [
    {
      _id: "1",
      coverImage: { url: "/images/marriot/marriot-3.png" },
      description:
        "The Shelbourne Hotel is the most prestigious and historic 5 star  hotel in Dublin. For 200 years, it has stood at the centre of Ireland’s capital, looking out over the beautiful St. Stephen’s Green and surrounded by the main cultural and historical sites and shopping areas of the city of Dublin. Magnificently restored and majestically conducted, our hotel in Dublin's city centre offers exquisitely appointed guest rooms, spectacular meeting spaces and a tempting choice of menus, bars and lounges. ",
      dimension: "",
     
      images: [
        { _key: "img1", url: "/images/marriot/marriot-1.avif" },
        { _key: "img2", url: "/images/marriot/marriot-3.png" },
        { _key: "img2", url: "/images/marriot/marriot-2.avif" },
      ],
      isBooked: false,
      isFeatured: true,
      name: "The Shelbourne",
      link: "https://theshelbourne.com/",
      numberOfBeds: 2,
      offeredAmenities: [
        { _key: "amenity1", amenity: "Wi-Fi", icon: "wifi-icon" },
        { _key: "amenity2", amenity: "TV", icon: "tv-icon" },
        { _key: "amenity3", amenity: "Spa", icon: "tv-icon" },
        { _key: "amenity4", amenity: "Indoor Pool", icon: "tv-icon" },
        { _key: "amenity5", amenity: "Dry Cleaning Service", icon: "tv-icon" },
      ],
     
      slug: { _type: "slug", current: "marriot" },
      specialNote: "Special note for Room 1",
      type: "",
    },
  
    {
      _id: "2",
      coverImage: { url: "/images/westburn/westburn-1.jpg" },
      description:
        "We are delighted to share the news that two properties within The Doyle Collection have been included in The Condé Nast Readers’ Choice Awards 2023. Our flagship property The Westbury, located in Dublin city and a member of Leading Hotels of the World, has been awarded #1 Hotel in Ireland for a fifth time.",
      dimension: "",
    
      images: [
        { _key: "img1", url: "/images/westburn/westburn-1.jpg" },
        { _key: "img2", url: "/images/westburn/westburn-2.jpg" },
        { _key: "img2", url: "/images/westburn/westburn-3.jpg" },
      ],
      isBooked: false,
      isFeatured: true,
      name: "The Westbury",
      link: "https://www.doylecollection.com/hotels/the-westbury-hotel",
      numberOfBeds: 2,
      offeredAmenities: [
        { _key: "amenity1", amenity: "Wi-Fi", icon: "wifi-icon" },
        { _key: "amenity2", amenity: "TV", icon: "tv-icon" },
        { _key: "amenity3", amenity: "Spa", icon: "tv-icon" },
        { _key: "amenity4", amenity: "Complimentary breakfast", icon: "tv-icon" },
        { _key: "amenity5", amenity: "Best Rate Guarantee", icon: "tv-icon" },
      ],
    
      slug: { _type: "slug", current: "WESTBURY" },
      specialNote: "",
      type: "",
    },
    {
      _id: "3",
      coverImage: { url: "/images/merrion/merrion-2.jpg" },
      description:
        "The Merrion encompasses four meticulously restored Georgian townhouses that imbue it with a touch of Irish history. Popular with art lovers, the property is located in the heart of Dublin and close to the National Gallery and National History Museum. It also contains the largest private collection of 19th and 20th century art in Ireland, including works by Post-Impressionist painter Paul Henry and Impressionist William Leech.",
      dimension: "",
      
      images: [
        { _key: "img1", url: "/images/merrion/merrion-1.jpg" },
        { _key: "img2", url: "/images/merrion/merrion-3.jpg" },
        { _key: "img3", url: "/images/merrion/merrion-2.jpg" },
        { _key: "img4", url: "/images/merrion/merrion-4.jpg" },
      ],
      isBooked: false,
      isFeatured: true,
      name: "The Merrion Hotel",
      link: "https://www.merrionhotel.com/",
      numberOfBeds: 2,
      offeredAmenities: [
        { _key: "amenity1", amenity: "Wi-Fi", icon: "wifi-icon" },
        { _key: "amenity2", amenity: "Meetings & Events", icon: "tv-icon" },
        { _key: "amenity3", amenity: "Spa", icon: "tv-icon" },
        { _key: "amenity4", amenity: "Complimentary breakfast", icon: "tv-icon" },
        { _key: "amenity5", amenity: "Weddings", icon: "tv-icon" },
      ],
   
      slug: { _type: "slug", current: "Merrion" },
      specialNote: "",
      type: "",
    },
    {
      _id: "4",
      coverImage: { url: "/images/marker/marker-1.webp" },
      description:
        "An Irish city of wonder and magic, where wellness blends seamlessly with vibrant modernity. From the enchanting national stud to the stunning beauty of wild swimming, it captivates all who visit.",
      dimension: "",
     
      images: [
        { _key: "img1", url: "/images/marker/marker-1.webp" },
        { _key: "img2", url: "/images/marker/marker-2.jpg" },
        { _key: "img3", url: "/images/marker/normal.jpg" },
        
      ],
      isBooked: false,
      isFeatured: true,
      name: "The Marker Hotel",
      link: "https://www.anantara.com/en/the-marker-dublin",
      numberOfBeds: 2,
      offeredAmenities: [
        { _key: "amenity1", amenity: "Wi-Fi", icon: "wifi-icon" },
        { _key: "amenity2", amenity: "Meetings & Events", icon: "tv-icon" },
        { _key: "amenity3", amenity: "Spa", icon: "tv-icon" },
        { _key: "amenity4", amenity: "Complimentary breakfast", icon: "tv-icon" },
        { _key: "amenity5", amenity: "Weddings", icon: "tv-icon" },
      ],
     
      slug: { _type: "slug", current: "Merkel" },
      specialNote: "",
      type: "",
    },
    {
      _id: "5",
      coverImage: { url: "/images/fitzwilliam/fitz-1.jpg" },
      description:
        "Since we opened our doors in 1998, the Fitzwilliam Hotel Dublin has been about extraordinary hospitality. It’s about five-star comfort and it’s about astonishing service delivered by incredible people. Read about the Fitzwilliam Hotel Dublin here and discover why this hotel is all about you.",
      dimension: "",
      discount: 10,
      images: [
        { _key: "img1", url: "/images/fitzwilliam/fitz-1.jpg" },
        { _key: "img2", url: "/images/fitzwilliam/fitz-2.jpg" },
        { _key: "img3", url: "/images/fitzwilliam/fitz-3.jpg" },
        { _key: "img3", url: "/images/fitzwilliam/fitz-4.jpg" },
      ],
      isBooked: false,
      isFeatured: true,
      name: "The Fitzwilliam Hotel",
      link: "https://www.fitzwilliamhoteldublin.com/",
      numberOfBeds: 2,
      offeredAmenities: [
        { _key: "amenity1", amenity: "Wi-Fi", icon: "wifi-icon" },
        { _key: "amenity2", amenity: "Meetings & Events", icon: "tv-icon" },
        { _key: "amenity3", amenity: "Spa", icon: "tv-icon" },
        
        { _key: "amenity5", amenity: "Weddings", icon: "tv-icon" },
      ],
      
      slug: { _type: "slug", current: "fitzwilliam" },
      specialNote: "",
      type: "",
    },
    {
      _id: "6",
      coverImage: { url: "/images/hilton/hilton-1.webp" },
      description:
        "Stay in the heart of the city centre overlooking The National Concert Hall. Explore wandering paths of St. Stephen's Green, adjacent to the hotel. Discover Dublin's unique character with distillery visits, scenic tours, and experiences curated by our concierges. Enjoy our spacious rooms and suites, three restaurants, and fitness centre.",
      dimension: "",
      discount: 10,
      images: [
        { _key: "img1", url: "/images/hilton/hilton-1.webp" },
        { _key: "img2", url: "/images/hilton/hilton-2.webp" },
        { _key: "img3", url: "/images/hilton/hilton-3.webp" },
    
      ],
      isBooked: false,
      isFeatured: true,
      name: "The Conrad Dublin",
      link: "https://www.hilton.com/en/hotels/dubhcci-conrad-dublin/",
      numberOfBeds: 2,
      offeredAmenities: [
        { _key: "amenity1", amenity: "Wi-Fi", icon: "wifi-icon" },
        { _key: "amenity2", amenity: "Meetings & Events", icon: "tv-icon" },
        { _key: "amenity3", amenity: "Spa", icon: "tv-icon" },
        
        { _key: "amenity5", amenity: "Weddings", icon: "tv-icon" },
      ],
      
      slug: { _type: "slug", current: "hilton" },
      specialNote: "",
      type: "",
    },
    {
      _id: "7",
      coverImage: { url: "/images/gibson/gibson-1.webp" },
      description:
        "We're all about delivering the kind of standout experiences worthy of a sack load of fan mail. So, what are you waiting for? Let us make you feel like a megastar. ",
      dimension: "",
      discount: 10,
      images: [
        { _key: "img1", url: "/images/gibson/gibson-1.webp" },
        { _key: "img2", url: "/images/gibson/gibson-2.webp" },
        { _key: "img3", url: "/images/gibson/gibson-3.webp" },
        { _key: "img3", url: "/images/gibson/gibson-4.webp" },
      ],
      isBooked: false,
      isFeatured: true,
      name: "The Gibson Hotel",
      link: "https://www.thegibsonhotel.ie/",
      numberOfBeds: 2,
      offeredAmenities: [
        { _key: "amenity1", amenity: "Wi-Fi", icon: "wifi-icon" },
        { _key: "amenity2", amenity: "Meetings & Events", icon: "tv-icon" },
        { _key: "amenity3", amenity: "Spa", icon: "tv-icon" },
        { _key: "amenity5", amenity: "Weddings", icon: "tv-icon" },
      ],
      
      slug: { _type: "slug", current: "gibsonhotel" },
      specialNote: "",
      type: "",
    },
    {
      _id: "8",
      coverImage: { url: "/images/thedean/thedean-1.jpg" },
      description:
        "Located within The Dean, guests can enjoy complimentary access to Ireland’s leading boutique gym and health club. The design focused space offers a luxurious and functional facility in which to train and recover, with world class equipment, high spec changing rooms, state of the art sound & lighting, sauna and an adult only heated relaxation pool . ",
      dimension: "",
      discount: 10,
      images: [
        { _key: "img1", url: "/images/thedean/thedean-1.jpg" },
        { _key: "img2", url: "/images/thedean/thedean-3.jpg" },
        { _key: "img3", url: "/images/thedean/thedean-2.jpg" },
        { _key: "img3", url: "/images/thedean/thedean-4.jpg" },
      ],
      isBooked: false,
      isFeatured: true,
      name: "The Dean Dublin ",
      link: "https://thedean.ie/dublin/",
      numberOfBeds: 2,
      offeredAmenities: [
        { _key: "amenity1", amenity: "Wi-Fi", icon: "wifi-icon" },
        { _key: "amenity2", amenity: "Meetings & Events", icon: "tv-icon" },
        { _key: "amenity3", amenity: "Spa", icon: "tv-icon" },
        { _key: "amenity5", amenity: "Weddings", icon: "tv-icon" },
      ],
      
      slug: { _type: "slug", current: "thedean" },
      specialNote: "",
      type: "",
    },
    {
      _id: "9",
      coverImage: { url: "/images/clea/clea-1.jpg" },
      description:
        "Located in Temple Bar and listed in The Irish Independent’s 50 Best Places to Stay in Ireland, The Clarence is Dublin’s original rock ‘n’ roll hotel and is home to The Curious Mister, Roberta’s, Tomahawk, The Giddy Dolphin, and 95 hotel bedrooms. ",
      dimension: "",
      discount: 10,
      images: [
        { _key: "img1", url: "/images/clea/clea-1.jpg" },
        { _key: "img2", url: "/images/clea/clea-2.jpg" },
        { _key: "img3", url: "/images/clea/clea-3.png" },
  
      ],
      isBooked: false,
      isFeatured: true,
      name: "The Clarence Hotel ",
      link: "https://theclarence.ie/",
      numberOfBeds: 2,
      offeredAmenities: [
        { _key: "amenity1", amenity: "Wi-Fi", icon: "wifi-icon" },
        { _key: "amenity2", amenity: "Meetings & Events", icon: "tv-icon" },
        { _key: "amenity3", amenity: "Spa", icon: "tv-icon" },
        { _key: "amenity5", amenity: "Weddings", icon: "tv-icon" },
      ],
      
      slug: { _type: "slug", current: "clarence" },
      specialNote: "",
      type: "",
    },
    {
      _id: "10",
      coverImage: { url: "/images/inter/inter-3.jpg" },
      description:
        "Located on two acres of gardens, InterContinental Dublin is the capital's only true five star urban resort where traditional  meets old-school glamour. Situated on two acres of gardens, InterContinental Dublin is the city's only true five-star urban resort, blending traditional  with old-school glamour.  Located in Dublin's prestigious Ballsbridge neighborhood, the hotel is just a short stroll from the city centre and major attractions like Grafton Street, O'Connell Street, Aviva Stadium, and Guinness Storehouse.",
      dimension: "",
      discount: 10,
      images: [
        { _key: "img1", url: "/images/inter/inter-1.jpg" },
        { _key: "img2", url: "/images/inter/inter-2.jpg" },
        { _key: "img3", url: "/images/inter/inter-4.jpeg" },
        { _key: "img3", url: "/images/inter/inter-3.jpg" },
  
      ],
      isBooked: false,
      isFeatured: true,
      name: "InterContinental Dublin ",
      link: "https://www.intercontinentaldublin.ie/en/",
      numberOfBeds: 2,
      offeredAmenities: [
        { _key: "amenity1", amenity: "Wi-Fi", icon: "wifi-icon" },
        { _key: "amenity2", amenity: "Meetings & Events", icon: "tv-icon" },
        { _key: "amenity3", amenity: "Spa", icon: "tv-icon" },
        { _key: "amenity5", amenity: "Weddings", icon: "tv-icon" },
      ],
      
      slug: { _type: "slug", current: "international" },
      specialNote: "",
      type: "",
    },
  ];