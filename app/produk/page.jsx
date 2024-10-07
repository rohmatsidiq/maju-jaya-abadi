"use client";

import { Breadcrumb, Button, Card, Image } from "antd";
import { FaWhatsapp } from "react-icons/fa";
import CardProduk from "../components/CardProduk";

export default function Produk() {
  return (
    <div className="max-w-6xl mx-auto p-5">
      <Breadcrumb
        items={[
          {
            title: <a href="/">Home</a>,
          },

          {
            title: "Produk",
          },
        ]}
      />

      <div className="mt-5">
        <h3 className="font-bold text-xl">Produk</h3>
        <div className="mt-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <CardProduk
              namaBarang="Laptop HP XXX"
              gambarBarang="https://static.bmdstatic.com/pk/product/HP-Pavilion-x360-Convertible-14ek1067TU-Core-i51335U-16GB-512GB-SSD-Win11-Rose-Gold-fffb78f878e6464ca01cb3497f5d221e_medium.jpg"
              hargaBarang="Rp8.900.000"
            />

            <CardProduk
              namaBarang="Printer EPSON A4"
              gambarBarang="https://www.softcom.co.id/wp-content/uploads/2020/03/1-83.jpg"
              hargaBarang="Rp2.900.000"
            />

            <CardProduk
              namaBarang="Mouse Logitech"
              hargaBarang="Rp52.200"
              gambarBarang="https://upload.jaknot.com/2022/12/images/products/3e31a5/original/logitech-wired-mouse-b100.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
