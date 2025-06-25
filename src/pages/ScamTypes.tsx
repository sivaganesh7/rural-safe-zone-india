
import { Smartphone, CreditCard, Gift, Phone, AlertTriangle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import BackButton from '@/components/BackButton';
import DashboardNavbar from '@/components/DashboardNavbar';

const ScamTypes = () => {
  const scamTypes = [
    {
      icon: CreditCard,
      title: "UPI ₹1 Scam",
      description: "Fraudsters send ₹1 and ask you to return it, then claim you sent more money",
      example: "You receive ₹1 from unknown person. They call saying you got ₹10,000 by mistake and ask you to return it.",
      prevention: "Never return money to unknown senders. Check your actual transaction history.",
      color: "border-red-500"
    },
    {
      icon: Smartphone,
      title: "QR Code Fraud",
      description: "Fake QR codes that steal money instead of making payments",
      example: "At petrol pump, fake QR code is placed over real one. Scanning it sends money to fraudster.",
      prevention: "Only scan QR codes from trusted sources. Verify payment details before confirming.",
      color: "border-orange-500"
    },
    {
      icon: Gift,
      title: "Lottery/Prize Calls",
      description: "Fake lottery wins demanding processing fees or taxes",
      example: "Call claiming you won ₹25 lakh lottery. They ask for ₹5,000 as processing fee to release prize.",
      prevention: "Real lotteries never ask for money upfront. Ignore such calls.",
      color: "border-purple-500"
    },
    {
      icon: Phone,
      title: "SIM Deactivation Threats",
      description: "Fake calls claiming your SIM will be blocked unless you share OTP",
      example: "Call from 'telecom company' saying SIM will stop working. They ask for OTP to 'reactivate' it.",
      prevention: "Telecom companies never ask for OTP. Call official customer care to verify.",
      color: "border-blue-500"
    }
  ];

  const warningSigns = [
    "Urgency - They create false urgency",
    "Money upfront - Asking for payment first",
    "OTP requests - Asking for OTP or PIN",
    "Unknown numbers - Calls from random numbers", 
    "Too good to be true - Unrealistic offers",
    "Personal info - Asking for bank details"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <DashboardNavbar />
       <div className="top-4 z-50 my-5 ml-10">
        <BackButton />
      </div>
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AlertTriangle className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Common Online Scam Types</h1>
          <p className="text-xl opacity-90">
            Learn to identify and protect yourself from digital fraudsters
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Why Learn About Scams?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
                Online scams are increasing rapidly in rural areas. Fraudsters target people who are new to digital payments and mobile technology. 
                By learning these common tricks, you can protect yourself and your family.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Scam Types */}
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
                      <h4 className="font-semibold text-red-800 mb-2">Example:</h4>
                      <p className="text-red-700">{scam.example}</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Prevention:</h4>
                      <p className="text-green-700">{scam.prevention}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Warning Signs */}
        <section className="mb-12">
          <Card className="border-yellow-300 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 mr-2 text-yellow-600" />
                Red Flags - Warning Signs
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

        {/* Step by Step Protection */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center justify-center">
                <Shield className="h-6 w-6 mr-2 text-blue-600" />
                Step-by-Step Protection Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-lg text-blue-600">Before Making Any Payment:</h4>
                  <ol className="space-y-3 list-decimal list-inside">
                    <li>Stop and think - Is this request normal?</li>
                    <li>Verify the caller - Call official customer care</li>
                    <li>Don't share OTP or PIN with anyone</li>
                    <li>Check with family before sending money</li>
                    <li>Take screenshots of suspicious messages</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-lg text-green-600">After Realizing It's a Scam:</h4>
                  <ol className="space-y-3 list-decimal list-inside">
                    <li>Don't panic - Act quickly but calmly</li>
                    <li>Block the fraudster's number immediately</li>
                    <li>Call your bank's customer care</li>
                    <li>Report to cyber crime (1930)</li>
                    <li>File complaint at nearest police station</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Emergency Numbers */}
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

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Learn Digital Safety
          </Button>
          <Button variant="outline" size="lg">
            Report a Scam Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScamTypes;
