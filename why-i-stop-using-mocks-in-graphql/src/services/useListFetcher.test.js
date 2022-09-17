import { renderHook, waitFor } from "@testing-library/react";
import { useListFetcher } from "./useListFetcher";

// importando o nosso novo provider
import { MockProvider } from "mocks/MockProvider";

// importando as chamadas para inicializar, resetar e parar os servidor
import "mocks/use-server";

describe("useListFetcher", () => {
  it("items must return an array with fetched items", async () => {
    // Arrange
    const { result } = createHook();

    // Act
    // Dessa vez não teve ações disparadas pelo teste

    // Assert
    await waitFor(() => {
      expect(result.current.items.length).toBeGreaterThan(0);
    });
  });

  it("items must be filtered by description variable", async () => {
    // Arrange
    const description = "wo";
    const expectedResult = [{ id: 2, description: "Two" }];
    const { result, rerender } = createHook();

    // Act
    await waitFor(() => {
      expect(result.current.items).toHaveLength(3);
    });

    rerender({ description });

    // Assert
    await waitFor(() => {
      expect(result.current.items).toHaveLength(1);
    });
    expect(result.current.items).toEqual(expectedResult);
  });

  it("items must be an empty array when items not found with description", async () => {
    // Arrange
    const description = "Xpto";
    const expectedResult = [];
    const { result, rerender } = createHook();

    // Act
    await waitFor(() => {
      expect(result.current.items).toHaveLength(3);
    });

    rerender({ description });

    // Assert
    await waitFor(() => {
      expect(result.current.items).toHaveLength(0);
    });
    expect(result.current.items).toEqual(expectedResult);
  });
});

const createHook = ({ variables, options } = {}) =>
  renderHook((a, b) => useListFetcher(a, b), {
    initialProps: {
      variables,
      options,
    },
    wrapper: ({ children }) => <MockProvider>{children}</MockProvider>,
  });
