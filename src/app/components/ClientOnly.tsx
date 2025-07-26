"use client";

import React from "react";
import { ReactNode } from "react";
import dynamic from "next/dynamic";

interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Client-only component that prevents hydration mismatches
 * by only rendering its children on the client side
 */
function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = React.useState(false);

  // Update state once component is mounted (client-side)
  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  // If not mounted yet, render fallback or nothing
  if (!hasMounted) {
    return <>{fallback}</>;
  }

  // When mounted, render children
  return <>{children}</>;
}

// Export as a default dynamic import with SSR disabled
export default dynamic(() => Promise.resolve(ClientOnly), { ssr: false });
