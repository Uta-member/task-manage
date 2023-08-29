import ColumnDiv from "@/components/layouts/div/ColumnDiv";
import { usePageNavigate } from "@/hooks/usePageNavigate";
import { useEffect } from "react";
import { Typography } from "@mui/joy";
import AppTitle from "@/components/appAssets/AppTitle";

/**
 * アプリのエントリーポイントとなるページ
 * 最初に表示するページの制御を行う
 * @returns
 */
const IndexPage = () => {
  const { pageNavigate } = usePageNavigate();

  useEffect(() => {
    pageNavigate("/app/");
    return;
  }, []);

  return (
    <ColumnDiv>
      <AppTitle />
      <Typography>読み込み中...</Typography>
    </ColumnDiv>
  );
};

export default IndexPage;
