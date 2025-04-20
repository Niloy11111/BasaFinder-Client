import TabOptions from "@/components/modules/application/TabOptions";
import Header from "@/components/ui/form/Header";

import { getAllApplications } from "@/services/Application";
import { getCurrentUser } from "@/services/AuthService";
import { cookies } from "next/headers";

const Applications = async () => {
  // console.log("here", query);
  const token = (await cookies()).get("accessToken")?.value;
  const user = await getCurrentUser();

  const { data: applications } = await getAllApplications(token);

  const individualRequests = applications?.filter(
    (item) => item?.property?.landlord?.email === user?.email
  );

  // console.log("individualRequests", individualRequests);
  // if (isLoading) return <Loading />;
  // if (isError || !applications) return <div>Error fetching applications</div>;

  return (
    <div className="dashboard-container">
      <Header
        title="Applications"
        subtitle="View and manage applications for your properties"
      />

      <TabOptions applications={individualRequests} />
    </div>
  );
};

export default Applications;
