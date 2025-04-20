import {
  FileUser,
  Hand,
  HouseIcon,
  Settings,
  SquareTerminal,
} from "lucide-react";
export const tenantsPaths = [
  {
    title: "My Profile",
    url: "/tenant/profile",
    icon: SquareTerminal,
    isActive: true,
  },
  {
    title: "Applications",
    url: "/tenant/applications",
    icon: FileUser,
    isActve: true,
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
    icon: Hand,
  },
];
