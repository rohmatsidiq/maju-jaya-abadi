"use client";

import { Breadcrumb, Button, Card, Form, Input } from "antd";
import { IoIosSend } from "react-icons/io";

export default function Kontak() {
  return (
    <div className="max-w-6xl mx-auto p-5">
      <Breadcrumb
        items={[
          {
            title: <a href="/">Home</a>,
          },

          {
            title: "Kontak",
          },
        ]}
      />

      <div className="mt-5">
        <h3 className="font-bold text-xl">Hubungi Kami</h3>
        <div className="mt-3">
          <Card className="border-none">
            <Form layout="vertical">
              <Form.Item
                label="Nama"
                name="nama"
                rules={[{ required: true, message: "Nama wajib diisi" }]}
              >
                <Input size="large" className="rounded-full" />
              </Form.Item>

              <Form.Item
                label="No HP"
                name="hp"
                rules={[{ required: true, message: "No HP wajib diisi" }]}
              >
                <Input size="large" className="rounded-full" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Email wajib diisi" }]}
              >
                <Input size="large" className="rounded-full" />
              </Form.Item>

              <Form.Item
                label="Pesan/pertanyaan"
                name="pesan"
                rules={[
                  { required: true, message: "Pesan/pertanyaan wajib diisi" },
                ]}
              >
                <Input.TextArea size="large" rows={5} />
              </Form.Item>

              <div className="mt-3">
                <Button
                  htmlType="submit"
                  shape="round"
                  type="primary"
                  size="large"
                  icon={<IoIosSend />}
                >
                  Kirim
                </Button>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
}
