import { APPS } from "./constants";

export const getApp = () => {
  //log the hostname
  console.log(window.location.hostname);

  const subdomain = getSubdomain(window.location.hostname);
  console.log(subdomain);


  //find the main configuration entry
  const main = APPS.find((app) => app.main);
  if (!main) throw new Error("Muust have main app");
 
  //send main app for localhost:300, no subdomain
  if (subdomain === "") return main.app;

  //find the app for the given subdomain
  const app = APPS.find((app) => subdomain === app.subdomain);
  if (!app) return main.app;
    
  return app.app;
};

const getSubdomain = (location: string) => {
  const locationParts = location.split(".");

  let sliceTill = -2;

  //for localhost
  const isLocalHost = locationParts.slice(-1)[0] === "localhost";
  if (isLocalHost) sliceTill = -1;

  return locationParts.slice(0, sliceTill).join("");
};
