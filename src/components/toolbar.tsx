import React, { useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Button, Input, Drawer, Text, ActionIcon, Select, Checkbox, Badge } from "rizzui";
import { PiFunnel, PiTextColumns } from "react-icons/pi";
import { type Table as ReactTableType } from "@tanstack/react-table";
import TrashIcon from "@/shared/icons/trash";

const statusOptions = [
  { label: "Paid", value: "Paid" },
  { label: "Pending", value: "Pending" },
  { label: "Draft", value: "Draft" },
];

interface TableToolbarProps<T extends Record<string, any>> {
  table: ReactTableType<T>;
}

export default function TableToolbar<TData extends Record<string, any>>({
  table,
}: TableToolbarProps<TData>) {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [isColumnDrawerOpen, setIsColumnDrawerOpen] = useState(false);

  return (
    <div className="flex items-center gap-2 justify-between w-full mt-5 mb-4 font-[family-name:var(--font-lexend)]">
      {/* Search Input */}
      <Input
        type="search"
        placeholder="Search by anything..."
        value={table.getState().globalFilter ?? ""}
        onClear={() => table.setGlobalFilter("")}
        onChange={(e) => table.setGlobalFilter(e.target.value)}
        inputClassName="h-9"
        clearable={true}
        prefix={<MagnifyingGlassIcon className="size-4" />}
      />

      <div className="flex items-center gap-3">
        {/* Filters Button */}
        <Button
          variant={"outline"}
          className="text-gray-500 h-9 px-3 border hover:border-orange-400 hover:text-orange-400 flex items-center"
          onClick={() => setIsFilterDrawerOpen(true)}
        >
          <PiFunnel className="me-1.5 h-[18px] w-[18px]" strokeWidth={1.7} />
          Filters
        </Button>

        {/* Columns Button */}
        <Button
          variant={"outline"}
          className="text-gray-500 h-9 px-3 border hover:border-orange-400 hover:text-orange-400 flex justify-center items-center"
          onClick={() => setIsColumnDrawerOpen(true)}
        >
          <PiTextColumns strokeWidth={3} className="size-6" />
        </Button>
      </div>

      {/* Filter Drawer */}
      <Drawer isOpen={isFilterDrawerOpen} onClose={() => setIsFilterDrawerOpen(false)} className="z-[9999]">
        <div className="flex flex-col h-full py-4 px-5">
          {/* Header */}
          <header className="flex items-center justify-between mb-4">
            <Text>Filters Customers</Text>
            <ActionIcon size="sm" variant="outline" onClick={() => setIsFilterDrawerOpen(false)}>
              <XMarkIcon className="h-auto w-5" strokeWidth={1.5} />
            </ActionIcon>
          </header>

          {/* Filter Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-1 gap-4">
              {/* Filter Fields */}
              <Input
                type="search"
                label="Company"
                placeholder="Enter company"
                value={table.getColumn("company")?.getFilterValue() ?? ""}
                onChange={(e) => table.getColumn("company")?.setFilterValue(e.target.value)}
              />

              <Input
                label="Designation"
                type="search"
                value={table.getColumn("designation")?.getFilterValue() ?? ""}
                placeholder="Enter designation"
                onChange={(e) => table.getColumn("designation")?.setFilterValue(e.target.value)}
              />

              <Input
                label="Department"
                type="search"
                placeholder="Enter department"
                value={table.getColumn("department")?.getFilterValue() ?? ""}
                onChange={(e) => table.getColumn("department")?.setFilterValue(e.target.value)}
              />

              <Input
                label="Industry"
                type="search"
                placeholder="Enter industry"
                value={table.getColumn("industry")?.getFilterValue() ?? ""}
                onChange={(e) => table.getColumn("industry")?.setFilterValue(e.target.value)}
              />

              <Input
                label="Country"
                type="search"
                placeholder="Enter country"
                value={table.getColumn("country")?.getFilterValue() ?? ""}
                onChange={(e) => table.getColumn("country")?.setFilterValue(e.target.value)}
              />

              <Input
                label="City"
                type="search"
                placeholder="Enter city"
                value={table.getColumn("city")?.getFilterValue() ?? ""}
                onChange={(e) => table.getColumn("city")?.setFilterValue(e.target.value)}
              />

              <Input
                label="State"
                type="search"
                placeholder="Enter state"
                value={table.getColumn("state")?.getFilterValue() ?? ""}
                onChange={(e) => table.getColumn("state")?.setFilterValue(e.target.value)}
              />

              <Select
                options={[{ label: "Individual", value: "Individual" }, { label: "Business", value: "Business" }]}
                value={table.getColumn("customerType")?.getFilterValue() ?? []}
                onChange={(e) => table.getColumn("customerType")?.setFilterValue(e)}
                placeholder="Customer Type"
                className="w-full"
                label="CustomerType"
              />

              <Select
                options={[
                  { label: "Retailer", value: "Retailer" },
                  { label: "Wholesaler", value: "Wholesaler" },
                  { label: "Dealer", value: "Dealer" },
                ]}
                value={table.getColumn("sellType")?.getFilterValue() ?? []}
                onChange={(e) => table.getColumn("sellType")?.setFilterValue(e)}
                placeholder="Sell Type"
                className="w-full"
                label="SellType"
              />

              <div className="gap-1 flex flex-col">
                <label className="block text-[14px] font-medium">Select Date</label>
                <div className="flex gap-2">
                  <input
                    type="date"
                    className="h-9 w-full border rounded-md px-2"
                    placeholder="Start Date"
                    value={table.getColumn("createDate")?.getFilterValue() ?? ""}
                    onChange={(e) => table.getColumn("createDate")?.setFilterValue(e.target.value)}
                  />
                  <input
                    type="date"
                    className="h-9 w-full border rounded-md px-2"
                    placeholder="End Date"
                    value={table.getColumn("createDate")?.getFilterValue() ?? ""}
                    onChange={(e) => table.getColumn("createDate")?.setFilterValue(e.target.value)}
                  />
                </div>
              </div>

              <Input
                label="Create By"
                type="search"
                placeholder="Enter created by"
                value={table.getColumn("createdBy")?.getFilterValue() ?? ""}
                onChange={(e) => table.getColumn("createdBy")?.setFilterValue(e.target.value)}
              />

              <Select
                label="Status"
                options={statusOptions}
                value={table.getColumn("status")?.getFilterValue() ?? []}
                onChange={(e) => table.getColumn("status")?.setFilterValue(e)}
                placeholder="Status..."
                className="w-full"
                getOptionValue={(option: { value: any }) => option.value}
                getOptionDisplayValue={(option: { value: string }) => renderOptionDisplayValue(option.value)}
                displayValue={(selected: string) => renderOptionDisplayValue(selected)}
                dropdownClassName="!z-20 h-auto"
                selectClassName="h-[38px] ring-0"
              />
            </div>
            {/* Clear Button */}
            <Button
              onClick={() => {
                table.resetGlobalFilter();
                table.resetColumnFilters();
              }}
              variant="flat"
              className="gap-2 w-full mt-2"
            >
              <TrashIcon className="size-4" /> Clear
            </Button>

            <Button
              onClick={() => setIsFilterDrawerOpen(false)}
              type="submit"
              className="w-full mt-2"
            >
              Submit
            </Button>
          </div>
        </div>
      </Drawer>

      {/* Column Drawer */}
      <Drawer isOpen={isColumnDrawerOpen} onClose={() => setIsColumnDrawerOpen(false)} className="z-[9999] w-96">
        <div className="flex flex-col h-full py-4 px-5">
          {/* Header */}
          <header className="flex items-center justify-between mb-4">
            <Text>Columns Visibility</Text>
            <ActionIcon size="sm" variant="outline" onClick={() => setIsColumnDrawerOpen(false)}>
              <XMarkIcon className="h-auto w-5" strokeWidth={1.5} />
            </ActionIcon>
          </header>

          {/* Column Visibility Options */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-1 gap-4">
              {table.getAllLeafColumns().map((column) => {
                // Disable only the "status" column
                const isDisabled = column.id === "status";

                return (
                  typeof column.columnDef.header === "string" &&
                  column.columnDef.header.length > 0 && (
                    <div
                      key={column.id}
                      className="flex flex-col border hover:border-orange-400 border-gray-300 rounded-md p-3 w-full"
                    >
                      <Checkbox
                        size="sm"
                        key={column.id}
                        label={<>{column.columnDef.header}</>}
                        checked={column.getIsVisible()} // Bind to visibility state
                        onChange={column.getToggleVisibilityHandler()} // Allow toggling
                        disabled={isDisabled} // Disable only "status"
                        iconClassName="size-4 translate-x-0.5"
                      />
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export function renderOptionDisplayValue(value: string) {
  switch (value.toLowerCase()) {
    case "pending":
      return (
        <div className="flex items-center">
          <Badge color="warning" renderAsDot />
          <Text className="ms-2 font-medium capitalize text-orange-dark">{value}</Text>
        </div>
      );
    case "paid":
      return (
        <div className="flex items-center">
          <Badge color="success" renderAsDot />
          <Text className="ms-2 font-medium capitalize text-green-dark">{value}</Text>
        </div>
      );
    case "draft":
      return (
        <div className="flex items-center">
          <Badge color="gray" renderAsDot />
          <Text className="ms-2 font-medium capitalize text-gray-dark">{value}</Text>
        </div>
      );
    default:
      return (
        <div className="flex items-center">
          <Badge color="gray" renderAsDot />
          <Text className="ms-2 font-medium capitalize text-gray-dark">{value}</Text>
        </div>
      );
  }
}
