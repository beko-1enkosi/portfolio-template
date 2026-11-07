import { createFileRoute, redirect } from "@tanstack/react-router";

// Retain old links without retaining the original template's projects.
export const Route = createFileRoute("/work")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "work", replace: true });
  },
  component: () => null,
});
