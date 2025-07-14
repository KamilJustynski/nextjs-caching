import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';
import { revalidatePath, revalidateTag, unstable_noStore } from 'next/cache';


//!  revalidate data every 5 seconds
// export const revalidate = 5;

//! Force revalidation on every request in this file
// export const dynamic = 'force-dynamic';

export default async function MessagesPage() {
  //! Revalidation on every request only in this component
  // unstable_noStore();
  // const response = await fetch('http://localhost:8080/messages', {
  //   next:{
  //     tags: ['msg']
  //   }
  // });
  // const messages = await response.json();
 const messages = await getMessages();
//  revalidatePath('/messages')
 revalidateTag('msg');
  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
