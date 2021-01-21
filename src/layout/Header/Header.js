import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import HandyBankLogo from '../../assets/logo/handy-bank-logo.svg'

import PersonIcon from '../../assets/icons/menu/person.svg'
import NotificationIcon from '../../assets/icons/menu/notification.svg'
import SettingsIcon from '../../assets/icons/menu/settings.svg'
import ContactIcon from '../../assets/icons/menu/contact.svg'
import ExchangeIcon from '../../assets/icons/menu/exchange.svg'
import TermsConditionsIcon from '../../assets/icons/menu/terms-conditions.svg'
import SuggestionIcon from '../../assets/icons/menu/suggestion.svg'
import FAQIcon from '../../assets/icons/menu/faq.svg'
import QRIcon from '../../assets/icons/menu/qr.svg'
import BeneficiaryIcon from '../../assets/icons/menu/beneficiary.svg'
import { getUserProfileImage } from '../../services'
import Loading from '../../assets/loaders/Loading'

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false)
  const [profileImage, setProfileImage] = useState('')
  const [loading, setLoading] = useState(false)

  const getProfileImage = useCallback(async () => {
    setLoading(true)
    const profileImageResponse = await getUserProfileImage()
    setProfileImage(profileImageResponse.imageData)
    setLoading(false)
  }, [])

  useEffect(() => {
    getProfileImage()
  }, [])

  function Menu() {
    return (
      <div id="Menu" className="position-absolute p-5">
        <div className="d-flex justify-content-end">
          <button type="button" className="btn p-0" onClick={() => setMenuVisible(false)}>
            <i className="material-icons">close</i>
          </button>
        </div>

        <div className="mt-5 row">
          <div className="col-6 mb-5">
            <Link to="/profile" className="card w-100 rounded border-0 p-4 small font-weight-500">
              <img className="img-fluid align-self-start" src={PersonIcon} alt="Person" />
              <span className="mt-2">Profile</span>
            </Link>
          </div>

          <div className="col-6 mb-5">
            <Link to="/auth" className="card w-100 rounded border-0 p-4 small font-weight-500">
              <img className="img-fluid align-self-start" src={NotificationIcon} alt="Notification" />
              <span className="mt-2">Logout</span>
            </Link>
          </div>

          <div className="col-6 mb-5">
            <div className="card w-100 rounded border-0 p-4 small font-weight-500">
              <img className="img-fluid align-self-start" src={SettingsIcon} alt="Settings" />
              <span className="mt-2">Settings</span>
            </div>
          </div>

          <div className="col-6 mb-5">
            <Link to="/beneficiary-transfers" className="card w-100 rounded border-0 p-4 small font-weight-500">
              <img className="img-fluid align-self-start" src={SettingsIcon} alt="Transfer" />
              <span className="mt-2">Transfer</span>
            </Link>
          </div>

          <div className="col-6 mb-5">
            <div className="card w-100 rounded border-0 p-4 small font-weight-500">
              <img className="img-fluid align-self-start" src={ContactIcon} alt="Contact Us" />
              <span className="mt-2">Contact Us</span>
            </div>
          </div>

          <div className="col-6 mb-5">
            <Link to="/exchange-rate" className="card w-100 rounded border-0 p-4 small font-weight-500">
              <img className="img-fluid align-self-start" src={ExchangeIcon} alt="Exchange Rate" />
              <span className="mt-2">Exchange Rate</span>
            </Link>
          </div>

          <div className="col-6 mb-5">
            <Link to="/terms-and-conditions" className="card w-100 rounded border-0 p-4 small font-weight-500">
              <img className="img-fluid align-self-start" src={TermsConditionsIcon} alt="Terms & Conditions" />
              <span className="mt-2">T&C</span>
            </Link>
          </div>

          <div className="col-6 mb-5">
            <Link to="/suggestion" className="card w-100 rounded border-0 p-4 small font-weight-500">
              <img className="img-fluid align-self-start" src={SuggestionIcon} alt="Suggestion" />
              <span className="mt-2">Suggestion</span>
            </Link>
          </div>

          <div className="col-6 mb-5">
            <Link to="/faq" className="card w-100 rounded border-0 p-4 small font-weight-500">
              <img className="img-fluid align-self-start" src={FAQIcon} alt="FAQ" />
              <span className="mt-2">FAQ</span>
            </Link>
          </div>

          <div className="col-6 mb-5">
            <Link to="/qr-code" className="card w-100 rounded border-0 p-4 small font-weight-500">
              <img className="img-fluid align-self-start" src={QRIcon} alt="My QR Code" />
              <span className="mt-2">My QR Code</span>
            </Link>
          </div>


          <div className="col-6 mb-5">
            <Link to="/beneficiary-transfers" className="card w-100 rounded border-0 p-4 small font-weight-500">
              <img className="img-fluid align-self-start" src={BeneficiaryIcon} alt="Beneficiaries" />
              <span className="mt-2">Beneficiaries</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <header id="Header" className="row d-flex align-items-center">
      <div className="col-3">
        <img className="pl-5" src={HandyBankLogo} alt="Handy Bank Logo" />
      </div>

      <div className="col-6">
        <div id="SearchBar" className="form-group">
          <div className="prefix">
            <i className="material-icons">search</i>
          </div>
          <input type="text" className="form-control" />
        </div>
      </div>

      <div className="col-3 align-self-stretch bg-bluegray">
        <div className="d-flex justify-content-between align-items-center mx-5 pt-4">
          <button type="button" className="btn p-0" onClick={() => setMenuVisible(true)} style={{ width: 21, height: 21, marginTop: -12 }}>
            <i className="material-icons text-darkbluegray cursor-pointer">settings</i>
          </button>
          <Link to="/notifications" className="btn p-0">
            <i className="material-icons text-darkbluegray" style={{ width: 18, height: 21 }}>notifications</i>
          </Link>
          <Link to="/profile" className="btn p-0">
            {
              loading
                ? (<p className="d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}><Loading /></p>)
                : (<img className="profile-picture1" src={`data:image/png;base64, ${profileImage}`} style={{ width: 60, height: 60, borderRadius: 10 }} />)
            }
          </Link>
        </div>
        <div className="d-flex flex-column text-right mr-5 pt-3 mt-auto">
          <span className="tiny text-gray font-weight-600 text">Last Login</span>
          <h6 className="font-weight-600 date-time-text">
            12 Sep &apos;19
            <span className="mx-3 date-time-text" />
            11:35:13 am
          </h6>
        </div>
      </div>

      {
        menuVisible ? Menu() : null
      }
    </header>
  )
}
