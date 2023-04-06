import { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundry";

export default function RestWrapper({ children }) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<>loading</>}>{children}</Suspense>
    </ErrorBoundary>
  );
}
