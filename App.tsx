import { FC, useState } from "react"
import axios from "axios"
import { User } from "./components/Users"
import { AppProps, Users } from "./App.types"

const App: FC<AppProps> = ({ title }) => {
  const [users, setUsers] = useState<Users[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');

  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       setIsLoading(true);
  //       const { data } = await axios.get('https://randomuser.me/api/?results=10');
  //       console.log(data);
  //       setUsers(data.results);
  //     } catch (error) {
  //       console.log(error)
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   getUsers();
  // }, [])

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setUsername(event.target.value);
};
  
  const handleClick = async () => {
     try {
        setIsLoading(true);
        const { data } = await axios.get('https://randomuser.me/api/?results=10');
        // console.log(data);
        setUsers(data.results);
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false);
      }
  }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleClick}>Show Users</button>
      <input type='text' onChange={handleChange} />
      <h4>{username}</h4>
      {isLoading && <p>Loading...</p>}
      <ul>
        {users.map(({ login, name, email }) => {
          return (
            <User key={login.uuid} name={name} email={email} />
          )
        })}
      </ul>
    </div>
  )
}

export default App
