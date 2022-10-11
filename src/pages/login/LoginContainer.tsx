import { LoadingButton } from "@mui/lab";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { login } from "../../service/auth/AuthService";
import LoginRequest from "../../service/auth/models/Request/LoginRequest";
import AuthResponse from "../../service/auth/models/Response/AuthResponse";
import { useStore } from "../../stores/Store";
import pages from "../../utils/router/Pages";
import loginValidationSchema from "./ValidationSchema";

const form = {
    password: "",
    username: "",
} as LoginRequest;

const LoginContainer = () => {
    const { mutate } = login((e) => console.log("error", e));
    const navigation = useNavigate();

    const onSuccess = (response: AuthResponse) => {
        console.log("success");

        localStorage.setItem("jwt", response.jwt);

        navigation(pages.home);
    };

    const formik = useFormik({
        initialValues: { ...form },
        validationSchema: loginValidationSchema,
        onSubmit: (values) => {
            mutate(values, { onSuccess: onSuccess });
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormControl>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input
                    onChange={formik.handleChange}
                    id="username"
                    name="username"
                    error={
                        !!formik.errors.username && !!formik.touched.username
                    }
                />
                {!!formik.errors.username && !!formik.touched.username && (
                    <FormHelperText error={true}>
                        {formik.errors.username}
                    </FormHelperText>
                )}
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                    onChange={formik.handleChange}
                    id="password"
                    name="password"
                    type="password"
                    error={
                        !!formik.errors.password && !!formik.touched.password
                    }
                />
                {formik.errors.password && formik.touched.password && (
                    <FormHelperText error={true}>
                        {formik.errors.password}
                    </FormHelperText>
                )}
            </FormControl>
            <LoadingButton type="submit"> Login </LoadingButton>
        </form>
    );
};

export default LoginContainer;
