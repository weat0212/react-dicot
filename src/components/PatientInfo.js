import React from 'react'


const patientInfo = {name: "Machi", birthday: "1999/01/01", age: 18, sex: "Female" }

function PatientInfo() {

  return (
    <>
    <div>病人名稱：{patientInfo.name}</div>
    <div>生日：{patientInfo.birthday}</div>
    <div>年齡：{patientInfo.age}</div>
    <div>性別：{patientInfo.sex}</div>
    </>
  )
}

export default PatientInfo