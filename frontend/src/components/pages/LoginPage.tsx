// src/components/pages/LoginPage.tsx
import { useState, SyntheticEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContextType } from '../../types';
import { UserContext } from '../../contexts/UserContext';

// shadcn/ui
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const LoginPage = () => {
  const { loginUser }: UserContextType = useContext(UserContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await loginUser({ username, password });
      navigate('/');
    } catch (err) {
      console.error('LoginPage::error: ', err);
    }
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 flex justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Connectez un utilisateur</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username */}
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.currentTarget.value)}
                  required
                  placeholder="john.doe"
                  autoComplete="username"
                />
              </div>

              {/* Password */}
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  required
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
              </div>

              <Button type="submit" className="w-full">
                S'authentifier
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LoginPage;
