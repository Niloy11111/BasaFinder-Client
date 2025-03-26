"use client";

import * as React from "react";

import Logo from "@/app/assets/svgs/Logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useUser } from "@/context/UserContext";
import { adminPaths } from "@/routes/admin.routes";
import { landlordPaths } from "@/routes/landlord.routes";
import { tenantsPaths } from "@/routes/tenant.routes";
import Link from "next/link";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

// const data = {
//   navMain: [
//     {
//       title: "My Profile",
//       url: "/landlord/profile",
//       icon: SquareTerminal,
//       isActive: true,
//     },
//     {
//       title: "Manage Listing",
//       url: "#",
//       icon: Settings,
//       items: [
//         {
//           title: "My Listing",
//           url: "/landlord/list/rental",
//         },
//       ],
//     },
//     {
//       title: "Manage Requests",
//       url: "#",
//       icon: Settings,
//       items: [
//         {
//           title: "Rental Requests",
//           url: "/landlord/request",
//         },
//       ],
//     },
//     {
//       title: "Manage Payments",
//       url: "#",
//       icon: Settings,
//       items: [
//         {
//           title: "Approve Payments ",
//           url: "/landlord/request",
//         },
//       ],
//     },
//   ],
//   navSecondary: [
//     {
//       title: "Support",
//       url: "#",
//       icon: LifeBuoy,
//     },
//     {
//       title: "Feedback",
//       url: "#",
//       icon: Send,
//     },
//   ],
//   projects: [
//     {
//       name: "Design Engineering",
//       url: "#",
//       icon: Frame,
//     },
//     {
//       name: "Sales & Marketing",
//       url: "#",
//       icon: PieChart,
//     },
//     {
//       name: "Travel",
//       url: "#",
//       icon: Map,
//     },
//   ],
// };

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, setIsLoading } = useUser();

  // const user = {
  //   role: "landlord",
  // };
  // const router = useRouter();
  // const pathname = usePathname();

  // if (protectedRoutes.some((route) => pathname.match(route))) {
  //   logout();
  //   setIsLoading(true);
  //   router.push("/login");
  // }

  const userRole = {
    ADMIN: "admin",
    LANDLORD: "landlord",
    TENANT: "tenant",
  };

  let sidebarItems;

  if (!user || !user.role) {
    console.log("User role not found");
    return null; // or return a loading state
  } else {
    switch (user?.role?.toLowerCase()) {
      case userRole.ADMIN:
        sidebarItems = adminPaths; // Assign directly for Admin
        break;
      case userRole.LANDLORD:
        sidebarItems = landlordPaths; // Assign directly for Landlord
        break;
      case userRole.TENANT:
        sidebarItems = tenantsPaths; // Assign directly for Tenant
        break;
      default:
        console.log("Role not found or undefined.");
        break;
    }
  }

  // if (user?.role === "admin") {
  //   sidebarItems = adminPaths;
  // }
  // if (user?.role === "landlord") {
  //   sidebarItems = landlordPaths;
  // } else {
  //   sidebarItems = tenantsPaths;
  // }

  // sidebarItems = adminPaths;

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex items-center justify-center">
                  <Logo />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <h2 className="font-bold text-xl">NextMart</h2>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
