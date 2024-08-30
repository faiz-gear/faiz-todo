"use client";

import { SignIn } from "@clerk/clerk-react";

export default function Page() {
  return (
    <div className="grid grid-cols-1 place-content-center place-items-center pt-96">
      <SignIn />
    </div>
  );
}
