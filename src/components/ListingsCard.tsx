import Image from "next/image";

function ImageContainer() {
  return (
    <div className="w-full flex-1 overflow-hidden">
      <Image
        alt={"Listing"}
        src={"/image2.jpg"}
        width={310}
        height={220}
        className="rounded-t-xl"
      />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="flex flex-col w-full justify-center bg-white dark:bg-gray-900 gap-2 rounded-b-xl px-4 py-3">
      <div className="flex flex-row justify-between items-center">
        <p className="text-sm text-gray-900 dark:text-white truncate">
          Super gaming mouse
        </p>
        <p className="text-H6 text-gray-900 dark:text-white min-w-fit pl-6">
          $200
        </p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <p className="flex flex-row items-center text-xs text-gray-600 dark:text-gray-300 truncate gap-1">
          <Image
            alt={"Listing"}
            src={"/avatar.png"}
            width={22}
            height={22}
            className="rounded-full"
          />
          Super Seller
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 min-w-fit pl-6">
          222 sales
        </p>
      </div>
    </div>
  );
}

export default function TrendingListingCard() {
  return (
    <div className="flex flex-col overflow-hidden w-76.5 h-64 bg-transparent transform transition-transform duration-300 hover:scale-105 border-2 border-gray-200 dark:border-gray-700 rounded-xl">
      <ImageContainer />
      <TextContainer />
    </div>
  );
}
