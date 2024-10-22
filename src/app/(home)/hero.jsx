import { buttonVariants } from "@/components/ui/button";
import Section from "@/components/section/section";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <Section
      className="relative py-12 md:py-0 min-h-[35rem] flex flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          className="size-full object-cover object-center"
          src="/hero.jpg"
          width={600}
          height={300}
          alt="Hero background Image"
          priority
        />
        <div className="absolute inset-0 bg-black/40 md:bg-transparent md:bg-gradient-to-r md:from-black to-transparent" />
      </div>

      <div className="relative z-10">
        <div className="w-full md:w-1/2 text-white">
          <h1 className="text-3xl md:text-5xl no-hd">Find Your Perfect Match with the Top-Rated, Exclusive Matchmaking Service in Southwest Florida</h1>
          <h2 className="my-base text-2xl font-open font-normal">Personalized Matchmaking for Affluent Singles Seeking Long-Term Love</h2>
          <Link className={cn(buttonVariants({ size: 'xl' }))} href="/contact">Free Consultation</Link>
        </div>
      </div>
    </Section>
  )
}
