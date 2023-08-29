import "./App.css";
import { Stack } from "@mui/joy";
import MainRouter from "./routers/MainRouter";

function App() {
  return (
    <Stack width={"100vw"} height={"100vh"} overflow={"hidden"}>
      <MainRouter />
    </Stack>
  );
}

export default App;
