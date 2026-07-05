import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function PageCTA({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-navy-950 px-8 py-14 text-center sm:px-16">
            <h2 className="text-balance font-display text-2xl font-semibold text-white sm:text-3xl">
              {title}
            </h2>
            <p className="max-w-xl text-balance text-white/60">{description}</p>
            <div className="mt-2 flex flex-col gap-4 sm:flex-row">
              <Button href={primaryHref} size="lg">
                {primaryLabel}
                <ArrowRight size={18} />
              </Button>
              <Button
                href={secondaryHref}
                variant="secondary"
                size="lg"
                className="!border-white/15 !bg-transparent !text-white hover:!bg-white/10"
              >
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
