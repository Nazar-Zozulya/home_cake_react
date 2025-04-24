export interface IAboutUsCard{
    title: string;
    description: string;
    image: string;
}


interface IError{
    status: 'error';
    message: string;
}

interface ISuccess<T>{
    status: 'succes';
    data: T;
}

export type Response<T> = IError | ISuccess<T>