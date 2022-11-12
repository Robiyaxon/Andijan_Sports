import React from 'react';
import { useParams } from 'react-router-dom';

export const DokonSingle = (props) => {
  let { id } = useParams();
  const map2 = props.map.map(a => <>{id === a.id}
    <h1>{a.title}</h1>
  </>)
  return (
    <div>
      {map2}
    </div>
  );
};
