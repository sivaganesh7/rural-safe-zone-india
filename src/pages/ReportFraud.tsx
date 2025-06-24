
// import { useState } from 'react';
// import { AlertTriangle, Phone, Upload, Send, Shield } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Alert, AlertDescription } from '@/components/ui/alert';
// import BackButton from '@/components/BackButton';

// const ReportFraud = () => {
//   const [formData, setFormData] = useState({
//     scamType: '',
//     description: '',
//     amount: '',
//     contact: '',
//     anonymous: false
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const scamTypes = [
//     "Document Fraud / Fake Officer",
//     "UPI / Payment Scam",
//     "Fake Lottery / Prize Call",
//     "OTP / Banking Fraud",
//     "Job / Employment Scam",
//     "QR Code Fraud",
//     "SIM Card Scam",
//     "Other"
//   ];

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Here you would normally send the data to your backend
//     console.log('Fraud report submitted:', formData);
//     setSubmitted(true);
//   };

//   const handleInputChange = (field: string, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   if (submitted) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//       <div className="sticky top-4 z-50">
//         <BackButton />
//       </div>
//         <Card className="max-w-2xl w-full border-green-200">
//           <CardHeader className="bg-green-50 text-center">
//             <Shield className="h-16 w-16 text-green-600 mx-auto mb-4" />
//             <CardTitle className="text-2xl text-green-800">Report Submitted Successfully!</CardTitle>
//             <CardDescription className="text-green-700">
//               Thank you for helping protect others from fraud
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="pt-6 text-center">
//             <p className="text-gray-700 mb-6">
//               Your fraud report has been recorded. If you provided contact information, 
//               relevant authorities may reach out for additional details if needed.
//             </p>
//             <div className="space-y-4">
//               <Button onClick={() => setSubmitted(false)} className="w-full">
//                 Report Another Fraud
//               </Button>
//               <Button variant="outline" className="w-full">
//                 Return to Home
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <AlertTriangle className="h-16 w-16 mx-auto mb-6" />
//           <h1 className="text-4xl font-bold mb-4">Report Fraud or Scam</h1>
//           <p className="text-xl opacity-90">
//             Help protect others by reporting fraudulent activities
//           </p>
//         </div>
//       </div>

//       <div className="max-w-4xl mx-auto px-4 py-12">
//         {/* Emergency Alert */}
//         <Alert className="border-red-200 bg-red-50 mb-8">
//           <Phone className="h-4 w-4" />
//           <AlertDescription>
//             <div className="flex flex-col sm:flex-row items-center justify-between">
//               <div>
//                 <strong>Being scammed right now?</strong> Don't wait - call for immediate help!
//               </div>
//               <div className="flex gap-2 mt-2 sm:mt-0">
//                 <Button size="sm" className="bg-red-600 hover:bg-red-700">Call 1930</Button>
//                 <Button size="sm" variant="outline">Call 100</Button>
//               </div>
//             </div>
//           </AlertDescription>
//         </Alert>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Report Form */}
//           <div className="lg:col-span-2">
//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-2xl">Report Fraud Details</CardTitle>
//                 <CardDescription>
//                   Help us understand what happened. All reports are taken seriously and may be shared with relevant authorities.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   {/* Scam Type */}
//                   <div>
//                     <Label htmlFor="scamType" className="text-base font-medium">
//                       What type of scam or fraud occurred? *
//                     </Label>
//                     <Select onValueChange={(value) => handleInputChange('scamType', value)}>
//                       <SelectTrigger className="mt-2">
//                         <SelectValue placeholder="Select the type of fraud" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {scamTypes.map((type, index) => (
//                           <SelectItem key={index} value={type}>
//                             {type}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>

//                   {/* Description */}
//                   <div>
//                     <Label htmlFor="description" className="text-base font-medium">
//                       Describe what happened *
//                     </Label>
//                     <Textarea
//                       id="description"
//                       placeholder="Please describe the fraud incident in detail. Include dates, times, and any important information..."
//                       className="mt-2 min-h-[120px]"
//                       value={formData.description}
//                       onChange={(e) => handleInputChange('description', e.target.value)}
//                       required
//                     />
//                   </div>

//                   {/* Amount Lost */}
//                   <div>
//                     <Label htmlFor="amount" className="text-base font-medium">
//                       Amount of money involved (if any)
//                     </Label>
//                     <Input
//                       id="amount"
//                       type="text"
//                       placeholder="e.g., ₹5,000 or No money involved"
//                       className="mt-2"
//                       value={formData.amount}
//                       onChange={(e) => handleInputChange('amount', e.target.value)}
//                     />
//                   </div>

//                   {/* Contact Information */}
//                   <div>
//                     <Label htmlFor="contact" className="text-base font-medium">
//                       Your contact information (optional)
//                     </Label>
//                     <Input
//                       id="contact"
//                       type="text"
//                       placeholder="Phone number or email (only if you want to be contacted)"
//                       className="mt-2"
//                       value={formData.contact}
//                       onChange={(e) => handleInputChange('contact', e.target.value)}
//                     />
//                     <p className="text-sm text-gray-500 mt-1">
//                       Providing contact info helps authorities follow up if needed
//                     </p>
//                   </div>

//                   {/* File Upload */}
//                   <div>
//                     <Label className="text-base font-medium">
//                       Upload evidence (optional)
//                     </Label>
//                     <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
//                       <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
//                       <p className="text-sm text-gray-600">
//                         Screenshots, photos, or audio recordings can help with investigation
//                       </p>
//                       <Button type="button" variant="outline" className="mt-2">
//                         Choose Files
//                       </Button>
//                     </div>
//                   </div>

//                   {/* Submit Button */}
//                   <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700">
//                     <Send className="h-5 w-5 mr-2" />
//                     Submit Fraud Report
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Sidebar Info */}
//           <div className="space-y-6">
//             {/* What Happens Next */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>What Happens Next?</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-3 text-sm">
//                   <li className="flex items-start">
//                     <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
//                     Your report is recorded in our database
//                   </li>
//                   <li className="flex items-start">
//                     <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
//                     Relevant authorities may be notified
//                   </li>
//                   <li className="flex items-start">
//                     <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
//                     You may be contacted for more details
//                   </li>
//                   <li className="flex items-start">
//                     <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
//                     Report helps protect others from similar scams
//                   </li>
//                 </ul>
//               </CardContent>
//             </Card>

//             {/* Emergency Contacts */}
//             <Card className="border-red-200">
//               <CardHeader className="bg-red-50">
//                 <CardTitle className="text-red-800">Emergency Contacts</CardTitle>
//               </CardHeader>
//               <CardContent className="pt-4">
//                 <div className="space-y-4">
//                   <div className="text-center">
//                     <h4 className="font-semibold">Cyber Crime Helpline</h4>
//                     <p className="text-2xl font-mono text-red-600">1930</p>
//                   </div>
//                   <div className="text-center">
//                     <h4 className="font-semibold">Police Emergency</h4>
//                     <p className="text-2xl font-mono text-red-600">100</p>
//                   </div>
//                   <div className="text-center">
//                     <h4 className="font-semibold">Banking Fraud</h4>
//                     <p className="text-2xl font-mono text-red-600">155260</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Anonymous Reporting */}
//             <Card className="border-green-200">
//               <CardHeader className="bg-green-50">
//                 <CardTitle className="text-green-800">Anonymous Reporting</CardTitle>
//               </CardHeader>
//               <CardContent className="pt-4">
//                 <p className="text-sm text-green-700">
//                   You can report fraud without providing your personal information. 
//                   Anonymous reports still help authorities track fraud patterns and protect others.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportFraud;
