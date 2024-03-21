export default function Section1Services() {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold mt-10">
        Security Service atau Jasa Pengamanan (Satpam)
      </h1>
      <div className="flex justify-center items-center mt-10">
        <div className="building2 h-12 w-[1200px]"></div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-evenly mt-5 w-full px-40 text-justify gap-5">
        <div className="flex flex-col w-[700px]">
          <h1 className="text-blue-600 text-4xl text-center font-bold">
            Security Guard
          </h1>
          <p>
            {" "}
            Kami menyediakan dan mengelola tenaga pengamanan untuk berbagai
            bidang dan jenis perusahaan, baik manufaktur, rumah sakit,
            pergudangan, dan lain sebagainya.
          </p>
        </div>
        <div className="">
          <h1 className="text-blue-600 text-4xl text-center font-bold">
            Security Training
          </h1>
          <p>
            Kami melatih dan mendidik setiap anggota Satuan Pengamanan kami
            secara rutin, berkala dan berkesinambungan.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="building2 h-12 w-[1200px]"></div>
      </div>
    </div>
  );
}
