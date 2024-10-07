"use client";

import { Footer } from "antd/es/layout/layout";

export default function FooterComponent() {
  return (
    <>
      <div className="bg-green-500 text-white p-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div>
            <h3 className="font-bold">Featured</h3>
            <ul className="mt-4">
              <li>Jual aksesoris</li>
              <li>Jual aksesoris</li>
              <li>Jual aksesoris</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Contact Us</h3>
            <ul className="mt-4">
              <li>List contact</li>
              <li>List contact</li>
              <li>List contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Category</h3>
            <ul className="mt-4">
              <li>List Category</li>
              <li>List Category</li>
              <li>List Category</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Featured</h3>
            <ul className="mt-4">
              <li>Jual aksesoris</li>
              <li>Jual aksesoris</li>
              <li>Jual aksesoris</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Footer
          style={{
            textAlign: "center",
          }}
          className="bg-white"
        >
          Maju Jaya Abadi ©{new Date().getFullYear()}
        </Footer>
      </div>
    </>
  );
}
