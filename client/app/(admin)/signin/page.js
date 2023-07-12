"use client";
import { signIn } from "next-auth/react";

const Page = () => {
  return (
    <div>
      <p>Signin</p>
      <button onClick={signIn}>Signin</button>
    </div>
  );
};
export default Page;
