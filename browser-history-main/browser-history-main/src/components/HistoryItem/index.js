import './index.css'

const HistoryItem = props => {
  const {searchDetails, onDeleteListItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = searchDetails
  const onClickDelete = () => {
    onDeleteListItem(id)
  }
  return (
    <li className="search-item-container">
      <p className="time">{timeAccessed}</p>
      <div className="history-list">
        <div className="history-item">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
        <button
          type="button"
          className="delete-button"
          testid="delete"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete icon"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
