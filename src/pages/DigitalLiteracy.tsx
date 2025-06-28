import { Smartphone, Lock, Eye, EyeOff, Wifi, CreditCard, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useState } from 'react';
import BackButton from '@/components/BackButton';
import DashboardNavbar from '@/components/DashboardNavbar';
import DashboardFooter from '@/components/DashboardFooter';

const DigitalLiteracy = () => {
  const [showOtp, setShowOtp] = useState(false);

  const safetyTopics = [
    {
      icon: Lock,
      title: "What is OTP?\nOTP అంటే ఏమిటి?",
      content: "OTP means 'One Time Password'. It's a 4-6 digit code sent to your mobile for security. Never share OTP with anyone - not even bank employees!\nOTP అంటే ఒకే ఒకసారి ఉపయోగించే పాస్‌వర్డ్. ఇది మీ ఫోన్‌కి పంపబడే 4-6 అంకెల కోడ్. దీన్ని ఎవరితోనూ పంచుకోకండి - బ్యాంక్ ఉద్యోగులతో కూడా కాదు!",
      tips: [
        "OTP is only for you to enter yourself\nOTP మీరే స్వయంగా నమోదు చేయాల్సింది",
        "Banks never ask for OTP over phone\nబ్యాంకులు ఎప్పుడూ ఫోన్‌లో OTP అడగవు",
        "Don't share OTP in any message or call\nఏమెసేజ్ లేదా కాల్‌లో OTP పంచుకోకండి"
      ]
    },
    {
      icon: CreditCard,
      title: "UPI Safety Rules\nUPI భద్రతా నిబంధనలు",
      content: "UPI is safe when used correctly. Always double-check the recipient's name and amount before paying.\nUPI సరైన రీతిలో వాడితే సురక్షితం. డబ్బు పంపించే ముందు ఎప్పుడూ పేరు మరియు మొత్తం చెక్ చేయండి.",
      tips: [
        "Check recipient name before paying\nడబ్బు పంపించే ముందు పేరు తనిఖీ చేయండి",
        "Only use UPI apps from official app stores\nప్రధాన యాప్ స్టోర్‌ల నుండి మాత్రమే UPI యాప్‌లను ఉపయోగించండి",
        "Set transaction limits for daily payments\nరోజువారీ చెల్లింపులకు పరిమితి పెట్టండి"
      ]
    },
    {
      icon: Wifi,
      title: "Checking Fake Websites\nనకిలీ వెబ్‌సైట్‌లను గుర్తించడం",
      content: "Fake websites look real but steal your information. Look for 'https://' and correct spelling of website names.\nనకిలీ వెబ్‌సైట్‌లు నిజంగా కనిపిస్తాయి కానీ మీ సమాచారాన్ని దొంగిలిస్తాయి. 'https://' ఉన్నదో లేదో మరియు వెబ్‌సైట్ పేరులో పొరపాటులేదో చూసుకోండి.",
      tips: [
        "Check website URL carefully\nవెబ్‌సైట్ URLని జాగ్రత్తగా పరిశీలించండి",
        "Look for 'https' before the website name\nవెబ్‌సైట్ పేరుకు ముందు 'https' ఉందో లేదో చూడండి",
        "Don't enter personal details on suspicious sites\nఅనుమానాస్పద వెబ్‌సైట్‌లలో వ్యక్తిగత సమాచారం నమోదు చేయవద్దు"
      ]
    },
    {
      icon: Shield,
      title: "Password Protection\nపాస్‌వర్డ్ రక్షణ",
      content: "Strong passwords keep your accounts safe. Use different passwords for different apps and don't share them.\nబలమైన పాస్‌వర్డ్‌లు మీ ఖాతాలను రక్షిస్తాయి. ప్రతి యాప్‌కి వేరే పాస్‌వర్డ్ వాడండి మరియు వాటిని పంచుకోకండి.",
      tips: [
        "Use numbers and letters in passwords\nపాస్‌వర్డ్‌లో అంకెలు మరియు అక్షరాలు కలిపి వాడండి",
        "Don't use birth dates or names\nపుట్టిన తేది లేదా పేర్లను వాడవద్దు",
        "Change passwords if you suspect they're compromised\nపాస్‌వర్డ్ దొంగిలించబడిందని అనిపిస్తే వెంటనే మార్చండి"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
       <div className="top-4 z-50 my-5 ml-10">
        <BackButton />
      </div>
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Smartphone className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Digital Literacy & Safety</h1>
          <p className="text-xl opacity-90">
            Learn to use technology safely and confidently
            <br />
            సురక్షితంగా మరియు ధైర్యంగా టెక్నాలజీ వాడటం నేర్చుకోండి
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Why Digital Safety Matters?<br /><span className="text-base text-gray-600">డిజిటల్ భద్రత ఎందుకు ముఖ్యం?</span></CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
                As mobile phones and digital payments become common in rural areas, it's important to know how to use them safely.
                <br />
                గ్రామ ప్రాంతాల్లో మొబైల్ ఫోన్లు మరియు డిజిటల్ చెల్లింపులు సాధారణంగా మారుతున్న నేపథ్యంలో, వాటిని ఎలా సురక్షితంగా వాడాలో తెలుసుకోవడం అవసరం.
                <br /><br />
                This knowledge will help you enjoy the benefits of technology without falling victim to fraudsters.
                <br />
                ఈ అవగాహన మిమ్మల్ని మోసగాళ్ల నుంచి రక్షిస్తూ టెక్నాలజీ లాభాలు పొందడంలో సహాయపడుతుంది.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-2">Essential Digital Safety Topics</h2>
          <p className="text-center text-gray-600 mb-8">ముఖ్యమైన డిజిటల్ భద్రత అంశాలు</p>
          <div className="grid lg:grid-cols-2 gap-6">
            {safetyTopics.map((topic, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <topic.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    {topic.title.split('\n').map((line, idx) => (
                      <div key={idx} className={idx === 1 ? 'text-sm text-gray-500 ml-2' : ''}>{line}</div>
                    ))}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {topic.content.split('\n').map((line, idx) => (
                    <p key={idx} className={`text-gray-700 mb-2 ${idx === 1 ? 'text-sm text-gray-500' : ''}`}>{line}</p>
                  ))}

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Safety Tips:<br /><span className="text-sm text-green-600">భద్రతా సూచనలు</span></h4>
                    <ul className="space-y-1">
                      {topic.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-green-700 flex flex-col items-start">
                          <div className="flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                            {tip.split('\n')[0]}
                          </div>
                          <div className="ml-6 text-sm text-gray-600">{tip.split('\n')[1]}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Remaining content stays unchanged */}
 <section className="mb-12">
          <Card className="border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-2xl flex items-center justify-center">
                <Lock className="h-6 w-6 mr-2 text-blue-600" />
                OTP Demo - Practice Here
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="max-w-md mx-auto">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center">
                  <h4 className="font-semibold mb-4">Sample OTP Message</h4>
                  <div className="bg-gray-100 p-4 rounded text-left text-sm font-mono">
                    Dear Customer, Your OTP for transaction is {showOtp ? "123456" : "XXXXXX"}. 
                    Valid for 10 minutes. DO NOT share with anyone. - Your Bank
                  </div>
                  
                  <Button 
                    onClick={() => setShowOtp(!showOtp)} 
                    className="mt-4 w-full"
                    variant="outline"
                  >
                    {showOtp ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                    {showOtp ? "Hide OTP" : "Show OTP"}
                  </Button>
                  
                  <Alert className="mt-4 border-red-200 bg-red-50">
                    <AlertDescription className="text-red-700">
                      <strong>Remember:</strong> In real life, never show your OTP to anyone or share it over phone calls!
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Common Warning Signs */}
        <section className="mb-12">
          <Card className="border-orange-300 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center justify-center">
                <Shield className="h-6 w-6 mr-2 text-orange-600" />
                Digital Safety Warning Signs<br /><span className="text-base text-gray-600">డిజిటల్ భద్రతకు హెచ్చరిక సంకేతాలు</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-red-600">🚨 Dangerous Situations<br /><span className="text-sm text-gray-600">ఆపత్‌సంఖ్యక పరిస్థితులు</span></h4>
                  <ul className="space-y-2 text-gray-800">
                    <li>• Someone asking for your OTP<br /><span className="text-sm text-gray-500 ml-5">మీ OTP అడిగేవాళ్లు</span></li>
                    <li>• Unexpected money requests via UPI<br /><span className="text-sm text-gray-500 ml-5">UPI ద్వారా అనూహ్యంగా డబ్బు అడగడం</span></li>
                    <li>• Links asking for bank details<br /><span className="text-sm text-gray-500 ml-5">బ్యాంక్ వివరాలు అడిగే లింకులు</span></li>
                    <li>• Apps asking for too many permissions<br /><span className="text-sm text-gray-500 ml-5">అత్యధిక అనుమతులు అడిగే యాప్‌లు</span></li>
                    <li>• Urgent messages demanding action<br /><span className="text-sm text-gray-500 ml-5">తక్షణ చర్యలు తీసుకోమని చెప్పే సందేశాలు</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">✅ Safe Practices<br /><span className="text-sm text-gray-600">సురక్షిత ఆచరణలు</span></h4>
                  <ul className="space-y-2 text-gray-800">
                    <li>• Always verify before sharing information<br /><span className="text-sm text-gray-500 ml-5">సమాచారం పంచుకునే ముందు ధృవీకరించండి</span></li>
                    <li>• Use strong, unique passwords<br /><span className="text-sm text-gray-500 ml-5">బలమైన, ప్రత్యేక పాస్‌వర్డ్‌లు వాడండి</span></li>
                    <li>• Keep apps updated<br /><span className="text-sm text-gray-500 ml-5">యాప్‌లను అప్డేట్ చేయడం మర్చిపోవద్దు</span></li>
                    <li>• Check app permissions regularly<br /><span className="text-sm text-gray-500 ml-5">యాప్ అనుమతులు తరచుగా తనిఖీ చేయండి</span></li>
                    <li>• Think twice before clicking links<br /><span className="text-sm text-gray-500 ml-5">లింక్ క్లిక్ చేయడానికి ముందు రెండు సార్లు ఆలోచించండి</span></li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>


        {/* Quick Reference Guide */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Quick Safety Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Lock className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Before Sharing Info</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Who is asking?</li>
                    <li>• Why do they need it?</li>
                    <li>• Is this normal?</li>
                  </ul>
                </div>
                <div className="text-center">
                  <CreditCard className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Before Making Payment</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Check recipient name</li>
                    <li>• Verify amount</li>
                    <li>• Confirm purpose</li>
                  </ul>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">When Suspicious</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Stop immediately</li>
                    <li>• Ask someone you trust</li>
                    <li>• Report if needed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <DashboardFooter />
      </div>
    </div>
  );
};

export default DigitalLiteracy;
