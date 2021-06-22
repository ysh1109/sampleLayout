import React from 'react'
import {AgGridReact} from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
const Table=()=> {
    const data = [
        {name:'Dan',age:25},
        {name:'Dans',age:15},
        {name:'Dana',age:28},
        {name:'Danw',age:32},
        {name:'Danq',age:28},


    ]
    const columns = [
        {
            headerName: "Name",
            field:'name',
           
        },
        {
            headerName:'Age',
            field:'age',
        }

    ]
    const defaultColDef = {
        sortable:true,
        editable:true,
        filter:true
    }

    let gridApi;
    const onGridReady = (params) => {
        gridApi=params.api
    }
    const onExportClick = () => {
        gridApi.exportDataAsCsv()
    }
    return (
        <div>
            <button onClick={()=>onExportClick()}>Export</button>
        <div  className="ag-theme-alpine" style={{ height: 400, flex:1,}}>
            <AgGridReact  rowData={data} columnDefs={columns} defaultColDef={defaultColDef}
            onGridReady={onGridReady}/>
        </div>
        
        </div>
    )
}

export default Table
