import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './Sidebar.css'
import AccountSelector from '../../components/AccountSelector/AccountSelector'
import ViewStatement from './ViewStatement/ViewStatement'

export default function Sidebar({ children }) {
  const history = useHistory()
  const [openStatementView, setOpenStatementView] = useState(false)

  const ViewStatementButton = () => (
    <section className="mx-3 pb-5">
      {openStatementView ? (<ViewStatement />) : <div />}
      <button type="button" onClick={() => setOpenStatementView(true)} className="btn btn-block btn-neo mt-4">View Statement</button>
    </section>
  )

  return (
    <div id="Sidebar" className="bg-bluegray px-4" style={{ height: '100%' }}>
      {
        (history.location.pathname.includes('/requests')
          || history.location.pathname.includes('/payday-loans')
          || history.location.pathname.includes('/payments'))
          ? null
          : <AccountSelector openStatementView={openStatementView} />
      }
      {openStatementView ? <div /> : children}
      {
        (history.location.pathname.includes('/requests')
          || history.location.pathname.includes('/payday-loans')
          || history.location.pathname.includes('/payments'))
          ? null
          : <ViewStatementButton />
      }
    </div>
  )
}
