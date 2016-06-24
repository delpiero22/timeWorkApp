
export interface Timework {
    id: number;
    date: Date;
    location: string;
}
export interface TimeworkResponse {
    data?: Array<Timework>;
    error?: Error;
}

export interface User {
  name: string;
  email: string;
  avatar: string;
  cover?: string

  auth?: boolean;
  token?: string;
}

export interface UserResponse {
    data?: User;
    error?: Error;
}

export interface Error {
    name: string;
    message?: string;
    code?: number;
}
