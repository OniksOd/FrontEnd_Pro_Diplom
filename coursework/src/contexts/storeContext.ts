import { createContext } from "react";
import { RootStore } from "../stores/root";

const rootStore = new RootStore();
export const storeContext = createContext(rootStore);
