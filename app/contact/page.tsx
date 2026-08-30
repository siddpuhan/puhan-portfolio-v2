import { Metadata } from "next";
import PageHeading from "../components/shared/PageHeading";
import ContactForm from "../components/pages/ContactForm";

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
      <PageHeading
        title="Contact"
        description="Get in touch with me. Feel free to reach out for collaborations, project inquiries, or just to say hello!"
      />
      <ContactForm />
    </main>
  );
}
