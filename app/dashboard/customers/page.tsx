import Pagination from '@/app/ui/customers/pagination';
import Search from '@/app/ui/search';
//import Table from '@/app/ui/customers/table';
import { CreateCustomer } from '@/app/ui/customers/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchCustomers } from '@/app/lib/data';
import Image from 'next/image';
import { customers } from '@/app/lib/placeholder-data';
 
export default async function Page() {
  
  //const custs = await fetchCustomers();

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
       {/*  {custs.map((customers) =>
      <div key={customers.id}>{customers.name}</div> 
      )} */}
      </div>
    </div>
  );
}