import {
  ICreatePersonResponse,
  IGetPersonResponse,
  IUpdatePersonResponse,
} from "@/contracts/person";
import { IPerson } from "@/models/person";

export const adaptFromGetPersonResponse = (
  response: IGetPersonResponse
): IPerson => {
  return {
    id: response.id,
    name: response.name,
    birthDate: new Date(response.birthDate),
    address: response.address,
  };
};

export const adaptFromCreatePersonResponse = (
  response: ICreatePersonResponse
): IPerson => {
  return {
    id: response.id,
    name: response.name,
    birthDate: new Date(response.birthDate),
    address: response.address,
  };
};

export const adaptFromUpdatePersonResponse = (
  response: IUpdatePersonResponse
): IPerson => {
  return {
    id: response.id,
    name: response.name,
    birthDate: new Date(response.birthDate),
    address: response.address,
  };
};
