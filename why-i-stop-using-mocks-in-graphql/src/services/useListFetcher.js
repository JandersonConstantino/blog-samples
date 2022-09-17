import { useMemo } from "react";
import { useQuery, gql } from "@apollo/client";

export const QUERY = gql`
  query getList($description: String) {
    list_of_items(description: $description) {
      id
      description
    }
  }
`;

export function useListFetcher(variables, options) {
  const { data, error, loading } = useQuery(QUERY, {
    variables,
    ...options,
  });

  const items = useMemo(() => data?.list_of_items ?? [], [data]);

  return { items, error, loading };
}
