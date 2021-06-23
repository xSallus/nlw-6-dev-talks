import { ReactNode } from 'react';

export interface ProviderProps {
    children: ReactNode;
}

export interface ButtonProps {
    children: ReactNode;
    callback?: ()=>void|undefined;
    bgcolor?: string;
}