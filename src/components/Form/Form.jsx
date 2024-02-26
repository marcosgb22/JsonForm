import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { object } from '@jsonforms/examples';
import { person } from '@jsonforms/examples';
import { dates } from '@jsonforms/examples';
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';
import { text } from '@fortawesome/fontawesome-svg-core';

const Form = ({tFormulario}) => {


  const customSwitch = (tFormulario) => {
    switch (tFormulario) {
      case 'object':
        return {
          schema: object.schema,
          uischema: object.uischema,
          initialData: object.data
        };
      case 'Persona':
        return {
          schema: person.schema,
          uischema: person.uischema,
          initialData: person.data
        };
      case 'Datos':
        return {
          schema: dates.schema,
          uischema: dates.uischema,
          initialData: dates.data
        };
      case 'Texto':
        return {
          schema: text.schema,
          uischema: text.uischema,
          initialData: text.data
        };    
      default:
        return {
          schema: person.schema,
          uischema: person.uischema,
          initialData: person.data
        };
    }
  };

  // Utiliza customSwitch para obtener los valores correspondientes
  const { schema, uischema, initialData } = customSwitch(tFormulario);


    

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