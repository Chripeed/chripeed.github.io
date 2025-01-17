import { FaFacebookF, FaInstagram } from "react-icons/fa";

type TCompanyInfo = {
  name: string;
  registerNumber: string;
  address: string;
  email: string;
  phone: string;
};

interface footerProps {
  companyInfo: TCompanyInfo;
  links: string[];
}

export const DekoratsioonFooter = (props: footerProps) => {
  return (
    <footer className="bg-charcoal-gray text-soft-white">
      <div className="flex justify-start md:justify-center flex-wrap gap-8 p-4 m-2 w-1/2 md:w-full">
        <div>
          <h2 className="text-lg font-bold">{props.companyInfo.name}</h2>
          <p className="text-steel-gray">
            Registrikood: {props.companyInfo.registerNumber}
          </p>
          <p className="text-steel-gray">
            Aadress: {props.companyInfo.address}
          </p>
          <p className="text-steel-gray">
            E-posti aadress: {props.companyInfo.email}
          </p>
          <p className="text-steel-gray">Telefon: {props.companyInfo.phone}</p>
        </div>

        <div>
          <h2 className="text-lg font-bold">INFO</h2>
          <ul>
            {props.links.map((link) => (
              <li>
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
          <h2 className="text-lg font-bold">Jälgi meid</h2>
          <div className="flex mt-4">
            <a
              href="https://www.facebook.com/people/WedLux/100093962121919/?locale=et_EE"
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
          <h2 className="text-lg font-bold">Rent</h2>
          <p className="text-steel-gray">
            Ilusad ja uhked autod Teie eriliseks päevaks.
          </p>
        </div>
      </div>
    </footer>
  );
};
