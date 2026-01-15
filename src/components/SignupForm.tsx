import React, {useState} from "react";

export default function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [timezone, setTimezone] = useState('');


    const [errors, setErrors] = useState<{ email: string; password: string, firstName: string, lastName: string }>({
        email: '', password: '', firstName: '', lastName: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setErrors({email:"", password:"", firstName:"", lastName:"",});

        if (!email.includes("@")) {
            setErrors({...errors, email:"Must be a valid email address"});
            return;
        }
    }

    return (
            <form onSubmit={handleSubmit} className={"text-black flex flex-col gap-2 items-center"}>
                <input
                    type="email"
                    placeholder={"Email Address"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

            </form>
    );
}