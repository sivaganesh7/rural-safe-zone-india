
import { Shield, Phone, AlertTriangle, Users, FileText, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const EmergencyContacts = () => {
  const emergencyContacts = [
    {
      department: "Police",
      number: "100 / 112",
      purpose: "Immediate threat, emergency assistance",
      icon: Shield,
      color: "bg-red-500"
    },
    {
      department: "Cyber Crime",
      number: "1930",
      purpose: "Online fraud, digital scams",
      website: "cybercrime.gov.in",
      icon: Smartphone,
      color: "bg-blue-500"
    },
    {
      department: "UIDAI Help",
      number: "1947",
      purpose: "Aadhaar related issues and help",
      icon: FileText,
      color: "bg-green-500"
    },
    {
      department: "Revenue Office",
      number: "Contact District Office",
      purpose: "Document verification, land records",
      icon: FileText,
      color: "bg-purple-500"
    },
    {
      department: "Women Helpline",
      number: "181",
      purpose: "Women safety and assistance",
      icon: Users,
      color: "bg-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Rural Fraud Alert</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/">Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Phone className="h-16 w-16 text-red-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Emergency Contacts
          </h1>
          <p className="text-xl text-gray-600">
            Important helpline numbers for immediate assistance
          </p>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-red-800">
                  In Case of Emergency
                </h2>
              </div>
              <p className="text-center text-red-700 text-lg">
                If you are currently being scammed or in immediate danger, 
                <span className="font-bold"> call 100 or 112 immediately</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className={`${contact.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <contact.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{contact.department}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-blue-600 mb-2">
                      {contact.number}
                    </p>
                    {contact.website && (
                      <p className="text-sm text-gray-600">
                        Website: {contact.website}
                      </p>
                    )}
                  </div>
                  <CardDescription className="text-gray-600">
                    {contact.purpose}
                  </CardDescription>
                  <Button 
                    className="w-full mt-4" 
                    variant="outline"
                    onClick={() => window.open(`tel:${contact.number.split(' / ')[0]}`, '_self')}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Additional Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <FileText className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Document Fraud</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Learn how to verify official documents
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link to="/awareness">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <Smartphone className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Digital Safety</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Safe practices for mobile and internet use
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link to="/digital-literacy">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Report Fraud</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Report suspicious activities immediately
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link to="/report-fraud">Report Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Back to Dashboard */}
      <section className="py-8 px-4">
        <div className="text-center">
          <Button asChild>
            <Link to="/dashboard">
              ← Back to Dashboard
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EmergencyContacts;
