import { Hand, Settings, SquareTerminal } from "lucide-react";
export const landlordPaths = [
  {
    title: "My Profile",
    url: "/landlord/profile",
    icon: SquareTerminal,
    isActive: true,
  },
  {
    title: "Manage Listing",
    url: "/landlord/list/rental",
    icon: Settings,
  },
  {
    title: "Applications",
    url: "/landlord/applications",
    icon: SquareTerminal,
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
    icon: Hand,
  },
];
