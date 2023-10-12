import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import React from "react";

type Props = {};

const HomePage = async (props: Props) => {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  return <div>Create A Server</div>;
};

export default HomePage;
