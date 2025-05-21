import { PropertyTypeEnum } from "@/lib/constants";
import * as z from "zod";

export const propertySchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.coerce.number().positive().min(0).int(),
  securityDeposit: z.coerce.number().positive().min(0).int(),
  applicationFee: z.coerce.number().positive().min(0).int(),
  isPetsAllowed: z.boolean(),
  isParkingIncluded: z.boolean(),
  imageUrls: z
    .array(z.instanceof(File))
    .min(1, "At least one photo is required")
    .or(z.array(z.string()).nonempty("At least one image is required")),

  // amenities: z.string().min(1, "Amenities are required"),
  amenities: z.array(z.string()).min(1, { message: "Amenities are required" }),

  // highlights: z.string().min(1, "Highlights are required"),

  highlights: z
    .array(z.string())
    .min(1, { message: "Highlights are required" }),
  beds: z.coerce.number().positive().min(0).max(10).int(),
  baths: z.coerce.number().positive().min(0).max(10).int(),
  squareFeet: z.coerce.number().int().positive(),
  propertyType: z.nativeEnum(PropertyTypeEnum),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
  postalCode: z.string().min(1, "Postal code is required"),
});

export type PropertyFormData = z.infer<typeof propertySchema>;
export type propertyFormData = z.infer<typeof propertySchema>;

export const phoneNumberSchema = z.object({
  landlordContactNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits"),
});

export type phoneNumberFormData = z.infer<typeof phoneNumberSchema>;

export const applicationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().optional(),
  landlordContactNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .optional(),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;

export const settingsSchema = z.object({
  name: z.string().min(1, "Name is required").optional(),
  email: z.string().email("Invalid email address").optional(),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .optional(),
});

export type SettingsFormData = z.infer<typeof settingsSchema>;
