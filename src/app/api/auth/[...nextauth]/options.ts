import type { NextAuthOptions } from "next-auth"; 
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions:NextAuthOptions = {
    providers:[
        GithubProvider({
            clientId:process.env.GITHUB_ID as string,
            clientSecret:process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                username:{
                    label:"Username:",
                    type:"text",
                    placeholder:"Enter username"
                },
                password:{
                    label:"Password:",
                    type:"password",
                    placeholder:"Enter password"
                }
            },
            async authorize(credentials){
                // This is where I will retrieve users from database
                const user = {id:2,name:"Faraz Ahmad",username:"faraz",email:"faraz@gmail.com",password:"password"};
                if(credentials?.username === user.username && credentials.password === user.password){
                    return user;
                }else{
                    return null;
                }
            }
        })
    ]
};




