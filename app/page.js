import { ConfigProvider, FloatButton } from "antd";
import Category from "./components/Category";
import Hero from "./components/Hero";
import Keunggulan from "./components/Keunggulan";
import Store from "./components/Store";
import Testimoni from "./components/Testimoni";
import Cta from "./components/Cta";
import { FaWhatsapp } from "react-icons/fa";

export default function page() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#38bdf8",
          borderRadius: 16,
        },
      }}
    >
      <Hero />
      <Category />
      <Keunggulan />
      <Testimoni />
      <Store />
      <Cta />
      <FloatButton
        icon={<FaWhatsapp />}
        type="primary"
        style={{
          insetInlineEnd: 20,
        }}
      />
    </ConfigProvider>
  );
}
