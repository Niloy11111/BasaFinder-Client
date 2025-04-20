import UsersPage from "@/components/modules/shop/product/Testform";
import { getAllUsers } from "@/services/User";

const Page = async () => {
  const { data: users } = await getAllUsers();

  return (
    <div>
      <UsersPage users={users} />
    </div>
  );
};

export default Page;
