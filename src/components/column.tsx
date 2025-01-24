import { type Person } from "./data";
        {/* Delete Action */}
import { Tooltip, Checkbox,} from "rizzui";
import { createColumnHelper } from "@tanstack/react-table";
import { AvatarCard, DateCell, getStatusBadge } from "./utils";
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const columnHelper = createColumnHelper<Person>();

export const defaultColumns = [
  columnHelper.accessor("id", {
    size: 50,
    header: ({ table }) => (
      <Checkbox
      className="ps-2"
      aria-label="Select all rows"
      checked={table.getIsAllPageRowsSelected()}
      onChange={() => table.toggleAllPageRowsSelected()}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="ps-2"
        aria-label="Select row"
        checked={row.getIsSelected()}
        onChange={() => row.toggleSelected()}
      />
    ),
  }),

  columnHelper.accessor("customerId", {
    size: 120,
    header: "Customer ID",
    cell: ({ row }) => <div className="text-gray-600  font-[family-name:var(--font-lexend)] text-[15px] font-medium">{row.original.customerId}</div>,
  }),
  columnHelper.accessor("customerName", {
    size: 280,
    header: "Customer",
    cell: ({ row: { original } }) => (
      <AvatarCard
        src={original.avatar}
        name={original.customerName}
        description={original.email.toLowerCase()}
      />
    ),
  }),
  columnHelper.accessor("company", {
    size: 180,
    header: "Company",
    cell: ({ row }) => <span className="font-medium   font-[family-name:var(--font-lexend)] text-gray-600 text-[15px]">{row.original.company}</span>,
  }),
  columnHelper.accessor("designation", {
    size: 170,
    header: "Designation",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.designation}</span>,
  }),
  columnHelper.accessor("department", {
    size: 160,
    header: "Department",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.department}</span>,
  }),
  columnHelper.accessor("industry", {
    size: 160,
    header: "Industry",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.industry}</span>,
  }),
  columnHelper.accessor("email", {
    size: 230,
    header: "Email",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.email}</span>,
  }),
  columnHelper.accessor("mobile", {
    size: 170,
    header: "Mobile",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.mobile}</span>,
  }),
  columnHelper.accessor("phone", {
    size: 170,
    header: "Phone",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.phone}</span>,
  }),
  columnHelper.accessor("fax", {
    size: 170,
    header: "Fax",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.fax}</span>,
  }),
  columnHelper.accessor("country", {
    size: 170,
    header: "Country",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.country}</span>,
  }),
  columnHelper.accessor("address", {
    size: 200,
    header: "Address",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.address}</span>,
  }),
  columnHelper.accessor("city", {
    size: 150,
    header: "City",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.city}</span>,
  }),
  columnHelper.accessor("state", {
    size: 150,
    header: "State",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.state}</span>,
  }),
  columnHelper.accessor("zipCode", {
    size: 150,
    header: "ZIP Code",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.zipCode}</span>,
  }),
  columnHelper.accessor("taxNumber", {
    size: 170,
    header: "Tax Number",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.taxNumber}</span>,
  }),
  columnHelper.accessor("gstNumber", {
    size: 170,
    header: "GST Number",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.gstNumber}</span>,
  }),
  columnHelper.accessor("customerType", {
    size: 170,
    header: "Customer Type",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.customerType}</span>,
  }),
  columnHelper.accessor("sellType", {
    size: 170,
    header: "Sell Type",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.sellType}</span>,
  }),
  columnHelper.accessor("total", {
    size: 150,
    header: "Total",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.total}</span>,
  }),
  columnHelper.accessor("paid", {
    size: 150,
    header: "Paid",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.paid}</span>,
  }),
  columnHelper.accessor("due", {
    size: 150,
    header: "Due",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.due}</span>,
  }),
  columnHelper.accessor("createdBy", {
    size: 170,
    header: "Created By",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.createDate}</span>,
  }),
  columnHelper.accessor("createDate", {
    size: 190,
    header: "Create Date",
    cell: ({ row }) => <DateCell date={new Date(row.original.createDate)} />,
  }),
  columnHelper.accessor("website", {
    size: 250,
    header: "Website",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.website}</span>,

  }),
  columnHelper.accessor("billingAddress", {
    size: 320,
    header: "Billing Address",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.billingAddress}</span>,
  }),
  columnHelper.accessor("shippingAddress", {
    size: 330,
    header: "Shipping Address",
    cell: ({ row }) => <span className="font-medium text-[15px] text-gray-600">{row.original.shippingAddress}</span>,
  }),

  columnHelper.accessor("status", {
    size: 150,
    header: "Status",
    cell: (info) => getStatusBadge(info.renderValue()!),
  }),


  columnHelper.accessor("actions", {
    header: "Actions",
    cell: ({ }) => (
      <div className="flex items-center gap-2">
        {/* View Action */}
        <Tooltip rounded="pill" content={"View Task"}>
          <button className="group border rounded px-2 py-2 flex items-center hover:border-orange-500">
            <EyeIcon className="w-4 h-auto text-gray-600 group-hover:text-orange-500" />
          </button>
        </Tooltip>
  
        {/* Edit Action */}
        <Tooltip rounded="pill" content={"Edit Task"}>
          <button className="group border rounded px-2 py-2 flex items-center hover:border-orange-500">
            <PencilIcon className="w-4 h-auto text-gray-600 group-hover:text-orange-500" />
          </button>
        </Tooltip>
  
        {/* Delete Action */}
        <Tooltip rounded="pill" content={"Delete Task"}>
          <button className="group border rounded px-2 py-2 flex items-center hover:border-orange-500">
            <TrashIcon className="w-4 h-auto text-gray-600 group-hover:text-orange-500" />
          </button>
        </Tooltip>
      </div>
    ),
  }),
 
    
];
