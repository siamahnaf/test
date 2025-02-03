"use client"

//trpc
import { trpc } from "@/trpc/client";

const TrpcUser = () => {
    const { data } = trpc.users.getUser.useQuery();

    return (
        <div className="text-center">
            <h4>TRPC DATA</h4>
            <div>
                {JSON.stringify(data)}
            </div>
        </div>
    );
};

export default TrpcUser;