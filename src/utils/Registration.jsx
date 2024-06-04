import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import { auth } from "./auth";
import { useTranslation } from "react-i18next";
import image from "../../public/contact1.jpg"

// eslint-disable-next-line react/prop-types
const Auth = ({ type }) => {
    const { t } = useTranslation("register")
    const schemaReg = yup.object().shape({
        email: yup
            .string()
            .email("Invalid email format")
            .required("Email is required"),
        password: yup
            .string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required")
            .matches(
                /(?=.*\d)(?=.*[A-Z])(?=.*\W).*/,
                "Password must contain at least one digit, uppercase letter, and special character"
            ),
    });

    const schemaLog = yup.object().shape({
        email: yup
            .string()
            .email("Invalid email format")
            .required("Email is required"),
        password: yup.string().required("Password is required"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(type === "login" ? schemaLog : schemaReg),
    });

    const [errorMessage, setErrorMessage] = useState(null);

    const onReg = async (data) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            console.log(userCredential.user); // Handle successful registration
        } catch (error) {
            console.error(error.message); // Handle registration errors
        }
    };

    const onLog = async (data) => {
        try {
            setErrorMessage(null);
            const userCredential = await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            console.log(userCredential.user); // Handle successful registration
        } catch (error) {
            // Handle Firebase errors and display user-friendly messages
            if (error) {
                setErrorMessage("Incorrect email or password");
            }
        }
    };

    return (
        <div className="py-40 container flex flex-col xl:flex-row items-center xl:items-start gap-10 xl:gap-0 justify-between text-gray">
            <img src={image} alt="" />
            <form
                onSubmit={handleSubmit(type === "login" ? onLog : onReg)}
                className=" flex flex-col items-center gap-5 w-1/2 h-full"
            >
                <div>
                    <h1 className="text-4xl">{t('h1')}</h1>
                </div>
                <div className="grid xl:grid-cols-2 grid-cols-1 gap-5 xl:gap-10">
                    <div className="flex flex-col gap-3 items-center">
                        <input
                            className="border border-[#f7c35f] text-[#f7c35f] placeholder:text-[#f7c35f] rounded-lg pl-5 py-3 px-10"
                            type="name"
                            placeholder={t('fullName')}
                            {...register("name")}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="name"
                            as="span"
                            className="text-red-600"
                        />
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                        <input
                            className="border border-[#f7c35f] text-[#f7c35f] placeholder:text-[#f7c35f] rounded-lg pl-5 py-3 px-10"
                            type="email"
                            placeholder="Email"
                            {...register("email")}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="email"
                            as="span"
                            className="text-red-600"
                        />
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                        <input
                            className="border border-[#f7c35f] text-[#f7c35f] placeholder:text-[#f7c35f] rounded-lg pl-5 py-3 px-10"
                            type=""
                            placeholder={t('telephone')}
                            {...register("phone")}
                        />
                        <ErrorMessage
                            errors={errors}
                            name="email"
                            as="span"
                            className="text-red-600"
                        />
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                        <input
                            className="border border-[#f7c35f] text-[#f7c35f] placeholder:text-[#f7c35f] rounded-lg pl-5 py-3 px-10"
                            type="password"
                            placeholder="Password"
                            {...register("password")}
                            autoComplete="flase"
                        />
                        <ErrorMessage
                            errors={errors}
                            name="password"
                            as="span"
                            className="text-red-600"
                        />
                    </div>
                </div>
                <span className="text-red-600 duration-300">{errorMessage}</span>
                <button className="text-white py-2 px-4 bg-[#f7c35f] rounded-full" type="submit">
                    {type === "login" ? "Login" : "Sign up"}
                </button>
            </form>
        </div>
    );
};

export default Auth;
