import Image from "next/image";
import Gacha from "@/components/Gacha";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Gacha />
    </main>
  );
}
