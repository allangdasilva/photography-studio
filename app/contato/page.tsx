import { Metadata } from "next";
import ContactContent from "../ui/contact/contact-content";
import Map from "../ui/contact/map";

export const metadata: Metadata = {
  title: "Contato",
};

export default function Page() {
  return (
    <main>
      <ContactContent />
      <Map />
    </main>
  );
}
