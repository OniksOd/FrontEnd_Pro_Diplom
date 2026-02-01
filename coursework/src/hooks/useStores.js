import { use } from "react";
import { storeContext } from "../contexts/storeContext";

export const useStores = () => use(storeContext);
