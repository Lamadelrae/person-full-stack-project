export interface ICreatePersonRequest {
  name: string;
  birthDate: Date;
  address: string;
}

export interface ICreatePersonResponse {
  id: string;
  name: string;
  birthDate: Date;
  address: string;
}

export interface IGetPersonResponse {
  id: string;
  name: string;
  birthDate: Date;
  address: string;
}

export interface IUpdatePersonRequest {
  id?: string;
  name: string;
  birthDate: Date;
  address: string;
}

export interface IUpdatePersonResponse {
  id: string;
  name: string;
  birthDate: Date;
  address: string;
}