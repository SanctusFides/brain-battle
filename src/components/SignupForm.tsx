import React, {useState} from "react";

export default function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [state, setState] = useState('');


    const [errors, setErrors] = useState<{ email: string; password: string, firstName: string, lastName: string }>({
        email: '', password: '', firstName: '', lastName: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setErrors({email:"", password:"", firstName:"", lastName:"",});

        if (!email.includes("@")) {
            setErrors({...errors, email:"Must be a valid email address"});
        }
    }

    return (
            <form onSubmit={handleSubmit} className={"text-black flex flex-col gap-2 items-center m-6 mt-6"}>
                <h2 className={"font-semibold text-3xl mb-4"}>Create New Account</h2>
                <div className="flex min-w-full justify-between">
                    <span className={"w-1/10"}> </span>
                    <label htmlFor="email" className={"text-red-800 font-semibold"}>
                        Email Address*
                    </label>
                    <input
                        type="email"
                        value={email}
                        id={"email"}
                        onChange={(e) => setEmail(e.target.value)}
                        className={"border rounded flex-grow max-w-1/2 justify-self-end position:absolute"}
                        required={true}
                    />
                </div>
                {errors.email && <div className="text-red-900">{errors.email}</div>}
                <div className={"flex min-w-full justify-between"}>
                    <span className={"w-1/10"}> </span>
                    <label htmlFor={"password"} className={"text-red-800 font-semibold"}>
                        Password*
                    </label>
                    <input
                        type={"password"}
                        value={password}
                        id={"password"}
                        onChange={(e) => setPassword(e.target.value)}
                        className={"border rounded flex-grow max-w-1/2"}
                        required={true}
                    />
                </div>
                <div className={"flex min-w-full justify-between"}>
                    <span className={"w-1/10"}> </span>
                    <label htmlFor={"repeatPassword"} className={"text-red-800 font-semibold"}>
                        Repeat Password*
                    </label>
                    <input
                        type={"password"}
                        value={repeatPassword}
                        id={"repeatPassword"}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        className={"border rounded flex-grow max-w-1/2"}
                        required={true}
                    />
                </div>
                <div className="flex min-w-full justify-between">
                    <span className={"w-1/10"}> </span>
                    <label htmlFor="firstName" className={"text-red-800 font-semibold"}>
                        First Name*
                    </label>
                    <input
                        type="text"
                        value={firstName}
                        id="firstName"
                        onChange={(e) => setFirstName(e.target.value)}
                        className={"border rounded flex-grow max-w-1/2 justify-self-end position:absolute"}
                        required={true}
                    />
                </div>
                <div className="flex min-w-full justify-between">
                    <span className={"w-1/10"}> </span>
                    <label htmlFor="lastName" className={"text-red-800 font-semibold"}>
                        Last Name*
                    </label>
                    <input
                        type="text"
                        value={lastName}
                        id="lastName"
                        onChange={(e) => setLastName(e.target.value)}
                        className={"border rounded flex-grow max-w-1/2 justify-self-end position:absolute"}
                        required={true}
                    />
                </div>
                <div className="flex min-w-full justify-between">
                    <span className={"w-1/10"}> </span>
                    <label htmlFor="phoneNumber" className={""}>
                        Phone Number
                    </label>
                    <input
                        type="text"
                        value={phoneNumber}
                        id="phoneNumber"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className={"border rounded flex-grow max-w-1/2 justify-self-end position:absolute"}
                    />
                </div>


                <div className={"flex min-w-full justify-center gap-14"}>
                    <h4 className={"text-red-800 font-semibold"}>
                        * Indicates required info
                    </h4>
                    <button type={"submit"} className={"bg-[#00394d] text-[#ffb400] p-2"}>Create Account</button>
                </div>
            </form>
    );
}