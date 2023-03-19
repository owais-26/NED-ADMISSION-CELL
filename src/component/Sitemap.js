import { createSitemap } from "react-router-sitemap-generator";
import routes from "./routes";
const sitemap = createSitemap({
  hostname: "'https://nedadmissioncell.com'",
  urls: routes,
});
sitemap.save("./public/sitemap.xml");
