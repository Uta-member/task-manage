import { usePageNavigate } from "@/hooks/usePageNavigate";
import { Button, Modal, Sheet, Stack } from "@mui/joy";
import { Typography } from "@mui/material";

/**
 * ルートに設定されていないパスでリクエストが来たときのエラー画面
 * @returns
 */
const RouteNotFoundPage = () => {
  const { handlePageNavigate } = usePageNavigate();

  return (
    <Stack width={"100vw"} height={"100vh"}>
      <Modal
        open
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            padding: "30px",
            borderRadius: "md",
            boxShadow: "lg",
          }}
        >
          <Stack gap={"10px"}>
            <Typography>指定されたページが見つかりませんでした</Typography>
            <Button onClick={handlePageNavigate("/")}>トップページへ</Button>
          </Stack>
        </Sheet>
      </Modal>
    </Stack>
  );
};

export default RouteNotFoundPage;
