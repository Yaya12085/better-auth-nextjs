"use client";
import { Button } from "@/components/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">Better-auth nextjs example</h1>
      <div className="flex gap-4">
        <Button
          title="Signin"
          onClick={() => router.push("/auth/signin")}
        ></Button>
        <Button
          title="Signup"
          onClick={() => router.push("/auth/signup")}
        ></Button>
      </div>
    </div>
  );
}
