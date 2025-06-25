import { Link } from 'react-router-dom';
import { Flag, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardFooter = () => {
  return (
    <section className="py-12 px-6 md:px-10 bg-gradient-to-r from-red-600 to-red-800 relative rounded-xl shadow-lg backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white mb-6 tracking-wide drop-shadow">
          🚨 Emergency Actions
        </h2>

        <p className="text-sm text-red-100 mb-8 max-w-lg mx-auto">
          Act quickly and stay alert. Use the options below to report suspicious activity or find emergency contacts near you.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold transition-all duration-200 ease-in-out shadow-md hover:scale-105"
            asChild
          >
            <Link to="/dashboard">
              <Flag className="h-5 w-5 mr-2" />
             Go To Dashboard
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-white text-white font-bold transition-all duration-200 ease-in-out hover:bg-white hover:text-red-700 hover:scale-105 shadow-md text-black"
            asChild
          >
            <Link to="/emergency-contacts">
              <Phone className="h-5 w-5 mr-2 text-black" />
              Emergency Numbers
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DashboardFooter;
