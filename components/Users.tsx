import { FC } from "react"
import { Name } from "../App.types"

interface UserProps {
    name: Name;
    email: string;
}

export const User: FC<UserProps> = ({ name, email}) => {
    return (
        <li>
            <h3>Name: {name.first} {name.last}</h3>
            <h4>Email: {email}</h4>
            <hr />
        </li>
    )
}