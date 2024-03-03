import { auth } from "@/src/lib/auth";
import Image from "next/image";
import { LoginButton, LogoutButton } from "./AuthButtons";

export default async function Home() {

  const session = await auth()

  return (
    <div className="flex justify-center flex-col items-center">
      <h1>
        {session?.user ? "Authentificated" + session?.user.email : "Not Authenticated"}
      </h1>

      <div>
        {!session?.user ?(
          <LoginButton/>
        ) : <LogoutButton/>}
      </div>
    </div>
  );
}
