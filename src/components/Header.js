import PropTypes from 'prop-types'

function Header({title}) {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <button className='btn'>Add</button>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}
 
Header.propTypes = {
  title: PropTypes.string,
}

export default Header