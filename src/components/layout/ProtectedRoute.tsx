// "use client";
// import { useUser } from "@/context/UserContext";
// import { getValidToken } from "@/lib/verifyTokent";
// import { useAppDispatch } from "@/redux/hook";
// import { logout } from "@/services/AuthService";
// import { useRouter } from "next/navigation";
// import { ReactNode, useEffect } from "react";

// type TProtectedRoute = {
//   children: ReactNode;
//   role: string;
// };

// const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
//   const router = useRouter();
//   const { user, setIsLoading } = useUser();
//   const dispatch = useAppDispatch();
//   useEffect(() => {
//     const checkAuth = async () => {
//       const token = await getValidToken();

//       if (!token) {
//         dispatch(logout());
//         router.push("/login");
//         return;
//       }

//       if (role !== undefined && role !== user?.role) {
//         dispatch(logout());
//         router.push("/login");
//       }
//     };

//     checkAuth();
//   }, [role, router, user?.role, dispatch]);

//   return <>{children}</>;
// };

// export default ProtectedRoute;
