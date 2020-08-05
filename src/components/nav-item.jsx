/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from "react"

function NavItem(props) {
  const [open, setOpen] = useState(false)
  const navItemRef = useRef(null)

  const handleClickOutside = ({ target }) => {
    if (!navItemRef.current || !navItemRef.current.contains(target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, true)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true)
    }
  })

  return (
    <li className="nav-item" ref={navItemRef}>
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  )
}

export default NavItem
