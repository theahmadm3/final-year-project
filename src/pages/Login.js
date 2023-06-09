import IdInput from "No/components/IdInput";
import "tachyons";
import { students } from "No/data/students";
import { useState } from "react";
import { useRouter } from "next/router";
import { instructors } from "No/data/instructors";

function Login() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("")
    const router = useRouter();
    const handleChange = (event) => {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            setId(event.target.value);
        }
        console.log(event.target.value);
    };
    const submitForm = (e) => {
        e.preventDefault();
        const student = students.find((student) => { 
            return student.id === Number(id) && student.password === password
        });
        const instructor = instructors.find((instructor) => instructor.id === Number(id) && instructor.password === password);
        console.log(student)
        console.log(instructor)
        localStorage.setItem('user', JSON.stringify(student ?? instructor))
        if (student) {
            router.push("/User");
        }
        else if(instructor) {
            router.push("/Instructor");
        } else {
            alert("Incorrect ID or password");
        }
    }
    
    return (
        <form onSubmit={submitForm} className="w-40 bg-white-80 center mb2 mt5">
            <div className="flex justify-center bn shadow-1 pa4 flex-column">
                <h3 className="tc gray mb3"> Sign In to your portal </h3>
                <div className="flex flex-row mb3 justify-around ">
                    <button disabled className="user shadow-1 grow pointer white bg-blue bn pa2">Student</button>
                    <button disabled className="user shadow-1 grow pointer white bg-blue bn pa2">Instructor</button>
                </div>
                <IdInput handleChange={handleChange} />
                <input
                    type="password" name="password"
                    placeholder="Your Password"
                    className="pa2 shadow-3 tc bn mt1 mb4 grow"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button
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
