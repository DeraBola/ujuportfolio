import Banner from "@/components/Banner/Banner";
import Service from "@/components/Service/Service";

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center justify-betweenw w-full">
      <Banner />
      <Service />
    </main>
  );
}
