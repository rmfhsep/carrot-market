import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-300 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-2xl w-full">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-600 font-semibold -mb-1">
              in transit
            </span>
            <span className="text-4xl font-semibold">채ㅐㅣㅠㅣㅕㄷ</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-orange-300" />
        </div>

        <div className="my-2 flex items-center gap-2">
          <span
            className="bg-green-400 text-white 
          uppercase px-2.5 py-1.5 text-sx font-medium rounded-full"
          >
            today
          </span>
          <span>9:30</span>
        </div>

        <div className="relative">
          <div className="bg-gray-200 w-full h-2 rounded-full absolute" />
          <div className="bg-green-400 w-2/3 h-2 rounded-full absolute" />
        </div>

        <div className="flex justify-between items-center mt-5 text-gray-600">
          <span>exp</span>
          <span>exp</span>
          <span>exp</span>
          <span className="text-gray-400">exp</span>
        </div>
      </div>
    </main>
  );
}
