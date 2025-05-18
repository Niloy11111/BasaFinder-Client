import { Button } from "@/components/ui/button";
import CardTwo from "@/components/ui/CardTwo";
import { getAllProducts } from "@/services/Product";
import { IProduct } from "@/types";
import Link from "next/link";
const FeaturedProducts = async () => {
  const { data: products } = await getAllProducts();

  return (
    <div className=" bg-opacity-50 py-20">
      <div className="container mx-auto">
        <div className="flex items-center  justify-between mb-5">
          <h2 className="font-bold text-2xl">Featured Properties</h2>
          <Link href="/search">
            <Button variant="outline" className="rounded-full">
              All Collection
            </Button>
          </Link>
        </div>

        <div className="flex">
          <div className="p-4 w-full">
            <div className="grid grid-cols-3 gap-5">
              {products?.map((property: IProduct) => (
                <CardTwo
                  key={property._id}
                  property={property}
                  propertyLink={`/search/${property._id}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-5 gap-8 my-5">
          {products?.slice(0, 5).map((product: IProduct, idx: number) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default FeaturedProducts;
