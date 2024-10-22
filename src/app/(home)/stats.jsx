import Section, { SectionBody, SectionHeading } from "@/components/section/section";
import { BarChart, LineChart, PieChart } from "lucide-react";

export default function Stats() {
  return (
    <Section className="bg-tertiary">
      <SectionHeading>
        <h2>Our Proven Success</h2>
        <p>Creating Lasting Relationships for Affluent Singles</p>
      </SectionHeading>

      <SectionBody className="grid gap-base md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-secondary">
        <div className="p-base flex flex-col justify-center items-center">
          <PieChart className="size-block shrink-0" />
          <div className="w-56 text-center mt-xs">98% Client Satisfaction</div>
        </div>

        <div className="p-base flex flex-col justify-center items-center">
          <BarChart className="size-block shrink-0" />
          <div className="max-w-56 text-center mt-xs">Yearly Growth in Successful Matches</div>
        </div>

        <div className="p-base flex flex-col justify-center items-center">
          <LineChart className="size-block shrink-0" />
          <div className="w-56 text-center mt-xs">Increase in Client Sign-Ups Over the Past 5 Years</div>
        </div>
      </SectionBody>

      <SectionHeading className="mt-2xl">
        <p>With over 20 years of experience, My Top Matchmaker has a 98% client satisfaction rate and is responsible for thousands of happy couples across Southwest Florida.</p>
      </SectionHeading>
    </Section>
  )
}
