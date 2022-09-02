//imports context for any component that needs it
import { createContext } from 'react';

//Context api that shares data globally, in this case the user and username data
export const UserContext = createContext({ user: null, username: null });