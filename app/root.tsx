import type { MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

// THIS POINTS TO GENERATED APP.CSS:
import styles from "./styles/app.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "icon",
      href: "/favicon.ico",
      type: "image/png",
    },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Premier Plate Fitness",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
