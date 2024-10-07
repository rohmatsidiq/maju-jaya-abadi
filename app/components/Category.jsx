"use client";
import { Card } from "antd";
import { FaComputer, FaNetworkWired, FaPrint } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";

export default function Category() {
  return (
    <div className="p-5">
      <div className="max-w-6xl bg-white mx-auto my-10 rounded-3xl grid grid-cols-2 md:grid-cols-4">
        <Card className="border-none text-center">
          <FaComputer className="text-8xl mx-auto" />
          <p>Computer</p>
        </Card>
        <Card className="border-none text-center">
          <FaLaptop className="text-8xl mx-auto" />
          <p>Laptop</p>
        </Card>
        <Card className="border-none text-center">
          <FaNetworkWired className="text-8xl mx-auto" />
          <p>Networking</p>
        </Card>
        <Card className="border-none text-center">
          <FaPrint className="text-8xl mx-auto" />
          <p>Printer</p>
        </Card>
      </div>
    </div>
  );
}
