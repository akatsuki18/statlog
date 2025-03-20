"use client"

import { RiGoogleFill } from "@remixicon/react"
import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
 <div className="flex min-h-screen flex-col items-center justify-center px-4 py-28 lg:px-6">
  <div className="relative sm:mx-auto sm:w-full sm:max-w-sm">
    <div
      className="pointer-events-none absolute -top-[25%] left-1/2 -translate-x-1/2 select-none opacity-60 dark:opacity-90 [mask-image:radial-gradient(rgba(0,0,0,1)_0%,transparent_80%)] [-webkit-mask-image:radial-gradient(rgba(0,0,0,1)_0%,transparent_80%)]"
      aria-hidden="true"
    >
      <div className="flex flex-col gap-1">
        {[...Array(10)].map((_, i) => (
          <div key={i}>
            <div className="flex gap-2">
              {[...Array(10)].map((_, j) => (
                <div key={j}>
                  <div className="size-7 rounded-md shadow shadow-indigo-500/40 ring-1 ring-black/5 dark:shadow-indigo-400/20 dark:ring-white/10"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="relative mx-auto w-fit rounded-xl bg-gray-50 p-4 shadow-md shadow-black/10 ring-1 ring-black/10 dark:bg-gray-900 dark:ring-gray-800">
      <div className="absolute left-[9%] top-[9%] size-1 rounded-full bg-gray-100 shadow-inner dark:bg-gray-800"></div>
      <div className="absolute right-[9%] top-[9%] size-1 rounded-full bg-gray-100 shadow-inner dark:bg-gray-800"></div>
      <div className="absolute bottom-[9%] left-[9%] size-1 rounded-full bg-gray-100 shadow-inner dark:bg-gray-800"></div>
      <div className="absolute bottom-[9%] right-[9%] size-1 rounded-full bg-gray-100 shadow-inner dark:bg-gray-800"></div>
      <div className="w-fit rounded-lg bg-gradient-to-b from-blue-400 to-blue-600 p-3 shadow-sm shadow-blue-500/50 ring-1 ring-inset ring-white/25">
        <RiGoogleFill className="size-8 text-white" />
      </div>
    </div>

    <h2 className="mt-4 text-center text-xl font-semibold text-gray-900 dark:text-gray-50">Sign in to StatLog</h2>

    <div className="mt-10">
      <a
        href="#"
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="relative inline-flex justify-center whitespace-nowrap rounded-md border px-3 py-2 text-center text-sm font-medium shadow-sm transition-all duration-100 ease-in-out disabled:pointer-events-none disabled:shadow-none outline outline-offset-2 outline-0 focus-visible:outline-2 outline-blue-500 dark:outline-blue-500 border-transparent text-white dark:text-white bg-blue-500 dark:bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-600 disabled:bg-blue-300 disabled:text-white disabled:dark:bg-blue-800 disabled:dark:text-blue-400 mt-4 w-full items-center gap-2"
      >
        <RiGoogleFill className="size-5" />
        Continue with Google
      </a>
    </div>

    <button
      className="relative inline-flex items-center justify-center whitespace-nowrap rounded-md border px-3 py-2 text-center text-sm font-medium shadow-sm transition-all duration-100 ease-in-out disabled:pointer-events-none disabled:shadow-none outline outline-offset-2 outline-0 focus-visible:outline-2 outline-blue-500 dark:outline-blue-500 border-gray-300 dark:border-gray-800 text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900/60 disabled:text-gray-400 disabled:dark:text-gray-600 mt-4 w-full"
      type="button"
    >
      Continue with Email
    </button>

    <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
      By signing in, you agree to our{" "}
      <a href="#" className="underline underline-offset-2">terms of service</a>{" "}
      and{" "}
      <a href="#" className="underline underline-offset-2">privacy policy</a>.
    </p>
  </div>
</div>
  )
}
