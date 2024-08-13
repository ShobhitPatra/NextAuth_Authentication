import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const AuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "username" },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials: any): Promise<any> {
        const user = {
          id: 100,
          name: "Shobhit Patra",
          username: "ShobiGobi",
          password: "12345678",
        };
        if (
          user.username === credentials.username &&
          user.password === credentials.password
        ) {
          return user;
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: any) {
      return token;
    },
    async session({ session, user, token }: any) {
      return session;
    },
  },
};

export default AuthOptions;
