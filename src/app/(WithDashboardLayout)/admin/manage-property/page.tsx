import ManageProducts from "@/components/modules/shop/product";
import Header from "@/components/ui/form/Header";
import { getAllProducts } from "@/services/Product";

const ManageProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  const { data, meta } = await getAllProducts(page, "6");

  // console.log("here sdf", meta);
  return (
    <div>
      <Header title={"Manage Properties"} subtitle="" />
      <ManageProducts products={data} meta={meta} />
    </div>
  );
};

export default ManageProductsPage;
