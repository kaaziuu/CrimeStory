import LoginRequest from "./models/Request/LoginRequest";
import AuthResponse from "./models/Response/AuthResponse";

export const Login = (loginRequest: LoginRequest): AuthResponse => {
    return { jwt: "test" };
};
