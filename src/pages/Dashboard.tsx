import { Shield, FileText, AlertTriangle, Smartphone, Flag, Phone, TrendingUp, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import DashboardNavbar from '@/components/DashboardNavbar';
import DashboardFooter from '@/components/DashboardFooter';

const Dashboard = () => {
  const cards = [
    {
      icon: FileText,
      title: "Document Fraud Awareness",
      description: "Learn to identify fake officers and document frauds\nపట్టాల మోసాలను మరియు నకిలీ అధికారులను గుర్తించండి",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      link: "/awareness",
      stats: "15 min read | 15 నిమిషాల చదువు"
    },
    {
      icon: AlertTriangle,
      title: "Scam Types & Detection",
      description: "Spot UPI fraud, lottery scams, and QR code tricks before falling victim\nUPI మోసాలు, లాటరీ స్కామ్స్ మరియు QR కోడ్ మోసాలను ముందుగానే గుర్తించండి",
      color: "bg-gradient-to-br from-red-500 to-red-700",
      link: "/scam-types",
      stats: "12 common scams | 12 సాధారణ మోసాలు"
    },
    {
      icon: Smartphone,
      title: "Digital Literacy & Safety",
      description: "Master safe mobile usage and protect your digital transactions\nమొబైల్ మరియు డిజిటల్ లావాదేవీల భద్రతను నేర్చుకోండి",
      color: "bg-gradient-to-br from-green-500 to-green-700",
      link: "/digital-literacy",
      stats: "20 safety tips | 20 భద్రతా సూచనలు"
    },
    {
      icon: Flag,
      title: "Report Fraud Activity",
      description: "Report suspicious incidents and help protect your community\nసందేహాస్పద సంఘటనలను నివేదించి మీ సమాజాన్ని రక్షించండి",
      color: "bg-gradient-to-br from-purple-500 to-purple-700",
      link: "/report-fraud",
      stats: "24/7 support | 24/7 మద్దతు"
    },
    {
      icon: Phone,
      title: "Emergency Contacts",
      description: "Access important helpline numbers and emergency contacts instantly\nప్రధాన హెల్ప్‌లైన్ నంబర్లు మరియు అత్యవసర కాంటాక్ట్‌లను వెంటనే పొందండి",
      color: "bg-gradient-to-br from-orange-500 to-orange-700",
      link: "/emergency-contacts",
      stats: "5 key numbers | 5 ముఖ్య నంబర్లు"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-red-100">
      <DashboardNavbar />

      {/* Welcome Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to your Fraud Protection Center<br /><span className="text-xl text-gray-600">మీ మోసం నిరోధక కేంద్రానికి స్వాగతం</span>
            </h1>
            <p className="text-xl text-gray-600">
              Stay informed, stay protected. Choose a topic to strengthen your defense against fraudsters.<br />
              సమాచారం పొందండి, రక్షించుకోండి. మోసాల నుండి రక్షించుకునేందుకు ఒక అంశాన్ని ఎంచుకోండి.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm opacity-90">Protection Rate<br />సురక్షిత శాతం</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm opacity-90">Users Protected<br />రక్షితమైన వినియోగదారులు</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Alert System<br />హెచ్చరిక వ్యవస్థ</div>
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
                    <Link to={card.link}>Learn More<br /><span className="text-xs text-gray-200">ఇంకా తెలుసుకోండి</span></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <DashboardFooter />
    </div>
  );
};

export default Dashboard;
