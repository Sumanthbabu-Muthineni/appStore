// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const isActiveClassName = isActive ? 'btn-selection' : ''

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-Item">
      <button
        className={`category-btn ${isActiveClassName} `}
        type="button"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
