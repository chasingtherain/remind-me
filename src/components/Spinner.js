import spinner from "../components/assets/blue_spinner.gif"

function Spinner() {
  return (
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '10%', display: 'block', margin: "auto", marginTop: "10%" }}
    />
  )
}

export default Spinner