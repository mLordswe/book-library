import React, { createContext, useContext } from "react";
import { FavoriteBook } from "./types";

export const Favoritcontext = createContext<FavoriteBook | undefined>(undefined);