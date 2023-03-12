import './index.css'

const AppItem = props => {
  const {AppDetails} = props
  const {appName, imageUrl} = AppDetails

  return (
    <li className="App-container">
      <img className="img-width-app" src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
