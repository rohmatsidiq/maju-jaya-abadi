"use client";
import { Card } from "antd";
import {
  FaShop,
  FaRecycle,
  FaBlenderPhone,
  FaHandshake,
} from "react-icons/fa6";

export default function Keunggulan() {
  return (
    <div className="p-5 max-w-6xl mx-auto">
      <h1 className="text-center font-bold text-3xl">
        Kenapa memilih toko kami?
      </h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Card className="border-none">
          <div className="flex gap-3">
            <div>
              <FaShop className="text-7xl text-green-500" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Profesional</h3>
              <p>
                Kami memberikan hasil kerja yang maksimal dengan tim teknisi
                yang bersertifikasi dan berpengalaman.
              </p>
            </div>
          </div>
        </Card>
        <Card className="border-none">
          <div className="flex gap-3">
            <div>
              <FaRecycle className="text-7xl text-green-500" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Responsive</h3>
              <p>
                Segala bentuk permintaan dan keluhan dari customer akan dengan
                cepat kami respon 24/7.
              </p>
            </div>
          </div>
        </Card>
        <Card className="border-none">
          <div className="flex gap-3">
            <div>
              <FaBlenderPhone className="text-7xl text-green-500" />
            </div>
            <div>
              <h3 className="font-bold text-xl">After Sales</h3>
              <p>
                Setiap pekerjaan yang telah selesai kami kerjakan tetap menjadi
                perhatian penuh kami.
              </p>
            </div>
          </div>
        </Card>
        <Card className="border-none">
          <div className="flex gap-3">
            <div>
              <FaHandshake className="text-7xl text-green-500" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Service</h3>
              <p>
                Pelayanan yang ramah terhadap customer adalah prioritas utama
                kami.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
