import { auth } from "@/auth";

import Logout from "@/component/LogoutButton";

const Page = async () => {
  const session = await auth();
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
    </div>
  );
};

export default Page;