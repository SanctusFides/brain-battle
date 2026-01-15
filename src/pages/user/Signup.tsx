import Header from "../../components/header/Header.tsx";
import SignupForm from "../../components/SignupForm";
// interface UserInterface {
//     id: number;
//     firstName: string;
//     lastName: string;
//     email: string;
//     password: string;
//     repeatPassword: string;
//     phoneNumber?: string;
//     state?: string;
//     country?: string;
//     timezone? : string;
// };
//
// const formUser: UserInterface = {
//
// };


export default function Signup() {
    return (
        <div className={"flex flex-col gap-8"}>
            <Header />
            <div className={"bg-white w-1/2 max-h-full mx-auto"}>
                <SignupForm />
            </div>
        </div>
    );
}



