import { FaRegCheckCircle } from "react-icons/fa";

export default function VisiMisi() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mx-auto px-10 gap-3 mt-10 w-full">
      <div className="flex flex-col justify-center items-center border bg-white shadow-xl h-52 px-5 w-full">
        <FaRegCheckCircle className="h-12 w-12" />
        <div className="mt-3">
          <p className="font-semibold text-xl tracking-wide">VISION</p>
        </div>
        <p className="text-center">
          Menjadi Perusahaan Alih Daya Terpilih Dan Terpercaya
        </p>
      </div>
      <div className="flex flex-col justify-center items-center border bg-white shadow-xl h-52 px-3 w-full">
        <FaRegCheckCircle className="h-12 w-12" />
        <div className="mt-3">
          <p className="font-semibold text-xl tracking-wide">MISSION</p>
        </div>
        <p className="text-center">
          Memiliki Integritas, Kredibilitas dan Kapabilitas dalam menjaga
          kepuasan Klien secara profesional.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center border bg-white shadow-xl h-52 px-5 w-full">
        <FaRegCheckCircle className="h-12 w-12" />
        <div className="mt-3">
          <p className="font-semibold text-xl tracking-wide">MOTTO</p>
        </div>
        <p className="text-center">Kualitas Kami dalam Kepuasan Anda</p>
      </div>
    </div>
  );
}
