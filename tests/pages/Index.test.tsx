import Home from "@/pages";
import { render, waitFor, screen } from "@testing-library/react";
import { mockGeoLocation } from "../mocks/mockGeoLocation";
import { userEvent } from "@testing-library/user-event";

jest;

describe("Home page testing", () => {
    beforeEach(() => {
        mockGeoLocation();
        render(<Home />);
    });

    test("should show loading while async function is running", async () => {
        const button = screen.getByRole("button", { name: /search/i });
        await userEvent.click(button);
        const loading = screen.queryByText(/loading/i);
        await waitFor(() => {
            expect(loading).toBeInTheDocument();
        });
    });
});
