import { Shield, User, AlertCircle, CheckCircle, Phone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import BackButton from '@/components/BackButton';
import DashboardNavbar from '@/components/DashboardNavbar';
import DashboardFooter from '@/components/DashboardFooter';

const Awareness = () => {
  const realOfficerSigns = [
    "Always carry official ID cards with photo",
    "ప్రభుత్వ గుర్తింపు కార్డు తప్పనిసరిగా చూపిస్తారు",
    "Wear proper uniform with department badges",
    "శాఖకు సంబంధించి యూనిఫాం మరియు గుర్తింపు బ్యాడ్జ్ ఉంటాయి",
    "Have official vehicle with government number plate",
    "ప్రభుత్వ నెంబర్ ప్లేట్ ఉన్న వాహనం వాడుతారు",
    "Can provide office phone number for verification",
    "ధృవీకరణ కోసం కార్యాలయ ఫోన్ నెంబర్ ఇస్తారు",
    "Never ask for immediate cash payments",
    "తక్షణ నగదు చెల్లింపులు కోరరు",
    "Always provide official receipts",
    "ప్రభుత్వ రసీదు తప్పకుండా ఇస్తారు"
  ];

  const fakeSigns = [
    "Avoid showing proper identification",
    "గుర్తింపు కార్డు చూపించకుండా ఉండటం",
    "Wear incomplete or fake uniforms",
    "అసంపూర్ణం లేదా నకిలీ యూనిఫాం ధరిస్తారు",
    "Use private vehicles or no vehicle",
    "ప్రైవేట్ వాహనాలు లేదా వాహనం లేకుండా వస్తారు",
    "Refuse to provide office contact details",
    "కార్యాలయ వివరాలు ఇవ్వడం మానేస్తారు",
    "Demand immediate cash payments",
    "తక్షణ నగదు ఇవ్వాలని డిమాండ్ చేస్తారు",
    "Cannot provide official receipts",
    "రసీదు ఇవ్వలేరు"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      <div className="top-8 my-5 z-50">
        <BackButton />
      </div>
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FileText className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-2">Document Fraud Awareness</h1>
          <h2 className="text-2xl mb-4">డాక్యుమెంట్ మోసాలపై అవగాహన</h2>
          <p className="text-lg">Learn to identify fake officers and protect yourself from document fraud</p>
          <p className="text-md opacity-90">నకిలీ అధికారులను గుర్తించి డాక్యుమెంట్ మోసాల నుండి రక్షించుకోండి</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <AlertCircle className="h-6 w-6 mr-2 text-orange-500" />
                What is Document Fraud?
              </CardTitle>
              <p className="text-md text-gray-600 ml-8">డాక్యుమెంట్ మోసం అంటే ఏమిటి?</p>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 mb-1">
                Document fraud happens when fake officers or criminals pretend to be government officials to steal money or personal information.
              </p>
              <p className="text-md text-gray-600 mb-4">
                నకిలీ అధికారులు ప్రభుత్వ అధికారుల్లా నటించి డబ్బు లేదా వ్యక్తిగత సమాచారాన్ని దొంగిలిస్తారు
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-2">Real vs Fake Officers</h2>
          <h3 className="text-xl text-center text-gray-600 mb-8">నిజమైన vs నకిలీ అధికారులు</h3>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center text-green-800">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Real Government Officers
                </CardTitle>
                <p className="text-md text-green-600 ml-8">ప్రామాణిక ప్రభుత్వ అధికారులు</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {realOfficerSigns.map((text, index) => (
                    index % 2 === 0 ? (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p>{text}</p>
                          <p className="text-sm text-gray-500">{realOfficerSigns[index + 1]}</p>
                        </div>
                      </li>
                    ) : null
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader className="bg-red-50">
                <CardTitle className="flex items-center text-red-800">
                  <AlertCircle className="h-6 w-6 mr-2" />
                  Fake Officers (Fraudsters)
                </CardTitle>
                <p className="text-md text-red-600 ml-8">నకిలీ అధికారులు / మోసగాళ్లు</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {fakeSigns.map((text, index) => (
                    index % 2 === 0 ? (
                      <li key={index} className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p>{text}</p>
                          <p className="text-sm text-gray-500">{fakeSigns[index + 1]}</p>
                        </div>
                      </li>
                    ) : null
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* You can continue implementing this bilingual structure in similar fashion for the rest of the sections */}
         <section className="mb-12">
          <Card className="border-orange-200">
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-2xl text-orange-800">
                Common Tricks Used by Fraudsters
              </CardTitle>
              <p className="text-md text-orange-600 ml-8">నకిలీ వ్యక్తులు వాడే సాధారణ చిట్కాలు</p>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Fake Penalties</h4>
                  <p className="text-gray-600 mb-1">They claim you have unpaid fines or taxes and demand immediate payment to avoid arrest.</p>
                  <p className="text-sm text-gray-500">మీరు జరిమానా చెల్లించలేదని చెప్పి అరెస్టు అనే బెదిరింపుతో తక్షణ చెల్లింపు డిమాండ్ చేస్తారు</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Document Updates</h4>
                  <p className="text-gray-600 mb-1">They say your Aadhaar, ration card, or other documents need urgent updates for a fee.</p>
                  <p className="text-sm text-gray-500">మీ ఆధార్ లేదా ఇతర డాక్యుమెంట్లు అప్డేట్ చేయాల్సిందిగా చెప్పి డబ్బు అడుగుతారు</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Fake Surveys</h4>
                  <p className="text-gray-600 mb-1">They conduct fake government surveys to collect your personal information.</p>
                  <p className="text-sm text-gray-500">నకిలీ సర్వేలు నిర్వహించి మీ వ్యక్తిగత సమాచారం తీసుకుంటారు</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Urgent Verification</h4>
                  <p className="text-gray-600 mb-1">They create urgency saying your bank account or benefits will be stopped.</p>
                  <p className="text-sm text-gray-500">మీ అకౌంట్ లేదా లాభాలు నిలిపివేస్తామని బెదిరిస్తూ చురుకైన చర్యలు తీసుకోవాలని చెబుతారు</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Shield className="h-6 w-6 mr-2 text-blue-600" />
                What to Do When Approached
              </CardTitle>
              <p className="text-md text-blue-600 ml-8">నకిలీ అధికారులు మీను కలిసినప్పుడు తీసుకోవలసిన చర్యలు</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-lg text-green-600">✅ DO THIS</h4>
                  <p className="text-sm text-gray-500 mb-2">ఇవి చేయండి</p>
                  <ul className="space-y-3">
                    <li>• Ask for official ID and note down details<br /><span className="text-sm text-gray-500">గుర్తింపు కార్డు చూపించమని చెప్పండి, వివరాలు రాయండి</span></li>
                    <li>• Ask for office phone number and call to verify<br /><span className="text-sm text-gray-500">ఆఫీస్ ఫోన్ నెంబర్ అడిగి ధృవీకరించండి</span></li>
                    <li>• Request official documents/letters<br /><span className="text-sm text-gray-500">ఆఫిషియల్ పత్రాలు అడగండి</span></li>
                    <li>• Take photos of their ID (if they allow)<br /><span className="text-sm text-gray-500">అనుమతిస్తే వారి ID ఫోటోలు తీయండి</span></li>
                    <li>• Call local police if suspicious<br /><span className="text-sm text-gray-500">అనుమానం వస్తే వెంటనే పోలీసులకు సమాచారం ఇవ్వండి</span></li>
                    <li>• Inform family members or neighbors<br /><span className="text-sm text-gray-500">ఇంటివాళ్లకి లేదా పొరుగు వారికి తెలియజేయండి</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-lg text-red-600">❌ DON'T DO THIS</h4>
                  <p className="text-sm text-gray-500 mb-2">ఇవి చేయకండి</p>
                  <ul className="space-y-3">
                    <li>• Don't give money immediately<br /><span className="text-sm text-gray-500">తక్షణంగా డబ్బు ఇవ్వవద్దు</span></li>
                    <li>• Don't share personal documents<br /><span className="text-sm text-gray-500">వ్యక్తిగత డాక్యుమెంట్లు ఇవ్వవద్దు</span></li>
                    <li>• Don't provide bank details or OTP<br /><span className="text-sm text-gray-500">బ్యాంక్ వివరాలు లేదా OTP ఇవ్వవద్దు</span></li>
                    <li>• Don't feel pressured by threats<br /><span className="text-sm text-gray-500">బెదిరింపులకు భయపడవద్దు</span></li>
                    <li>• Don't sign any papers without reading<br /><span className="text-sm text-gray-500">చదవకుండా సంతకం చేయవద్దు</span></li>
                    <li>• Don't let them inside your house<br /><span className="text-sm text-gray-500">వారి ని ఇంట్లోకి అనుమతించవద్దు</span></li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Alert className="border-red-200 bg-red-50">
          <Phone className="h-4 w-4" />
          <AlertDescription className="text-lg">
            <strong>Remember:</strong> Real government officers will never demand immediate cash payments or threaten arrest for document issues.<br />
            <span className="text-sm text-red-600">గమనించండి: నిజమైన ప్రభుత్వ అధికారులు తక్షణ నగదు అడగరు లేదా అరెస్ట్ చేస్తామని బెదిరించరు</span><br />
            When in doubt, call the police at <strong>100</strong> or cyber crime helpline at <strong>1930</strong>.
          </AlertDescription>
          </Alert >

        <div className="bg-red-700 mt-12">
          <DashboardFooter />
        </div>
      </div>
    </div>
  );
};

export default Awareness;
