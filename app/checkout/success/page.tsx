import { Suspense } from 'react';
import Success from '@/components/Success';

export default function SuccessPage() {
  return (
    <Suspense fallback={<p className="p-6">Loading...</p>}>
      <Success />
    </Suspense>
  );
}
