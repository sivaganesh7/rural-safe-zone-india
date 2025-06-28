import BackButton from '@/components/BackButton';
import DashboardNavbar from '@/components/DashboardNavbar';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { AlertTriangle, Phone, Send, Shield, Upload } from 'lucide-react';
import { useState } from 'react';

const ReportFraud = () => {
  const [formData, setFormData] = useState({
    scamType: '',
    description: '',
    amount: '',
    contact: '',
    anonymous: false
  });

  const [submitted, setSubmitted] = useState(false);

  const scamTypes = [
    "Document Fraud / Fake Officer",
    "UPI / Payment Scam",
    "Fake Lottery / Prize Call",
    "OTP / Banking Fraud",
    "Job / Employment Scam",
    "QR Code Fraud",
    "SIM Card Scam",
    "Other"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Fraud report submitted:', formData);
    setSubmitted(true);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <Card className="max-w-2xl w-full border-green-200">
          <CardHeader className="bg-green-50 text-center">
            <Shield className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <CardTitle className="text-2xl text-green-800">
              Report Submitted Successfully!<br /><span className="text-base text-green-600">మీ ఫిర్యాదు విజయవంతంగా పంపబడింది</span>
            </CardTitle>
            <CardDescription className="text-green-700">
              Thank you for helping protect others from fraud<br />ఇతరులను మోసాల నుండి రక్షించడంలో సహకరించినందుకు ధన్యవాదాలు
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 text-center">
            <p className="text-gray-700 mb-6">
              Your fraud report has been recorded. If you provided contact information,<br />మీ ఫిర్యాదు నమోదైంది. మీరు కాంటాక్ట్ వివరాలు ఇచ్చినట్లైతే,<br />authorities may reach out for additional details if needed.<br />అధికారులు అవసరమైతే మరిన్ని వివరాల కోసం మిమ్మల్ని సంప్రదించవచ్చు
            </p>
            <div className="space-y-4">
              <Button onClick={() => setSubmitted(false)} className="w-full">
                Report Another Fraud<br /><span className="text-sm text-gray-600">ఇంకొక మోసం ఫిర్యాదు చేయండి</span>
              </Button>
              <Button variant="outline" className="w-full">
                Return to Home<br /><span className="text-sm text-gray-600">హోమ్‌కు తిరిగి వెళ్లండి</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      <div className="ml-5 my-5 top-4 z-50">
        <BackButton />
      </div>
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AlertTriangle className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">
            Report Fraud or Scam<br /><span className="text-xl font-normal">మోసం లేదా స్కామ్‌ను నివేదించండి</span>
          </h1>
          <p className="text-xl opacity-90">
            Help protect others by reporting fraudulent activities<br />మోసపూరిత చర్యలను నివేదించి ఇతరులను రక్షించండి
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Alert className="border-red-200 bg-red-50 mb-8">
          <Phone className="h-4 w-4" />
          <AlertDescription>
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div>
                <strong>Being scammed right now?</strong> Don't wait - call for immediate help!<br />ఇప్పుడే మోసానికి గురవుతున్నారా? ఆలస్యం చేయకుండా సహాయం కోసం కాల్ చేయండి!
              </div>
              <div className="flex gap-2 mt-2 sm:mt-0">
                <Button size="sm" className="bg-red-600 hover:bg-red-700">Call 1930<br /><span className="text-xs">1930 కి కాల్ చేయండి</span></Button>
                <Button size="sm" variant="outline">Call 100<br /><span className="text-xs">100 కి కాల్ చేయండి</span></Button>
              </div>
            </div>
          </AlertDescription>
        </Alert>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Report Fraud Details<br /><span className="text-base text-gray-600">మోసం వివరాలు నమోదు చేయండి</span></CardTitle>
                <CardDescription>
                  Help us understand what happened. All reports are taken seriously.<br />మీరు ఎదుర్కొన్న మోసం వివరాలు చెప్పండి. మీ సమాచారం జాగ్రత్తగా పరిశీలించబడుతుంది.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label className="text-base font-medium">
                      What type of scam or fraud occurred? *<br /><span className="text-sm text-gray-600">ఏ రకమైన మోసం జరిగింది?</span>
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('scamType', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select the type of fraud / మోసం రకాన్ని ఎంచుకోండి" />
                      </SelectTrigger>
                      <SelectContent>
                        {scamTypes.map((type, index) => (
                          <SelectItem key={index} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base font-medium">
                      Describe what happened *<br /><span className="text-sm text-gray-600">ఏం జరిగిందో వివరించండి</span>
                    </Label>
                    <Textarea
                      placeholder="Describe in detail... / వివరంగా వివరించండి"
                      className="mt-2 min-h-[120px]"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-base font-medium">
                      Amount involved (if any)<br /><span className="text-sm text-gray-600">పూర్తి నష్టం మొత్తం (ఉంటే)</span>
                    </Label>
                    <Input
                      type="text"
                      placeholder="e.g., ₹5000 / రూ. 5000"
                      className="mt-2"
                      value={formData.amount}
                      onChange={(e) => handleInputChange('amount', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label className="text-base font-medium">
                      Your contact (optional)<br /><span className="text-sm text-gray-600">మీ ఫోన్ / ఇమెయిల్ (ఐచ్ఛికం)</span>
                    </Label>
                    <Input
                      type="text"
                      placeholder="Phone or Email / ఫోన్ లేదా ఇమెయిల్"
                      className="mt-2"
                      value={formData.contact}
                      onChange={(e) => handleInputChange('contact', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label className="text-base font-medium">
                      Upload evidence (optional)<br /><span className="text-sm text-gray-600">సాక్ష్యాలను అప్‌లోడ్ చేయండి (ఐచ్ఛికం)</span>
                    </Label>
                    <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        Screenshots, images, or recordings / స్క్రీన్‌షాట్లు లేదా ఆడియోలు అప్‌లోడ్ చేయండి
                      </p>
                      <Button type="button" variant="outline" className="mt-2">
                        Choose Files<br /><span className="text-xs text-gray-600">ఫైళ్లను ఎంచుకోండి</span>
                      </Button>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700">
                    <Send className="h-5 w-5 mr-2" />
                    Submit Fraud Report<br /><span className="text-xs">మోసం నివేదికను సమర్పించండి</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle>What Happens Next?<br /><span className="text-sm text-gray-600">తర్వాత ఏమౌతుంది?</span></CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li>• Your report is recorded<br />• మీ ఫిర్యాదు నమోదు చేయబడుతుంది</li>
                  <li>• Authorities may be notified<br />• సంబంధిత అధికారులు సమాచారం పొందుతారు</li>
                  <li>• You may be contacted if needed<br />• అవసరమైతే మిమ్మల్ని సంప్రదించవచ్చు</li>
                  <li>• Helps protect others from similar scams<br />• ఇదివరకు జరిగిన మోసాలను నివారించడంలో ఇది సహాయపడుతుంది</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-red-800">Emergency Contacts<br /><span className="text-sm text-red-600">అత్యవసర నంబర్లు</span></CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4 text-center">
                  <div>
                    <h4 className="font-semibold">Cyber Crime<br /><span className="text-sm text-gray-600">సైబర్ నేరాలు</span></h4>
                    <p className="text-2xl font-mono text-red-600">1930</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Police<br /><span className="text-sm text-gray-600">పోలీస్</span></h4>
                    <p className="text-2xl font-mono text-red-600">100</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Bank Fraud<br /><span className="text-sm text-gray-600">బ్యాంక్ మోసం</span></h4>
                    <p className="text-2xl font-mono text-red-600">155260</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-800">Anonymous Reporting<br /><span className="text-sm text-green-600">అజ్ఞాతంగా నివేదించండి</span></CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-green-700">
                  You can report fraud without providing your personal info.<br />మీ వ్యక్తిగత సమాచారం ఇవ్వకుండా కూడా మోసం ఫిర్యాదు చేయవచ్చు.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportFraud;