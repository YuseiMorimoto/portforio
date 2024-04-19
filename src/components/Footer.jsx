import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section
    className={`${styles.flexCenter}
    ${styles.paddingY}`}
  >
    <div
      className={`${styles.flexStart} md:flex
      flex-col mb-8 w-full`}
    >
      <div className="flex-1 flex-col justify-start mr-10">
        <img
          src={logo}
          alt="footer"
          className="w-[266px] h-[72px]
          object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div
        className="flex-[1.5] w-full flex justify-between
        flex-wrap md:mt-0 mt-10"
      >
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key}
            className="flex-col
            my-4 min-w-[150px]"
          >
            <h4 className="font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.key}
                  className={`font-normal
                    text-[16px] leading-[24px] text-gray-300
                    hover:text-gray-100 cursor-pointer
                    ${index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"}`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Footer;
