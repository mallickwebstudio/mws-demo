import Section, { SectionBody, SectionHeading } from "@/components/section/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Globe, Goal, ShieldCheck, Trophy } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    title: "Exclusive Network of High-Quality Matches",
    subTitle: "Gain access to an elite network of quality matches who share your values and lifestyle.",
    icon: <Globe className="size-3xl" strokeWidth={1} />
  },
  {
    title: "Expert Certified Matchmakers",
    subTitle: "Our team of certified matchmakers specializes in creating meaningful, lasting relationships.",
    icon: <ShieldCheck className="size-3xl" strokeWidth={1} />
  },
  {
    title: "Discreet, Professional Service",
    subTitle: "Our services are completely confidential and tailored to your specific relationship goals.",
    icon: <Goal className="size-3xl" strokeWidth={1} />
  },
  {
    title: "Success Thousand’s Happy Couples",
    subTitle: "As Southwest Florida’s oldest and highest-reviewed matchmaking service, we’ve helped thousands of singles find love.",
    icon: <Trophy className="size-3xl" strokeWidth={1} />
  }
];

export default function Benefits() {
  return (
    <Section>
      <SectionHeading>
        <h2>Why Affluent Singles Over 45 Trust My Top Matchmaker</h2>
      </SectionHeading>

      <SectionBody className="grid gap-base sm:grid-cols-2 md:grid-cols-4">
        {benefits.map(item => (
          <div className="p-base bg-secondary text-secondary-foreground text-center flex flex-col items-center gap-xs rounded-md" key={item.title + "Benefits"}>
            <div className="p-xs rounded-full border border-secondary-foreground">
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <div className="text-secondary-foreground/80 text-sm">{item.subTitle}</div>
          </div>
        ))}
      </SectionBody>


      <SectionHeading className="mt-2xl">
        <Link className={cn(buttonVariants({ size: 'xl' }))} href="/contact">Free Consultation</Link>
      </SectionHeading>
    </Section>
  )
}
