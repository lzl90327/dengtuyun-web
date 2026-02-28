import Link from "next/link";

// Footer component - no external icons needed

import { Button } from "@/components/ui/button";
import { COPY } from "@/lib/copy";

const F = COPY.footer;

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          开始使用登途云
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          全国智能运力网络平台，构建可视、可控、可协同的运输基础设施。
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <a href="#contact">预约交流</a>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {F.navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {F.legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-muted-foreground text-sm opacity-60">
          {F.copyright}
        </p>
      </nav>
    </footer>
  );
}
