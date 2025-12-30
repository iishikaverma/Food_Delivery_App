/**
 * Header
 *   -Logo
 *   -Nav Items
 * Body
 *   -Search Bar
 *   -Restaurant Container
 *      =>Restraunt Cards
 *        = Image
 *        = Name of Restraunt, Star Rating, Cuisine, Delivery Time
 * Footer
 *   -Copyrights
 *   -Links
 *   -Address
 *   -Contacts
 * 
 */

import ReactDOM from "react-dom/client";
import "./index.css";




const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={new URL("assets/Cravory.png", import.meta.url).toString()}
                    alt="Cravory logo"
                />

            </div>
            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>CONTACT US</li>
                    <li>CART</li>
                </ul>
            </div>
        </div>
    )
};

const styleCard = {
    backgroundColor: "#c4c4c4ff"
}

type RestaurantCardProps = {
  resData: {
    info: {
      name: string;
      cloudinaryImageId: string;
      cuisines: string[];
      avgRating: number;
      costForTwo: string;
      sla: {
        deliveryTime: number;
      };
    };
  };
};

const RestaurantCard = (props:RestaurantCardProps) => {
    const {resData} = props;

    const {cloudinaryImageId, costForTwo, name, cuisines, avgRating, sla} = resData?.info
    return (
        <div className="res-card" style = {styleCard}>
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId } />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
};

const resList = [
    {info: {
        id: "841483",
        name: "Wrapperz",
        cloudinaryImageId: "74503b65173fd94510993e9fe4d3c977",
        locality: "greater noida",
        areaName: "Gaur city",
        costForTwo: "₹300 for two",
        cuisines: [
        "Fast Food",
        "Wraps",
        "Salads"
        ],
        avgRating: 4.3,
        parentId: "409965",
        avgRatingString: "4.3",
        totalRatingsString: "1.8K+",
        sla: {
        deliveryTime: 35,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        nextCloseTime: "2026-01-07 00:00:00",
        opened: true
        },
        badges: { },
        isOpen: true,
        type: "F",
        badgesV2: {
        entityBadges: {
        imageBased: { },
        textBased: { },
        textExtendedBadges: { }
        }
        },
        aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79"
        },
        orderabilityCommunication: {
        title: { },
        subTitle: { },
        message: { },
        customIcon: { }
        },
        differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: { },
        video: { }
        }
        },
        reviewsSummary: { },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: { },
        externalRatings: {
        aggregatedRating: {
        rating: "--"
        }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
        context: "seo-data-dcf86d19-2127-4045-a27a-ee0689bb9520"
        },
        cta: {
        link: "https://www.swiggy.com/city/noida/wrapperz-greater-gaur-city-rest841483",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            
    },
    {info: {
        id: "147910",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "ux1ryy9yqhrqwznhl3ju",
        locality: "Mahagun Mart",
        areaName: "Gaur City 2",
        costForTwo: "₹400 for two",
        cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
        ],
        avgRating: 4,
        parentId: "4961",
        avgRatingString: "4.0",
        totalRatingsString: "13K+",
        sla: {
        deliveryTime: 18,
        lastMileTravel: 0.6,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.6 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        nextCloseTime: "2025-12-31 08:00:00",
        opened: true
        },
        badges: {
        imageBadges: [
        {
        imageId: "android/static-assets/icons/big_rx.png",
        description: "bolt!"
        }
        ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
        entityBadges: {
        imageBased: {
        badgeObject: [
        {
        attributes: {
        description: "bolt!",
        imageId: "android/static-assets/icons/big_rx.png"
        }
        }
        ]
        },
        textBased: { },
        textExtendedBadges: { }
        }
        },
        aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL"
        },
        orderabilityCommunication: {
        title: { },
        subTitle: { },
        message: { },
        customIcon: { }
        },
        differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: { },
        video: { }
        }
        },
        reviewsSummary: { },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: { },
        externalRatings: {
        aggregatedRating: {
        rating: "--"
        }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
        context: "seo-data-6fe8aa0a-b9de-4bf6-a8b3-36cbe4616808"
        },
        cta: {
        link: "https://www.swiggy.com/city/noida/la-pinoz-pizza-mahagun-mart-gaur-city-2-rest147910",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {info: {
        id: "999598",
        name: "Thalaiva Biryani",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/9/236325bc-a6bf-43c1-9fcb-2726899db148_999598.JPG",
        locality: "Gaur Global Village",
        areaName: "crossing republic",
        costForTwo: "₹250 for two",
        cuisines: [
        "Biryani",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "Desserts",
        "Beverages"
        ],
        avgRating: 4.4,
        parentId: "582792",
        avgRatingString: "4.4",
        totalRatingsString: "154",
        sla: {
        deliveryTime: 32,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        nextCloseTime: "2025-12-31 05:00:00",
        opened: true
        },
        badges: { },
        isOpen: true,
        type: "F",
        badgesV2: {
        entityBadges: {
        imageBased: { },
        textBased: { },
        textExtendedBadges: { }
        }
        },
        aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹89"
        },
        orderabilityCommunication: {
        title: { },
        subTitle: { },
        message: { },
        customIcon: { }
        },
        differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: { },
        video: { }
        }
        },
        reviewsSummary: { },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: { },
        externalRatings: {
        aggregatedRating: {
        rating: "--"
        }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
        context: "seo-data-6fe8aa0a-b9de-4bf6-a8b3-36cbe4616808"
        },
        cta: {
        link: "https://www.swiggy.com/city/noida/thalaiva-biryani-gaur-global-village-crossing-republic-rest999598",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {info: {
        id: "776273",
        name: "Domino's Pizza",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/50e9245d-67f3-4d8b-b8c6-7a12ed2dc964_776273.JPG",
        locality: "Gaur City Arcade",
        areaName: "Gaur City 2",
        costForTwo: "₹400 for two",
        cuisines: [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
        ],
        avgRating: 4.4,
        parentId: "2456",
        avgRatingString: "4.4",
        totalRatingsString: "1.4K+",
        sla: {
        deliveryTime: 30,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        nextCloseTime: "2025-12-31 02:55:00",
        opened: true
        },
        badges: {
        imageBadges: [
        {
        imageId: "android/static-assets/icons/big_rx.png",
        description: "bolt!"
        }
        ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
        entityBadges: {}
        },
        aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL"
        },
        orderabilityCommunication: {
        title: { },
        subTitle: { },
        message: { },
        customIcon: { }
        },
        differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: { },
        video: { }
        }
        },
        reviewsSummary: { },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: { },
        externalRatings: {
        aggregatedRating: {
        rating: "--"
        }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
        context: "seo-data-6fe8aa0a-b9de-4bf6-a8b3-36cbe4616808"
        },
        cta: {
        link: "https://www.swiggy.com/city/noida/dominos-pizza-gaur-city-arcade-gaur-city-2-rest776273",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {info: {
        id: "393530",
        name: "Ghar Ka Tadka",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/1/71b6babc-476e-4a76-8ada-cb042caae1d8_393530.jpg",
        locality: "Panchsheel Square Mall",
        areaName: "crossing republic",
        costForTwo: "₹150 for two",
        cuisines: [
        "North Indian"
        ],
        avgRating: 4.1,
        veg: true,
        parentId: "8838",
        avgRatingString: "4.1",
        totalRatingsString: "4.1K+",
        sla: {
        deliveryTime: 36,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        nextCloseTime: "2026-01-07 00:00:00",
        opened: true
        },
        badges: { },
        isOpen: true,
        type: "F",
        badgesV2: {
        entityBadges: {
        imageBased: { },
        textBased: { },
        textExtendedBadges: { }
        }
        },
        aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹90"
        },
        orderabilityCommunication: {
        title: { },
        subTitle: { },
        message: { },
        customIcon: { }
        },
        differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: { },
        video: { }
        }
        },
        reviewsSummary: { },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: { },
        externalRatings: {
        aggregatedRating: {
        rating: "--"
        }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
        context: "seo-data-6fe8aa0a-b9de-4bf6-a8b3-36cbe4616808"
        },
        cta: {
        link: "https://www.swiggy.com/city/noida/ghar-ka-tadka-panchsheel-square-mall-crossing-republic-rest393530",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {info: {
        id: "1004300",
        name: "Old Shiva Da Dhaba",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/7/453dad17-b8ac-48e9-9d36-b325cd868eee_1004300.jpg",
        locality: "Gaur City 1",
        areaName: "Eco tect fast society",
        costForTwo: "₹250 for two",
        cuisines: [
        "North Indian",
        "Chinese",
        "Fast Food",
        "Momos",
        "Barbecue",
        "Indian",
        "Thali",
        "Raita",
        "paratha",
        "Pasta"
        ],
        avgRating: 4.2,
        parentId: "436117",
        avgRatingString: "4.2",
        totalRatingsString: "2.1K+",
        sla: {
        deliveryTime: 31,
        lastMileTravel: 8.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "8.6 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        nextCloseTime: "2026-01-07 00:00:00",
        opened: true
        },
        badges: { },
        isOpen: true,
        type: "F",
        badgesV2: {
        entityBadges: {
        imageBased: { },
        textBased: { },
        textExtendedBadges: { }
        }
        },
        aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69"
        },
        orderabilityCommunication: {
        title: { },
        subTitle: { },
        message: { },
        customIcon: { }
        },
        differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: { },
        video: { }
        }
        },
        reviewsSummary: { },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: { },
        externalRatings: {
        aggregatedRating: {
        rating: "3.3",
        ratingCount: "93"
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
        context: "seo-data-6fe8aa0a-b9de-4bf6-a8b3-36cbe4616808"
        },
        cta: {
        link: "https://www.swiggy.com/city/noida/old-shiva-da-dhaba-gaur-city-1-eco-tect-fast-society-rest1004300",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {info: {
        id: "63090",
        name: "Kilo Curry",
        cloudinaryImageId: "h7reeamscnwoe026pirv",
        locality: "Ajnara Arcade",
        areaName: "crossing republic",
        costForTwo: "₹250 for two",
        cuisines: [
        "North Indian",
        "Chinese",
        "Italian",
        "Mexican",
        "Snacks",
        "Mughlai"
        ],
        avgRating: 4.2,
        parentId: "13725",
        avgRatingString: "4.2",
        totalRatingsString: "17K+",
        sla: {
        deliveryTime: 34,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-40 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
        nextCloseTime: "2026-01-07 00:00:00",
        opened: true
        },
        badges: { },
        isOpen: true,
        type: "F",
        badgesV2: {
        entityBadges: {
        imageBased: { },
        textBased: { },
        textExtendedBadges: { }
        }
        },
        aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99"
        },
        orderabilityCommunication: {
        title: { },
        subTitle: { },
        message: { },
        customIcon: { }
        },
        differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: { },
        video: { }
        }
        },
        reviewsSummary: { },
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: { },
        externalRatings: {
        aggregatedRating: {
        rating: "--"
        }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        analytics: {
        context: "seo-data-6fe8aa0a-b9de-4bf6-a8b3-36cbe4616808"
        },
        cta: {
        link: "https://www.swiggy.com/city/noida/kilo-curry-ajnara-arcade-crossing-republic-rest63090",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
                }
            </div>
        </div>
    )
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
};

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root container not found");
}
const root = ReactDOM.createRoot(container);

root.render(<AppLayout/>)