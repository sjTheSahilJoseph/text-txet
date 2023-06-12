import React from 'react'

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode==='dark'?'dark':'light'} bg-${props.mode==='dark'?'dark':'light'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">textTxet</a>
        <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">Enable {`${props.mode==='dark'?'Light':'Dark'}`} Mode</label>
</div>
      </div>
    </nav>
  )
}
export default Navbar