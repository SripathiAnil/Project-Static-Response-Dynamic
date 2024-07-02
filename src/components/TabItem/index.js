import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const updateButton = () => {
    clickTabItem(tabId)
  }

  const activeClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeClassName}`}
        onClick={updateButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
