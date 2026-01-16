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