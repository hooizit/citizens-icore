import React from "react";
import { Table, Header, List, Icon, Button } from "semantic-ui-react";

export default function PersonList(props) {
  function handleClick(id, e) {
    console.log("--------" + id);
  }
  const persons = props.persons.map(person => (
    <Table.Row verticalAlign="top" key={person.id}>
      <Table.Cell>
        <Header>
          <Header.Content>
            {person.surname}
            <Header.Subheader>
              {person.firstname} {person.patronymic}
            </Header.Subheader>
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>{person.dateBirth}</Table.Cell>
      <Table.Cell>{person.gen}</Table.Cell>
      <Table.Cell>{person.address}</Table.Cell>
      <Table.Cell verticalAlign="top">
        {person.documents.map(document => (
          <List key={document.number}>
            <List.Item>
              {document.docType} №: {document.number}
            </List.Item>
          </List>
        ))}
      </Table.Cell>
      <Table.Cell>
        <Button icon color="teal">
          <Icon
            name="eye"
            title="Открыть"
            onClick={e => handleClick(person.id, e)}
          />
        </Button>
        <Button icon color="red">
          <Icon name="trash" title="Удалить" />
        </Button>
      </Table.Cell>
    </Table.Row>
  ));
  return (
    <Table striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ФИО</Table.HeaderCell>
          <Table.HeaderCell>Дата рождения</Table.HeaderCell>
          <Table.HeaderCell>Пол</Table.HeaderCell>
          <Table.HeaderCell>Место жительства</Table.HeaderCell>
          <Table.HeaderCell>Документы</Table.HeaderCell>
          <Table.HeaderCell>
            <Button icon color="green">
              <Icon name="plus" title="Добавить" />
            </Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{persons}</Table.Body>
    </Table>
  );
}
