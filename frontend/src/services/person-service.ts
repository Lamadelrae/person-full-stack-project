import {
  ICreatePersonRequest,
  ICreatePersonResponse,
  IGetPersonResponse,
  IUpdatePersonRequest,
  IUpdatePersonResponse,
} from "@/contracts/person";

const getUrl = () => process.env.NEXT_PUBLIC_API_URL + "/person";

export const post = async (
  person: ICreatePersonRequest
): Promise<ICreatePersonResponse> => {
  try {
    const response = await fetch(getUrl(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(person),
    });

    if (!response.ok) {
      throw new Error("Failed to post person");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const get = async (): Promise<IGetPersonResponse[]> => {
  try {
    const response = await fetch(getUrl(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get people");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const getById = async (id: string): Promise<IGetPersonResponse> => {
  try {
    const response = await fetch(`${getUrl()}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to get person with id ${id}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const put = async (
  person: IUpdatePersonRequest
): Promise<IUpdatePersonResponse> => {
  try {
    const response = await fetch(`${getUrl()}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });

    if (!response.ok) {
      throw new Error(`Failed to update person with id ${person.id}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const remove = async (id: string): Promise<void> => {
  try {
    const response = await fetch(`${getUrl()}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete person with id ${id}`);
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
