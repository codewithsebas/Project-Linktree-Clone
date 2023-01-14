import Image from "next/image";
import data from "../data.json";
import { BiLinkExternal } from "react-icons/bi";

function LinkCard({
  href,
  title,
  description,
  image,
}: {
  href: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <a
      href={href}
      className="bg-white flex items-center p-1 rounded-md shadow-lg hover:scale-105 transition-all border border-gray-300 mb-1"
    >
      <div className="w-full flex justify-between items-center pr-2">
        {image && (
          <Image
            className="rounded-md"
            src={image}
            alt="Image"
            width={48}
            height={48}
          />
        )}
        {/* <h2 className="font-bold text-lg">{title}</h2> */}
        <p className="font-semibold">{title}</p>
        <BiLinkExternal />
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-between mx-auto w-2xl max-w-[680px] px-4 py-16">
      <div className="w-full flex flex-col">
        <div className="flex justify-center">
          <Image
            className="rounded-full"
            src={data.avatar}
            alt={data.name}
            width={96}
            height={96}
          />
        </div>
        <h1 className="font-bold m-0 mt-4 text-xl overflow-hidden whitespace-nowrap text-center">
          {data.name}
        </h1>

        <div className="w-full flex flex-col gap-3 mt-8">
          {data.links.map((link, i) => (
            <LinkCard key={i} {...link} />
          ))}
        </div>
      </div>
      <div>a</div>
    </div>
  );
}
