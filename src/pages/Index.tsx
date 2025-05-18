import ClientBaza from "../components/Clientbaza"
import Floating from "../components/Floating"
import Footer from "../components/Footer"
import Box5 from "../components/Box5"
import Box2 from "../components/Box2"
import Variant from "../components/Variant"
import Box1 from "../components/Box1"
import Box3 from "../components/Box3"
import Box4 from "../components/Box4"

const Index = () => {
  return (
    <div className="w-full  flex flex-col items-center">
      <div className="w-full max-w-[500px]">
        <Box1 />
        <Box2 />
        <Box3 />
        <Box4 />
        <Box5 />
        <ClientBaza />
        <Variant />
        <Footer />

        <Floating />
      </div>
    </div>
  )
}

export default Index