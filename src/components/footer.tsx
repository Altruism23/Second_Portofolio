import Link from "next/link";
import { FiMapPin } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-[600px] sm:h-[300px] bg-gradient-to-r from-white to-blue-500 mt-5">
      <div className="flex flex-col mt-3 px-10">
        <a href="/" className="hover:cursor-pointer hover:text-blue-600">
          {" "}
          PT. Multi Daya Sumber Bersama
        </a>
        <Link href="/company-profile">
          <div className="relative h-16 w-36 mt-3">
            <Image
              layout="fill"
              src="https://ptmdsb.com/wp-content/uploads/2022/11/80pxlogo.png"
              alt="company profile"
            />
          </div>
        </Link>
        <p className="text-justify text-wrap text-sm mt-5">
          Multi Daya Sinergi Bersama (MDSB) adalah sebuah perusahaan berbentuk
          perseroan terbatas (PT) yang telah memiliki legalitas dan ijin
          operasional resmi sebagai perusahaan jasa pengelola SDM.
        </p>
      </div>
      <div className="flex flex-col gap-5 mt-5 px-5 sm:mt-10 sm:px-0">
        <div className="flex flex-row gap-5">
          <FiMapPin />
          <p className="text-sm text-wrap">
            Komplek Perkantoran Gyan Plaza Blok B 07 & B11 Jl. Terusan
            Pasirkoja, Kota Bandung, Jawa Barat{" "}
          </p>
        </div>
        <div className="flex flex-row gap-5">
          <BiPhoneCall />
          <p>022 - 604 66 39</p>
        </div>
        <div className="flex flex-row gap-5">
          <BsEnvelopeFill />
          <p>info@ptmdsb.com</p>
        </div>
        <div className="flex flex-row gap-5">
          <FaWhatsapp />
          <p>+62 895-3418-66694, +62 813-1557-2282</p>
        </div>
        <div className="flex flex-row gap-5">
          <FiClock />
          <p>Senin-Sabtu : 09.00 - 16.00 WIB</p>
        </div>
      </div>
    </div>
  );
}
