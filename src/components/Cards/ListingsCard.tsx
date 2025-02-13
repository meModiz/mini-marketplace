import Image from "next/image";
import {
  Listing,
  ListingCardImageContainerProps,
  ListingCardTextContainerProps,
} from "@/types/listing";

function ImageContainer({ id, label }: ListingCardImageContainerProps) {
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

function TextContainer({
  label,
  price,
  seller,
}: ListingCardTextContainerProps) {
  return (
    <div className="flex flex-col w-full justify-center bg-white dark:bg-gray-900 gap-2 rounded-b-xl px-4 py-3">
      <div className="flex flex-row justify-between items-center">
        <p className="text-sm text-gray-900 dark:text-white truncate">
          {label}
        </p>
        <p className="text-H6 text-gray-900 dark:text-white min-w-fit pl-6">
          ${price}
        </p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <p className="flex flex-row items-center text-xs text-gray-600 dark:text-gray-300 truncate gap-1">
          <Image
            alt={"Listing"}
            src={`/avatar.png`}
            width={22}
            height={22}
            className="rounded-full"
            style={{ width: "auto", height: "auto" }}
          />
          {seller.email}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 min-w-fit pl-6">
          {seller.reviews} reviews
        </p>
      </div>
    </div>
  );
}

export default function ListingCard({
  id,
  seller,
  label,
  price,
  description,
}: Listing) {
  return (
    <div className="flex flex-col overflow-hidden w-76.5 h-64 bg-transparent transform transition-transform duration-300 hover:scale-105 border-2 border-gray-200 dark:border-gray-700 rounded-xl">
      <ImageContainer id={id} label={label} />
      <TextContainer label={label} price={price} seller={seller} />
    </div>
  );
}
