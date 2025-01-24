export type Person = {
  id: string;
  customerId: string;
  customerName: string;
  company: string;
  designation: string;
  department: string;
  industry: string;
  email: string;
  mobile: string;
  phone: string;
  fax: string;
  country: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  taxNumber: string;
  gstNumber: string;
  customerType: string;
  sellType: string;
  total: number;
  paid: number;
  due: number;
  createdBy: string;
  createDate: string;
  website: string;
  billingAddress: string;
  shippingAddress: string;
  status: string;
  actions?: React.ReactNode; // Correct field name
  avatar: string;
};

export const updatedData: Person[] = [
  {
    id: "62447",
    customerId: "CUST001",
    customerName: "Francis Sanford MD",
    company: "Sanford Healthcare",
    designation: "CEO",
    department: "Management",
    industry: "Healthcare",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    email: "Marya.Barrow@yahoo.com",
    mobile: "123-456-7890",
    phone: "123-456-7891",
    fax: "123-456-7892",
    country: "USA",
    address: "123 Elm Street",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90001",
    taxNumber: "TAX12345",
    gstNumber: "GST67890",
    customerType: "Corporate",
    sellType: "Direct",
    total: 544,
    paid: 500,
    due: 44,
    createdBy: "Admin",
    createDate: "2023-10-01",
    website: "https://sanfordhealth.com",
    billingAddress: "123 Elm Street, Los Angeles, CA, 90001",
    shippingAddress: "456 Oak Street, Los Angeles, CA, 90002",
    status: "Paid",
    actions: "View Details", // Corrected field name
  },
  {
    id: "86740",
    customerId: "CUST002",
    customerName: "Lucia Kshlerin",
    company: "Kshlerin Consulting",
    designation: "Manager",
    department: "Finance",
    industry: "Consulting",
    email: "Mason_Davis4@yahoo.com",
    mobile: "321-654-0987",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    phone: "321-654-0988",
    fax: "321-654-0989",
    country: "Canada",
    address: "789 Pine Avenue",
    city: "Toronto",
    state: "ON",
    zipCode: "M5G 2C3",
    taxNumber: "TAX54321",
    gstNumber: "GST98765",
    customerType: "Individual",
    sellType: "Online",
    total: 560,
    paid: 0,
    due: 560,
    createdBy: "Admin",
    createDate: "2023-07-10",
    website: "https://kshlerinconsulting.ca",
    billingAddress: "789 Pine Avenue, Toronto, ON, M5G 2C3",
    shippingAddress: "789 Pine Avenue, Toronto, ON, M5G 2C3",
    status: "Pending",
    actions: "Send Reminder", // Corrected field name
  },

  {
    id: "80740",
    customerId: "CUST002",
    customerName: "Lucia Kshlerin",
    company: "Kshlerin Consulting",
    designation: "Manager",
    department: "Finance",
    industry: "Consulting",
    email: "Mason_Davis4@yahoo.com",
    mobile: "321-654-0987",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    phone: "321-654-0988",
    fax: "321-654-0989",
    country: "Canada",
    address: "789 Pine Avenue",
    city: "Toronto",
    state: "ON",
    zipCode: "M5G 2C3",
    taxNumber: "TAX54321",
    gstNumber: "GST98765",
    customerType: "Individual",
    sellType: "Online",
    total: 560,
    paid: 0,
    due: 560,
    createdBy: "Admin",
    createDate: "2023-07-10",
    website: "https://kshlerinconsulting.ca",
    billingAddress: "789 Pine Avenue, Toronto, ON, M5G 2C3",
    shippingAddress: "789 Pine Avenue, Toronto, ON, M5G 2C3",
    status: "Pending",
    actions: "Send Reminder", // Corrected field name
  },
  {
    id: "81740",
    customerId: "CUST002",
    customerName: "Lucia Kshlerin",
    company: "Google",
    designation: "Manager",
    department: "Finance",
    industry: "Consulting",
    email: "Mason_Davis4@yahoo.com",
    mobile: "321-654-0987",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    phone: "321-654-0988",
    fax: "321-654-0989",
    country: "Canada",
    address: "789 Pine Avenue",
    city: "Toronto",
    state: "ON",
    zipCode: "M5G 2C3",
    taxNumber: "TAX54321",
    gstNumber: "GST98765",
    customerType: "Individual",
    sellType: "Online",
    total: 560,
    paid: 0,
    due: 560,
    createdBy: "Admin",
    createDate: "2023-07-10",
    website: "https://kshlerinconsulting.ca",
    billingAddress: "789 Pine Avenue, Toronto, ON, M5G 2C3",
    shippingAddress: "789 Pine Avenue, Toronto, ON, M5G 2C3",
    status: "Pending",
    actions: "Send Reminder", // Corrected field name
  },

  {
    id: "86700",
    customerId: "CUST002",
    customerName: "Lucia Kshlerin",
    company: "Kshlerin Consulting",
    designation: "Manager",
    department: "Finance",
    industry: "Consulting",
    email: "Mason_Davis4@yahoo.com",
    mobile: "321-654-0987",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    phone: "321-654-0988",
    fax: "321-654-0989",
    country: "Canada",
    address: "789 Pine Avenue",
    city: "Toronto",
    state: "New work",
    zipCode: "M5G 2C3",
    taxNumber: "TAX54321",
    gstNumber: "GST98765",
    customerType: "Individual",
    sellType: "Online",
    total: 560,
    paid: 0,
    due: 560,
    createdBy: "Admin",
    createDate: "2023-07-10",
    website: "https://kshlerinconsulting.ca",
    billingAddress: "789 Pine Avenue, Toronto, ON, M5G 2C3",
    shippingAddress: "789 Pine Avenue, Toronto, ON, M5G 2C3",
    status: "Pending",
    actions: "Send Reminder", // Corrected field name
  },
  {
    id: "46740",
    customerId: "CUST002",
    customerName: "Lucia Kshlerin",
    company: "Kshlerin Consulting",
    designation: "Manager",
    department: "Finance",
    industry: "Consulting",
    email: "Mason_Davis4@yahoo.com",
    mobile: "321-654-0987",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    phone: "321-654-0988",
    fax: "321-654-0989",
    country: "Canada",
    address: "789 Pine Avenue",
    city: "Toronto",
    state: "ON",
    zipCode: "M5G 2C3",
    taxNumber: "TAX54321",
    gstNumber: "GST98765",
    customerType: "Individual",
    sellType: "Online",
    total: 560,
    paid: 0,
    due: 560,
    createdBy: "Admin",
    createDate: "2023-07-10",
    website: "https://kshlerinconsulting.ca",
    billingAddress: "789 Pine Avenue, Toronto, ON, M5G 2C3",
    shippingAddress: "789 Pine Avenue, Toronto, ON, M5G 2C3",
    status: "Pending",
    actions: "Send Reminder", // Corrected field name
  },
  {
    id: "36740",
    customerId: "CUST002",
    customerName: "Lucia Kshlerin",
    company: "Kshlerin Consulting",
    designation: "Manager",
    department: "Finance",
    industry: "Consulting",
    email: "Mason_Davis4@yahoo.com",
    mobile: "321-654-0987",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    phone: "321-654-0988",
    fax: "321-654-0989",
    country: "Canada",
    address: "789 Pine Avenue",
    city: "Toronto",
    state: "ON",
    zipCode: "M5G 2C3",
    taxNumber: "TAX54321",
    gstNumber: "GST98765",
    customerType: "Individual",
    sellType: "Online",
    total: 560,
    paid: 0,
    due: 560,
    createdBy: "Admin",
    createDate: "2023-07-10",
    website: "https://kshlerinconsulting.ca",
    billingAddress: "789 Pine Avenue, Toronto, ON, M5G 2C3",
    shippingAddress: "789 Pine Avenue, Toronto, ON, M5G 2C3",
    status: "Pending",
    actions: "Send Reminder", // Corrected field name
  },
  {
    id: "26740",
    customerId: "CUST002",
    customerName: "Lucia Kshlerin",
    company: "Kshlerin Consulting",
    designation: "Manager",
    department: "Finance",
    industry: "Consulting",
    email: "Mason_Davis4@yahoo.com",
    mobile: "321-654-0987",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    phone: "321-654-0988",
    fax: "321-654-0989",
    country: "Canada",
    address: "789 Pine Avenue",
    city: "Toronto",
    state: "ON",
    zipCode: "M5G 2C3",
    taxNumber: "TAX54321",
    gstNumber: "GST98765",
    customerType: "Individual",
    sellType: "Online",
    total: 560,
    paid: 0,
    due: 560,
    createdBy: "Admin",
    createDate: "2023-07-10",
    website: "https://kshlerinconsulting.ca",
    billingAddress: "789 Pine Avenue, Toronto, ON, M5G 2C3",
    shippingAddress: "789 Pine Avenue, Toronto, ON, M5G 2C3",
    status: "Pending",
    actions: "Send Reminder", // Corrected field name
  },
  {
    id: "16740",
    customerId: "CUST002",
    customerName: "Lucia Kshlerin",
    company: "Kshlerin Consulting",
    designation: "Manager",
    department: "Finance",
    industry: "Consulting",
    email: "Mason_Davis4@yahoo.com",
    mobile: "321-654-0987",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    phone: "321-654-0988",
    fax: "321-654-0989",
    country: "Canada",
    address: "789 Pine Avenue",
    city: "Toronto",
    state: "ON",
    zipCode: "M5G 2C3",
    taxNumber: "TAX54321",
    gstNumber: "GST98765",
    customerType: "Individual",
    sellType: "Online",
    total: 560,
    paid: 0,
    due: 560,
    createdBy: "Admin",
    createDate: "2023-07-10",
    website: "https://kshlerinconsulting.ca",
    billingAddress: "789 Pine Avenue, Toronto, ON, M5G 2C3",
    shippingAddress: "789 Pine Avenue, Toronto, ON, M5G 2C3",
    status: "Pending",
    actions: "Send Reminder", // Corrected field name
  },
  // Add more entries as needed
];
