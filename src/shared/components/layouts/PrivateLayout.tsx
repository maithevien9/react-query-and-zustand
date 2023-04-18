import type { ReactWithChild } from "shared/types/app";

function PrivateLayout({ children }: ReactWithChild) {
  return <div className="min-h-full h-full w-full">{children}</div>;
}

export default PrivateLayout;
