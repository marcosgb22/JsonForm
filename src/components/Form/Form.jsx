import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { person } from '@jsonforms/examples';
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';

const Form = () => {

    const schema = person.schema;
    const uischema = person.uischema;
    const initialData = person.data;

  const [data, setData] = useState(initialData);
  return (

      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, errors }) => setData(data)}
      />

  );
}
export default Form;