import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Separator } from "../components/ui/separator";
import { Bell, Lock, User, Globe, CreditCard } from "lucide-react";

export function Settings() {
  return (
    <div className="space-y-6">
      <Card className="border-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Settings
          </h1>
          <p className="text-lg text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="account" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Account Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+1 (555) 123-4567" />
              </div>
              <Button className="bg-gradient-to-r from-primary to-secondary">Save Changes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Change Password</CardTitle>
              <CardDescription>Ensure your account is secure</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              <Button>Update Password</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Email Notifications</CardTitle>
              <CardDescription>Choose what emails you want to receive</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium">Course Updates</p>
                  <p className="text-sm text-muted-foreground">Get notified about new courses and updates</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium">Assignment Reminders</p>
                  <p className="text-sm text-muted-foreground">Reminders for upcoming assignments and deadlines</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium">Progress Reports</p>
                  <p className="text-sm text-muted-foreground">Weekly summaries of your learning progress</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium">Marketing Emails</p>
                  <p className="text-sm text-muted-foreground">Promotional offers and platform updates</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Push Notifications</CardTitle>
              <CardDescription>Manage push notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium">Browser Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive notifications in your browser</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium">Achievement Alerts</p>
                  <p className="text-sm text-muted-foreground">Get notified when you earn badges</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Privacy Settings</CardTitle>
              <CardDescription>Control your data and visibility</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium">Profile Visibility</p>
                  <p className="text-sm text-muted-foreground">Make your profile visible to other users</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium">Show Progress</p>
                  <p className="text-sm text-muted-foreground">Display your learning progress publicly</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium">Activity Status</p>
                  <p className="text-sm text-muted-foreground">Show when you're online</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Data Management</CardTitle>
              <CardDescription>Manage your data and account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Download My Data
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Export Learning History
              </Button>
              <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                Delete Account
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Learning Preferences</CardTitle>
              <CardDescription>Customize your learning experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">Preferred Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="est">
                  <SelectTrigger id="timezone">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="est">Eastern Time (EST)</SelectItem>
                    <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                    <SelectItem value="cst">Central Time (CST)</SelectItem>
                    <SelectItem value="utc">UTC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="difficulty">Default Difficulty</Label>
                <Select defaultValue="intermediate">
                  <SelectTrigger id="difficulty">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Subscription Plan</CardTitle>
              <CardDescription>Manage your subscription</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-6 rounded-lg border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Premium Plan
                    </h3>
                    <p className="text-sm text-muted-foreground">Unlimited access to all courses</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">$29</div>
                    <div className="text-sm text-muted-foreground">/month</div>
                  </div>
                </div>
                <Button className="w-full">Upgrade Plan</Button>
              </div>
              <div className="text-sm text-muted-foreground">
                Next billing date: July 30, 2026
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Payment Method</CardTitle>
              <CardDescription>Manage your payment information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-lg border border-border">
                <CreditCard className="w-8 h-8 text-muted-foreground" />
                <div className="flex-1">
                  <p className="font-medium">•••• •••• •••• 4242</p>
                  <p className="text-sm text-muted-foreground">Expires 12/2027</p>
                </div>
                <Button variant="outline" size="sm">Update</Button>
              </div>
              <Button variant="outline" className="w-full">Add Payment Method</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
