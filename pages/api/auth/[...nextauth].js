//C:\Users\User\economyblindsandshadesjs\pages\api\auth\[...nextauth].js

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, 
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userRole = "user"; 
      }
      return token;
    },
  },
});

