import Image from "next/image";
import data from "../data.json";
import { BiLinkExternal } from "react-icons/bi";
import Head from "next/head";

function LinkCard({
  href,
  title,
  image,
  color,
}: {
  href: string;
  title: string;
  image: string;
  color: boolean;
}) {
  return (
    <a
      no-referrer="true"
      target="_blank"
      href={href}
      className={`${
        color ? "bg-[#FFF2D7]" : "bg-white"
      } flex items-center p-1 rounded-md shadow-lg hover:scale-105 transition-all mb-1`}
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

function LinkSocial({ href, icon }: { href: string; icon: string }) {
  return (
    <a no-referrer="true" target="_blank" href={href} className="hover:scale-110 transition-all">
      <Image
        src={icon}
        alt="Icon"
        width={40}
        height={40}
        className="pointer-events-none"
      />
    </a>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Linktree - Clone</title>
        <meta name="description" content="My clone of Linktree" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
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
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            {data.socials.map((link, i) => (
              <LinkSocial key={i} {...link} />
            ))}
          </div>
          <h1 className="flex items-center justify-center gap-5 font-bold text-center text-2xl cursor-none hover:scale-105 transition-all">Linktree 
              <Image src="/logo.svg" alt="Logo" width={50} height={50} className="text-black" />
          </h1>
        </div>
      </div>
    </>
  );
}
