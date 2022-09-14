import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
       <footer class="footer">
            <div class="d-sm-flex justify-content-center justify-content-sm-between">
              <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © bootstrapdash.com 2020</span>
              <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Free <Link to="https://www.bootstrapdash.com/bootstrap-admin-template/" target="_blank">Bootstrap admin templates</Link> from Bootstrapdash.com</span>
            </div>
          </footer>
    </div>
  )
}

export default Footer
