import React, { memo } from "react";
import { FieldValues, useForm } from "react-hook-form";

type InputLocationProps = {
    onSearchClick: (searchTerm: string) => Promise<void>;
};

const InputLocation = memo(function InputLocation({
    onSearchClick,
}: InputLocationProps) {
    const { register, handleSubmit } = useForm();

    const handleSearch = (data: FieldValues) => {
        onSearchClick(data.city);
    };
    return (
        <>
            <form
                className="flex gap-5 my-6 mx-5"
                onSubmit={handleSubmit(handleSearch)}
            >
                <input
                    type="text"
                    className="flex-1 rounded-lg p-2"
                    {...register("city")}
                />
                <button
                    className="p-3 bg-sky-300 text-white rounded-lg"
                    type="submit"
                >
                    Search
                </button>
            </form>
        </>
    );
});

export default InputLocation;
