import React from 'react';
import MaterialTable from 'material-table';

export default function UsefullTable({links}) {   // REMOVE this table or swap 
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Description', field: 'description' },
      { title: 'Type', field: 'type'},
      { title: 'Src', field: 'src'},
    ],
    data: [
      ...links
    ],
  });

  return (
    <MaterialTable
      title=""
      columns={state.columns}
      data={state.data}
      options={{
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF'
        },
        actionsColumnIndex: -1
      }}
      actions={[
        {
          icon: 'link',
          tooltip: 'go to source',
          onClick: (event, rowData) => 
          window.open(rowData.src, '_blank')
        }
      ]}
    />
  );
}