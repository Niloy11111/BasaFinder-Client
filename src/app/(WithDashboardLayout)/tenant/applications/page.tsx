import ApplicationCard from "@/components/ApplicationCard";
import MakePayment from "@/components/modules/application/MakePayment";

import Header from "@/components/ui/form/Header";
import { getAllApplications } from "@/services/Application";
import { getCurrentUser } from "@/services/AuthService";
import { IApplication } from "@/types";

import { CircleCheckBig, Clock, Download, XCircle } from "lucide-react";
import { cookies } from "next/headers";

const Applications = async () => {
  const token = (await cookies()).get("accessToken")?.value;
  const user = await getCurrentUser();
  const response = await getAllApplications(token);

  const applications = response?.data;

  const individualApplications = applications?.filter(
    (item) => item?.email === user?.email
  );

  return (
    <div className="dashboard-container mt-5">
      <Header
        title="Applications"
        subtitle="Track and manage your property rental applications"
      />
      <div className="w-full">
        {individualApplications?.map((application: IApplication) => (
          <ApplicationCard key={application?.id} application={application}>
            <div className="flex justify-between gap-5 w-full pb-4 px-4">
              {application?.status === "Approved" ? (
                <div className="bg-green-100 p-4 text-green-700 grow flex items-center">
                  <CircleCheckBig className="w-5 h-5 mr-2" />
                  The property is being rented by you until{" "}
                  {new Date(application?.endDate).toLocaleDateString()}
                </div>
              ) : application?.status === "Pending" ? (
                <div className="bg-yellow-100 p-4 text-yellow-700 grow flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Your application is pending approval
                </div>
              ) : (
                <div className="bg-red-100 p-4 text-red-700 grow flex items-center">
                  <XCircle className="w-5 h-5 mr-2" />
                  Your application has been denied
                </div>
              )}

              <MakePayment
                application={application}
                // propertyId={application?.property?._id}
              />

              <button
                className={`cursor-pointer bg-white border border-gray-300 text-gray-700 py-2 px-4
                          rounded-md flex items-center justify-center hover:bg-primary-700 hover:text-primary-50`}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Agreement
              </button>
            </div>
          </ApplicationCard>
        ))}
      </div>
    </div>
  );
};

export default Applications;
