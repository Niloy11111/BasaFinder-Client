import { House, Landmark, Settings, User, Users } from "lucide-react";
export const adminPaths = [
  {
    title: "My Profile",
    url: "/admin/profile",
    icon: User,
  },
  {
    title: "Users Management",
    url: "/admin/users",
    icon: Users,
  },
  {
    title: "Property Management",
    url: "/admin/manage-property",
    icon: Landmark,
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
  },
  {
    title: "Go Home",
    url: "/",
    icon: House,
  },
];
