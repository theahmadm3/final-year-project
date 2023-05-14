import IdInput from "No/components/IdInput";



function Login() {
    return (
        <form className="w-40 bg-white-70 center mb2 mt5">
            <div className="flex justify-center bn shadow-1 pa4 flex-column">
                <h3 className="tc gray mb3"> Sign In to your portal </h3>
                <div className="flex flex-row mb3 justify-around ">
                    <button disabled className="user shadow-1 grow pointer white bg-blue bn pa2">Student</button>
                    <button disabled className="user shadow-1 grow pointer white bg-blue bn pa2">Instructor</button>
                </div>
                <IdInput />
                <input
                    type="password" name="password"
                    placeholder="Your Password"
                    className="pa2 shadow-3 tc bn mt1 mb4 grow"
                />
                <button
                    disabled
                    className="bg-blue white pa2 bn shadow-1 mb2 grow center pointer"
                >
                    Sign In
                </button>
                <p className="pointer f6 pa2 tc link dim">
                    Forgot your password?
                </p>
                <p className="f7 center"> Project 2022 - 2023 </p>
            </div>
        </form>
    );
}




export default Login;
