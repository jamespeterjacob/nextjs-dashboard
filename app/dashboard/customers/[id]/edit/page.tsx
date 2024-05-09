import Form from '@/app/ui/customers/edit-form';
import Breadcrumbs from '@/app/ui/customers/breadcrumbs';
//import { fetchCustomers } from '@/app/lib/data';
import { fetchCustomerById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [customers] = await Promise.all([
        fetchCustomerById(id),
        fetchCustomers(),
      ]);
 
      if (!customers) {
        notFound();
      }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Edit Customer',
            href: `/dashboard/customers/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form customers={customers} invoice={{
              id: '',
              customer_id: '',
              amount: 0,
              status: 'pending'
          }} />
    </main>
  );
}