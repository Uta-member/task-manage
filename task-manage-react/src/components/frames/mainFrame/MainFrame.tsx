import MainHeader from "@/components/headers/mainHeader/MainHeader";
import ColumnDiv from "@/components/layouts/div/ColumnDiv";
import RowDiv from "@/components/layouts/div/RowDiv";
import MainSideNav from "@/components/navigations/mainSideNav/MainSideNav";
import { Stack } from "@mui/joy";
import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

/**
 * アプリ全体を覆うフレーム
 * @param param0
 * @returns
 */
const MainFrame = ({ children }: Props) => {
  const headerHeight = "50px";
  const navOpenWidth = "300px";
  const navCloseWidth = "0px";

  const [navWidthState, setNavWidthState] = useState(navOpenWidth);

  const switchNavOpen = () => {
    setNavWidthState((prev) =>
      prev === navOpenWidth ? navCloseWidth : navOpenWidth
    );
  };

  return (
    <Stack width={"100%"} height={"100%"}>
      <ColumnDiv height={headerHeight}>
        <MainHeader switchNavOpen={switchNavOpen} />
      </ColumnDiv>
      <RowDiv height={`calc(100% - ${headerHeight})`}>
        <ColumnDiv
          width={navWidthState}
          height={"100%"}
          sx={{
            transition: "0.3s",
            opacity: navWidthState === "0px" ? "0" : "1",
          }}
        >
          <MainSideNav />
        </ColumnDiv>
        <ColumnDiv width={`calc(100% - ${navWidthState})`} height={"100%"}>
          {children}
        </ColumnDiv>
      </RowDiv>
    </Stack>
  );
};

export default MainFrame;
