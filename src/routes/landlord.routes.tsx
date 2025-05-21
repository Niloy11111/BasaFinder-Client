import { Building, House, Rows3, Settings, User } from "lucide-react";
export const landlordPaths = [
  {
    title: "My Profile",
    url: "/landlord/profile",
    icon: User,
  },
  {
    title: "Manage Listing",
    url: "/landlord/list/rental",
    icon: Building,
  },
  {
    title: "Applications",
    url: "/landlord/applications",
    icon: Rows3,
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
