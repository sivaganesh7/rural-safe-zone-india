import {
  Smartphone,
  CreditCard,
  Gift,
  Phone,
  AlertTriangle,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import BackButton from '@/components/BackButton';
import DashboardNavbar from '@/components/DashboardNavbar';

const ScamTypes = () => {
  const scamTypes = [
    {
      icon: CreditCard,
      title: 'UPI ₹1 Scam / UPI ₹1 మోసం',
      description:
        'Fraudsters send ₹1 and ask you to return it, then claim you sent more money / మోసగాళ్లు ₹1 పంపించి, మీరు ఎక్కువగా పంపారని అబద్ధం చెబుతారు',
      example:
        'You receive ₹1 from unknown person. They call saying you got ₹10,000 by mistake and ask you to return it. / గుర్తు లేని వ్యక్తి నుంచి ₹1 వస్తుంది. మీరు తప్పుగా ₹10,000 పొందారని చెబుతూ తిరిగి పంపమంటారు.',
      prevention:
        'Never return money to unknown senders. Check your actual transaction history. / తెలియని వ్యక్తులకు డబ్బు తిరిగి పంపవద్దు. మీ లావాదేవీలను పరిశీలించండి.',
      color: 'border-red-500'
    },
    {
      icon: Smartphone,
      title: 'QR Code Scam / QR కోడ్ మోసం',
      description:
        'Fake QR codes that steal money instead of making payments / నకిలీ QR కోడ్‌ల ద్వారా డబ్బు దోచుకుంటారు',
      example:
        'At petrol pump, fake QR code is placed over real one. Scanning it sends money to fraudster. / పెట్రోల్ బంకులో అసలైనదిపై నకిలీ QR కోడ్ పెట్టి డబ్బు దోచుకుంటారు.',
      prevention:
        'Only scan QR codes from trusted sources. Verify payment details. / నమ్మదగిన వనరుల నుంచే స్కాన్ చేయండి. వివరాలు ధృవీకరించండి.',
      color: 'border-orange-500'
    },
    {
      icon: Gift,
      title: 'Lottery/Prize Scam / లాటరీ మోసం',
      description:
        'Fake lottery wins demanding processing fees or taxes / నకిలీ బహుమతుల పేరుతో డబ్బు వసూలు చేస్తారు',
      example:
        'Call claiming you won ₹25 lakh lottery. They ask for ₹5,000 as fee. / మీరు లాటరీ గెలిచారని చెప్పి ₹5,000 ప్రాసెసింగ్ ఫీజు అడుగుతారు.',
      prevention:
        'Real lotteries never ask for money upfront. Ignore such calls. / నిజమైన లాటరీలు ముందుగా డబ్బు అడగవు. అలాంటి కాల్స్‌కి స్పందించవద్దు.',
      color: 'border-purple-500'
    },
    {
      icon: Phone,
      title: 'SIM Deactivation Scam / సిమ్ డీయాక్టివేషన్ మోసం',
      description:
        "Fake calls claiming your SIM will be blocked unless you share OTP / OTP అడిగే నకిలీ కాల్స్ ద్వారా సిమ్‌ను బ్లాక్ చేస్తామని బెదిరిస్తారు",
      example:
        "Call from 'telecom company' saying SIM will stop working. They ask for OTP. / టెలికాం సంస్థగా నటించి సిమ్ నిలిపేస్తామని చెబుతూ OTP అడుగుతారు.",
      prevention:
        'Telecom companies never ask for OTP. Call official support. / టెలికాం సంస్థలు OTP అడగవు. అధికారిక హెల్ప్‌లైన్‌ను సంప్రదించండి.',
      color: 'border-blue-500'
    }
  ];

  const warningSigns = [
    'Urgency - తక్షణ నిర్ణయం తీసుకోవాలని చెబుతారు',
    'Money upfront - ముందుగా డబ్బు అడుగుతారు',
    'OTP requests - OTP లేదా PIN అడుగుతారు',
    'Unknown numbers - గుర్తు లేని నెంబర్ల నుంచి కాల్ వస్తుంది',
    'Too good to be true - అసాధ్యమైన ఆఫర్లు ఉంటాయి',
    'Personal info - వ్యక్తిగత వివరాలు అడుగుతారు'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      <div className="top-4 z-50 my-5 ml-10">
        <BackButton />
      </div>
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AlertTriangle className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Common Online Scam Types</h1>
          <h2 className="text-xl opacity-90">సాధారణ ఆన్‌లైన్ మోసాల రకాలు</h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Why Learn About Scams?</CardTitle>
              <p className="text-center text-sm text-gray-500">మోసాల గురించి తెలుసుకోవడం ఎందుకు అవసరం?</p>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
                Online scams are increasing rapidly in rural areas. Fraudsters target people who are new to digital payments and mobile technology. 
                By learning these common tricks, you can protect yourself and your family. (గ్రామీణ ప్రాంతాల్లో ఆన్‌లైన్ మోసాలు వేగంగా పెరుగుతున్నాయి. డిజిటల్ పేమెంట్లు, మొబైల్ టెక్నాలజీకి కొత్తగా ఉన్న వారిని మోసగాళ్లు లక్ష్యంగా చేసుకుంటున్నారు. ఇవి తెలుసుకోవడం ద్వారా మీరు మోసాల నుండి రక్షించుకోగలుగుతారు)
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Most Common Scams</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {scamTypes.map((scam, index) => (
              <Card key={index} className={`${scam.color} border-2 hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      <scam.icon className="h-6 w-6 text-gray-700" />
                    </div>
                    {scam.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {scam.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Example / ఉదాహరణ:</h4>
                      <p className="text-red-700">{scam.example}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Prevention / నివారణ:</h4>
                      <p className="text-green-700">{scam.prevention}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Card className="border-yellow-300 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 mr-2 text-yellow-600" />
                Red Flags - Warning Signs / మోసాల హెచ్చరికలు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {warningSigns.map((sign, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg border">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">{sign}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center justify-center">
                <Shield className="h-6 w-6 mr-2 text-blue-600" />
                Step-by-Step Protection Guide / మోసాల నుండి రక్షణకు సూచనలు
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-lg text-blue-600">Before Making Any Payment / చెల్లింపు ముందు:</h4>
                  <ol className="space-y-3 list-decimal list-inside">
                    <li>Stop and think - Is this request normal? / ఆలోచించండి - ఇది సాధారణంగా జరిగేదా?</li>
                    <li>Verify the caller - Call official customer care / కాల్ చేసినవారిని ధృవీకరించండి</li>
                    <li>Don't share OTP or PIN with anyone / OTP లేదా PIN చెప్పవద్దు</li>
                    <li>Check with family before sending money / ఇంటి వాళ్లతో మాట్లాడి నిర్ణయం తీసుకోండి</li>
                    <li>Take screenshots of suspicious messages / అనుమానాస్పద మెసేజ్‌ల స్క్రీన్‌షాట్ తీసుకోండి</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-lg text-green-600">After Realizing It's a Scam / మోసం తెలుసుకున్న తర్వాత:</h4>
                  <ol className="space-y-3 list-decimal list-inside">
                    <li>Don't panic - Act quickly but calmly / ఆందోళన చెందవద్దు, శాంతంగా వ్యవహరించండి</li>
                    <li>Block the fraudster's number immediately / మోసగాడి నెంబర్ బ్లాక్ చేయండి</li>
                    <li>Call your bank's customer care / మీ బ్యాంక్‌కు ఫోన్ చేయండి</li>
                    <li>Report to cyber crime (1930) / సైబర్ క్రైమ్‌కి ఫిర్యాదు చేయండి</li>
                    <li>File complaint at nearest police station / పోలీస్ స్టేషన్‌లో ఫిర్యాదు చేయండి</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Alert className="border-blue-200 bg-blue-50 mb-8">
          <Phone className="h-4 w-4" />
          <AlertDescription>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <strong className="block text-lg">Cyber Crime Helpline</strong>
                <span className="text-blue-700 font-mono text-xl">1930</span>
              </div>
              <div>
                <strong className="block text-lg">Police Emergency</strong>
                <span className="text-blue-700 font-mono text-xl">100</span>
              </div>
              <div>
                <strong className="block text-lg">Banking Fraud</strong>
                <span className="text-blue-700 font-mono text-xl">155260</span>
              </div>
            </div>
          </AlertDescription>
        </Alert>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Learn Digital Safety / డిజిటల్ భద్రతను నేర్చుకోండి
          </Button>
          <Button variant="outline" size="lg">
            Report a Scam Now / మోసం నివేదించండి
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScamTypes;
