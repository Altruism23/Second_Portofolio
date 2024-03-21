"use client";
import AnimatedCounter from "@/components/animatedcounter";
import YouTubeVideo from "@/components/youtube";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      {/* Image Strt */}
      <div>
        <div className="h-[600px] w-full">
          <div className="background1 px-4 py-40 lg:gap-5 sm:gap-5 w-full h-full flex flex-col">
            <div data-aos="zoom-out">
              <h1 className="text-blue-700 text-wider font-bold lg:text-[40px] sm:text-[30px] max-sm:text-[20px]">
                YOU PEOPLE, OUR SYSTEM
              </h1>
            </div>
            <div data-aos="zoom-out">
              <h2 className="font-bold max-sm:text-[20px] sm:text-[30px] lg:text-[40px]">
                WE ENSURE BALANCING
              </h2>
            </div>
            <div data-aos="zoom-out">
              <h3 className="font-bold max-sm:text-[20px] sm:text-[30px] lg:text-[40px]">
                EMPLOYEE AND MANAGING
              </h3>
            </div>
            <div data-aos="zoom-out">
              <h4 className="font-bold max-sm:text-[20px] sm:text-[30px] lg:text-[40px]">
                YOUR HR RULES
              </h4>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-gradient-to-r from-white to to-blue-700">
          <YouTubeVideo />
        </div>
      </div>
      {/* Image End Here */}

      {/* Why Choose Us Start */}
      <div className="flex flex-col lg:flex-row mt-10 px-20">
        {/* Text sebelah kiri */}
        <div className="flex flex-col px-10 max-md:px-0 max-sm:text-wrap">
          <div className="flex items-center justify-start text-cyan-700 font-semibold">
            <h1>WHY CHOOSE US</h1>
          </div>
          <div className="flex flex-col text-4xl font-bold">
            <h2>6 Years Experience in Outsourcing</h2>
          </div>
          <div>
            <p className="text-md text-wrap mt-5 max-sm:mt-10">
              Sejak tahun 2018 PT. Multi Daya Sinergi Bersama sebagai perusahaan
              outsourcing terpilih dan terpercaya selalu memberikan pelayanan
              terbaik kepada para clients.
            </p>
          </div>
          <div className="flex px-10 mt-10 max-sm:px-0">
            <div className="flex flex-row gap-10">
              <img
                className="h-16 sm:h-16"
                src="https://keenitsolutions.com/products/wordpress/reobiz/wp-content/uploads/2020/07/human-resources.png"
                alt="..."
              ></img>
              <div className="flex flex-col">
                <div>
                  <h1 className="text-lg font-semibold">
                    Extensive Employment
                  </h1>
                </div>
                <div>
                  <p className="text-wrap">
                    MDSB membuka lowongan kerja sebanyak banyaknya bagi para
                    pencari kerja
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex px-10 mt-10 max-sm:px-0">
            <div className="flex flex-row gap-10">
              <img
                className="h-16 sm:h-16"
                src="https://keenitsolutions.com/products/wordpress/reobiz/wp-content/uploads/2020/07/team.png"
                alt="..."
              ></img>
              <div className="flex flex-col">
                <div>
                  <h1 className="text-lg font-semibold">Dedicated Staff</h1>
                </div>
                <div>
                  <p className="text-wrap">
                    MDSB membuka lowongan kerja sebanyak banyaknya bagi para
                    pencari kerja
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Image section 2 sebelah kanan */}
        <div className="max-sm:px-0 mt-10 md:h-full md:w-auto md:mt-0">
          <img
            src="https://ptmdsb.com/wp-content/uploads/2020/07/about.jpg"
            alt="about"
          ></img>
        </div>
      </div>
      {/* section 3 */}
      <div className="relative w-full h-auto">
        <div>
          <div className="custom-shape-divider-top-1710663724">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <div className="w-full h-auto bg-blue-700 p-[170px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-32 max-sm:flex max-sm:flex-col">
          <div className="flex flex-col items-center gap-5">
            <img
              className="h-[5rem] w-[5rem]"
              src="https://keenitsolutions.com/products/wordpress/reobiz/wp-content/uploads/2020/07/whiteboard.png"
            ></img>
            <AnimatedCounter endValue={5000} />
            <p className="text-white text-xl font-bold">APPLICANTS</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <img
              className="h-[5rem] w-[5rem]"
              src="https://keenitsolutions.com/products/wordpress/reobiz/wp-content/uploads/2020/07/people.png"
            ></img>
            <AnimatedCounter endValue={1400} />
            <p className="text-white text-xl font-bold">EMPLOYEES</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <img
              className="h-[5rem] w-[5rem]"
              src="https://keenitsolutions.com/products/wordpress/reobiz/wp-content/uploads/2020/06/medal.png"
            ></img>
            <AnimatedCounter endValue={60} />
            <p className="text-white text-xl font-bold">CLIENTS</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <img
              className="h-[5rem] w-[5rem]"
              src="https://keenitsolutions.com/products/wordpress/reobiz/wp-content/uploads/2020/06/happy-face.png"
            ></img>
            <AnimatedCounter endValue={30} />
            <p className="text-white text-xl font-bold">JOB POSITION</p>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between mt-10 w-full gap-5">
        <div className="mx-auto">
          <div data-aos="fade-right">
            <img
              className="h-[500px] w-auto"
              src="https://ptmdsb.com/wp-content/uploads/2020/07/about-2.jpg"
            ></img>
          </div>
        </div>
        <div className="flex w-[70%] ml-10">
          <div className="flex flex-col gap-7 my-10">
            <div>
              <h1 className="text-gray-500 text-[18px] tracking-[2px] ">
                ABOUT US
              </h1>
            </div>
            <div>
              <h2 className="font-bold text-[28px]">Choose Us For Your </h2>
            </div>
            <div>
              <h3 className="text-blue-800 font-bold text-[20px]">
                Outsourcing Vendor Management
              </h3>
            </div>
            <div>
              <p className="text-gray-500 text-[15px] text-justify">
                PT. Multi Daya Sinergi Bersama sebagai perusahaan alih daya
                selalu berupaya memenuhi kebutuhan Client dengan mengedepankan
                kualitas dan kepuasan Client.
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-[15px] text-justify">
                Kami juga selalu berusaha untuk memberikan pelayanan,
                kenyamanan, dan kesejahteraan terbaik untuk seluruh karyawan
                kami.
              </p>
            </div>
            <div>
              <button className="border-2 border-solid bg-blue-800 text-white font-bold rounded px-[20px] py-[15px] hover:cursor-pointer hover:bg-opacity-95">
                DISCOVER MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* section 5 */}
      <div className="relative">
        <div className="flex justify-center relative">
          <img
            className="absolute top-0 w-full h-[800px]"
            src="./triangle2.png"
          ></img>
          <div className="w-full py-10 bg-gray-200">
            <div className="flex justify-center">
              <div className="flex flex-col">
                <p className="text-lg font-bold text-center text-gray-400 z-10 tracking-widest">
                  WHAT WE DO
                </p>
                <h1 className="text-[40px] font-extrabold  text-center z-10">
                  View MDSB Solutions
                </h1>
                <h2 className="text-[40px] font-extrabold text-center text-blue-800 z-10">
                  Our Best Services
                </h2>
              </div>
            </div>
            <div className="flex justify-center my-32">
              <div className="grid grid-cols-1 lg:grid-cols-5 sm:grid-cols-2  gap-10 my-10 px-10">
                <div className="flex flex-col bg-gradient-to-b from-white to-blue-100 h-[350px]">
                  <img
                    className="h-16 w-16 mt-10 mx-auto"
                    src="https://ptmdsb.com/wp-content/uploads/2022/11/png-security-1.png"
                  ></img>
                  <p className="font-bold text-[18px] text-center">
                    MDSB Security Service
                  </p>
                  <p className="text-center text-wrap text-[16px] mt-5">
                    MDSB Security Guard menyediakan Tenaga Satuan Pengamanan
                    yang handal, professional, berdedikasi dan memiliki
                    loyalitas tinggi.
                  </p>
                </div>
                <div className="flex flex-col bg-gradient-to-b from-white to-blue-100">
                  <img
                    className="h-16 w-16 mt-10 mx-auto"
                    src="https://ptmdsb.com/wp-content/uploads/2022/11/Cleaning-png-1.png"
                  ></img>
                  <p className="font-bold text-[18px] text-center">
                    MDSB Cleaning Service
                  </p>
                  <p className="text-center text-wrap text-[16px] mt-5">
                    MDSB Cleaning Service menyediakan tenaga jasa kebersihan
                    yang profesional dan kompeten.
                  </p>
                </div>
                <div className="flex flex-col bg-gradient-to-b from-white to-blue-100 h-[350px]">
                  <img
                    className="h-16 w-16 mt-10 mx-auto"
                    src="https://ptmdsb.com/wp-content/uploads/2022/11/administrasi.png"
                  ></img>
                  <p className="font-bold text-[18px] text-center">
                    Administration Staff
                  </p>
                  <p className="text-center text-wrap text-[16px] mt-5">
                    Penyediaan serta pengalihan staf administrasi yang unggul
                    guna pemenuhan kebutuhan SDM perusahaan.
                  </p>
                </div>
                <div className="flex flex-col bg-gradient-to-b from-white to-blue-100 h-[350px]">
                  <img
                    className="h-16 w-16 mt-10 mx-auto"
                    src="https://ptmdsb.com/wp-content/uploads/2022/11/operationalss.png"
                  ></img>
                  <p className="font-bold text-[18px] text-center">
                    Operational Staff
                  </p>
                  <p className="text-center text-wrap text-[16px] mt-5">
                    Penyediaan serta pengalihan staf operasional yang unggul
                    guna pemenuhan kebutuhan SDM perusahaan.
                  </p>
                </div>
                <div className="flex flex-col bg-gradient-to-b from-white to-blue-100 h-[350px]">
                  <img
                    className="h-16 w-16 mt-10 mx-auto"
                    src="https://ptmdsb.com/wp-content/uploads/2022/11/operational.png"
                  ></img>
                  <p className="font-bold text-[18px] text-center">
                    Supporting Staff
                  </p>
                  <p className="text-center text-wrap text-[16px] mt-5">
                    Penyediaan serta pengalihan staf pendukung kerja lainnya
                    sesuai kebutuhan SDM perusahaan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 6 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between mt-10 w-full gap-5 background6">
        <div className="mx-auto">
          <div data-aos="fade-right">
            <img
              className="h-[500px] w-auto"
              src="https://ptmdsb.com/wp-content/uploads/2020/07/testimonial.jpg"
            ></img>
          </div>
        </div>
        <div className="my-20 px-10 sm:px-0">
          <p className="text-blue-700 font-semibold tracking-wider">
            CUSTOMER REVIEWS
          </p>
          <p className="mt-5 text-4xl tracking-tight font-extrabold ">
            Reviews From Best Clients
          </p>
          <div className="border-l-8 border-l-blue-800 bg-white h-36 mt-10 w-full sm:w-3/4">
            <p className="italic text-center p-5  text-gray-600 text-wrap">
              &quot; Kami sangat senang dengan kerja PT Multi Daya Sinergi
              Bersama
            </p>
            <p className="italic text-center text-gray-600 text-wrap ">
              Sangat membantu kami dalam menyediakan kebutuhan SDM berkualitas.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
