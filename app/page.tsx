import PatientFrom from "@/components/forms/PatientFrom";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO: otp verification || password modal */}
      <section className="remove-scrollbar container my-auto  p-10">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/brand creation-bro.svg"
            alt="logo"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />

          <PatientFrom />

          <div className="text-14-regular mt-10 flex justify-between">
            <p className="justify-items-end text-gray-500 xl:text-left">
              ©2025 pms
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/Doctors-bro.svg"
        alt="doctors"
        width={1000}
        height={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
