import Image from "next/image";
import Gacha from "@/components/Gacha";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <a href="/signup">Register</a>
      </div>
      <Gacha />
    </main>
  );
}
