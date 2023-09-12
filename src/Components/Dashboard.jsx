import { useSelector } from "react-redux";

function Dashboard() {

  const { info : { alias }} = useSelector((state) => state.user);
  console.log(alias)
  return (
        <h2>Hello onboard {alias} 🤩🤩!!</h2>
  )
}

export default Dashboard