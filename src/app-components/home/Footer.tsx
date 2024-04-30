import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer bg-indigo-800 text-white pt-3 pb-3">
      <div className="container mx-auto flex justify-between">
        <div className="w-1/2">
          <h3 className="text-lg font-semibold mb-2 underline">Follow Us</h3>
          <div className="flex">
          <a href="https://www.facebook.com/yourpage" target="_blank" className="inline-block mr-4"><FaFacebookF /></a>
          <a href="https://www.instagram.com/mamabuddy.bg?igsh=MTFyNTdpeWF2Z280aA==" target="_blank" className="inline-block mr-4"><FaInstagram /></a>
          </div>
        </div>
        <div className="column navbar-shortcuts">
          <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
          <p><a href="/about" className="underline">About us</a></p>
          <p><a href="/contact" className="underline">Contact us</a></p>
          <p><a href="/faq" className="underline">FAQ</a></p>
          <p><a href="/faq" className="underline">Terms & Conditions</a></p>
        </div>
      </div>
    </footer>
  )
}
