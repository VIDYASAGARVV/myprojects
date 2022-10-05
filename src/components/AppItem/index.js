// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl, projectUrl} = appDetails

  return (
    <li className="app-item">
      <img className="app-image" src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p>

      <button type="button" className="button">
        <a className="link" href={projectUrl}>
          Visit
        </a>
      </button>
    </li>
  )
}

export default AppItem
