export interface IRegister {
    id: number;
    name: string;
    email: string;
    phone: number;
    gender: string;
    dob: Date;
    password: string;
    address?: string;
  }
  
  export interface IProduct {
    id:number;
    img: string;
    type: string;
    rating: number;
    title: string;
    price: number;
    cartValue: number;
    description?: string;
    owner?: string;
  }
