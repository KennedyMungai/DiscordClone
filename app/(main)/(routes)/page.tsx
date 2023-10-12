import { ModeToggle } from "@/components/Themes/ModeToggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <section className="text-3xl text-indigo-800">
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </section>
  );
}
