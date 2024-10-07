"use client";

import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import Link from "next/link";

export default function NavMenu() {
  const items = [
    {
      key: "/",
      label: <Link href="/">Home</Link>,
    },
    {
      key: "/produk",
      label: <Link href="/produk">Produk</Link>,
    },
    {
      key: "/contact",
      label: <Link href="/contact">Kontak</Link>,
    },
  ];

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
      }}
      className="fixed top-0 right-0 left-0 z-50"
    >
      <div className="demo-logo">
        <h1 className="font-bold text-white mr-5">PT MJA</h1>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["/"]}
        items={items}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
    </Header>
  );
}
