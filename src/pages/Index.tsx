import { useState } from 'react';
import { Shield, AlertTriangle, Smartphone, FileText, Users, Phone, Eye, ShieldAlert, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import MainNavbar from '@/components/MainNavbar';
import { Link } from 'react-router-dom'; // ✅ Use Link for routing

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const languages = ['English', 'हिंदी', 'తెలుగు'];

  const features = [
    {
      icon: FileText,
      title: "Document Fraud Awareness",
      description: "Protect yourself from fake officers and document scams targeting rural communities",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      link: "/awareness"
    },
    {
      icon: AlertTriangle,
      title: "Online Scam Detection",
      description: "Learn to identify UPI fraud, fake lottery calls, and QR code tricks before you fall victim",
      color: "bg-gradient-to-br from-red-500 to-red-700",
      link: "/scam-types"
    },
    {
      icon: Smartphone,
      title: "Digital Safety Training",
      description: "Master safe mobile usage, OTP protection, and secure digital transactions",
      color: "bg-gradient-to-br from-green-500 to-green-700",
      link: "/digital-literacy"
    },
    {
      icon: Shield,
      title: "Fraud Reporting Center",
      description: "Report suspicious activities and help protect your community from scammers",
      color: "bg-gradient-to-br from-purple-500 to-purple-700",
      link: "/report-fraud"
    }
  ];

  const warningStats = [
    { icon: AlertCircle, number: "₹50,000 Cr", text: "Lost to frauds annually in India" },
    { icon: Eye, number: "1 in 4", text: "Rural users targeted by scammers" },
    { icon: ShieldAlert, number: "24/7", text: "Fraud attempts happening" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-red-100">
      <MainNavbar />

      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-red-600 to-red-800 p-4 rounded-full shadow-2xl">
                <Shield className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Stop Fraudsters
              <span className="text-red-600 block">Protect Rural India</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
              Don't let scammers steal your hard-earned money. Learn to identify fake officers, 
              spot online frauds, and stay safe in the digital world.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-lg px-8 py-4 shadow-xl" asChild>
              <Link to="/register">
                <Shield className="h-5 w-5 mr-2" />
                Protect Yourself Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-red-600 text-red-600 hover:bg-red-50 shadow-lg" asChild>
              <Link to="/register">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Learn More
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {warningStats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-red-100">
                <stat.icon className="h-8 w-8 text-red-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-red-600 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.text}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
            <Users className="h-4 w-4" />
            <span className="font-medium">Protecting thousands of rural families across India</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Complete Fraud Protection Arsenal
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to stay safe from scammers and fraudsters
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 cursor-pointer group border-0 shadow-lg">
                <CardHeader className="text-center pb-2">
                  <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-xl`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 mb-4 font-medium">
                    {feature.description}
                  </CardDescription>
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900" asChild>
                    <Link to="/register">Start Learning</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-red-400">
            <AlertTriangle className="h-20 w-20 text-yellow-300 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold mb-4">Being Scammed Right Now?</h2>
            <p className="text-xl mb-8 text-red-100">
              Don't panic. Take immediate action to protect yourself and your money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                <Phone className="h-5 w-5 mr-2" />
                Call 1930 Now
              </Button>
              <Button variant="outline" size="lg" className="border-white text-black font-bold hover:bg-white hover:text-red-600" asChild>
                <Link to="/register">Register For Other Scams</Link>
              </Button>
            </div>
            <p className="text-sm text-red-200 mt-4 font-medium">
              National Cyber Crime Helpline: 1930 | Available 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Language Selector */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white rounded-full shadow-2xl border-2 border-red-200 p-3">
          <select 
            value={currentLanguage} 
            onChange={(e) => setCurrentLanguage(e.target.value)}
            className="bg-transparent border-none outline-none text-sm font-medium px-2 text-red-600"
          >
            {languages.map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-red-400" />
                <span className="text-xl font-bold">Fraud Shield</span>
              </div>
              <p className="text-gray-400">
                Empowering rural communities with fraud awareness and digital safety education.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-red-400">Learn & Protect</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/awareness" className="hover:text-white transition-colors">Document Fraud</Link></li>
                <li><Link to="/scam-types" className="hover:text-white transition-colors">Online Scams</Link></li>
                <li><Link to="/digital-literacy" className="hover:text-white transition-colors">Digital Safety</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-red-400">Get Help</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/report-fraud" className="hover:text-white transition-colors">Report Fraud</Link></li>
                <li><Link to="/emergency-contacts" className="hover:text-white transition-colors">Emergency Contacts</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-red-400">Emergency Numbers</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="font-medium">Cyber Crime: <span className="text-white">1930</span></li>
                <li className="font-medium">Police: <span className="text-white">100</span></li>
                <li className="font-medium">Women Helpline: <span className="text-white">1091</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Fraud Shield. Protecting Rural India from Scams & Frauds.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
