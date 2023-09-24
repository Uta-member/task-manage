import { Container } from "inversify";
import { bindUserContainer } from "./userContainer";

const container = new Container();

bindUserContainer(container);

export { container };
