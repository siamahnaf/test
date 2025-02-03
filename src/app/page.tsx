import { auth } from "@/auth";

import Logout from "@/component/LogoutButton";
import TrpcUser from "@/component/trpcUser";

//TRPC
import { trpc, HydrateClient } from "@/trpc/server";

const Page = async () => {
  const session = await auth();

  //Prefetch
  await trpc.users.getUser.prefetch();

  return (
    <div className="text-center py-20">
      <h4 className="text-xl text-orange-500">Here is My Auth Info</h4>
      <div className="mt-8">
        {JSON.stringify(session)}
      </div>
      <div className="w-full h-[40px] bg-orange-500 mt-10" />
      <div className="mt-8">
        <Logout />
      </div>
      <HydrateClient>
        <TrpcUser />
      </HydrateClient>
    </div>
  );
};

export default Page;