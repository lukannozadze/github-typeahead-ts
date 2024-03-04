import { ReactNode } from "react"
import { CardContainer } from "../ui/3d-card";
type PropsType = {
    children:ReactNode
}
export default function Layout({children}:PropsType) {
    return (
      <CardContainer className="py-16 flex justify-center items-center">
      <section className="w-[740px] h-[500px] bg-[#1E2A47]  rounded-lg">
          {children}
      </section>
      </CardContainer>
    )
  }