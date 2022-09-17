import { graphql } from "msw";

const MOCK = [
  { id: 1, description: "One" },
  { id: 2, description: "Two" },
  { id: 3, description: "Three" },
];

const handlers = [
  graphql.query("getList", (req, res, ctx) => {
    const description = req?.variables?.description;
    let result = MOCK;

    if (description) {
      result = result.filter((x) => ~x.description.indexOf(description));
    }

    return res(ctx.data({ list_of_items: result }));
  }),
];

export default handlers;
