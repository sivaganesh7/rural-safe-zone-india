
import { Shield, User, AlertCircle, CheckCircle, Phone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import BackButton from '@/components/BackButton';

const Awareness = () => {
  const realOfficerSigns = [
    "Always carry official ID cards with photo",
    "Wear proper uniform with department badges",
    "Have official vehicle with government number plate",
    "Can provide office phone number for verification",
    "Never ask for immediate cash payments",
    "Always provide official receipts"
  ];

  const fakeSigns = [
    "Avoid showing proper identification",
    "Wear incomplete or fake uniforms",
    "Use private vehicles or no vehicle",
    "Refuse to provide office contact details",
    "Demand immediate cash payments",
    "Cannot provide official receipts"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-4 z-50">
        <BackButton />
      </div>
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FileText className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Document Fraud Awareness</h1>
          <p className="text-xl opacity-90">
            Learn to identify fake officers and protect yourself from document fraud
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* What is Document Fraud */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <AlertCircle className="h-6 w-6 mr-2 text-orange-500" />
                What is Document Fraud?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 mb-4">
                Document fraud happens when fake officers or criminals pretend to be government officials 
                to steal money or personal information. They may claim to be from:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Income Tax Department</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Electricity Board</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Bank Officials</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Police Department</li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Aadhaar Card Office</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Ration Card Office</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Census Officials</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Gas Connection Officers</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How to Identify Real vs Fake Officers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Real vs Fake Officers</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Real Officers */}
            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center text-green-800">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Real Government Officers
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {realOfficerSigns.map((sign, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Fake Officers */}
            <Card className="border-red-200">
              <CardHeader className="bg-red-50">
                <CardTitle className="flex items-center text-red-800">
                  <AlertCircle className="h-6 w-6 mr-2" />
                  Fake Officers (Fraudsters)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {fakeSigns.map((sign, index) => (
                    <li key={index} className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Common Tricks */}
        <section className="mb-12">
          <Card className="border-orange-200">
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-2xl text-orange-800">
                Common Tricks Used by Fraudsters
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Fake Penalties</h4>
                  <p className="text-gray-600 mb-4">
                    They claim you have unpaid fines or taxes and demand immediate payment to avoid arrest.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Document Updates</h4>
                  <p className="text-gray-600 mb-4">
                    They say your Aadhaar, ration card, or other documents need urgent updates for a fee.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Fake Surveys</h4>
                  <p className="text-gray-600 mb-4">
                    They conduct fake government surveys to collect your personal information.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Urgent Verification</h4>
                  <p className="text-gray-600 mb-4">
                    They create urgency saying your bank account or benefits will be stopped.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What to Do */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Shield className="h-6 w-6 mr-2 text-blue-600" />
                What to Do When Approached
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-lg text-green-600">✅ DO THIS</h4>
                  <ul className="space-y-3">
                    <li>• Ask for official ID and note down details</li>
                    <li>• Ask for office phone number and call to verify</li>
                    <li>• Request official documents/letters</li>
                    <li>• Take photos of their ID (if they allow)</li>
                    <li>• Call local police if suspicious</li>
                    <li>• Inform family members or neighbors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-lg text-red-600">❌ DON'T DO THIS</h4>
                  <ul className="space-y-3">
                    <li>• Don't give money immediately</li>
                    <li>• Don't share personal documents</li>
                    <li>• Don't provide bank details or OTP</li>
                    <li>• Don't feel pressured by threats</li>
                    <li>• Don't sign any papers without reading</li>
                    <li>• Don't let them inside your house</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Emergency Alert */}
        <Alert className="border-red-200 bg-red-50">
          <Phone className="h-4 w-4" />
          <AlertDescription className="text-lg">
            <strong>Remember:</strong> Real government officers will never demand immediate cash payments or threaten arrest for document issues. 
            When in doubt, call the police at <strong>100</strong> or cyber crime helpline at <strong>1930</strong>.
          </AlertDescription>
        </Alert>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Learn About Online Scams
          </Button>
          <Button variant="outline" size="lg">
            Report a Fraud Case
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Awareness;
