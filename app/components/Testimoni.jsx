"use client";

import { Card, Carousel, Rate } from "antd";
import { FaCircleUser } from "react-icons/fa6";

export default function Testimoni() {
  const contentStyle = {
    // height: "160px",
    color: "#fff",
    // lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div className="p-5 max-w-6xl mx-auto py-10">
      <h1 className="font-bold text-3xl text-center">Apa Kata Mereka?</h1>
      <Carousel arrows autoplay>
        <div>
          <div className="mt-5 grid md:grid-cols-3 gap-5">
            <Card className="border-none">
              <div className="flex flex-col justify-center items-center">
                <FaCircleUser className="text-8xl text-green-500" />
                <h3 className="font-bold text-xl mt-3">Andy Rahmawan</h3>
                <p>Pengusaha</p>
                <Rate className="mt-2" defaultValue={5} />
              </div>
              <hr className="mt-5" />
              <p className="mt-5">
                Solusi pengadaan komputer yang murah dan berkualitas. Saya sudah
                berlangganan beberapa kali dan hasilnya selalu memuaskan sesuai
                dengan kebutuhan saya.
              </p>
            </Card>
            <Card className="border-none">
              <div className="flex flex-col justify-center items-center">
                <FaCircleUser className="text-8xl text-green-500" />
                <h3 className="font-bold text-xl mt-3">Andy Rahmawan</h3>
                <p>Pengusaha</p>
                <Rate className="mt-2" defaultValue={5} />
              </div>
              <hr className="mt-5" />
              <p className="mt-5">
                Solusi pengadaan komputer yang murah dan berkualitas. Saya sudah
                berlangganan beberapa kali dan hasilnya selalu memuaskan sesuai
                dengan kebutuhan saya.
              </p>
            </Card>
            <Card className="border-none">
              <div className="flex flex-col justify-center items-center">
                <FaCircleUser className="text-8xl text-green-500" />
                <h3 className="font-bold text-xl mt-3">Andy Rahmawan</h3>
                <p>Pengusaha</p>
                <Rate className="mt-2" defaultValue={5} />
              </div>
              <hr className="mt-5" />
              <p className="mt-5">
                Solusi pengadaan komputer yang murah dan berkualitas. Saya sudah
                berlangganan beberapa kali dan hasilnya selalu memuaskan sesuai
                dengan kebutuhan saya.
              </p>
            </Card>
          </div>
        </div>
        <div>
          <div className="mt-5 grid md:grid-cols-3 gap-5">
            <Card className="border-none">
              <div className="flex flex-col justify-center items-center">
                <FaCircleUser className="text-8xl text-green-500" />
                <h3 className="font-bold text-xl mt-3">Andy Rahmawan</h3>
                <p>Pengusaha</p>
                <Rate className="mt-2" defaultValue={5} />
              </div>
              <hr className="mt-5" />
              <p className="mt-5">
                Solusi pengadaan komputer yang murah dan berkualitas. Saya sudah
                berlangganan beberapa kali dan hasilnya selalu memuaskan sesuai
                dengan kebutuhan saya.
              </p>
            </Card>
            <Card className="border-none">
              <div className="flex flex-col justify-center items-center">
                <FaCircleUser className="text-8xl text-green-500" />
                <h3 className="font-bold text-xl mt-3">Andy Rahmawan</h3>
                <p>Pengusaha</p>
                <Rate className="mt-2" defaultValue={5} />
              </div>
              <hr className="mt-5" />
              <p className="mt-5">
                Solusi pengadaan komputer yang murah dan berkualitas. Saya sudah
                berlangganan beberapa kali dan hasilnya selalu memuaskan sesuai
                dengan kebutuhan saya.
              </p>
            </Card>
            <Card className="border-none">
              <div className="flex flex-col justify-center items-center">
                <FaCircleUser className="text-8xl text-green-500" />
                <h3 className="font-bold text-xl mt-3">Andy Rahmawan</h3>
                <p>Pengusaha</p>
                <Rate className="mt-2" defaultValue={5} />
              </div>
              <hr className="mt-5" />
              <p className="mt-5">
                Solusi pengadaan komputer yang murah dan berkualitas. Saya sudah
                berlangganan beberapa kali dan hasilnya selalu memuaskan sesuai
                dengan kebutuhan saya.
              </p>
            </Card>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
