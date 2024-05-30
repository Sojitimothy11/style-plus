import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-white text-ash px-10 py-2 hover:bg-white1 hover:text-ash width-178px height-57px ml-20 "
      onClick={() => setSelectedPage(SelectedPage.GetStarted)}
      href={`#${SelectedPage.GetStarted}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
