import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import ActionButton from "@/shared/ActionButton";
import Link from "./Link";
import Logo from "@/assets/logo.png";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = "bg-ash";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full  py-6`}
      >
        <div className={`${flexBetween} mx-auto w-1512px h-119px ml-30`}>
          <div className={`${flexBetween} w-full h-57px gap-40`}>
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo} className="logo w-[70px] h-[30px]  sm:w-[51px] sm:h-[22px] mr-20" />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-709px h-57px ml-20`}>
                <div className={`${flexBetween} gap-20 text-sm`}>
                
                  <Link
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Services"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Careers"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} mr-0`}>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Get Started
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="bg-secondary-500 rounded-full p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="bg-primary-100 fixed right-0 bottom-0 z-40 h-full w-[300px] drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
