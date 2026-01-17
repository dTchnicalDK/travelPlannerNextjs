import { auth } from "@/auth";

export default async function Home() {
  // const user = await auth();
  // console.log("user", user);
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl">homepage</h1>
      {/* {user && <pre>{JSON.stringify(user)}</pre>} */}
    </div>
  );
}
