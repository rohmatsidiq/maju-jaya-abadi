"use client";

import { Button, Card, Image } from "antd";
import { FaWhatsapp } from "react-icons/fa";

export default function CardProduk({
  namaBarang = "",
  hargaBarang = "",
  gambarBarang = "",
}) {
  return (
    <Card className="border-none">
      <Image className="w-full rounded-3xl" src={gambarBarang} />
      <h3 className="font-bold">{namaBarang}</h3>
      <h3>{hargaBarang}</h3>

      <Button
        icon={<FaWhatsapp />}
        className="w-full mt-5"
        shape="round"
        type="primary"
        size="large"
      >
        Beli via Whatsapp
      </Button>
    </Card>
  );
}
