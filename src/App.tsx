import AuthProvider from "./utils/auth/AuthProvider";

const App = () => {
    return (
        <AuthProvider>
            <div>content</div>
        </AuthProvider>
    );
};

export default App;
