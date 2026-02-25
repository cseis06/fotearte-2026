import Cameras from "@/components/home/Cameras";
import Courses from "@/components/home/Courses";
import Hero from "@/components/home/Hero";
import Timeline from "@/components/home/Timeline";

export default function Home() {
  return (
    <div className="">
      <main className="min-h-screen w-full">
        <Hero />
        <Courses />
        <Cameras />
        <Timeline />
      </main>
    </div>
  );
}
