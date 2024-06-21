import Link from "./link";

const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 z-[999] bg-white border-gainsboro border-b-[0.5px] shadow-sm py-[20px]">
      <nav className="flex flex-row items-center self-end justify-end  px-[60px]">
        <ul className="flex flex-row items-center gap-30">
          <Link route="/#index" icon="home">
            Home
          </Link>
          <Link route="#timeline" icon="timeline">
            Timeline
          </Link>
          <Link route="#contact" icon="contact">
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
