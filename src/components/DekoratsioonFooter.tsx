import { FaFacebookF, FaInstagram } from "react-icons/fa";
import tekst from "../assets/tekst.json";

type TCompanyInfo = {
  name: string;
  registerNumber: string;
  address: string;
  email: string;
  phone: string;
};

interface FooterProps {
  companyInfo: TCompanyInfo;
  links: string[];
}

export const DekoratsioonFooter = (props: FooterProps) => {
  return (
    <footer className="bg-charcoal-gray text-soft-white flex flex-col">
      {/* Top section: content blocks */}
      <div className="flex justify-start md:justify-center flex-wrap gap-8 p-4 m-2 ">
        <div>
          <h2 className="text-lg font-bold">{tekst.Footer_firmanimi}</h2>
          <p className="text-steel-gray">{tekst.Footer_firma_registrikood}</p>
          <p className="text-steel-gray">{tekst.Footer_firma_aadress}</p>
          <p className="text-steel-gray">{tekst.Footer_firma_email}</p>
          <p className="text-steel-gray">{tekst.Footer_firma_telefon}</p>
        </div>

        <div>
          <h2 className="text-lg font-bold">{tekst.Footer_info}</h2>
          <ul>
            {props.links.map((link) => (
              <li key={link}>
                <a
                  href={`/dekoratsioonid/${link.toLowerCase()}`}
                  className="hover:text-blue-500 transition-colors duration-300 text-steel-gray"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold">{tekst.Footer_jalgi_meid}</h2>
          <div className="flex mt-4">
            <a
              href="https://www.facebook.com/p/WeddLux-100093962121919/"
              className="text-blue hover:text-steel-gray transition-colors duration-300"
            >
              <FaFacebookF size="2em" />
            </a>
            <a
              href="https://www.instagram.com/meritk_k/"
              className="ml-4 text-pink hover:text-steel-gray"
            >
              <FaInstagram size="2em" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold">
            {tekst.Footer_dekoratsioonid_pealkiri}
          </h2>
          <p className="text-steel-gray">
            {tekst.Footer_dekoratsioonid_alamtekst}
          </p>
        </div>
      </div>

      {/* Bottom section: centered copyright */}
      <div className="w-full text-center py-2 border-t border-steel-gray">
        <p>© {new Date().getFullYear()} Weddlux. All rights reserved.</p>
      </div>
    </footer>
  );
};
