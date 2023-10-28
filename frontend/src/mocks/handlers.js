import { rest } from "msw";

const baseURL = "/api";

export const handlers = [
  rest.get(`${baseURL}/dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 2,
        username: "mariana",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 2,
        profile_image: "https://res.cloudinary.com/dxajyjfpw/image/upload/v1/media/../default_profile_gpevq4"
      })
    );
  }),
  rest.post(`${baseURL}/dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];