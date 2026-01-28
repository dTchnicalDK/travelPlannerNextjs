import { auth } from "@/auth";
import OrderSummary from "@/components/orderSummary/OrderSummary";

export default async function Home() {
  // const user = await auth();
  // console.log("user", user);
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-black font-sans dark:bg-black">
      <OrderSummary />
    </div>
  );
}
