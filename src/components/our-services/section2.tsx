import Image from "next/image";
import { GoDotFill } from "react-icons/go";

export default function Section2Services() {
  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap justify-evenly mt-10">
        <div className="flex flex-col w-[600px] gap-5">
          <p className="text-blue-700 text-3xl">Keunggulan MDSB Security</p>
          <p className="flex flex-row gap-2">
            <GoDotFill className="h-8 w-8" /> Satpam kami memiliki Kompentesi
            dan Keterampilan baik dibidang penanganan, pengiriman uang,
            pengamanan objek vital, dan juga memiliki kemampuan K3
          </p>
          <p className="flex flex-row gap-2">
            <GoDotFill className="h-8 w-8" /> Satpam kami memiliki pengetahuan
            yang mumpuni dibidangnya serta afektif / sikap perilaku adab yang
            bisa mengayomi klien dengan skill dan keterampilan yang dimiliki.
          </p>
          <p className="flex flex-row gap-2">
            <GoDotFill className="h-8 w-8" /> Satpam kami mampu menyelesaikan
            masalah dan mengambil keputusan secara cermat dan teliti, serta
            mendokumentasikannya sesuai berita acara kejadian.
          </p>
          <p className="flex flex-row gap-2">
            <GoDotFill className="h-4 w-4" /> Mampu mendeteksi gangguan yang
            berpotensi bahaya yang akan terjadi.
          </p>
        </div>
        <div className="relative h-[300px] w-[300px]">
          <Image
            layout="fill"
            className="border shadow-xl"
            src="https://ptmdsb.com/wp-content/uploads/2022/12/MDSB-Security-LOGO-1.png"
            alt="mdsb security logo"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="building2 h-12 w-[1200px]"></div>
      </div>
    </div>
  );
}
