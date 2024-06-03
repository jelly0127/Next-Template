import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
 import { PrismaAdapter } from "@auth/prisma-adapter"
import db from "./db"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub({
     clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
      authorization: { params: { scope: 'read:user' } }
  }),
  ],
  basePath:process.env.NEXTAUTH_URL,
 adapter: PrismaAdapter(db),
 session: {
    strategy: 'jwt',
    maxAge:  24*60 * 1000, // 设置会话过期时间为24小时
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id as any;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
})