import { currentUser } from '@clerk/nextjs/server';
import { SignOutButton } from "@clerk/nextjs";
import { redirect } from 'next/navigation';

export default async function Page() {
  const user = await currentUser();

  if (!user) {
    redirect('/sign-in');
  }

  return <div>Hello {user?.firstName}<SignOutButton /></div>;
}