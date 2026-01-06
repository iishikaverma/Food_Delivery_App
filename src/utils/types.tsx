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
  };
}