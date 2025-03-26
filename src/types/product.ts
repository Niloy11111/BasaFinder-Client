type Specification = {
  processor: string;
  ram: string;
  storage: string;
  display: string;
};

export interface IProduct {
  _id: string;
  name: string;
  isParkingIncluded: boolean;
  isPetsAllowed: boolean;
  applicationFee: number;
  location: string;
  availableColors: string[];
  slug: string;
  description: string;
  price: number;
  bedrooms: number;
  imageUrls: string[];
  isActive: boolean;
  landlord: string;
  numberOfReviews: number;
  averageRating?: number;
  ratingCount?: number;
  specification: Specification;
  keyFeatures: string[];
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  createdAt?: Date;
  updatedAt?: Date;
}
