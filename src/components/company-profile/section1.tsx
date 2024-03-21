"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

export default function Section1About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div data-aos="fade-up">
        <div className="flex h-[600px] w-full lg:w-[25vw] mx-auto mt-10 relative">
          <Image
            layout="fill"
            className="rounded-lg"
            src="https://ptmdsb.com/wp-content/uploads/2022/12/001C8699-9B5A-4C39-9066-76E33F6E76CF-1-1017x1536.jpg"
            alt="director"
          />
        </div>
        <div className="relative flex justify-center -top-16">
          <div className="flex flex-col items-center justify-center border bg-blue-800 rounded-lg w-[250px]">
            <p className="text-white text-2xl tracking-tight font-semibold">
              Andreas Setyawan
            </p>
            <p className="text-white text-xl tracking-widest font-semibold">
              President Director
            </p>
          </div>
        </div>
      </div>
      <div className="flex sm:mt-10 w-full">
        <div className="flex flex-col gap-5 w-[500px] lg:mx-0 px-10">
          <p className="text-blue-400 font-bold text-2xl text-center">
            Preamble
          </p>
          <p className="font-bold text-xl text-center">
            Tumbuh Besar dan Kuat dalam Ketulusan dan Kejujuran
          </p>
          <div className="flex flex-col h-atuo w-auto max-sm:ml-5 gap-5 text-wrap text-justify">
            <p>
              PT. Multi Daya Sinergi Bersama merupakan perusahaan outsourcing
              karyawan atau alih daya yang didirikan pada tahun 2018, tepatnya
              pada tanggal 26 April 2018.
            </p>
            <p>
              PT. Multi Daya Sinergi Bersama, atau disingkat MDSB, dibentuk dan
              didirikan berlandaskan Ketulusan Hati guna memberi peluang bagi
              para Pencari Kerja yang kriterianya sesuai dengan kebutuhan
              perusahaan, dan guna membantu banyak Perusahaan yang sedang
              membutuhkan karyawan dengan sistem alih daya.
            </p>
            <p>
              Dengan Kejujuran, Loyalitas, dan Dedikasi seluruh Staf dan
              Direksinya, PT.Multi Daya Sinergi Bersama secara bertahap namun
              pasti telah tumbuh dan berkembang menjadi sebuah perusahaan alih
              daya yang cukup diperhitungkan kehadiran dan keberadaannya oleh
              para kompetitor.
            </p>
            <p>
              Bersama Team Work yang memiliki Kompetensi dan Kapabilitas tinggi,
              PT.Multi Daya Sinergi Bersama (MDSB) siap memberikan Pelayanan
              Terbaik bagi setiap Kliennya, karena PT.Multi Daya Sinergi Bersama
              ingin selalu menjadi Perusahaan Alih Daya yang Terpilih dan
              Terpercaya, dengan mengedepankan Kualitas dalam Kepuasan Klien
              kami.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
