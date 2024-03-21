export default function Section2About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 px-10">
      <div className="flex flex-col ml-10 gap-5">
        <p className="text-blue-700 text-3xl">INTRODUCTION</p>
        <div className="flex flex-col gap-5 text-wrap text-justify pr-10 md:pr-20">
          <p>
            {" "}
            Sebagai salah satu perusahaan Outsourcing terpercaya dan terpilih
            PT. Multi Daya Sinergi Bersama (MDSB) telah berkembang dan akan
            terus berkembang menjadi besar dan kuat dengan selalu memberikan
            pelayanan terbaik kepada klien-klien.{" "}
          </p>
          <p>
            Perkembangan dan profesionalisme tersebut didukung oleh kompetensi
            manajemen kami yang telah berpengalaman dalam bidang Sumber Daya
            Manusia sejak tahun 2000.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 md:flex md:justify-normal md:items-start md:mt-0 md:mr-5">
        <img
          className="h-[300px] rounded-xl"
          src="https://ptmdsb.com/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-22-at-22.08.48.jpeg"
          alt="indoor"
        />
      </div>
    </div>
  );
}
