import Box5 from "../components/Box5"
import Box2 from "../components/Box2"
import Box1 from "../components/Box1"
import Box3 from "../components/Box3"
import Box4 from "../components/Box4"
import Box6 from "../components/Box6"
import Box7 from "../components/Box7"
import Box8 from "../components/Box8"
import Box9 from "../components/Box9"
import Box10 from "../components/Box10"
import Footer from "../components/Footer"
import Form from "../components/Form"

const Index = () => {
  return (
    <div className="w-full  flex flex-col items-center">
      <div className="w-full max-w-[500px] overflow-hidden">
        <Box1 />
        <Box2 />
        <Box3 />
        <Box4 />
        <Box5 />
        <Box6 />
        <Box7 />
        <Box8 />
        <Box9 />
        <Box10 />
        <div className="w-full bg-[#8e9581] py-[20px]">
          <Form />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Index