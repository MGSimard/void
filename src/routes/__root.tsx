import { createRootRoute, Outlet } from "@tanstack/react-router";
import { ThemeToggle } from "@/_components/ThemeToggle";
import { Header } from "@/_components/Header";
import { Toaster } from "sonner";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <ThemeToggle />
      <div id="screen-glow"></div>
      <Toaster />
    </>
  ),
});
