import PatientFrom from "@/components/forms/PatientFrom";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px">
          <Image
            src="/brand creation-bro.svg"
            alt="image was supposed to be here"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />

          <PatientFrom />
        </div>
      </section>
    </div>
  );
}
