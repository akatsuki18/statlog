"use client"

import { RiGoogleFill } from "@remixicon/react"
import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h1 className="mb-6 text-center text-2xl font-semibold text-gray-900 dark:text-white">
          ログイン
        </h1>
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        >
          <RiGoogleFill className="size-5" />
          Googleでログイン
        </button>
      </div>
    </div>
  )
}
