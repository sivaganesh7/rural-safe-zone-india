import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BackButtonProps {
  label?: string;
  to?: string; 
}

const BackButton = ({ label = 'Back to Dashboard', to = '/dashboard' }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="outline"
      onClick={() => navigate(to)}
      className="flex items-center bg-green-500 gap-2 text-sm hover:bg-blue-200"
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Button>
  );
};

export default BackButton;
