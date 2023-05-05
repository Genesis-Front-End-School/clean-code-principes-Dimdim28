import axios, { AxiosInstance } from 'axios';

export class SingletonInstance {
  private static instance: AxiosInstance;

  constructor() {
    throw new Error('use a static getInstance() method')
   }

  public static getInstance(): AxiosInstance {
    if (!this.instance) this.instance = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_HOST}/${process.env.NEXT_PUBLIC_API_VERSION}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    });

    return this.instance;
  }
}


export default SingletonInstance.getInstance();
