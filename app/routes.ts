// Details on routing: https://reactrouter.com/start/framework/routing
import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "./routes/about.tsx"),
    route("education", "./routes/education.tsx"),
    route("projects", "./routes/projects.tsx"),
    route("work", "./routes/work.tsx"),
    route("blog", "./routes/blog.tsx"),
    route("contact", "./routes/contact.tsx"),
] satisfies RouteConfig;
