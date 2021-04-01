import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, Image, Header, Table } from "semantic-ui-react";
import { get } from "react-hook-form";

const Dogs = (props) => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    getDogs();
  }, []);

  const normalizeDogs = (data) => {
    let allIDS = data.map((d) => d);
    const sellerSet = new Set(allIDS);
    const sellerIDS = [...sellerSet];
    console.log(sellerSet);

    let normalizedDogs = sellerIDS.map((id) => {
      let dogs = data.filter((d) => d.seller_id === id);
      let name = `${dogs[0].name}`;
      let email = dogs[0].email;

      let sellerDogs = dogs.map((x) => {
        return {
          name: x.name,
          price: x.price,
          description: x.description,
          breed: x.breed,
        };
      });
      return { name, email, dogs: sellerDogs };
    });
    return normalizedDogs;
  };

  const getDogs = async () => {
    try {
      let res = await axios.get("/api/dogs");
      let normalizedDogs = normalizeDogs(res.data);
      setDogs(normalizedDogs);
    } catch (error) {
      alert("error");
      console.log(error);
    }
  };

  const renderDogs = () => {
    return dogs.map((seller) => {
      return (
        <List>
          {seller.dogs.map((seller) => {
            let { seller_id, name, email, dogs } = seller;
            return (
              <List.Item key={seller_id}>
                <List.Header>
                  {name} - {email}
                </List.Header>
                <List.Item>
                  <Table celled>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Breed</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {dogs.map((d) => (
                        <Table.Row key={d.id}>
                          <Table.Cell>${d.name}</Table.Cell>
                          <Table.Cell>{d.description}</Table.Cell>
                          <Table.Cell>{d.breed}</Table.Cell>
                          <Table.Cell>{d.price}</Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
                </List.Item>
              </List.Item>
            );
          })}
        </List>
      );
    });
  };
  return (
    <div>
      <h1>Dogs</h1>
      {renderDogs()}
    </div>
  );
};
export default Dogs;
