export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Student Wing</h3>
            <p className="text-gray-400">
              Empowering students with knowledge, leadership, and opportunities to excel.
            </p>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2 text-white">AISSO Registration</h4>
              <p className="text-sm text-gray-400">
                Registered under AISSO (All India Society for Students' Organization)
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Registration No: AISSO/2024/STW/789
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Workshops</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mentorship</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Fairs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400 font-medium">Corporate Office:</span>
                <p className="text-gray-400 text-sm mt-1">
                  Floor -3, Kalgidhar Enclave, SCO 10,<br />
                  Baltana, Sector 19,<br />
                  Zirakpur, Punjab 140604
                </p>
              </li>
              <li>
                <span className="text-gray-400 font-medium">Head Office:</span>
                <p className="text-gray-400 text-sm mt-1">
                  Student Wing Headquarters,<br />
                  Education Hub Complex,<br />
                  New Delhi 110001
                </p>
              </li>
              <li className="text-gray-400">satishrathee001@gmail.com</li>
              <li className="text-gray-400">+91 9215050000</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Student Wing. All rights reserved. | Registered under AISSO</p>
        </div>
      </div>
    </footer>
  );
}
