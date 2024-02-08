import { withAuth } from 'next-auth/middleware';

const authMiddleware = withAuth({
  callbacks: {
    async authorized({ req, token }) {
      // Redirect to the homepage if the user is not authenticated
      if (!token) {
        return {
          redirectTo: '/',
        };
      }

      // You can add other custom logic here based on user roles or tokens

      // `/admin` requires admin role
      if (req.nextUrl.pathname === '/admin') {
        return token?.userRole === 'admin';
      }

      // Default behavior: allow access
      return true;
    },
  },
});

export default authMiddleware;
