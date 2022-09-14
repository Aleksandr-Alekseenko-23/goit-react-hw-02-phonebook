import React from 'react';
import { List, Wrapper, Item, Span, Button, Img } from './Contacs.styled.js';
import Avatar from 'react-avatar';
import Delete from './../img/Delete.svg';

function Contacs({ contacts, onDelete }) {
  return (
    <Wrapper>
      <List>
        {contacts.map(({ name, number, id }) => {
          return (
            <Item key={id}>
              <Avatar size="25" name={name} round={true} />
              {name}:<Span>{number}</Span>
              <Button
                type="button"
                onClick={() => {
                  onDelete(id);
                }}
              >
                <Img src={Delete} alt="Delete" />
              </Button>
            </Item>
          );
        })}
      </List>
    </Wrapper>
  );
}

export default Contacs;
