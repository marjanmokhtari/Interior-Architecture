
import Firstrow from "./firstRow/firstrow";
import Secendrow from "./secendrow/Secendrow";
import Thirdrow from "./Thirdrow/Thirdrow";
import Fourthrow from "./fouthrow/Fourthrow";
import Fiverow from "./fiverow/Fiverow";
import Sixrow from "./sixrow/Sixrow";
export default function Home() {
  return (
    <section className=" w-full">
      <Firstrow></Firstrow>
      <Secendrow></Secendrow> 
      <Thirdrow></Thirdrow>
       <Fourthrow></Fourthrow>
      <Fiverow></Fiverow>
      <Sixrow></Sixrow> 
    </section>
  )
}
