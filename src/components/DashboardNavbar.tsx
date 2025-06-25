import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ArrowLeft, LogOut, Settings, Shield, User } from 'lucide-react';
import { auth } from '@/services/firebase';
import { onAuthStateChanged } from 'firebase/auth';

interface DashboardNavbarProps {
  showBackButton?: boolean;
  backTo?: string;
  title?: string;
}

const DashboardNavbar = ({
  showBackButton = false,
  backTo = '/dashboard',
  title,
}: DashboardNavbarProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName || 'Unknown User',
          email: currentUser.email || 'user@example.com',
          avatar: currentUser.photoURL || '',
        });
      } else {
        setUser(null);
        navigate('/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => navigate('/login'))
      .catch((error) => console.error('Logout error:', error));
  };

  if (loading) return null;

  const getInitials = (name: string) => {
    const words = name.trim().split(' ');
    return words.length >= 2
      ? `${words[0][0]}${words[1][0]}`
      : name.charAt(0).toUpperCase();
  };

  return (
    <nav className="bg-gradient-to-r from-red-600 to-blue-800 shadow-xl sticky top-0 z-50 border-b-4 border-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            {showBackButton && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(backTo)}
                className="text-white hover:bg-red-700 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            )}

            <Link to="/dashboard" className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-full">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <div className="text-white">
                <span className="text-xl font-bold">Fraud Shield</span>
                <p className="text-xs text-red-100">Rural Protection System</p>
              </div>
            </Link>

            {title && (
              <div className="hidden md:block">
                <h1 className="text-xl font-semibold text-white ml-8">
                  {title}
                </h1>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-red-200 text-black-100 hover:bg-red-700"
              asChild
            >
              <Link to="/">Home</Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full hover:bg-red-700"
                >
                  <Avatar className="h-10 w-10 border-2 border-white">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-white text-red-600 font-semibold">
                      {getInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 bg-white shadow-xl border-0"
                align="end"
                forceMount
              >
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user.name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile Settings</span>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer text-red-600"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
