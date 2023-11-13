import useLoading from "@/components/hooks/useLoading";
import { act, render, renderHook } from "@testing-library/react";

describe("useLoading Tests", () => {
    test("Should be always false when started", () => {
        const { result } = renderHook(useLoading);
        expect(result.current.isLoading).toBeFalsy();
    });
    test("Should be true after call the change state function", () => {
        const { result } = renderHook(useLoading);
        act(() => result.current.changeLoadingState());
        expect(result.current.isLoading).toBeTruthy();
    });
    test("Should be false after call the change state function 2 times", () => {
        const { result } = renderHook(useLoading);
        act(() => result.current.changeLoadingState());
        act(() => result.current.changeLoadingState());
        expect(result.current.isLoading).toBeFalsy();
    });
});
