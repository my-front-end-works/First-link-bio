import { CardTop } from "./_components/CardTop";
import { CardBottom } from "./_components/CardBottom";

export default function Home() {
  return (
    <main className="w-full h-auto md:h-screen bg-gray-100 flex justify-center items-center">
      <div className="md:w-1/3 w-full h-auto flex flex-col gap-5 p-5">
        <CardTop />
        <CardBottom />
      </div>
    </main>
  );
}
