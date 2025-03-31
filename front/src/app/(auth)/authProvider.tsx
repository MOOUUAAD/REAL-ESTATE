import type { AppProps } from 'next/app';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import React from 'react';

Amplify.configure({
    Auth:{
        Cognito: {
            userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID!,
            userPoolClientId : process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID!
        }
    }
});
const Auth = ({ children }: {children: React.ReactNode})=> {
  return (
    <div className='h-full'>
    <Authenticator>
        {()=><>{children}</>}
    </Authenticator>
    </div>
  );
};


export default Auth;