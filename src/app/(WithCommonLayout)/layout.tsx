import NavbarDashboard from "@/components/shared/NavbarDashboard";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavbarDashboard />

      <main className="min-h-screen">{children}</main>
    </div>
  );
};

export default CommonLayout;
