import { Spinner } from ".";

export interface LoaderProps {
  message?: string;
}

export const Loader = ({ message = "Loading..." }: LoaderProps) => (
  <div className="flex h-screen flex-col items-center justify-center">
    <Spinner className="size-10" />
    <p>{message}</p>
  </div>
);
