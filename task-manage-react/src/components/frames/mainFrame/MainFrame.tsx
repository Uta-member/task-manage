import MainHeader from "@/components/headers/mainHeader/MainHeader";
import ColumnDiv from "@/components/layouts/div/ColumnDiv";
import { Stack } from "@mui/joy";
import { ReactNode } from "react";

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

  return (
    <Stack width={"100%"} height={"100%"}>
      <ColumnDiv height={headerHeight}>
        <MainHeader />
      </ColumnDiv>
      <ColumnDiv height={`calc(100% - ${headerHeight})`}>{children}</ColumnDiv>
    </Stack>
  );
};

export default MainFrame;
