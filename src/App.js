import React from "react"

import Navbar from "components/nav-bar"
import NavItem from "components/nav-item"
import DropdownMenu from "components/dropdown-menu"

import { ReactComponent as BellIcon } from "assets/icons/bell.svg"
import { ReactComponent as MessengerIcon } from "assets/icons/messenger.svg"
import { ReactComponent as CaretIcon } from "assets/icons/caret.svg"
import { ReactComponent as PlusIcon } from "assets/icons/plus.svg"

function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  )
}

export default App
