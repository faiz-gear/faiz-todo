import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import CreateListModal from "@/components/CreateListModal";
import { Suspense } from "react";

async function Welcome() {
  //   涉及到服务端请求，使用Suspense，防止阻塞渲染
  const user = await currentUser();

  if (!user) return null;

  return (
    <Card className="w-full sm:col-span-2" x-chunk="dashboard-05-chunk-0">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">
          欢迎 {user.firstName} {user.lastName}!
        </CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          道虽迩，不行不至；事虽小，不为不成
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <CreateListModal />
      </CardFooter>
    </Card>
  );
}

function WelcomeFallback() {
  return <Skeleton className="h-[180px] w-full" />;
}

export default function HomePage() {
  return (
    <main className="flex w-full flex-col items-center px-4">
      <Suspense fallback={<WelcomeFallback />}>
        <Welcome />
      </Suspense>
    </main>
  );
}
