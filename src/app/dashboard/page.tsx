"use client";
import React from "react";
import { Button } from "@/components/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session, isPending } = authClient.useSession();

  const router = useRouter();

  const handleSignout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/auth/signin");
        },
      },
    });
  };

  if (isPending) {
    return <p>Getting session...</p>;
  }
  if (!session) {
    return (
      <div className="flex flex-col gap-2">
        <p>You must be signed in</p>
        <Link href="/auth/signin">
          <Button title="Signin"></Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Button title="Signout" onClick={handleSignout} />
      </div>
      <div>
        <h1>Dashboard</h1>
        <div>
          <p>Name: {session.user.name}</p>
          <p>Email: {session.user.email}</p>
        </div>
      </div>
    </div>
  );
}
