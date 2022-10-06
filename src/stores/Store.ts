import { createContext, useContext } from "react";

interface Store {}

export const store: Store = {};

export const StoreContext = createContext(store);

const UseStore = () => {
    useContext(StoreContext);
};
