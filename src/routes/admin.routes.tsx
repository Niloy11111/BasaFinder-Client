import { Hand, Settings, SquareTerminal } from "lucide-react";
export const adminPaths = [
  {
    title: "My Profile",
    url: "/admin/profile",
    icon: SquareTerminal,
    isActive: true,
  },
  {
    title: "Users Management",
    url: "/admin/users",
    icon: SquareTerminal,
  },
  {
    title: "Property Management",
    url: "/admin/manage-property",
    icon: Settings,
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
  },
  {
    title: "Go Home",
    url: "/",
    icon: Hand,
  },
];
