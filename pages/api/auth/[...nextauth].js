// root/pages/api/auth/[...nextauth].js


import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
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

