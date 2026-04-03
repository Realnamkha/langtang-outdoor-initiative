// app/booking/page.tsx

import { Suspense } from "react";
import BookingForm from "./BookingForm"; // move all the existing code here

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#060d14]">
          <div className="text-sm" style={{ color: "rgba(232,244,251,0.35)" }}>
            Loading…
          </div>
        </div>
      }
    >
      <BookingForm />
    </Suspense>
  );
}
