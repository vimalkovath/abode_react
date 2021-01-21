import React from 'react'
import './Navigation.css'
import NavCard from './NavCard/NavCard'

import AccountsIcon from '../../assets/icons/navigation/accounts.svg'
import BeneficiaryTransfersIcon from '../../assets/icons/navigation/beneficiary-transfers.svg'
import RequestsIcon from '../../assets/icons/navigation/requests.svg'
import PaymentsIcon from '../../assets/icons/navigation/payments.svg'
import LoansIcon from '../../assets/icons/navigation/loans.svg'
import DepositsIcon from '../../assets/icons/navigation/deposits.svg'
import PaydayLoanIcon from '../../assets/icons/navigation/payday-loan.svg'
import MobileIcon from '../../assets/icons/navigation/mobile.svg'
import BranchIcon from '../../assets/icons/navigation/branch.svg'
import QuickPayIcon from '../../assets/icons/navigation/quick-pay.svg'
import CalculatorIcon from '../../assets/icons/navigation/calculator.svg'
import AboutUsIcon from '../../assets/icons/navigation/about-us.svg'

import SelectedAccountsIcon from '../../assets/icons/navigation/selected/accounts.svg'
import SelectedBeneficiaryTransfersIcon from '../../assets/icons/navigation/selected/beneficiary-transfers.svg'
import SelectedRequestsIcon from '../../assets/icons/navigation/selected/requests.svg'
import SelectedPaymentsIcon from '../../assets/icons/navigation/selected/payments.svg'
import SelectedLoansIcon from '../../assets/icons/navigation/selected/loans.svg'
import SelectedDepositsIcon from '../../assets/icons/navigation/selected/deposits.svg'
import SelectedPaydayLoanIcon from '../../assets/icons/navigation/selected/payday-loan.svg'
import SelectedMobileIcon from '../../assets/icons/navigation/selected/mobile.svg'
import SelectedBranchIcon from '../../assets/icons/navigation/selected/branch.svg'
import SelectedQuickPayIcon from '../../assets/icons/navigation/selected/quick-pay.svg'
import SelectedCalculatorIcon from '../../assets/icons/navigation/selected/calculator.svg'
import SelectedAboutUsIcon from '../../assets/icons/navigation/selected/about-us.svg'
import NavItem from './NavItem/NavItem'

export default function Navigation() {
  return (
    <div id="Navigation" className="bg-bluegray pt-5 px-5" style={{ height: '100%'}}>
      <div className="h-100 w-100">
        <div className="mb-2 d-flex justify-content-between">
          <NavCard pathname="/accounts" selectedIcon={SelectedAccountsIcon} icon={AccountsIcon} name="Accounts" />
          <NavCard pathname="/beneficiary-transfers" selectedIcon={SelectedBeneficiaryTransfersIcon} icon={BeneficiaryTransfersIcon} name="Beneficiary Transfers" />
        </div>

        <div className="mb-2 d-flex justify-content-between">
          <NavCard pathname="/requests" selectedIcon={SelectedRequestsIcon} icon={RequestsIcon} name="Requests" />
          <NavCard pathname="/payments" selectedIcon={SelectedPaymentsIcon} icon={PaymentsIcon} name="Payments" />
        </div>

        <div className="mb-2 d-flex justify-content-between">
          <NavCard pathname="/loans" selectedIcon={SelectedLoansIcon} icon={LoansIcon} name="Loans" />
          <NavCard pathname="/deposits" selectedIcon={SelectedDepositsIcon} icon={DepositsIcon} name="Deposits" />
        </div>

        <div className="mb-2 d-flex justify-content-between">
          <NavCard pathname="/payday-loan" selectedIcon={SelectedPaydayLoanIcon} icon={PaydayLoanIcon} name="Payday Loan" />
          <NavCard pathname="/send-to-mobile" selectedIcon={SelectedMobileIcon} icon={MobileIcon} name="Send To Mobile" />
        </div>

        <hr className="mt-0 mb-3" />

        <div className="d-flex flex-column">
          <NavItem pathname="/branch" selectedIcon={SelectedBranchIcon} icon={BranchIcon} name="Branch" />
          <NavItem pathname="/quick-pay" selectedIcon={SelectedQuickPayIcon} icon={QuickPayIcon} name="Quick Pay" />
          <NavItem pathname="/calculator" selectedIcon={SelectedCalculatorIcon} icon={CalculatorIcon} name="Calculator" />
          <NavItem pathname="/about-us" selectedIcon={SelectedAboutUsIcon} icon={AboutUsIcon} name="About Us" />
        </div>
      </div>
    </div>
  )
}
