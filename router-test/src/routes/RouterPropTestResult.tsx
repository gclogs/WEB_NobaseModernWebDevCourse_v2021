interface propTypes {
  location: {
    state: {
      menu: {
        name: string,
        price: string
      }
    }
  }
}

export default function RouterPropTestResult(props: propTypes) {
  console.log(props)
  return(
    <>
      <h1>Router Prop Test Result</h1>
      <p>Success</p>
    </>)
}