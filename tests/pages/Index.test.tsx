import Home from "@/pages";
import { render, waitFor, screen, logRoles } from "@testing-library/react";
import { mockGeoLocation } from "../mocks/mockGeoLocation";
import { userEvent } from "@testing-library/user-event";

describe("Home page testing", () => {
    mockGeoLocation();
    beforeEach(() => {
        render(<Home />);
    });

    test("should show loading while async function is running", async () => {
        const button = screen.getByRole("button", { name: /search/i });
        await userEvent.click(button);
        const loading = await screen.findByRole("progressbar");
        await waitFor(() => {
            expect(loading).toBeInTheDocument();
        });
    });
});
