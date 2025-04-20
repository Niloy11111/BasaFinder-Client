"use client";

// import {
//     useAddFavoritePropertyMutation,
//     useGetPropertiesQuery,
//     useGetTenantQuery,
//     useRemoveFavoritePropertyMutation,
//   } from "@/state/api";

import CardCompact from "@/components/ui/CardCompact";
import CardTwo from "@/components/ui/CardTwo";
import { useUser } from "@/context/UserContext";
import { useAppSelector } from "@/redux/hook";
import { IProduct } from "@/types";

const Listings = ({ properties }: { properties: IProduct[] }) => {
  const { user: authUser } = useUser();

  const viewMode = useAppSelector((state) => state.global.viewMode);
  const currentLocation = useAppSelector(
    (state) => state.global.filters.location
  );
  // const handleFavoriteToggle = async (propertyId: number) => {
  //   if (!authUser) return;

  //     const isFavorite = tenant?.favorites?.some(
  //       (fav: Property) => fav.id === propertyId
  //     );

  //     if (isFavorite) {
  //       await removeFavorite({
  //         cognitoId: authUser.cognitoInfo.userId,
  //         propertyId,
  //       });
  //     } else {
  //       await addFavorite({
  //         cognitoId: authUser.cognitoInfo.userId,
  //         propertyId,
  //       });
  //     }
  // };

  // if (isLoading) return <>Loading...</>;
  // if (isError || !properties) return <div>Failed to fetch properties</div>;

  // console.log("ksdjfsdjffds", properties);
  return (
    <div className="w-full">
      <h3 className="text-sm px-4 font-bold">
        {properties?.length}{" "}
        <span className="text-gray-700 font-normal">
          Properties {currentLocation && `in ${currentLocation}`}
        </span>
      </h3>
      <div className="flex">
        <div className="p-4 w-full">
          {properties?.map((property) =>
            viewMode === "grid" ? (
              <CardTwo
                key={property._id}
                property={property}
                // onFavoriteToggle={() => handleFavoriteToggle(property._id)}
                showFavoriteButton={!!authUser}
                propertyLink={`/search/${property._id}`}
              />
            ) : (
              <CardCompact
                key={property._id}
                property={property}
                // onFavoriteToggle={() => handleFavoriteToggle(property._id)}
                showFavoriteButton={!!authUser}
                propertyLink={`/search/${property._id}`}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Listings;
