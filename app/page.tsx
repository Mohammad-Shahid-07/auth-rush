import Components from "@/components/Components";
import Features from "@/components/Features";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <section className="relative max-w-screen-2xl mx-auto">
        <div className="w-52 h-[1px] bg-[#393149] line1 absolute top-52" />
        <div className="w-52 h-[1px] bg-[#393149] line2 absolute right-0 " />
        <Hero />
        <Features />

        <Components />
      </section>
    </>
  );
}
