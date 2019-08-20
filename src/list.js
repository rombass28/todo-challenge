import React from "react";
import styled from "styled-components";

const mock = [
    {id:1, text:"i am the first task",status:"open"},
    {id:2, text:"i am the second task",status:"completed"},
    {id:3, text:"i am the third task",status:"removed"},
]

const ItemMock = ({id, text, status})=>{
    return <div> {text} </div>
}

const List = ({ items = mock }) => {

    return (
      <Box>
        <TaskList>
          {
            items.map(item => (
              <ListItem key={item.id}>
                  <ItemMock {...item} />
              </ListItem>
            ))
          }
        </TaskList>
      </Box>
    );
  };
  export default List;
 
 
  const Box = styled.div`
      background: white;
      height: 52vh;
      min-width: 30rem;
      border-radius: 0.2rem;
      overflow-x: hidden;
      overflow-y: scroll;
  `;
  const TaskList = styled.ul`
      list-style: none;
  `


  const ListItem = styled.li`
     
     /* text-decoration: ${props => props.isCompleted ? 'line-through' : 'azure'} */
     
     /* &:nth-child(even) {
      background: azure;
  } */

     /* &:nth-child(odd) {
       background: aliceblue;
  } */
  `
