import { AdminRouter, AppRouter, ExampleRouter } from "../routers";

export const APPS = [
  {
    subdomain: "www",
    app: AppRouter,
    main: true,
  },
  {
    subdomain: "admin",
    app: AdminRouter,
    main: false,
  },
  {
    subdomain: "example",
    app: ExampleRouter,
    main: false,
  },
];
