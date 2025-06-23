
import { Smartphone, Lock, Eye, EyeOff, Wifi, CreditCard, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useState } from 'react';

const DigitalLiteracy = () => {
  const [showOtp, setShowOtp] = useState(false);

  const safetyTopics = [
    {
      icon: Lock,
      title: "What is OTP?",
      content: "OTP means 'One Time Password'. It's a 4-6 digit code sent to your mobile for security. Never share OTP with anyone - not even bank employees!",
      tips: ["OTP is only for you to enter yourself", "Banks never ask for OTP over phone", "Don't share OTP in any message or call"]
    },
    {
      icon: CreditCard,
      title: "UPI Safety Rules",
      content: "UPI is safe when used correctly. Always double-check the recipient's name and amount before paying.",
      tips: ["Check recipient name before paying", "Only use UPI apps from official app stores", "Set transaction limits for daily payments"]
    },
    {
      icon: Wifi,
      title: "Checking Fake Websites",
      content: "Fake websites look real but steal your information. Look for 'https://' and correct spelling of website names.",
      tips: ["Check website URL carefully", "Look for 'https' before the website name", "Don't enter personal details on suspicious sites"]
    },
    {
      icon: Shield,
      title: "Password Protection",
      content: "Strong passwords keep your accounts safe. Use different passwords for different apps and don't share them.",
      tips: ["Use numbers and letters in passwords", "Don't use birth dates or names", "Change passwords if you suspect they're compromised"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Smartphone className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Digital Literacy & Safety</h1>
          <p className="text-xl opacity-90">
            Learn to use technology safely and confidently
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Why Digital Safety Matters?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
                As mobile phones and digital payments become common in rural areas, it's important to know how to use them safely. 
                This knowledge will help you enjoy the benefits of technology without falling victim to fraudsters.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Safety Topics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Essential Digital Safety Topics</h2>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {safetyTopics.map((topic, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <topic.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    {topic.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{topic.content}</p>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Safety Tips:</h4>
                    <ul className="space-y-1">
                      {topic.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-green-700 flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Interactive OTP Demo */}
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
                Digital Safety Warning Signs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-red-600">🚨 Dangerous Situations</h4>
                  <ul className="space-y-2">
                    <li>• Someone asking for your OTP</li>
                    <li>• Unexpected money requests via UPI</li>
                    <li>• Links asking for bank details</li>
                    <li>• Apps asking for too many permissions</li>
                    <li>• Urgent messages demanding action</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">✅ Safe Practices</h4>
                  <ul className="space-y-2">
                    <li>• Always verify before sharing information</li>
                    <li>• Use strong, unique passwords</li>
                    <li>• Keep apps updated</li>
                    <li>• Check app permissions regularly</li>
                    <li>• Think twice before clicking links</li>
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

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Practice More Examples
          </Button>
          <Button variant="outline" size="lg">
            Test Your Knowledge
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DigitalLiteracy;
