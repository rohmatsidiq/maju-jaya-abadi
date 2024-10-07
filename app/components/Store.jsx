import { FaHome } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export default function Store() {
  return (
    <div className="p-5 max-w-6xl mx-auto py-10">
      <h1 className="font-bold text-3xl text-center">Kunjungi Toko Kami</h1>
      <div className="flex items-center md:flex-row flex-col gap-5 mt-8">
        <div className="w-full">
          <h3 className="mb-5 font-bold text-2xl">Kantor Pusat</h3>
          <div className="flex gap-2 items-center">
            <FaHome />
            <p>Jl. Mawar Raya Blok BD 1/14 Dasana Indah</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaWhatsapp />
            <p>085 227 593 225</p>
          </div>
        </div>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d193334.45535325777!2d106.762716!3d-6.285411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f0373e920be9%3A0x85b216f49186ef0f!2sJl.%20Mawar%20Raya%2C%2015412%2C%20Indonesia!5e1!3m2!1sen!2sus!4v1728274586339!5m2!1sen!2sus"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full rounded-3xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
