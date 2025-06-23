
import { Shield, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
  return (
    <nav className="bg-gradient-to-r from-red-600 to-red-800 shadow-xl sticky top-0 z-50 border-b-4 border-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-full">
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <div className="text-white">
              <span className="text-xl font-bold">Fraud Shield</span>
              <p className="text-xs text-red-100">Rural Protection System</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-red-100 hover:text-white transition-colors font-medium">Home</a>
            <a href="#awareness" className="text-red-100 hover:text-white transition-colors font-medium">Awareness</a>
            <a href="#scam-types" className="text-red-100 hover:text-white transition-colors font-medium">Scam Types</a>
            <a href="#digital-literacy" className="text-red-100 hover:text-white transition-colors font-medium">Digital Safety</a>
            <a href="#reports" className="text-red-100 hover:text-white transition-colors font-medium">Report Fraud</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-red-200 text-red-100 hover:bg-red-700" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button size="sm" className="bg-white text-red-600 hover:bg-red-50 font-semibold" asChild>
              <Link to="/register">Protect Yourself</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
