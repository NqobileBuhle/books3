import React from 'react';

const Footer = () => {
  return (
    <div className=''>
        <footer className="bg-primary text-secondary font-bold mt-10  p-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    <nav>
      <h6 className="text-lg font-semibold mb-4">Services</h6>
      <ul>
        <li><a href="#" className="text-secondary hover:text-gray-900 transition-colors">Branding</a></li>
        <li><a href="#" className="text-secondary hover:text-gray-900 transition-colors">Design</a></li>
        <li><a href="#" className="text-secondary hover:text-gray-900 transition-colors">Marketing</a></li>
        <li><a href="#" className="text-secondary hover:text-gray-900 transition-colors">Advertisement</a></li>
      </ul>
    </nav>
    <nav>
      <h6 className="text-lg font-semibold mb-4">Company</h6>
      <ul>
        <li><a href="#" className="text-secondary hover:text-gray-900 transition-colors">About us</a></li>
        <li><a href="#" className="text-secondary hover:text-gray-900 transition-colors">Contact</a></li>
        <li><a href="#" className="text-secondary hover:text-gray-900 transition-colors">Jobs</a></li>
        <li><a href="#" className="text-secondary hover:text-gray-900 transition-colors">Press kit</a></li>
      </ul>
    </nav>
    <nav>
      <h6 className="text-lg font-semibold mb-4">Legal</h6>
      <ul>
        <li><a href="#" className="text-secondary hover:text-gray-900 transition-colors">Terms of use</a></li>
        <li><a href="#" className="text-secondary hover:text-gray-900 transition-colors">Privacy policy</a></li>
        <li><a href="#" className="text-secondary hover:text-gray-900 transition-colors">Cookie policy</a></li>
      </ul>
    </nav>
    <form>
      <h6 className="text-lg font-semibold mb-4">Newsletter</h6>
      <fieldset className="flex flex-col space-y-2">
        <label className="text-secondary">Enter your email address</label>
        <div className="flex">
          <input
            type="email"
            placeholder="username@site.com"
            className="input input-bordered p-2 rounded-l-md flex-grow" />
          <button className="btn btn-secondary rounded-r-md px-4">Subscribe</button>
        </div>
      </fieldset>
    </form>
  </div>
</footer>

        
    </div>
    
    
  );
}

export default Footer;
