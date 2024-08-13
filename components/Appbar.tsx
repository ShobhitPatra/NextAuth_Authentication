"use client";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
const Appbar = () => {
  const router = useRouter();
  const session = useSession();
  return (
    <div>
      {/* <button
        onClick={() => {
          router.push("/api/auth/signin");
        }}
      >
        Login
      </button> */}
      <button
        onClick={() => {
          signIn();
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </button>
      <div>{JSON.stringify(session)}</div>
    </div>
  );
};
export default Appbar;
