export interface IUser {
  userId: string;
  name: string;
  email: string;
  hasShop?: boolean;
  isActive?: boolean;
  role: "admin" | "landlord" | "tenant";
  iat?: number;
  exp?: number;
}
