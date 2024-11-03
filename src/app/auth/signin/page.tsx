"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const toasterId = toast.loading("Startup...");
    const { data, error } = await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onRequest: (ctx) => {
          toast.loading("Signin...", { id: toasterId });
        },
        onSuccess: (ctx) => {
          toast.success("Signin successful", { id: toasterId });
          router.push("/dashboard");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message, { id: toasterId });
        },
      }
    );
  };

  return (
    <div className="flex items-center justify-center flex-col gap-2 mt-10">
      <h1 className="text-center text-2xl md:text-4xl font-bold">Sign Up</h1>
      <form
        className="max-w-md w-full rounded-lg p-4 flex flex-col gap-4  "
        onSubmit={signIn}
      >
        <Input
          placeholder="Your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" title="Sign In" />
        <div className="flex items-center justify-between flex-col gap-4">
          <div className="flex items-center gap-2">
            <span>You don&apos;t have an account?</span>
            <Link href="/auth/signup">Signup</Link>
          </div>
          <p>Or</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Button
              type="button"
              title="Continue with Github"
              onClick={async () => {
                await authClient.signIn.social({
                  provider: "github",
                  callbackURL: `${process.env.BETTER_AUTH_URL}/dashboard`,
                });
              }}
            />
            <Button
              type="button"
              title="Continue with Google"
              onClick={async () => {
                await authClient.signIn.social({
                  provider: "google",
                  callbackURL: `${process.env.BETTER_AUTH_URL}/dashboard`,
                });
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
