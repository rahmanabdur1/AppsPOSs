"use client"
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import TablePagination from "./pagination";
import TableToolbar from "./toolbar";
import MainTable from "./table";
import { updatedData} from "./data";
import { defaultColumns } from "./column";


export default function TanStackTableDemo() {
  const table = useReactTable({
    data: updatedData,
    columns: defaultColumns,
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 5,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <TableToolbar table={table} />
      <MainTable table={table} />
      <TablePagination table={table} />
    </>
  );
}