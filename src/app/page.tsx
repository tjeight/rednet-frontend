import { ThemeToggle } from "@/ui/components/theme-toggle";

export default function Home() {
  return (
    <main
      className={"relative flex h-screen flex-col items-center justify-center"}
    >
      <h1 className={"text-5xl"}>Next Essential</h1>
      <p className={"my-6 w-[38rem] text-center text-sm"}>
        Unified Next Essential - An Essential Template to get started with
        Next.js application with all the essentials included...
      </p>
      <ThemeToggle />
    </main>
  );
}
