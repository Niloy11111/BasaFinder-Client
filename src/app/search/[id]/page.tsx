"use client";
import Loading from "@/components/ui/loading";
import { useUser } from "@/context/UserContext";
import { useSingleProduct } from "@/redux/hook";
import { useParams } from "next/navigation";
import { useState } from "react";
import ApplicationModal from "./ApplicationModal";
import ContactWidget from "./ContactWidget";
import ImagePreviews from "./ImagePreviews";
import PropertyDetails from "./PropertyDetails";
import PropertyLocation from "./PropertyLocation";
import PropertyOverview from "./PropertyOverview";

const SingleListing = () => {
  const propertyId = useParams().id as string;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user: authUser } = useUser();
  const { data: property, isLoading } = useSingleProduct(propertyId as string);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <ImagePreviews images={property?.imageUrls} />

          {/* <ImagePreviews
        images={["/singlelisting-2.jpg", "/singlelisting-3.jpg"]}
      /> */}
          <div className="flex flex-col md:flex-row justify-center gap-10 mx-10 md:w-2/3 md:mx-auto mt-16 mb-8">
            <div className="order-2 md:order-1">
              <PropertyOverview propertyId={propertyId} />
              <PropertyDetails propertyId={propertyId} />
              <PropertyLocation propertyId={propertyId} />
            </div>

            <div className="order-1 md:order-2">
              <ContactWidget onOpenModal={() => setIsModalOpen(true)} />
            </div>
          </div>
          {authUser && (
            <ApplicationModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              propertyId={propertyId}
            />
          )}
        </div>
      )}
    </>
  );
};

export default SingleListing;
