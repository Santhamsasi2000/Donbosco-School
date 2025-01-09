import Entrance from "./Entrance"
import ProcessDetails from "./ProcessDetails"
import ReqDocuments from "./ReqDocuments"

const AdmissionProcess = () => {
  return (
    <section className="p-3 p-sm-5">
      <ProcessDetails/>
      <Entrance/>
      <ReqDocuments/>
    </section>
  )
}

export default AdmissionProcess
