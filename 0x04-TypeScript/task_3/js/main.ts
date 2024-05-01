/// <reference path="./crud.d.ts" />

import { RowID, rowElement } from './interface';
import * as CRUD from './crud';

const row: CRUD.RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
}

const newRowID: CRUD.RowID = CRUD.insertRow(row);
const UpdatedRow: RowElement = { age: 23, ...row };
