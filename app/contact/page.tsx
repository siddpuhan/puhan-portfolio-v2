import { Metadata } from "next";
import Image from "next/image";
import PageHeading from "../components/shared/PageHeading";
import ContactForm from "../components/pages/ContactForm";
import { Slide } from "../animation/Slide";
import contactImg from "@/public/images/contact.jpg";

export const metadata: Metadata = {
  title: "Contact | Siddharth Puhan",
  metadataBase: new URL("https://siddpuhan.vercel.app/contact"),
  description:
    "Get in touch with Siddharth Puhan for collaborations, inquiries, or just to say hello.",
  openGraph: {
    title: "Contact | Siddharth Puhan",
    url: "https://siddpuhan.vercel.app/contact",
    description:
      "Get in touch with Siddharth Puhan for collaborations, inquiries, or just to say hello.",
    images: "/images/og.png",
  },
};

export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-16 gap-y-12 items-start">
        <div>
          <PageHeading
            title="Contact"
            description="Get in touch with me. Feel free to reach out for collaborations, project inquiries, or just to say hello!"
          />
          <ContactForm />
        </div>
        <Slide delay={0.2} className="w-full flex justify-center lg:justify-start lg:mt-8">
          <div className="group relative rounded-lg p-2 border dark:border-zinc-800/80 border-zinc-300/80 dark:bg-zinc-900/30 bg-zinc-100/30 shadow-sm dark:shadow-black/50 shadow-zinc-200/50 transition-all duration-300 ease-out hover:-translate-y-0.5 dark:hover:border-zinc-700 hover:border-zinc-400 w-full max-w-[470px]">
            <Image
              src={contactImg}
              alt="Contact"
              width={470}
              height={470}
              priority
              className="rounded-md object-cover w-full aspect-square border dark:border-zinc-800/80 border-zinc-300/80 transition-all duration-300 ease-out group-hover:brightness-105"
            />
          </div>
        </Slide>
      </div>
    </main>
  );
}
