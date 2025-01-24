

import Link from 'next/link';
import {routes}  from '@/config/routes'
import { Button } from 'rizzui';
import PageHeader from '@/shared/page-header';
import { PiPlusBold } from 'react-icons/pi';;
import ExportButton from '@/app/shared/export-button';

import TanStackTableDemo from '@/components/MainTable';


// export const metadata = {
//   ('AllCustomer'),
// };

const pageHeader = {
  title: 'Customers',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Sass Poss',
    },
    {
      href: routes.eCommerce.orders,
      name: 'Customers',
    },
    {
      name: 'List',
    },
  ],
};

export default function AllCustomerPage() {
  return (
    <>
      <div className='flex-col flex lg:flex-row justify-between'>
        <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        </PageHeader>
        <div className=" flex items-center justify-between gap-3 @lg:mt-0">
          <ExportButton
            // fileName="order_data"
       
            // header="Order ID,Name,Email,Avatar,Items,Price,Status,Created At,Updated At"
          />
          <Link
            href={routes.eCommerce.createProduct}
            className="w-full @lg:w-auto"
          >     
           <Button as="span" className="bg-orange-500 text-white hover:bg-orange-600 @lg:w-auto">
              <PiPlusBold className="me-1.5 h-[17px]  font-[family-name:var(--font-lexend)]  w-[17px] " />
              Add Customer
            </Button>
          </Link>

        </div>
      </div>
      <TanStackTableDemo />
    </>
  );
}
