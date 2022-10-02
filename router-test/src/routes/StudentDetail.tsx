import { useLocation } from "react-router-dom"

export default function StudentDetail() {
  /*
   * props가 전달이 되었는지 확인
   */
  const location = useLocation()
  console.log(location)
  const students = location.state.students;

  return (
    <>
      <div className="/studentlist/:id">
        <h1>Student Detail</h1>
        <div>
          <h2>이름 : {students.name}</h2>
          <h2>나이 : {students.age}</h2>
        </div>
      </div>
    </>
  )
}