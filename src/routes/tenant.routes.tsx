import { Dock, House, HouseIcon, Settings, User } from "lucide-react";
export const tenantsPaths = [
  {
    title: "My Profile",
    url: "/tenant/profile",
    icon: User,
  },
  {
    title: "Applications",
    url: "/tenant/applications",
    icon: Dock,
  },
  {
    title: "Residences",
    url: "/tenant/residences",
    icon: HouseIcon,
  },
  {
    title: "Settings",
    url: "/tenant/settings",
    icon: Settings,
  },
  {
    title: "Go Home",
    url: "/",
    icon: House,
  },
];
