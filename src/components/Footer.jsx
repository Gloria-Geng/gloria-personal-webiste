import email from "/src/img/email.svg";
import phone from "/src/img/phone.svg";
const Footer = () => {
  return (
    <footer className="bg-[#E5D0FF] rounded-tl-3xl rounded-tr-3xl p-10 flex flex-col space-y-4 px-24 test-base">
      <div>
        Feel free to reach out to me if you're looking for a developer, have a
        questions, or simply want to connect.
      </div>
      <div>
        <div className="flex flex-row items-center space-x-3">
          <img src={email} />
          <p>gcg46@cornell.edu</p>
        </div>

        {/* <div className="flex flex-row items-center space-x-3">
          <img src={phone} />
          <p>123-456-7890</p>
        </div> */}
      </div>
      <div>
        <p className="flex justify-center text-sm">
          &copy; Gloria Geng
        </p>
      </div>
    </footer>
  );
};

export default Footer;
