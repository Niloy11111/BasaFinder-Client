import { Dock, House, Landmark, Settings, User } from "lucide-react";
export const landlordPaths = [
  {
    title: "My Profile",
    url: "/landlord/profile",
    icon: User,
    isActive: true,
  },
  {
    title: "Manage Listing",
    url: "/landlord/list/rental",
    icon: Landmark,
  },
  {
    title: "Applications",
    url: "/landlord/applications",
    icon: Dock,
    isActive: true,
  },

  {
    title: "Settings",
    url: "/landlord/settings",
    icon: Settings,
  },
  {
    title: "Go Home",
    url: "/",
    icon: House,
  },
];
