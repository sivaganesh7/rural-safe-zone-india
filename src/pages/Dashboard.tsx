
import { Shield, FileText, AlertTriangle, Smartphone, Flag, Phone, TrendingUp, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import DashboardNavbar from '@/components/DashboardNavbar';

const Dashboard = () => {
  const cards = [
    {
      icon: FileText,
      title: "Document Fraud Awareness",
      description: "Learn to identify fake officers and document frauds",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      link: "/awareness",
      stats: "15 min read"
    },
    {
      icon: AlertTriangle,
      title: "Scam Types & Detection",
      description: "Spot UPI fraud, lottery scams, and QR code tricks before falling victim",
      color: "bg-gradient-to-br from-red-500 to-red-700",
      link: "/scam-types",
      stats: "12 common scams"
    },
    {
      icon: Smartphone,
      title: "Digital Literacy & Safety",
      description: "Master safe mobile usage and protect your digital transactions",
      color: "bg-gradient-to-br from-green-500 to-green-700",
      link: "/digital-literacy",
      stats: "20 safety tips"
    },
    {
      icon: Flag,
      title: "Report Fraud Activity",
      description: "Report suspicious incidents and help protect your community",
      color: "bg-gradient-to-br from-purple-500 to-purple-700",
      link: "/report-fraud",
      stats: "24/7 support"
    },
    {
      icon: Phone,
      title: "Emergency Contacts",
      description: "Access important helpline numbers and emergency contacts instantly",
      color: "bg-gradient-to-br from-orange-500 to-orange-700",
      link: "/emergency-contacts",
      stats: "5 key numbers"
    }
  ];

  const recentAlerts = [
    { type: "UPI Fraud", location: "Rural Karnataka", time: "2 hours ago" },
    { type: "Fake Officer", location: "Village Telangana", time: "5 hours ago" },
    { type: "Lottery Scam", location: "Rural Maharashtra", time: "1 day ago" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-red-100">
      <DashboardNavbar />

      {/* Welcome Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to your Fraud Protection Center
            </h1>
            <p className="text-xl text-gray-600">
              Stay informed, stay protected. Choose a topic to strengthen your defense against fraudsters.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm opacity-90">Protection Rate</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm opacity-90">Users Protected</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Alert System</div>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {cards.map((card, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 cursor-pointer group border-0 shadow-lg">
                <CardHeader className="text-center pb-2">
                  <div className={`${card.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-xl`}>
                    <card.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold">{card.title}</CardTitle>
                  <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full inline-block">
                    {card.stats}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 mb-4 font-medium">
                    {card.description}
                  </CardDescription>
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900" asChild>
                    <Link to={card.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Fraud Alerts */}
          <Card className="bg-white shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-red-600">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Recent Fraud Alerts in Your Area
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAlerts.map((alert, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <div>
                      <div className="font-semibold text-red-700">{alert.type}</div>
                      <div className="text-sm text-gray-600">{alert.location}</div>
                    </div>
                    <div className="text-xs text-gray-500">{alert.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-4 bg-gradient-to-r from-red-600 to-red-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Emergency Actions
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold" asChild>
              <Link to="/report-fraud">
                <Flag className="h-5 w-5 mr-2" />
                Report Scam Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-Black font-bold hover:bg-white hover:text-red-600" asChild>
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
