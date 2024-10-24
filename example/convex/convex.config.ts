import { defineApp } from "convex/server";
import aggregate from "@convex-dev/aggregate/convex.config";

const app = defineApp();
app.use(aggregate, { name: "aggregateByScore" });
app.use(aggregate, { name: "aggregateScoreByUser" });
app.use(aggregate, { name: "music" });
app.use(aggregate, { name: "photos" });
app.use(aggregate, { name: "stats" });

export default app;
