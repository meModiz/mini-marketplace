import Link from "next/link";
export function AuthHeadings({
  heading,
  subheading,
  linkText,
  link,
}: {
  heading: string;
  subheading: string;
  linkText: string;
  link: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-H2 text-gray-900">{heading}</h1>
      <h2 className="text-sm text-gray-600">
        {subheading}{" "}
        <Link href={link} className="text-gray-900 text-sm underline ">
          {linkText}
        </Link>
      </h2>
    </div>
  );
}

export function FooterAuth({ text }: { text: string }) {
  return <div className="text-xs text-gray-600 w-2/3">{text}</div>;
}
