//C:\Users\User\economyblindsandshadesjs\pages\api\auth\route.js

import NextAuth from "next-auth/next";
import { config } from "../../../auth";

const handler = NextAuth(config);
export { handler as GET, handler as POST };
s