import React from "react";
import { FormProvider, useForm } from "react-hook-form";

type Props = {
    children: React.ReactNode
}

export const HookFormProvider: React.FC<Props> = ({ children }: Props) => {
    const form = useForm();

    return (
        <FormProvider {...form}>

            {children}
        </FormProvider>
    )
}