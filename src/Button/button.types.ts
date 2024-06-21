import { ApolloClient } from '@apollo/client';

type ButtonParamsTS<T> = {
    name: string;
    width: number;
    height: number;
    client: ApolloClient<T>;
};

type Mode = 'prefetch' | 'preload';
