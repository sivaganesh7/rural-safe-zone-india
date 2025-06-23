
import { Shield, FileText, AlertTriangle, Smartphone, Flag, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const cards = [
    {
      icon: FileText,
      title: "Document Awareness",
      description: "Learn to identify fake officers and document frauds",
      color: "bg-blue-500",
      link: "/awareness"
    },
    {
      icon: AlertTriangle,
      title: "Scam Types",
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
      icon: Flag,
      title: "Report a Fraud",
      description: "Report fraudulent activities and suspicious incidents",
      color: "bg-purple-500",
      link: "/report-fraud"
    },
    {
      icon: Phone,
      title: "Emergency Contacts",
      description: "Important helpline numbers and emergency contacts",
      color: "bg-orange-500",
      link: "/emergency-contacts"
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
                <Link to="/">Home</Link>
              </Button>
              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Welcome Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome, User!
            </h1>
            <p className="text-xl text-gray-600">
              Your fraud protection dashboard. Choose a topic to learn more.
            </p>
          </div>

          {/* Dashboard Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center pb-2">
                  <div className={`${card.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <card.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 mb-4">
                    {card.description}
                  </CardDescription>
                  <Button className="w-full" asChild>
                    <Link to={card.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Quick Actions
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
              <Link to="/report-fraud">
                <Flag className="h-5 w-5 mr-2" />
                Report Scam Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/emergency-contacts">
                <Phone className="h-5 w-5 mr-2" />
                Emergency Numbers
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
