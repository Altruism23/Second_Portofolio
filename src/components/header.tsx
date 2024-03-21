import { PiEnvelope } from "react-icons/pi";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export default function Header() {
  return (
    // ----toolbar----
    <header className=" bg-indigo-700 w-full h-12">
      <div className="flex h-12 justify-center items-center sm:justify-around">
        <div className="flex flex-col text-sm  text-white sm:flex-row gap-2">
          <a href="#" className="flex gap-2 mx-auto">
            {" "}
            <PiEnvelope className="mr-2 h-5 w-5" />
            info@ptmsdb.com
          </a>
          <a href="#" className="flex gap-2  mx-auto">
            {" "}
            <FaPhoneVolume className="mr-2" /> 022 - 604 66 39
          </a>
        </div>
        <div className="hidden md:flex gap-5">
          <div className="text-white flex flex-row ">
            <MdAccessTime className="mr-1" /> MONDAY-SATURDAY:09.00 -16.00 WIB
          </div>
          <div className="text-white flex flex-row gap-3">
            <a href="#">
              <IoLogoFacebook />
            </a>{" "}
            <a href="#">
              <FaInstagram />
            </a>{" "}
            <a href="#">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
