export interface Restaurant {
  info: {
    id: string;
    name: string;
    cloudinaryImageId: string;
    cuisines: string[];
    avgRating: number;
    costForTwo: string;
    sla: {
      deliveryTime: number;
    };
    totalRatingsString: string;
    aggregatedDiscountInfoV3: {
      header: string;
      subHeader: string;
    }
  };
}

export interface UserProps {
  name: string;
  location: string;
};

export interface UserState {
  userInfo: UserInfo
};

interface UserInfo {
  name: string;
  location: string;
  avatar_url: string;
}

export interface MenuCategoryProps {
  key:any;
  data: MenuCategoryData;
  showItems: boolean;
  index: number;
  setShowIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

interface MenuCategoryData {
  title?: string;
  itemCards?: any[];
}

export interface ItemListProps {
  items: MenuItems[];
}

interface MenuItems {
  card: {
    info: {
      id: string;
      name: string;
      price: number;
      imageId?: string;
      description: string;
    };
  };
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  imageId?: string;
}

 export interface CartState {
  items: CartItem[];
}