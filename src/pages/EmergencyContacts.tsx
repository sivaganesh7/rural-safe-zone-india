import { Shield, Phone, AlertTriangle, Users, FileText, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BackButton from '@/components/BackButton';
import DashboardNavbar from '@/components/DashboardNavbar';

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
      <DashboardNavbar/>
      <div className="top-4 z-50 my-5 ml-10">
        <BackButton />
      </div>
      <section className="py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Phone className="h-16 w-16 text-red-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Emergency Contacts<br /><span className="text-xl text-gray-600">అత్యవసర సంప్రదింపు నంబర్లు</span>
          </h1>
          <p className="text-xl text-gray-600">
            Important helpline numbers for immediate assistance<br />
            తక్షణ సహాయానికి ముఖ్యమైన హెల్ప్‌లైన్ నంబర్లు
          </p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-red-800">
                  In Case of Emergency<br /><span className="text-base text-red-600">అత్యవసర పరిస్థితుల్లో</span>
                </h2>
              </div>
              <p className="text-center text-red-700 text-lg">
                If you are currently being scammed or in immediate danger, <br />
                మీరు ఇప్పుడు మోసానికి గురవుతున్నట్లైతే లేదా తక్షణ ప్రమాదంలో ఉన్నట్లైతే,<br />
                <span className="font-bold"> call 100 or 112 immediately</span><br />
                <span className="font-bold"> వెంటనే 100 లేదా 112 కి కాల్ చేయండి</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className={`${contact.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <contact.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">
                    {contact.department}<br /><span className="text-sm text-gray-600">
                    {{
                      'Police': 'పోలీస్',
                      'Cyber Crime': 'సైబర్ నేరాలు',
                      'UIDAI Help': 'ఆధార్ సహాయం',
                      'Revenue Office': 'రెవెన్యూ కార్యాలయం',
                      'Women Helpline': 'మహిళా హెల్ప్‌లైన్'
                    }[contact.department]}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-blue-600 mb-2">
                      {contact.number}
                    </p>
                    {contact.website && (
                      <p className="text-sm text-gray-600">
                        Website: {contact.website}<br /><span className="text-sm text-gray-500">వెబ్‌సైట్: {contact.website}</span>
                      </p>
                    )}
                  </div>
                  <CardDescription className="text-gray-600">
                    {contact.purpose}<br /><span className="text-sm text-gray-500">
                    {{
                      'Immediate threat, emergency assistance': 'తక్షణ ముప్పు లేదా అత్యవసర సహాయం',
                      'Online fraud, digital scams': 'ఆన్‌లైన్ మోసాలు మరియు డిజిటల్ మోసాలు',
                      'Aadhaar related issues and help': 'ఆధార్ సంబంధిత సమస్యలు మరియు సహాయం',
                      'Document verification, land records': 'పత్రాల ధృవీకరణ, భూమి రికార్డులు',
                      'Women safety and assistance': 'మహిళల భద్రత మరియు సహాయం'
                    }[contact.purpose]}</span>
                  </CardDescription>
                  <Button 
                    className="w-full mt-4" 
                    variant="outline"
                    onClick={() => window.open(`tel:${contact.number.split(' / ')[0]}`, '_self')}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now<br /><span className="text-xs text-gray-600">ఇప్పుడు కాల్ చేయండి</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Additional Resources<br /><span className="text-base text-gray-600">అదనపు వనరులు</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <FileText className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Document Fraud<br /><span className="text-sm text-gray-600">పత్ర మోసాలు</span></h3>
                <p className="text-sm text-gray-600 mb-4">
                  Learn how to verify official documents<br />
                  అధికారిక పత్రాలను ఎలా ధృవీకరించాలో తెలుసుకోండి
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link to="/awareness">Learn More<br /><span className="text-xs text-gray-600">ఇంకా తెలుసుకోండి</span></Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Smartphone className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Digital Safety<br /><span className="text-sm text-gray-600">డిజిటల్ భద్రత</span></h3>
                <p className="text-sm text-gray-600 mb-4">
                  Safe practices for mobile and internet use<br />
                  మొబైల్ మరియు ఇంటర్నెట్ వాడకానికి సురక్షిత ఆచరణలు
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link to="/digital-literacy">Learn More<br /><span className="text-xs text-gray-600">ఇంకా తెలుసుకోండి</span></Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Scams & Frauds<br /><span className="text-sm text-gray-600">మోసాలు మరియు మాయాచేసేలు</span></h3>
                <p className="text-sm text-gray-600 mb-4">
                  Scams types and Frauds<br />
                  మోసాల రకాలు మరియు మాయాచేసేలు
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link to="/scam-types">Learn More<br /><span className="text-xs text-gray-600">ఇంకా తెలుసుకోండి</span></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
};

export default EmergencyContacts;
