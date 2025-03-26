import { Settings, SquareTerminal } from "lucide-react";
export const landlordPaths = [
  {
    title: "My Profile landlord",
    url: "/landlord/profile",
    icon: SquareTerminal,
    isActive: true,
  },
  {
    title: "Manage Listing",
    url: "#",
    icon: Settings,
    items: [
      {
        title: "My Listing",
        url: "/landlord/list/rental",
      },
    ],
  },
  {
    title: "Manage Requests",
    url: "#",
    icon: Settings,
    items: [
      {
        title: "Rental Requests",
        url: "/landlord/request",
      },
    ],
  },
  {
    title: "Manage Payments",
    url: "#",
    icon: Settings,
    items: [
      {
        title: "Approve Payments ",
        url: "/landlord/request",
      },
    ],
  },
];
