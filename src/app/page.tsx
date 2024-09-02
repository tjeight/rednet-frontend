import { ThemeToggle } from "@/ui/components/theme-toggle";
import { Label } from "@/ui/primitives/label";

export default function Home() {
  return (
    <main
      className={"relative flex h-screen flex-col items-center justify-center"}
    >
      <Label className={"font-semibold text-4xl tracking-tighter"}>
        Next Essential
      </Label>
      <p className={"my-4 max-w-[44rem] text-center"}>
        Unified Starter - Next Essential, An Essential Template to start an
        modern next.js application with all the essentials configured.
      </p>
      <ThemeToggle />
    </main>
  );
}
