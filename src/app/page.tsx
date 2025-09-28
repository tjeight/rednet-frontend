import { LoginForm } from "@/components/login-form";

export default function Home() {
  return (
    <main
      className={"relative flex h-screen flex-col items-center justify-center"}
    >
      <LoginForm/>
    </main>
  );
}
