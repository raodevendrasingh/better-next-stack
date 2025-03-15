import { Hono } from "hono";

const app = new Hono()
	.get("/", (c) => c.json("Hello, World!"))
	.get("/:id", (c) => c.json(`Hello, ${c.req.param("id")}!`));

export default app;
