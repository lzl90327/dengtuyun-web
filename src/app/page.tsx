import { Background } from "@/components/background";
import { BackgroundMesh } from "@/components/background-mesh";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { Pricing } from "@/components/blocks/pricing";
import { ResourceAllocation } from "@/components/blocks/resource-allocation";
import { Testimonials } from "@/components/blocks/testimonials";

export default function Home() {
  return (
    <>
      <BackgroundMesh>
        <Background className="via-muted to-muted/80" showDotGrid>
          <Hero />
          <Features />
          <ResourceAllocation />
        </Background>
      </BackgroundMesh>
      <Testimonials />
      <Background variant="bottom" showDotGrid>
        <Pricing />
      </Background>
    </>
  );
}
