
import { useState } from 'react';
import { Shield, AlertTriangle, Smartphone, FileText, Users, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState('English');

  const languages = ['English', 'हिंदी', 'తెలుగు'];

  const features = [
    {
      icon: FileText,
      title: "Document Awareness",
      description: "Learn to identify fake officers and document frauds",
      color: "bg-blue-500",
      link: "/awareness"
    },
    {
      icon: AlertTriangle,
      title: "Online Scam Types",
      description: "Spot UPI fraud, lottery calls, and QR code tricks",
      color: "bg-red-500",
      link: "/scam-types"
    },
    {
      icon: Smartphone,
      title: "Digital Literacy",
      description: "Safe mobile usage and digital safety tips",
      color: "bg-green-500",
      link: "/digital-literacy"
    },
    {
      icon: Shield,
      title: "Report a Scam",
      description: "Easily report fraudulent activities",
      color: "bg-purple-500",
      link: "/report-fraud"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Rural Fraud Alert</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#awareness" className="text-gray-700 hover:text-blue-600 transition-colors">Awareness</a>
              <a href="#scam-types" className="text-gray-700 hover:text-blue-600 transition-colors">Scam Types</a>
              <a href="#digital-literacy" className="text-gray-700 hover:text-blue-600 transition-colors">Digital Literacy</a>
              <a href="#reports" className="text-gray-700 hover:text-blue-600 transition-colors">Report Fraud</a>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <a href="/login">Login</a>
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="/register">Register</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Shield className="h-20 w-20 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Protecting Rural India from
              <span className="text-blue-600 block">Scams & Frauds</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Learn to identify fake officers, spot online scams, and stay safe in the digital world. 
              Available in Telugu, Hindi, and English.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3" asChild>
              <a href="/register">Start Learning Now</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
              <a href="/report-fraud">Report a Scam</a>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <Users className="h-4 w-4" />
            <span>Trusted by thousands of rural users</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stay Protected with Knowledge
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive fraud awareness tools designed for rural communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center pb-2">
                  <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {feature.description}
                  </CardDescription>
                  <Button className="w-full mt-4" variant="outline" asChild>
                    <a href={feature.link}>Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <AlertTriangle className="h-16 w-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Being Scammed Right Now?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't panic. Take immediate action to protect yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Phone className="h-5 w-5 mr-2" />
              Call Cyber Crime Helpline
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/report-fraud">Report Immediately</a>
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Helpline: 1930 (National Cyber Crime Helpline)
          </p>
        </div>
      </section>

      {/* Language Selector - Fixed Position */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white rounded-full shadow-lg border p-2">
          <select 
            value={currentLanguage} 
            onChange={(e) => setCurrentLanguage(e.target.value)}
            className="bg-transparent border-none outline-none text-sm font-medium px-2"
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
                <Shield className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">Rural Fraud Alert</span>
              </div>
              <p className="text-gray-400">
                Empowering rural communities with fraud awareness and digital safety education.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Learn</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/awareness" className="hover:text-white transition-colors">Document Fraud</a></li>
                <li><a href="/scam-types" className="hover:text-white transition-colors">Online Scams</a></li>
                <li><a href="/digital-literacy" className="hover:text-white transition-colors">Digital Safety</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/report-fraud" className="hover:text-white transition-colors">Report Fraud</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Get Help</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Emergency</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Cyber Crime: 1930</li>
                <li>Police: 100</li>
                <li>Women Helpline: 1091</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Rural Fraud Alert. Made with ❤️ for rural India's safety.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
