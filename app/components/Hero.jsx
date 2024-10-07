import { Button } from "antd";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="bg-hero p-5 text-center py-10 min-h-[50vh] md:min-h-screen flex justify-center items-center flex-col gap-5 relative rounded-br-3xl rounded-bl-3xl">
      {/* Overlay Transparan */}
      <div className="absolute inset-0 bg-black opacity-70 rounded-br-3xl rounded-bl-3xl"></div>
      <div className="z-10 text-white flex justify-center items-center flex-col gap-5">
        <h1 className="font-bold text-4xl md:text-5xl max-w-4xl leading-[45px] md:leading-[60px] text-green-400">
          Selamat Datang di Toko Komputer Maju Jaya Abadi
        </h1>
        <h3 className="text-xl max-w-2xl leading-[30px] md:leading-[40px]">
          Temukan Perangkat dan Aksesoris Komputer Terbaik untuk Semua Kebutuhan
          Anda!
        </h3>
        <Link href="/produk">
          <Button
            icon={<FaArrowRight />}
            className="w-full mt-5"
            shape="round"
            type="primary"
            size="large"
          >
            EXPLORE
          </Button>
        </Link>
      </div>
    </div>
  );
}
