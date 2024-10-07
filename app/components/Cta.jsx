import { Button } from "antd";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function Cta() {
  return (
    <div className="bg-gray-900 p-5 py-10 text-center text-white relative">
      <h1 className="font-bold text-5xl z-50">Promo Menarik Setiap Hari</h1>
      <p className="text-xl mt-5 max-w-3xl mx-auto">
        Jangan lewatkan diskon spesial dan penawaran eksklusif setiap minggunya.
        Daftarkan email Anda untuk menerima info terbaru dan nikmati pengalaman
        belanja yang lebih hemat.
      </p>
      <Link href="/produk">
        <Button
          icon={<FaArrowRight />}
          className="mt-5"
          type="primary"
          size="large"
          shape="round"
        >
          EXPLORE
        </Button>
      </Link>
    </div>
  );
}
