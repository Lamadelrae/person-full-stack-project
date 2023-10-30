import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import Button from "@/components/button/";
import FlatInput from "@/components/flatinput";
import { ICreatePersonRequest, IUpdatePersonRequest } from "@/contracts/person";
import { IPerson } from "@/models/person";
import {
  adaptFromGetPersonResponse,
  adaptFromUpdatePersonResponse,
} from "@/adapters/person";

import { post, put, get, getById, remove } from "@/services/person-service";

const IndexPage: React.FC = () => {
  const [name, setName] = useState("");
  const [birthDate, setBirthdate] = useState(new Date());
  const [address, setAddress] = useState("");
  const [people, setPeople] = useState<IPerson[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchPeople = async () => {
      const people = await get();
      const convertedPeople = people.map((person) =>
        adaptFromGetPersonResponse(person)
      );
      setPeople(convertedPeople);
    };

    fetchPeople();
  }, []);

  const handleSubmit = async () => {
    if (editingIndex !== null) {
      await update(editingIndex);
    } else {
      await add();
    }

    setName("");
    setBirthdate(new Date());
    setAddress("");
  };

  const update = async (index: number) => {
    const updatedPerson: IUpdatePersonRequest = {
      ...people[index],
      name,
      birthDate,
      address,
    };

    const response = await put(updatedPerson);
    const newPeople = [...people];
    newPeople[index] = adaptFromUpdatePersonResponse(response);

    setPeople(newPeople);
    setEditingIndex(null);
  };

  const add = async () => {
    const newPerson: ICreatePersonRequest = { name, birthDate, address };
    const person = await post(newPerson);
    const convertedPerson = adaptFromGetPersonResponse(person);
    setPeople([...people, convertedPerson]);
  };

  const handleEdit = async (index: number) => {
    const person = await getById(people[index].id);
    setName(person.name);
    setBirthdate(new Date(person.birthDate));
    setAddress(person.address);
    setEditingIndex(index);
  };

  const handleDelete = async (index: number) => {
    await remove(people[index].id);
    const newPeople = [...people];
    newPeople.splice(index, 1);
    setPeople(newPeople);
  };

  return (
    <div className={styles.form}>
      <div>
        <FlatInput
          label="Name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <FlatInput
          label="Birthdate"
          type="date"
          value={birthDate.toISOString().substr(0, 10)}
          onChange={(event) => setBirthdate(new Date(event.target.value))}
        />

        <FlatInput
          label="Address"
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />

        <Button
          text={editingIndex !== null ? "Save" : "Add"}
          onClick={handleSubmit}
        />
      </div>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.name}, {person.birthDate.toDateString()}, {person.address}
            <Button text="Edit" onClick={() => handleEdit(index)} />
            <Button text="Delete" onClick={() => handleDelete(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
