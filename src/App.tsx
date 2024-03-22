import ButtonComponent from "./Button"
import { useStore } from "./store"

export default function zustandApp(){
  const count = useStore(state => state.count)



  return(
    <>
      <p className="text-center">{count}</p>
      <ButtonComponent></ButtonComponent>
    </>
  )
} 